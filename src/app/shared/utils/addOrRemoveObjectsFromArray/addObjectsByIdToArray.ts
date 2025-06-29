import { TOGGLE_FLAG } from '../../constants';
import { Id } from '../../type';
import { addOrRemoveObjectsFromArray } from './addOrRemoveObjectsFromArray';

export const addObjectsByIdToArray = <T extends Id>(array: T[], items: T[]) =>
  addOrRemoveObjectsFromArray<T, 'id'>('id')(TOGGLE_FLAG.ADD)(array, items);
