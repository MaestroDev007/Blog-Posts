const admin = require("firebase-admin");
const fs = require("fs");

// Load your service account key
const serviceAccount = require("./serviceAccountKey.json");

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const blogs = JSON.parse(fs.readFileSync("./blogs.json", "utf8"));

async function uploadBlogs() {
  const collectionRef = db.collection("blogs");

  for (const blog of blogs) {
    const docRef = collectionRef.doc(); // auto-ID
    await docRef.set(blog);
    console.log(`Uploaded: ${blog.title}`);
  }

  console.log("✅ All blogs uploaded successfully!");
}

uploadBlogs().catch(console.error);
