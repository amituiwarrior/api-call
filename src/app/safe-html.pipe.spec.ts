import { SafeHtmlDecodePipe } from './safe-html-decode.pipe';

describe('SafeHtmlDecodePipe', () => {
  it('create an instance', () => {
    const pipe = new SafeHtmlDecodePipe();
    expect(pipe).toBeTruthy();
  });
});
