import tasks from '../reducers';
import { ADD_TASK, DELETE_TASK, CLEAR_TASKS } from '../constants';

describe('Request Reducer', () => {
    it('has a default state', () => {
        expect(tasks(undefined, {type: 'unexpected'})).toEqual([]);
    });

    it('has a handle ADD_TASK', () => {
        expect(tasks(undefined, {
            type: ADD_TASK,
        payload: {
            addTask: true
            }
        })).toEqual([]);
    });
});