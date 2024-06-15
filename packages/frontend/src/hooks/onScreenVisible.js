import { useEffect, useMemo, useState } from "react";

const useOnScreenVisible = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    return new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
  }, [ref]);

  useEffect(() => {
    observer?.observe(ref?.current);
    return () => observer.disconnect();
  }, [ref]);
  console.log(isIntersecting);
  return isIntersecting;
};
export default useOnScreenVisible;
