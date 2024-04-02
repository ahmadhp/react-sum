import { useEffect } from 'react';

function useDebounceCallback(callback, value, milSeconds = 500) {
  useEffect(() => {
    let timeoutId = setTimeout(callback, milSeconds);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
}

export default useDebounceCallback;
