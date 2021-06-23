import { DescriptionPipe } from './description.pipe';

describe('DescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new DescriptionPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the description', () => {
    let mockOutput = 'Pla...';
    expect(new DescriptionPipe().transform('Plants')).toEqual(mockOutput);
  })

});
