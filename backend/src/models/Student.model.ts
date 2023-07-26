import { Schema, model } from "mongoose";

export interface Student {
  id: string;
  fullName: string;
  mobile: number;
  gender: string;
  city: string;
}

export const studentSchema = new Schema<Student>(
  {
    fullName: { type: String, required: true, trim: true },
    mobile: { type: Number, required: true, unique: true },
    gender: { type: String, required: true },
    city: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

export const studentModel = model("student", studentSchema);
