import * as fromLoadTodos from './load-todos.actions';

describe('loadLoadTodoss', () => {
  it('should return an action', () => {
    expect(fromLoadTodos.loadLoadTodoss().type).toBe('[LoadTodos] Load LoadTodoss');
  });
});
