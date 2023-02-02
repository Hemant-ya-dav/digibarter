const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jobp_user:jobp123@cluster0.xghz9.mongodb.net/trader?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});