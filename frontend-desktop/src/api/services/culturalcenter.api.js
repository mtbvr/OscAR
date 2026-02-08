import { apiClient } from '../apiClient';

export function getActiveCulturalCenter() {
  return apiClient('/culturalcenter/active');
}
