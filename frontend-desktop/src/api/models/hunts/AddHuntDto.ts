export interface CreateHuntDto {
    title: string;
    description: string;
    difficulty_id: number;
    points: number;
    latitude: number;
    longitude: number;
}