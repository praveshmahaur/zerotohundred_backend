const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

function tryLoadFromFile() {
  const candidates = [
    process.env.FIREBASE_SERVICE_ACCOUNT_PATH,
    path.resolve(__dirname, '..', 'firebase-service-account.json'),
    path.resolve(__dirname, '..', 'secrets', 'firebase-service-account.json'),
  ].filter(Boolean);

  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8');
      const svc = JSON.parse(raw);
      if (svc.private_key && svc.private_key.includes('\\n')) {
        svc.private_key = svc.private_key.replace(/\\n/g, '\n');
      }
      return svc;
    }
  }
  return null;
}

function tryLoadFromEnvJson() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) return null;
  const svc = JSON.parse(raw);
  if (svc.private_key && svc.private_key.includes('\\n')) {
    svc.private_key = svc.private_key.replace(/\\n/g, '\n');
  }
  return svc;
}

function tryLoadFromEnvFields() {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  let privateKey = process.env.FIREBASE_PRIVATE_KEY;
  if (!projectId || !clientEmail || !privateKey) return null;
  if (privateKey.includes('\\n')) {
    privateKey = privateKey.replace(/\\n/g, '\n');
  }
  return {
    project_id: projectId,
    client_email: clientEmail,
    private_key: privateKey,
  };
}

function loadServiceAccount() {
  // 1) Prefer local JSON file
  const fileCreds = tryLoadFromFile();
  if (fileCreds) return fileCreds;

  // 2) Env JSON
  const envJsonCreds = tryLoadFromEnvJson();
  if (envJsonCreds) return envJsonCreds;

  // 3) Env fields
  const envFieldCreds = tryLoadFromEnvFields();
  if (envFieldCreds) return envFieldCreds;

  throw new Error(
    'Firebase service account not provided. Place JSON at secrets/firebase-service-account.json or set FIREBASE_SERVICE_ACCOUNT_PATH.'
  );
}

if (!admin.apps.length) {
  const svc = loadServiceAccount();
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: svc.project_id,
      clientEmail: svc.client_email,
      privateKey: svc.private_key,
    }),
  });
}

module.exports = admin;
