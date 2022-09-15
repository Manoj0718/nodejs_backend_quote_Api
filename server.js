const express = require("express");
const app = express();
const qoutesRoutes = require("./routes/routes");

const PORT = process.env.PORT || 4001;

//------------CORS Header ------------------//

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//------------End CORS Header ------------------//

//* Implementing Routes **///
app.use(express.static("public"));

app.use("/api", qoutesRoutes);
app.listen(PORT, () => {
  console.log(`connected to port ${PORT}`);
});
