const LiveClasses = require('../models/LiveClasses');

exports.createLiveClasses = async (req, res) => {
  try {
    const { title, subTitle, subjectName, time, url } = req.body;

    if (!title || !subTitle || !subjectName || !time || !url) {
      return res.status(400).json({ error: 'Invalid payload' });
    }

    const doc = await LiveClasses.create({
      title: title.trim(),
      subTitle: subTitle.trim(),
      subjectName: subjectName.trim(),
      time: time.trim(),
      url: url.trim(),
    });

    return res.status(201).json({ data: doc });
  } catch (err) {
    console.error('[ERROR] createSubjectNote:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.listLiveClasses = async (req, res) => {
  try {
    const docs = await LiveClasses.find().sort({ createdAt: -1 }).lean();
    return res.status(200).json({ data: docs });
  } catch (err) {
    console.error('[ERROR] listSubjectNotes:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
