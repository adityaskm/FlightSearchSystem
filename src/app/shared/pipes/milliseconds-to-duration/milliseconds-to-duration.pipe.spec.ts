import { MillisecondsToDurationPipe } from './milliseconds-to-duration.pipe';

describe('MillisecondsToDurationPipe', () => {
  it('create an instance', () => {
    const pipe = new MillisecondsToDurationPipe();
    expect(pipe).toBeTruthy();
  });
});
