
const mongoose = require("mongoose");
const express = require("express");
var cors = require('cors');
const bodyParser = require("body-parser");

const Data = require("./data");

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute = "mongodb+srv://testuser:testpass@test-upwoo.mongodb.net/test?retryWrites=true";

mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get("/getData", (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.delete("/deleteData", (req, res) => {
    const { _id } = req.body;
    Data.findByIdAndDelete(_id, err => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

router.post("/putData", (req, res) => {
    let data = new Data();
    const {name, link } = req.body;
    if (!req.body) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }
    data.name = name;
    data.link = link;
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});
app.use("/api", router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));