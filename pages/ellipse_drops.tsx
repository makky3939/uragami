import type { NextPage } from "next";
import { useEffect, useRef } from "react";

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const EllipseDrops: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number | null>(null);

  const width = 1440;
  const height = 900;

  const reset = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    const dpr = window.devicePixelRatio || 1;

    if (!canvas || !context) {
      return;
    }

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    context.scale(dpr, dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    context.beginPath();
    context.rect(0, 0, width, height);
    context.fillStyle = `rgb(41, 42, 50)`;
    context.fill();
  };

  const animation = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!context) {
      return;
    }

    const lineColor = getRandomNumber(128, 255);
    context.strokeStyle = `rgb(${lineColor}, ${lineColor}, ${lineColor})`;

    context.beginPath();
    context.ellipse(
      width / 2,
      height / 2,
      getRandomNumber(50, 300),
      getRandomNumber(50, 300),
      Math.PI / 4,
      0,
      2 * Math.PI
    );
    context.stroke();

    requestIdRef.current = window.requestAnimationFrame(animation);
  };

  useEffect(() => {
    reset();
    animation();
    return () => {
      if (requestIdRef.current) {
        window.cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, [animation]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};

export default EllipseDrops;
