import { model, Schema } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);


export const AcademicFacultyModel=model<TAcademicFaculty>('AcademicFaculty', academicFacultySchema)