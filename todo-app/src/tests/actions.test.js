import { ADD_TASK, DELETE_TASK, CLEAR_TASKS } from '../constants';
import * as actions from '../actions';

describe('actions', () => {
    it('should create an action to add a todo', () => {
      const text = 'Study English'
      const expectedAction = {
        type: ADD_TASK,
        text
      }
      expect(actions.addTask(text)).toEqual(expectedAction)
    });

    it('should delete an action from todo', () => {
      const id = [];
      const expectedAction = {
        type: DELETE_TASK,
        id
      }
      expect(actions.deleteTask(id)).toEqual(expectedAction)
    });

    it('should clear todo', () => {
      const expectedAction = {
        type: CLEAR_TASKS,
      }
      expect(actions.clearTasks()).toEqual(expectedAction)
    });
  });