//grabbing the main Express module from the package you installed.
const express = require("express");

const mongoose = require("mongoose");
//basically brings in our depency for the routes
const routes = require("./routes");
//Express module is a function, which is used to create our app variable.
const app = express();
//tells the server which port to be listening on when running our server
const PORT = process.env.PORT || 3001;

//middleware used to parse json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//if the node environment is production then its letting Heroku know that it would be run in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//app.use gets the URL prefix you want ('/', '/users') and the route handler for it. This allows modularity in your server side routing, in this case routes is refering to ./routes which essentially connects all our routes to our application.
app.use(routes);

//First, we need to define a connection. If your app uses only one database, you should use mongoose.connect. If you need to create additional connections, use mongoose.createConnection. Both connect and createConnection take a mongodb:// URI, or the parameters localhost options.
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://phihai93:Phihai911@ds229701.mlab.com:29701/heroku_6g8n317m",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
// once we’ve set up our requests, we must start our server! We are passing PORT into the listen function, which tells the app which port to listen on in this case if not process.env.PORT then defaults to 3001.
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
