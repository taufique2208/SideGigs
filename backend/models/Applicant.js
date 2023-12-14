import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Types.ObjectId,
      ref: "Job",
    },
    job:{
        type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    proposal: {
      type: String,
      required: true,
    },
    applicantId: {
        type: String,
        required: true,
      },
    bid: {
      type: Number,
      required: true,

    },
  },
  { timestamps: true }
);

export default mongoose.model("Applicant", applicantSchema);
