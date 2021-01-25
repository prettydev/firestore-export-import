const options = {
  autoParseDates: true,
  geos: ["location", "locations"],
  refs: ["refKey"],
};

const { initializeApp, restore } = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

// Initiate Firebase App
// appName is optional, you can omit it.
const appName = "[DEFAULT]";
initializeApp(serviceAccount, databaseURL, appName);

// Start importing your data
// The array of date, location and reference fields are optional
restore("your-file-path.json", {
  dates: ["date1", "date1.date2", "date1.date2.date3"],
  geos: ["location", "locations"],
  refs: ["refKey", "arrayRef"],
});
