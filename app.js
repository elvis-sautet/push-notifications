const express = require("express");
const webPush = require("web-push");
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.static("public"));

// Get public and private keys
const publicVapidKey =
  "BG433-9sCPlxF4014JuWWeYBeTjrx9Bu3iYSD7aoddWuoFBCTmqIE_TNIY7Wlx-elWQwH6iHkC7O1Ch0GrSepfIku";
const privateVapidKey = "Hgi5hNmH5MR9n7h5UirYY-WzAAqBVuedipJ-dT_UyX5w";

// Replace with your email
webPush.setVapidDetails(
  "mailto:samle@test.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Push Test" });

  // Pass object into sendNotification
  webPush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));
});

app.listen(port, () => console.log(`Server started on port ${port}`));
