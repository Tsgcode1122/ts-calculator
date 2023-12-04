// useBounceIn.js
import { useEffect } from "react";
import "../animation.scss"; // Make sure to have your animation styles defined

const useBounceIn = (elementSelector, delay = 0, rootMargin = "0px") => {
  useEffect(() => {
    const element = document.querySelector(elementSelector);

    const addAnimation = () => {
      element.style.opacity = "1";
      element.classList.add("bounce-in");
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(addAnimation, delay);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin,
    });

    // Set initial styles
    element.style.opacity = "0";
    // Add CSS transition for a smooth transition
    element.style.transition = "opacity 0.5s ease";

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementSelector, delay, rootMargin]);
};

export default useBounceIn;
