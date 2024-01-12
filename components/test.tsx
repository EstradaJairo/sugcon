"use client";

import React, { useEffect, useState } from "react";

const YourComponent = () => {
  const [showContainer, setShowContainer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById("your-target-element-id");
      if (targetElement) {
        const { top, bottom } = targetElement.getBoundingClientRect();
        const threshold = 0;
        const isVisible = top >= threshold && bottom <= window.innerHeight;
        setShowContainer(!isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Your content before the container */}
      <div>Your content</div>

      {/* Conditional rendering based on scroll position */}
      {showContainer && (
        <div className="fixed bottom-0 right-0 p-4 bg-gray-800 text-white">
          This is the container to display
        </div>
      )}

      {/* Your content after the container */}
      <div>Your content</div>

      {/* The target element that triggers the display of the container */}
      <div id="your-target-element-id">Target Element</div>
    </div>
  );
};

export default YourComponent;
