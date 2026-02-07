export interface CulturalCenterEntity {
  id: string;
  name: string;
  description: string;
  isApprove: boolean;
  address_id: string;
  picture_path?: string;
  created_at: Date;
  updated_at: Date;
}