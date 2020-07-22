import { useRef, useLayoutEffect } from 'react';

function useOuterClick(callback: Function) {
  const innerRef: any = useRef();
  const callbackRef: any = useRef();

  // Set current callback in ref, before second useEffect uses it
  useLayoutEffect(() => {
    // useEffect wrapper to be safe for concurrent mode
    callbackRef.current = callback;
  });

  useLayoutEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);

    // Read most recent callback and innerRef dom node from refs
    function handleClick(e: MouseEvent) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) {
        callbackRef.current(e);
      }
    }
  }, []); // No need for callback + innerRef dep

  return innerRef; // Return ref; client can omit `useRef`
}

export default useOuterClick;
