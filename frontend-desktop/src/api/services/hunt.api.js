import { apiClient } from '../apiClient';

export function addHunt(huntData) {
  return apiClient('/hunt', { method: 'POST', body: huntData });
}
