import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Add global styles for cursor
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      body {
        cursor: none;
      }
      a, button, [role="button"], [type="button"], [type="submit"], [type="reset"] {
        cursor: none;
      }
    `;
    document.head.appendChild(styleElement);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if the cursor is over a clickable element
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const isPointerElement = 
        element instanceof HTMLAnchorElement || 
        element instanceof HTMLButtonElement ||
        (element?.closest('button') !== null) ||
        (element?.closest('a') !== null) ||
        window.getComputedStyle(element || document.body).cursor === 'pointer';
      
      // Fix: Convert to boolean before setting state
      setIsPointer(Boolean(isPointerElement));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.head.removeChild(styleElement);
    };
  }, []);

  // Don't render the custom cursor on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Outer cursor ring */}
      <div
        className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
          isPointer ? 'w-10 h-10 border-2' : 'w-8 h-8 border'
        } ${
          isClicking ? 'scale-75' : 'scale-100'
        } border-[var(--primary-purple)] mix-blend-difference`}
        style={{
          boxShadow: isPointer 
            ? '0 0 10px rgba(181, 39, 252, 0.7), 0 0 20px rgba(181, 39, 252, 0.3)' 
            : '0 0 5px rgba(181, 39, 252, 0.5)'
        }}
      ></div>
      
      {/* Inner cursor dot */}
      <div
        className={`absolute rounded-full bg-[var(--primary-green)] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
          isPointer ? 'w-2 h-2' : 'w-1 h-1'
        } ${
          isClicking ? 'scale-150 opacity-70' : 'scale-100 opacity-100'
        } mix-blend-difference`}
        style={{
          boxShadow: '0 0 5px rgba(39, 252, 158, 0.7), 0 0 10px rgba(39, 252, 158, 0.3)'
        }}
      ></div>
    </div>
  );
};

export default Cursor;
