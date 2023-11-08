import React, { useState, useEffect } from "react";
import axios from "axios";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooks from "@mui/icons-material/LibraryBooks";
import LaptopIcon from "@mui/icons-material/Laptop";
import WorkIcon from "@mui/icons-material/Work";
import DevicesIcon from "@mui/icons-material/Devices";
import "./App.css";
import { Input } from "@mui/material";

const App = () => {
  const [color, setColor] = useState("");
  const [workExp, setWorkExp] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    getWorkExp();
    getEducation();
  }, []);

  const getWorkExp = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/resume-builder/workExperience/get"
      );
      setWorkExp(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getEducation = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/resume-builder/education/get"
      );
      setEducation(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const row = document.querySelectorAll(".row");
  const column = document.querySelector(".column");

  row.forEach((box) => {
    box.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    box.addEventListener("drop", () => {
      box.appendChild(column);
    });
  });

  return (
    <>
      <h1 className="resume">Resume</h1>
      <Input
        sx={{ color: "black", fontFamily: "Arial Bold" }}
        className="input"
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Choose And Type Your Input Color Here 👉🏻"
        variant="outlined"
        color="primary"
      />
      <div className="row">
        <div className="column" draggable="true">
          <h2 className="heading1">
            <LibraryBooks sx={{ fontSize: "30px" }} />
            MY EDUCATION
          </h2>
          <br />
          {education.length &&
            education.map((row, index) => (
              <>
                <h3 className="edu1">
                  <LaptopIcon />
                  {row.degree[0]}
                </h3>
                <p>{row.college[0]}</p>
                <p>{row.location[0]}</p>
                <p>{row.graduationDate[0]}</p>
                <hr style={{ color: "white" }} />
                <br />
                <h3 className="edu2">
                  <SchoolIcon />
                  {row.degree[1]}
                </h3>
                <p>{row.college[1]}</p>
                <p>{row.location[1]}</p>
                <p>{row.graduationDate[1]}</p>
              </>
            ))}
        </div>
        <div className="column" draggable="true" style={{ backgroundColor: color }}>
          <h2 className="heading2">
            <WorkIcon sx={{ fontSize: "30px" }} />
            WORK EXPERIENCE
          </h2>
          <br />
          {workExp.length &&
            workExp.map((row, index) => (
              <>
                <h3 className="work1">
                  <DevicesIcon />
                  {row.position[0]}
                </h3>
                <p>{row.company[0]}</p>
                <p>{row.location[0]}</p>
                <p>{row.startDate[0]}</p>
                <p>{row.endDate[0]}</p>
                <p>{row.description[0]}</p>
                <hr style={{ color: "white" }} />
                <br />
                <h3 className="work2">
                  <DevicesIcon />
                  {row.position[1]}
                </h3>
                <p>{row.company[1]}</p>
                <p>{row.location[1]}</p>
                <p>{row.startDate[1]}</p>
                <p>{row.endDate[1]}</p>
                <p>{row.description[1]}</p>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default App;