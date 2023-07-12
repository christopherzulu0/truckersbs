/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const admin = require("firebase-admin");
// const cors = require("cors")({origin: true}); // Add cors middleware
const {onCall} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

admin.initializeApp();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


exports.createUserAndAddUserRole = onCall(async (req) => {
  const email = req.data.email;
  const password = req.data.password;
  const role = req.data.role;

  const userRecord = await admin
      .auth()
      .createUser({
        email,
        password,
      });
  logger.log("User Record", userRecord);
  return admin.auth().getUserByEmail(email).then((user)=> {
    return admin.auth().setCustomUserClaims(user.uid, {
      role: role,
    });
  }).then(async () => {
    console.log("Claims Set");
    return await admin.auth().getUserByEmail(email).then((user)=> {
      logger.log("User gotten");
      return {
        user: user,
        status: 200,
        message: `Success! ${email} has been made an 18wheeler trucker`,
      };
    });
  }).catch((err) => {
    return {
      status: 500,
      user: {},
      message: err,
    };
  });
});
