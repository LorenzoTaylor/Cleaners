import React, { useRef, useEffect } from 'react';
import "./Reveal.css";

const FadeInOnScroll = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a CSS class to the element to trigger the fade-in animation
          entry.target.classList.add('fade-in');
        } else {
          // Remove the CSS class if the element is no longer in the viewport
          entry.target.classList.remove('fade-in');
        }
      });
    });

    observer.observe(element);

    // Cleanup the observer when the component is unmounted
    return () => observer.unobserve(element);
  }, []);

  return (
    <div ref={elementRef} className="fade-in-element">
      {/* Your content here */}
    </div>
  );
};

export default FadeInOnScroll;