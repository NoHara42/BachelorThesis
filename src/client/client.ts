import express from "express";

const expressApp = express();
const port = 8080;

expressApp.use("/", express.static("dist"));

// expressApp.use(
//   cors({
//     origin: "*",
//     methods: ["GET"],
//   })
// );

expressApp.listen(port, () => {
  console.log(`Client prod-server listening on port ${port}`);
});