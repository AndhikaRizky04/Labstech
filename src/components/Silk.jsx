import React, { useRef, useEffect } from 'react';

const hexToRGB = hex => {
  hex = hex.replace('#', '');
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255
  ];
};

const vertexShaderSource = `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  varying vec2 vUv;

  uniform float uTime;
  uniform vec3  uColor;
  uniform float uSpeed;
  uniform float uScale;
  uniform float uRotation;
  uniform float uNoiseIntensity;
  uniform float uLightMode;

  const float e = 2.71828182845904523536;

  float noise(vec2 texCoord) {
    float G = e;
    vec2  r = (G * sin(G * texCoord));
    return fract(r.x * r.y * (1.0 + texCoord.x));
  }

  vec2 rotateUvs(vec2 uv, float angle) {
    float c = cos(angle);
    float s = sin(angle);
    mat2  rot = mat2(c, -s, s, c);
    return rot * uv;
  }

  void main() {
    float rnd        = noise(gl_FragCoord.xy);
    vec2  uv         = rotateUvs(vUv * uScale, uRotation);
    vec2  tex        = uv * uScale;
    float tOffset    = uSpeed * uTime;

    tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

    float pattern = 0.6 +
                    0.4 * sin(5.0 * (tex.x + tex.y +
                                     cos(3.0 * tex.x + 5.0 * tex.y) +
                                     0.02 * tOffset) +
                             sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

    float grain = rnd / 15.0 * uNoiseIntensity;
    vec3 result = uColor * pattern - vec3(grain);

    if (uLightMode > 0.5) {
      float fold = smoothstep(0.28, 0.9, pattern);
      float specular = smoothstep(0.72, 0.98, pattern);
      vec3 shadowColor = uColor * 0.72;
      vec3 bodyColor = min(uColor * 1.18, vec3(1.0));
      vec3 lightBase = mix(shadowColor, bodyColor, fold);
      lightBase = mix(lightBase, vec3(1.0), specular * 0.92);
      float fineNoise = noise(gl_FragCoord.xy * 0.63 + vec2(17.0, 41.0));
      float grainSignal = (rnd + fineNoise - 1.0);
      float grainStrength = clamp(uNoiseIntensity * 0.038, 0.0, 0.16);
      result = lightBase + grainSignal * grainStrength;
    }

    gl_FragColor = vec4(clamp(result, 0.0, 1.0), 1.0);
  }
`;

export default function Silk({
  speed = 4,
  scale = 1.2,
  color = '#042C94',
  noiseIntensity = 1.0,
  rotation = 0,
  lightMode = true
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const createShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([
      -1.0, -1.0,  0.0, 0.0,
       1.0, -1.0,  1.0, 0.0,
      -1.0,  1.0,  0.0, 1.0,
       1.0,  1.0,  1.0, 1.0,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'position');
    const uvLoc = gl.getAttribLocation(program, 'uv');

    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 16, 0);

    gl.enableVertexAttribArray(uvLoc);
    gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 16, 8);

    const uTimeLoc = gl.getUniformLocation(program, 'uTime');
    const uColorLoc = gl.getUniformLocation(program, 'uColor');
    const uSpeedLoc = gl.getUniformLocation(program, 'uSpeed');
    const uScaleLoc = gl.getUniformLocation(program, 'uScale');
    const uRotationLoc = gl.getUniformLocation(program, 'uRotation');
    const uNoiseIntensityLoc = gl.getUniformLocation(program, 'uNoiseIntensity');
    const uLightModeLoc = gl.getUniformLocation(program, 'uLightMode');

    let animationId;
    let startTime = performance.now();

    const resize = () => {
      const displayWidth = canvas.clientWidth * window.devicePixelRatio;
      const displayHeight = canvas.clientHeight * window.devicePixelRatio;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    const render = (time) => {
      resize();
      // Adjusting time scaling to match React Three Fiber's useFrame delta
      const uTime = (time - startTime) * 0.0001;

      gl.uniform1f(uTimeLoc, uTime);
      gl.uniform3fv(uColorLoc, hexToRGB(color));
      gl.uniform1f(uSpeedLoc, speed);
      gl.uniform1f(uScaleLoc, scale);
      gl.uniform1f(uRotationLoc, rotation);
      gl.uniform1f(uNoiseIntensityLoc, noiseIntensity);
      gl.uniform1f(uLightModeLoc, lightMode ? 1.0 : 0.0);

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationId = requestAnimationFrame(render);
    };

    render(performance.now());

    return () => {
      cancelAnimationFrame(animationId);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(buffer);
    };
  }, [speed, scale, color, noiseIntensity, rotation, lightMode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
    />
  );
}
