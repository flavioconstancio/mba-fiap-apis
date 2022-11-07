const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const cfg = require("./config/cfg");
const routefinanceiro = require("./routes/financeiro");
const notfound = require("./middleware/notfound");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));
app.use(cors());


mongoose.connect(cfg.db, { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/api/financeiro", routefinanceiro);

app.use(notfound);
app.listen(3010, () => console.log("Servidor online ... "));
