const express = require("express");
const path = require("path");


//Initialization
const app = express();


//settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");


//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes
app.use(require("./routes/index"));


//static files
app.use(express.static(path.join(__dirname,"public")));


//start server
app.listen(app.get("port"), () => {
  console.log("server on port: ", app.get("port"));
});






