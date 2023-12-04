import { useEffect } from "react";
import "../animation.scss";

const useZoomInAnimation = (elementSelectors, rootMargin = "100px") => {
  useEffect(() => {
    const elements = document.querySelectorAll(elementSelectors);

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elements.forEach((element) => {
            element.style.opacity = "1";
            element.classList.add("zoom-in");
          });
        } else {
          elements.forEach((element) => {
            element.style.opacity = "0";
            element.classList.remove("zoom-in");
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin,
    });

    elements.forEach((element) => {
      // Set initial styles
      element.style.opacity = "0";
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [elementSelectors, rootMargin]);
};

export default useZoomInAnimation;
