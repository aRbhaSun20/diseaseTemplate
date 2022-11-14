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

const INITIAL_DATA = {
  DiseaseName: "",
  Introduction: "",
  Diagnosis: "",
  References: "",
  Causes: "",
  Description: "",
};

const BOLD_OPTIONS = ["normal", "bold", "bolder"];
function AddDisease() {
  const [show, setShow] = useState("");
  const [diseaseData, setDiseaseData] = useState(INITIAL_DATA);
  const [symptoms, setSymptoms] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiseaseData((state) => ({ ...state, [name]: value }));
  };

  const handleReset = () => {
    setDiseaseData(INITIAL_DATA);
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
    setShow(JSON.stringify({ ...diseaseData, Symptoms: symptoms }));
  };

  return (
    <div className="container">
      <div className="inpt-container">
        <TextField
          name="DiseaseName"
          label="Disease Name"
          value={diseaseData.DiseaseName}
          style={{ width: "20rem" }}
          onChange={handleChange}
        />
        <TextField
          name="Introduction"
          label="Introduction"
          value={diseaseData.Introduction}
          style={{ width: "20rem" }}
          onChange={handleChange}
        />
        <TextField
          name="Diagnosis"
          label="Diagnosis"
          value={diseaseData.Diagnosis}
          style={{ width: "20rem" }}
          onChange={handleChange}
        />
        <TextField
          name="References"
          value={diseaseData.References}
          label="References"
          style={{ width: "20rem" }}
          onChange={handleChange}
        />
        <TextField
          name="Causes"
          value={diseaseData.Causes}
          label="Causes"
          style={{ width: "20rem" }}
          onChange={handleChange}
        />
        <TextField
          name="Description"
          value={diseaseData.Description}
          label="Description"
          style={{ width: "20rem" }}
          onChange={handleChange}
          multiline
          maxRows={5}
        />
        <div className="syms-container">
          {symptoms.map((sym, i) => (
            <div key={i} className="sym-container">
              <TextField
                name="text"
                value={sym.text}
                label="symptoms"
                style={{ width: "20rem" }}
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
                  <MenuItem key={j}value={ele}>
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
      <div className="but-container">
        <Button variant="outlined" onClick={handleAddSymptom}>
          Add Symptom
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="outlined" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <div>{show && <JSONPretty id="json-pretty" data={show} />}</div>
    </div>
  );
}

export default AddDisease;
