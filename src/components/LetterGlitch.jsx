import React, { useEffect, useRef } from 'react';

export default function LetterGlitch({ colors = ["#042C94", "#101B3D", "#64748B"] }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let timeoutId;

    // Tech-oriented glitch characters
    const characters = '01<>/\\{}[]*&^%$#@!?XYZABCDEFGHIJKLMNOPQRSTUVW';

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const fontSize = 14;

    const draw = () => {
      // Fade out previous characters to create a subtle ghosting effect
      ctx.fillStyle = 'rgba(248, 250, 252, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const columns = Math.floor(canvas.width / fontSize) + 1;
      const rows = Math.floor(canvas.height / fontSize) + 1;

      ctx.font = `bold ${fontSize}px monospace`;

      // Randomly inject new characters
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          // Only draw occasionally to keep it sparse and clean
          if (Math.random() > 0.985) {
            const char = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            ctx.globalAlpha = Math.random() * 0.15 + 0.05; // Faint opacity
            ctx.fillText(char, i * fontSize, j * fontSize);
          }
        }
      }
      ctx.globalAlpha = 1.0;
    };

    // Glitch loop: roughly 20fps for that stuttery retro feel
    const loop = () => {
      draw();
      timeoutId = setTimeout(() => {
        animationFrameId = requestAnimationFrame(loop);
      }, 50);
    };

    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, [colors]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80 mix-blend-multiply">
      {/* Fallback gradient background just to anchor the section */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#EEF2FF]/50" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
