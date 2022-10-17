export interface Track{
    track_id?: number,
    name: string,
    user_id: number,
    crop_id: string,
    sown: string,
    watered: string,
    fed?: string[],
    harvested?: string[]
}
