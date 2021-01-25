const fs = require("fs");
const collection = "items";

const options = {
  docsFromEachCollection: 1000, // limit number of documents when exporting
  refs: ["refKey"], // reference Path
};

const { backup, backups, initializeApp } = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

// Initiate Firebase App
// appName is optional, you can omit it.
const appName = "[DEFAULT]";
initializeApp(serviceAccount, appName);

// Start exporting your data
backup(collection, options).then((data) => {
  const items = [];
  for (const [key, value] of Object.entries(data.items)) {
    delete value.community;
    delete value.location;
    items.push(value);
  }
  console.log(items.length);
  fs.writeFileSync(`${collection}-${Date.now()}.json`, JSON.stringify(items));
});
