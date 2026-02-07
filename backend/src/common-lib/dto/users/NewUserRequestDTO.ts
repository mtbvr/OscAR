import { CreateCulturalCenterRequestDTO } from "../culturalcenter/CreateCulturalCenterRequestDTO";

export interface NewUserRequestDTO {
  username: string;
  email: string;
  password: string;
  id_cultural_center: string | undefined;
  isNewCulturalCenter: boolean | false;
  newCulturalCenter: CreateCulturalCenterRequestDTO | null;
}