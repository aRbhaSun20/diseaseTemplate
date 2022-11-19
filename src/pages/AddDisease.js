import { Delete } from "@mui/icons-material";
import {
  Button,
  IconButton,
  ListItemText,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "react-json-pretty/themes/monikai.css";
import JSONPretty from "react-json-pretty";

const BOLD_OPTIONS = ["normal", "bold", "bolder"];
function AddDisease() {
  const [show, setShow] = useState("");
  const [symptoms, setSymptoms] = useState([]);

  const handleReset = () => {
    setSymptoms([]);
    setShow("");
  };

  const handleAddSymptom = () => {
    setSymptoms((state) =>
      state.concat({ text: "", fontWeight: "normal", fontSize: 16 })
    );
  };

  const handleDeleteSymptom = (index) => {
    setSymptoms((state) => state.filter((ele, i) => i !== index));
  };

  const handleSymChange = (e, index) => {
    const { name, value } = e.target;
    setSymptoms((state) =>
      state.map((ele, i) => (i === index ? { ...ele, [name]: value } : ele))
    );
  };

  const handleSubmit = () => {
    const returnObj = {};
    symptoms.forEach((ele, i) => {
      returnObj[`description${i}`] = ele;
    });
    setShow(JSON.stringify(returnObj));
  };

  return (
    <div className="container">
      <div className="but-container">
        <Button variant="outlined" onClick={handleAddSymptom}>
          Add Description
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="outlined" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <div className="inpt-container">
        <div className="syms-container">
          {symptoms.map((sym, i) => (
            <div key={i} className="sym-container">
              <TextField
                name="text"
                value={sym.text}
                label="Description"
                multiline
                maxRows={8}
                style={{ width: "30rem" }}
                onChange={(e) => handleSymChange(e, i)}
              />
              <TextField
                name="fontSize"
                value={sym.fontSize}
                label="Font Size"
                style={{ width: "20rem" }}
                type="number"
                onChange={(e) => handleSymChange(e, i)}
              />
              <TextField
                name="fontWeight"
                value={sym.fontWeight}
                label="Font Weight"
                select
                style={{ width: "20rem" }}
                onChange={(e) => handleSymChange(e, i)}
              >
                {BOLD_OPTIONS.map((ele, j) => (
                  <MenuItem key={j} value={ele}>
                    <ListItemText primary={ele} key={i} />
                  </MenuItem>
                ))}
              </TextField>
              <IconButton onClick={() => handleDeleteSymptom(i)}>
                <Delete style={{ color: "red" }} />
              </IconButton>
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: "50%" }}>
        {show && <JSONPretty id="json-pretty" data={show} />}
      </div>
    </div>
  );
}

export default AddDisease;
