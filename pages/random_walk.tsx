import type { NextPage } from "next";
import { useEffect, useRef } from "react";

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const RandomWalk: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number | null>(null);

  const width = 1440;
  const height = 900;
  const diff = 16;

  const point = useRef<[number, number]>([width / 2, height / 2]);

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
    context.fillStyle = `rgb(250, 250, 250)`;
    context.fill();
  };

  const animation = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    const dx1 = point.current[0] + getRandomNumber(-1, 1) * diff;
    const dy1 = point.current[1] + getRandomNumber(-1, 1) * diff;

    const dx = dx1 > 10 && dx1 < width - 10 ? dx1 : point.current[0];
    const dy = dy1 > 10 && dy1 < height - 10 ? dy1 : point.current[1];

    context.beginPath();
    context.strokeStyle = `rgb(41, 42, 50)`;
    context.moveTo(point.current[0], point.current[1]);
    context.lineTo(dx, dy);
    context.stroke();

    point.current = [dx, dy];

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

export default RandomWalk;
