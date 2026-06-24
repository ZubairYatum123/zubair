import { useEffect, useRef, useState } from "react";

const interactiveSelector = [
  "a",
  "button",
  "[role='button']",
  "input",
  "textarea",
  "select",
  "label",
  "[data-cursor='interactive']",
].join(", ");

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(pointer: fine)");
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncEnabled = () => {
      setEnabled(mediaQuery.matches && !reduceMotionQuery.matches);
    };

    syncEnabled();
    mediaQuery.addEventListener("change", syncEnabled);
    reduceMotionQuery.addEventListener("change", syncEnabled);

    return () => {
      mediaQuery.removeEventListener("change", syncEnabled);
      reduceMotionQuery.removeEventListener("change", syncEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled || !cursorRef.current) return;

    const cursor = cursorRef.current;

    const render = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.22;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.22;

      cursor.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0)`;
      frameRef.current = window.requestAnimationFrame(render);
    };

    const setInteractiveState = (target: EventTarget | null) => {
      const element = target instanceof Element ? target.closest(interactiveSelector) : null;
      cursor.dataset.interactive = element ? "true" : "false";
    };

    const handleMove = (event: MouseEvent) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      cursor.style.opacity = "1";
      setInteractiveState(event.target);
    };

    const handleMouseDown = () => {
      cursor.dataset.pressed = "true";
    };

    const handleMouseUp = () => {
      cursor.dataset.pressed = "false";
    };

    const handleLeave = () => {
      cursor.style.opacity = "0";
    };

    const handleEnter = () => {
      cursor.style.opacity = "1";
    };

    frameRef.current = window.requestAnimationFrame(render);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      data-interactive="false"
      data-pressed="false"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/55 bg-primary/5 opacity-0 mix-blend-normal transition-[width,height,opacity,background-color,border-color,box-shadow] duration-200 ease-out md:block data-[interactive=true]:h-10 data-[interactive=true]:w-10 data-[interactive=true]:border-primary/75 data-[interactive=true]:bg-primary/8 data-[interactive=true]:shadow-[0_0_0_6px_hsl(var(--primary)/0.08)] data-[pressed=true]:h-6 data-[pressed=true]:w-6"
    >
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
    </div>
  );
};
