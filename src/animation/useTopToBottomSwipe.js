import { useEffect } from "react";
import "../animation.scss";

const useTopToBottomSwipe = (elementSelector, rootMargin = "240px") => {
  useEffect(() => {
    const element = document.querySelector(elementSelector);

    if (!element) {
      console.error(`Element with selector "${elementSelector}" not found.`);
      return;
    }

    const addAnimation = () => {
      element.style.transform = "translateY(0)";
      element.style.opacity = "1";
      element.classList.add("swipe-down");
    };

    const animationEndHandler = () => {
      element.classList.remove("swipe-down");
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 1) {
          addAnimation();
          observer.unobserve(entry.target); // Stop observing after the animation has started
        } else {
          animationEndHandler();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin,
    });

    element.style.transition =
      "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementSelector, rootMargin]);
};

export default useTopToBottomSwipe;
