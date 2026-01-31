export interface CreateStepRequestDTO {
  title: string;
  description: string;
  hunt_id: number;
  points: number;
  latitude: number;
  longitude: number;
  index_id?: number;
}