const mongoose = require('mongoose');

let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is not set');
  }

  mongoose.set('strictQuery', true);

  try {
    await mongoose.connect(uri, {
      maxPoolSize: 10,
      autoIndex: false,
      serverSelectionTimeoutMS: 10000,
    });
    isConnected = true;
    console.log('MongoDB connected');
  } catch (err) {
    // Common cause: unencoded special chars in password (e.g., @ -> %40)
    if (err.code === 'ENOTFOUND' || /querySrv/i.test(err.message)) {
      console.error(
        'MongoDB connection failed: check your MONGODB_URI host and ensure the password is URL-encoded (e.g., @ => %40) and DB name is present.'
      );
    }
    throw err;
  }

  mongoose.connection.on('disconnected', () => {
    isConnected = false;
    console.warn('MongoDB disconnected');
  });

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB error:', err);
  });
}

module.exports = { connectDB };
