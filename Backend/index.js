const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();

const db = require("./db/connect");
db();

// import routes

const workExperience = require("./routes/work-experience-routes");
const education = require("./routes/education-routes");

app.use("/resume-builder/workExperience", workExperience);
app.use("/resume-builder/education", education);

app.get("/", (req,res) => {
    res.send("Build Your Perfect Resume 👉🏻");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
});