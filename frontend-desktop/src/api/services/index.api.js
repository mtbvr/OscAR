import { apiClient } from '../apiClient';

export function addIndex(indexData) {
  return apiClient('/index', { method: 'POST', body: indexData });
}

export function getAllIndexByHunt(hunt_id) {
  return apiClient('/index/hunt', { method: 'POST', body: { "hunt_id": hunt_id } });
}
  