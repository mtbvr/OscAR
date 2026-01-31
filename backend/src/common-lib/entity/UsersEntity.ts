export interface UserEntity {
  id: number;
  email: string;
  username: string;
  rights: string[];
  password: string;
  created_at: Date;
  updated_at: Date;
}