const express = require("express");
const { initializeApp, cert } = require("firebase-admin/app");
const { getStorage, getDownloadURL } = require("firebase-admin/storage");

const app = express();
// multer memory storage
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: "gs://sample-8d069.appspot.com",
});
const storage = getStorage();
const bucket = storage.bucket();
app.use(express.static("public"));
app.post("/", upload.single("file"), (req, res) => {
  console.log(req.file);
  const blob = bucket.file(req.file.originalname);
  const blobWriter = blob.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });
  blobWriter.on("error", (err) => console.log(err));
  blobWriter.on("finish", () => {
    const fileRef = bucket.file(req.file.originalname);
    getDownloadURL(fileRef).then((url) => {
      res.status(200).send(url);
    });
  });
  blobWriter.end(req.file.buffer);
});

app.listen(3000, () => console.log("Server running on port 3000"));
