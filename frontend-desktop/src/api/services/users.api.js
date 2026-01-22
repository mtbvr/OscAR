import { apiClient } from '../apiClient';

export function addUser(userData) {
  return apiClient('/users', { method: 'POST', body: userData });
}
