import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required:false,
    },

    // role: {
    //   type: String,
    //   default: "user",
    // },
    dateOfBirth: { type: Date },
    phoneNumber: { type: String },

    // Professional information
    skills: [{ type: String }],


    /*experience: [{
      title: { type: String },
      company: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
      description: { type: String }
    }],*/


    education: [{
        currentYear: { type: String },
        institution: { type: String },
        graduationYear: { type: Number },
        fieldOfStudy: { type: String }
    }],

    // Contact information
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zipCode: { type: String }
    },

    // Projects
    project: {
        projectName: { type: String },
        summary: { type: String },
        projectUrl: { type: String }
    },

    // Additional references
    links: {
        linkedIn: { type: String },
        github: { type: String },
        portfolio: { type: String }
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
