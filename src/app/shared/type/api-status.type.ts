import { API_STATUS } from '../constants';

export type ApiStatusType = (typeof API_STATUS)[keyof typeof API_STATUS];
