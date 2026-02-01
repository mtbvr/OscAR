export interface HuntEntity {
  id: string;
  title: string;
  description: string;
  creator_id: string;
  difficulty_id: string;
  isActive: boolean;
  points: number;
  latitude: number;
  longitude: number;
  picture_path: string;
  created_at: Date;
  updated_at: Date;
}