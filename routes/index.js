console.log('✓✓✓ routes/index.js LOADING START ✓✓✓');

const { Router } = require('express');

let meRoutes, subjectNotesRoutes;

try {
  console.log('Requiring me.routes...');
  meRoutes = require('./me.routes');
  console.log('✓ me.routes loaded successfully');
} catch (err) {
  console.error('ERROR loading me.routes:', err);
  throw err;
}

try {
  console.log('Requiring subjectNotes.routes...');
  subjectNotesRoutes = require('./subjectNotes.routes');
  console.log('✓ subjectNotes.routes loaded successfully');
} catch (err) {
  console.error('ERROR loading subjectNotes.routes:', err);
  throw err;
}

const router = Router();

console.log('Mounting /me...');
router.use('/me', meRoutes);

console.log('Mounting /subject-notes...');
router.use('/subject-notes', subjectNotesRoutes);

console.log('✓✓✓ routes/index.js EXPORT ✓✓✓');

module.exports = router;
