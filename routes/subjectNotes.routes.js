// const express = require('express');
// const SubjectNote = require('../models/SubjectNote');

// const router = express.Router();

// router.post('/', async (req, res) => {
//   try {
//     const { imageUrl, subjectName, numberOfNotes } = req.body;

//     if (!imageUrl || !subjectName || typeof numberOfNotes !== 'number') {
//       return res.status(400).json({ error: 'Invalid payload' });
//     }

//     const doc = await SubjectNote.create({
//       imageUrl: imageUrl.trim(),
//       subjectName: subjectName.trim(),
//       numberOfNotes,
//     });

//     return res.status(201).json({ data: doc });
//   } catch (err) {
//     console.error('[ERROR] POST /api/subject-notes:', err);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const docs = await SubjectNote.find().sort({ createdAt: -1 }).lean();
//     return res.status(200).json({ data: docs });
//   } catch (err) {
//     console.error('[ERROR] GET /api/subject-notes:', err);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;





// // const express = require('express');
// // const SubjectNote = require('../models/SubjectNote');

// // console.log('✓ subjectNotes.routes.js START');

// // const router = express.Router();

// // // POST /api/subject-notes
// // router.post('/', async (req, res) => {
// //   console.log('[HANDLER] POST /api/subject-notes');
// //   try {
// //     const { imageUrl, subjectName, numberOfNotes } = req.body;

// //     if (!imageUrl || !subjectName || typeof numberOfNotes !== 'number') {
// //       return res.status(400).json({ error: 'Invalid payload' });
// //     }

// //     const doc = await SubjectNote.create({
// //       imageUrl: imageUrl.trim(),
// //       subjectName: subjectName.trim(),
// //       numberOfNotes,
// //     });

// //     return res.status(201).json({ data: doc });
// //   } catch (err) {
// //     console.error('[ERROR]', err);
// //     return res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });

// // // GET /api/subject-notes
// // router.get('/', async (req, res) => {
// //   console.log('[HANDLER] GET /api/subject-notes');
// //   try {
// //     const docs = await SubjectNote.find().sort({ createdAt: -1 }).lean();
// //     return res.status(200).json({ data: docs });
// //   } catch (err) {
// //     console.error('[ERROR]', err);
// //     return res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });

// // console.log('✓ subjectNotes.routes.js EXPORT router');

// // module.exports = router;
