import * as fromTruc from './truc.actions';

describe('loadTrucs', () => {
  it('should return an action', () => {
    expect(fromTruc.loadTrucs().type).toBe('[Truc] Load Trucs');
  });
});
