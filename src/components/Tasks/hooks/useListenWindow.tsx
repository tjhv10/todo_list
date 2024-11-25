import { useEffect } from "react";

function useListenWindow(_handleKeyDown) {
  useEffect(() => {
    window.addEventListener("keydown", _handleKeyDown);
    return () => window.removeEventListener("keydown", _handleKeyDown);
  });
}
export default useListenWindow;
