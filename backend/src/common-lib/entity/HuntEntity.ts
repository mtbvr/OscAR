export interface HuntEntity {
  id: number;
  title: string;
  description: string;
  creator_id: number;
  difficulty_id: number;
  isActive: boolean;
  points: number;
  latitude: number;
  longitude: number;
  picture_path: string;
  created_at: Date;
  updated_at: Date;
}