const admin = require('../config/firebaseAdmin');
const User = require('../models/User');

module.exports = async function auth(req, res, next) {
  const header = req.headers.authorization || '';
  const [scheme, token] = header.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  let decoded;
  try {
    decoded = await admin.auth().verifyIdToken(token);
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  req.user = decoded;

  try {
    const now = new Date();
    const dbUser = await User.findOneAndUpdate(
      { uid: decoded.uid },
      {
        $set: { lastSeen: now },
        $setOnInsert: {
          uid: decoded.uid,
          phoneNumber: decoded.phone_number || null,
          name: decoded.name || null,
          photoURL: decoded.picture || null,
          role: 'student',
          createdAt: now,
        },
      },
      { upsert: true, new: true }
    );

    req.dbUser = dbUser;
    return next();
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
