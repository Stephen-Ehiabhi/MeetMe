const express = require("express");
app = express();
const { connect } = require("mongoose");
userRoutes = require("./routes/user");
postRoutes = require("./routes/post");
convoRoutes = require("./routes/conversation");
helmet = require("helmet");
morgan = require("morgan");
cors = require("cors");

//module to hide sensitive data
require("dotenv").config();
PORT = process.env.PORT;

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/", postRoutes);
app.use("/api/convo", convoRoutes);

//conecting database and server
connect(
  process.env.URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(`Error listening on Port ${PORT}`);
    //intiating the listen method to enable server listen for requests
    app.listen(PORT, () => {
      console.log(`Server and DB connected on Port ${PORT}`);
    });
  }
);
