# express-firebase

## What This Project Does
This project creates a simple Express.js server that allows file uploads to Firebase Storage. It provides a basic API endpoint to receive file uploads and returns a download URL for the uploaded file.

## Tech Stack
*   **Language:** JavaScript
*   **Framework:** Express
*   **Libraries:**
    *   firebase-admin: Firebase Admin SDK
    *   multer: File upload middleware
    *   firebase-admin/storage: Firebase Storage client library

## Project Structure
*   `server.js`: The main server file, handling file uploads to Firebase Storage.
*   `server2.js`: A simple Express app with basic routes for testing and demonstration.
*   `public`:  A directory likely intended for static files (not used in this example).
*   `package.json`:  Defines project dependencies and scripts.
*   `pnpm-lock.yaml`: Specifies exact versions of dependencies.
*   `serviceAccountKey.json`: Contains credentials for the Firebase Admin SDK.

## Getting Started
1.  Clone the repository: `git clone https://github.com/danibarker/express-firebase-storage.git`
2.  Install dependencies: `cd express-firebase` and `npm install` or `pnpm install`
3.  Configure Firebase: Ensure the `serviceAccountKey.json` file is correctly placed and has the necessary permissions for Firebase Storage.
4.  Run the server: `node server.js`

## Status
Active

## Notes
The project uses Firebase Admin SDK for authentication and interaction with Firebase Storage.  The `multer` middleware is used for handling file uploads. The `public` directory is present but not utilized in the provided code. The `serviceAccountKey.json` file is crucial for authentication with Firebase.
