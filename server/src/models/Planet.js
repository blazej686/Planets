import { Schema } from "mongoose";

export const PlanetSchema = new Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }


},
    {
        timestamps: true,
        toJSON: { virtuals: true }
    })
