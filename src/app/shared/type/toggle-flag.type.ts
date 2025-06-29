import { TOGGLE_FLAG } from '../constants/toggle-flag.const';

export type ToggleFlag = (typeof TOGGLE_FLAG)[keyof typeof TOGGLE_FLAG];
