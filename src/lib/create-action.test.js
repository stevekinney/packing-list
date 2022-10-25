import createAction from './create-action';

describe(createAction, () => {
  it('should return an action creator with the correct action type', () => {
    const fn = createAction('DO_SOMETHING');
    const result = fn();
    expect(result.type).toBe('DO_SOMETHING');
  });

  it('should include a payload if provided a function', () => {
    const fn = createAction('DO_SOMETHING', (n) => n);
    const result = fn(2);
    expect(result.payload).toBe(2);
  });

  it('should default to using an identity if no function is provided', () => {
    const fn = createAction('DO_SOMETHING');
    const result = fn(2);
    expect(result.payload).toBe(2);
  });

  it('should add the action type to the action creator function', () => {
    const fn = createAction('DO_SOMETHING');
    expect(fn.type).toBe('DO_SOMETHING');
  });
});
