export interface UserEntity {
  id: string;
  email: string;
  username: string;
  rights: string[];
  password: string;
  created_at: Date;
  updated_at: Date;
}