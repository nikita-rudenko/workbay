import mongoose, { Schema, Document } from 'mongoose';

export interface INote extends Document {
  name: string;
  body: string;
}

const NoteSchema: Schema = new Schema({
  title: { type: String },
  body: {
    type: String,
    required: true,
  },
});

export default mongoose.model<INote>('Note', NoteSchema);
