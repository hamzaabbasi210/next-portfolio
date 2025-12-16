import { RefObject, useEffect } from "react";

export function useOutsideClick(
  ref: RefObject<HTMLElement | null>,
  callback: () => void
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      // Ensure ref.current exists before checking containment
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
}
