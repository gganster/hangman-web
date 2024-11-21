import { useEffect, useRef } from 'react';

export default function Hangman({ count }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the hangman based on the count
    const drawHangman = (step) => {
      switch (step) {
        case 1:
          // Draw base
          ctx.moveTo(10, 150);
          ctx.lineTo(100, 150);
          break;
        case 2:
          // Draw pole
          ctx.moveTo(55, 150);
          ctx.lineTo(55, 10);
          break;
        case 3:
          // Draw top bar
          ctx.moveTo(55, 10);
          ctx.lineTo(120, 10);
          break;
        case 4:
          // Draw rope
          ctx.moveTo(120, 10);
          ctx.lineTo(120, 30);
          break;
        case 5:
          // Draw head
          ctx.arc(120, 40, 10, 0, Math.PI * 2, true);
          break;
        case 6:
          // Draw body
          ctx.moveTo(120, 50);
          ctx.lineTo(120, 100);
          break;
        case 7:
          // Draw left arm
          ctx.moveTo(120, 60);
          ctx.lineTo(100, 80);
          break;
        case 8:
          // Draw right arm
          ctx.moveTo(120, 60);
          ctx.lineTo(140, 80);
          break;
        case 9:
          // Draw left leg
          ctx.moveTo(120, 100);
          ctx.lineTo(100, 130);
          break;
        case 10:
          // Draw right leg
          ctx.moveTo(120, 100);
          ctx.lineTo(140, 130);
          break;
        default:
          break;
      }
      ctx.stroke();
    };

    for (let i = 1; i <= count; i++) {
      drawHangman(i);
    }
  }, [count]);

  return (
    <div>
      <canvas ref={canvasRef} width="150" height="150"></canvas>
    </div>
  );
}