import React, { Children, useRef } from 'react';

function HorizontalList({ children }: any) {
  const scrollContainerRef: any = useRef(null);

  const handleMouseDown = (e: any) => {
    const scrollContainer = scrollContainerRef.current;
    // scrollContainer.style.cursor = 'grabbing';
    scrollContainer.style.userSelect = 'none';

    const startX = e.pageX - scrollContainer.offsetLeft;
    const scrollLeft = scrollContainer.scrollLeft;

    const handleMouseMove = (eMove: any) => {
      const x = eMove.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1.5; // The multiplier affects the scroll speed
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      // scrollContainer.style.cursor = 'grab';
      scrollContainer.style.removeProperty('user-select');

      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="flex space-x-4 overflow-x-auto will-change-scroll"
      onMouseDown={handleMouseDown}
      style={{ scrollbarWidth: 'none' }}
    >
     {children}
    </div>
  );
}

export { HorizontalList };
