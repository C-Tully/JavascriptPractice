import express from "express";
import dotenv from "dotenv";
import crudRoutes from "src/routes/crud_routes.js";

// //initalize express
// const app = express();
// const port = 3000;

// //Middleware
// /**
//  * Returns middleware that only parses json and only looks at requests where the
//  * Content-Type header matches the type option.
//  */
// app.use(express.json());

// //simpe route
// app.get("/", (req, resp) => {
//   resp.send(" Response from Express middle ware");
// });

// app.listen(port, () => {
//   console.log("server running at " + port);
// });
const app = express();
const port = 3000;

//If there was a environment key..
dotenv.config();

//Middle weare
app.use(express.json());

//In-memory database

//Routes::
//Mount imported routes

app.use("/devices", crudRoutes);

app.get("/", (req, resp) => {
  resp.send(" Response from Express middle ware");
});

app.listen((port) => {
  console.log("listening on " + port);
});
