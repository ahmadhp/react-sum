import { renderHook, act } from '@testing-library/react';
import useDebounceCallback from '.';

describe('useDebounceCallback', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('Should call callback after debounce delay', () => {
    const callback = jest.fn();
    const { rerender } = renderHook(
      ({ value }) => useDebounceCallback(callback, value),
      { initialProps: { value: 'initialValue' } }
    );
    // Re-render with a new value
    rerender({ value: 'updatedValue' });
    // Fast-forward time to simulate debounce delay
    act(() => {
      jest.advanceTimersByTime(500); // assuming debounce delay is 500 milliseconds
    });
    expect(callback).toHaveBeenCalled();
  });

  test('should clear timeout on unmount', () => {
    const callback = jest.fn();
    const { unmount } = renderHook(() =>
      useDebounceCallback(callback, 'value')
    );
    // Unmount the hook
    unmount();
    // Fast-forward time to ensure any pending timeout is cleared
    act(() => {
      jest.runAllTimers();
    });
    expect(callback).not.toHaveBeenCalled();
  });
});
