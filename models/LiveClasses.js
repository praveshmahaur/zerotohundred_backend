const mongoose = require('mongoose');

const LiveClassesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    subTitle: {type: String, required: true, trim: true},
    subjectName: { type: String, required: true, trim: true },
    time: { type: String, required: true},
    url: {type: String, required: true, trim: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model('LiveClasses', LiveClassesSchema);
