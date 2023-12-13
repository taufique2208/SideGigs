import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    // JobId: {
        //   type: mongoose.Types.ObjectId,
        // //   ref: "Tour",
        // },
        highestRange: {
          type: Number,
          required: true,
        },
        lowestRange: {
            type: Number,
            required: true,
        },
    hostId: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
    skillsRequired: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
