import { useEffect, useRef } from "react";
export const MouseLight = () => {
  const lightRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (lightRef.current) {
        lightRef.current.style.background = `
          radial-gradient(
            600px circle at ${e.clientX}px ${e.clientY}px,
            rgba(59, 130, 246, 0.15),
            transparent 40%
          ),
          radial-gradient(
            800px circle at ${e.clientX}px ${e.clientY}px,
            rgba(59, 130, 246, 0.1),
            transparent 50%
          )
        `;
      }
    };
  
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
    
  return (
    <div
      ref={lightRef}
      className="fixed inset-0 pointer-events-none transition-all duration-300"
      style={{
        zIndex: 0,
      }}
    />
  );
};
