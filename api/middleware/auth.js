const admin = require("firebase-admin");
const serviceAccount = require("../../account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const checkAuth = (req, res, next) => {
  const { token } = req.headers;
  if (token) {
    admin
      .auth()
      .verifyIdToken(token)
      .then(() => {
        next();
      })
      .catch(() => {
        res.status(403).send("Unauthorized");
      });
  } else {
    res.status(403).send("Unauthorized");
  }
};

module.exports = checkAuth;
