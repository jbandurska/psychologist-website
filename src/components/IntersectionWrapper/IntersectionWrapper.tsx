import "./IntersectionWrapper.css";
import { useEffect, useRef, useState } from "react";

export default function IntersectionWrapper({ children }: { children: any }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-200px 0px" }
    );
    observer.observe(ref.current!);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      if (ref.current)
        (ref.current as HTMLElement)
          .querySelectorAll(".hidden")
          .forEach((el) => {
            el.classList.add("slide-in");
          });
    }
  }, [isIntersecting]);

  return <div ref={ref}>{children}</div>;
}
