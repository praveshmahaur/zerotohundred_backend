const SubjectNote = require('../models/SubjectNote');

exports.createSubjectNote = async (req, res) => {
  try {
    const { imageUrl, subjectName, numberOfNotes } = req.body;

    if (!imageUrl || !subjectName || typeof numberOfNotes !== 'number') {
      return res.status(400).json({ error: 'Invalid payload' });
    }

    const doc = await SubjectNote.create({
      imageUrl: imageUrl.trim(),
      subjectName: subjectName.trim(),
      numberOfNotes,
    });

    return res.status(201).json({ data: doc });
  } catch (err) {
    console.error('[ERROR] createSubjectNote:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.listSubjectNotes = async (req, res) => {
  try {
    const docs = await SubjectNote.find().sort({ createdAt: -1 }).lean();
    return res.status(200).json({ data: docs });
  } catch (err) {
    console.error('[ERROR] listSubjectNotes:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
