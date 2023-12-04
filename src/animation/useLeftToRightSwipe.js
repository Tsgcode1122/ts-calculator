import { useEffect } from "react";
import "../animation.scss";

const useLeftToRightSwipe = (elementSelector, rootMargin = "100px") => {
  useEffect(() => {
    const elements = document.querySelectorAll(elementSelector);

    const addAnimation = (element) => {
      element.classList.add("swipe-right");
    };

    const animationEndHandler = (element) => {
      element.classList.remove("swipe-right");
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          addAnimation(entry.target);
        } else {
          animationEndHandler(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin,
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [elementSelector, rootMargin]);
};

export default useLeftToRightSwipe;
