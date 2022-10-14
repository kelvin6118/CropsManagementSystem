export interface Track{
    track_id?: number,
    name: string,
    user_id: number,
    crop_id: string,
    sown: Date,
    watered: Date,
    fed?: Date[],
    harvested?: Date[]
}
