export interface CreateHuntRequestDTO {
    title: string;
    description: string;
    creator_id: number;
    difficulty_id: number;
    points: number;
    latitude: number;
    longitude: number;
    picture_path: string;
}