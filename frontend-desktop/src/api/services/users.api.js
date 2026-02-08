import { apiClient } from '../apiClient';

export function addUser(userData) {
  return apiClient('/users/web', { method: 'POST', body: userData });
}
