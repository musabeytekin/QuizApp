const express = require('express');
const {connect} = require("./helpers/connectDb");
const routes = require("./routes");
const cors = require("cors");
connect();

const app = express();

app.use(express.json());

app.use(cors());
app.use("/api", routes);
app.listen(5001, () => {
    console.log(`server running on port 5001`);
});
