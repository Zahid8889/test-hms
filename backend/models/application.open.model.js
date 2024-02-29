const mongoose = require("mongoose");

const { Schema } = mongoose;

const openApplication = new Schema(
  {
    hostelid: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "hostel"
    },
    adminid: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "admin"
    },
    branch:{
        type:String,
        required:true,
    },
    session:{
        type:String,
        required:true,
    },
    endDate:{
        type:Date,
        required:true
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('openApplication', openApplication)
