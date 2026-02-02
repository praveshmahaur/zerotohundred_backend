const mongoose = require('mongoose');

const SubjectNoteSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true, trim: true },
    subjectName: { type: String, required: true, trim: true },
    numberOfNotes: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('SubjectNote', SubjectNoteSchema);
