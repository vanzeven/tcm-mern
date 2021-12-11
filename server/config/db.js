// const mongoose = require('mongoose');
const connection = "mongodb+srv://admin:1Ni2pyiOYgIvPD8G@cluster0.0cueb.mongodb.net/Ecommerce?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));


const mongoose = require("mongoose");
try {
  // mongoose.connect("mongodb://localhost:27017/Ecommerce", {
  mongoose.connect("mongodb+srv://admin:1Ni2pyiOYgIvPD8G@cluster0.0cueb.mongodb.net/Ecommerce?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
