const mongoose = require("mongoose");
const sampleListings = require("./data");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("connected to DB.");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  sampleListings.data = sampleListings.data.map((obj) => ({
    ...obj,
    owner: "68332693f5e509b2a2cfd167",
  }));
  await Listing.insertMany(sampleListings.data);
  console.log("data was initialized");
};

initDB();
