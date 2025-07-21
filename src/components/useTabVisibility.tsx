import { useEffect } from "react";

const useTabVisibility = (
  onHidden?: () => void,
  onVisible?: () => void
): void => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        onHidden?.();
      } else {
        onVisible?.();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [onHidden, onVisible]);
};

export default useTabVisibility;
