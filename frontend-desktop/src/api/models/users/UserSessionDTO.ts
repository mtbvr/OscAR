export interface UserSessionDTO {
    id: string,
    username: string,
    role: string[],
    id_cultural_center: string | null,
}