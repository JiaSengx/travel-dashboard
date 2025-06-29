import { TOGGLE_FLAG } from '../../constants';
import { ToggleFlag } from '../../type';

export const addOrRemoveObjectsFromArray =
  <T, K extends keyof T>(key: K) =>
  (flag: ToggleFlag) =>
  (array: T[], items: T[]): T[] => {
    const itemMap = new Map(items.map(item => [item[key], item]));

    if (flag === TOGGLE_FLAG.ADD) {
      return [...array.filter(itm => !itemMap.has(itm[key])), ...items];
    }

    return array.filter(itm => !itemMap.has(itm[key]));
  };
