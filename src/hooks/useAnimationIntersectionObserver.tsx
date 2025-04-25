import { useEffect, useRef } from "react";

const useAnimationIntersectionObserver = (animationClassname: string) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const nodeClassnames = (node as HTMLElement).classList;

        if (
          entry.isIntersecting &&
          !nodeClassnames.contains(animationClassname)
        ) {
          nodeClassnames.add(animationClassname);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.25,
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [animationClassname]);

  return ref;
};

export default useAnimationIntersectionObserver;
