import { useRef, useEffect } from "react";
import type { FC } from "react";

const round = Math.round;

const _requestAnimationFrame = window.requestAnimationFrame;
const _cancelAnimationFrame = window.cancelAnimationFrame;

export const FpsGraph: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;

    let lastTime = performance.now();
    let fpsFrames = 0;
    let fpsTime = lastTime;
    let msDisplayTime = lastTime;
    let maxFps = 70;
    let durationMs = 0;

    const fpsGraph = createGraph(context, 0, "#4bf", "#002");
    const msGraph = createGraph(context, 1, "#4bf", "#002");

    const animationFrame = () => {
      ++fpsFrames;

      const time = performance.now();
      if (time >= fpsTime + 250) {
        const fps = (fpsFrames * 1000) / (time - fpsTime) || 0;

        if (maxFps < 125 && fps >= 70) {
          maxFps = 125;
          fpsGraph.clearGraph();
        }

        fpsGraph.drawText("FPS:" + fps.toFixed(2).padStart(7));
        fpsGraph.updateGraph(fps, maxFps);
        fpsTime = time;
        fpsFrames = 0;
      }

      if (time >= msDisplayTime + 250) {
        msDisplayTime = time;
        msGraph.updateGraph(durationMs, 40);
        msGraph.drawText("Frame:" + durationMs.toFixed(2).padStart(7) + "ms");
        durationMs = 0;
      }

      durationMs = Math.max(durationMs, time - lastTime);
      lastTime = time;

      rafRef.current = _requestAnimationFrame(animationFrame);
    };

    rafRef.current = _requestAnimationFrame(animationFrame);
    return () => _cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div>
      <canvas width="145" height="126" ref={canvasRef} />
    </div>
  );
};

function createGraph(context: CanvasRenderingContext2D, graphIndex: number, fg: string, bg: string) {
  const { canvas } = context;
  const TEXT_HEIGHT = 14;
  const GRAPH_HEIGHT = 45;
  const Y = graphIndex * (GRAPH_HEIGHT + TEXT_HEIGHT + 5);
  const GRAPH_Y = TEXT_HEIGHT + 2 + Y;
  const TEXT_X = 3;
  const TEXT_Y = Y + 2;

  function initGraph() {
    const width = canvas.clientWidth;
    const GRAPH_WIDTH = width - 1;
    context.font = "bold 13px Courier New, Courier, monospace";
    context.textBaseline = "top";

    context.fillStyle = bg;
    context.fillRect(0, Y, GRAPH_WIDTH, GRAPH_HEIGHT);

    context.fillStyle = "#07f";
    context.fillRect(0, GRAPH_Y - 1, GRAPH_WIDTH, 1);
    context.fillRect(0, GRAPH_Y + GRAPH_HEIGHT, GRAPH_WIDTH, 1);
  }

  function drawText(value: string) {
    const width = canvas.clientWidth;
    context.fillStyle = bg;
    context.fillRect(0, Y, width, TEXT_HEIGHT);
    context.fillStyle = fg;
    context.fillText(value, TEXT_X, TEXT_Y);
  }

  function clearGraph() {
    const width = canvas.clientWidth;
    const GRAPH_WIDTH = width - 1;
    context.fillStyle = bg;
    context.fillRect(0, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
  }

  function updateGraph(value: number, maxValue: number) {
    const width = canvas.clientWidth;
    const GRAPH_WIDTH = width - 1;

    context.drawImage(canvas, 1, GRAPH_Y, GRAPH_WIDTH - 1, GRAPH_HEIGHT, 0, GRAPH_Y, GRAPH_WIDTH - 1, GRAPH_HEIGHT);

    context.fillStyle = fg;
    context.fillRect(GRAPH_WIDTH - 1, GRAPH_Y, 1, GRAPH_HEIGHT);

    context.fillStyle = bg;
    context.fillRect(GRAPH_WIDTH - 1, GRAPH_Y, 1, Math.min(maxValue, round((1 - value / maxValue) * GRAPH_HEIGHT)));
  }

  initGraph();
  clearGraph();

  return {
    drawText,
    clearGraph,
    updateGraph,
  };
}
