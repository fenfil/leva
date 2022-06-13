import { AxiosError } from 'axios';
import { handleError } from './handleError';

export const errorLogger = (errorTitle: string) => (error: AxiosError) => handleError(errorTitle, error);
