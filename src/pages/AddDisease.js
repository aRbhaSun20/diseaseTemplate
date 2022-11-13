import { Delete } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import "react-json-pretty/themes/monikai.css";
import JSONPretty from "react-json-pretty";

const INITIAL_DATA = {
  diseaseName: "",
  introduction: "",
  diagnosis: "",
  ref: "",
  cause: "",
};
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
    setSymptoms((state) => state.concat(""));
  };

  const handleDeleteSymptom = (index) => {
    setSymptoms((state) => state.filter((ele, i) => i !== index));
  };

  const handleSymChange = (e, index) => {
    const { value } = e.target;
    setSymptoms((state) => state.map((ele, i) => (i === index ? value : ele)));
  };

  const handleSubmit = () => {
    setShow(JSON.stringify({ ...diseaseData, symptoms }));
  };

  return (
    <div className="container">
      <div className="inpt-container">
        <TextField
          name="diseaseName"
          label="Disease Name"
          value={diseaseData.e}
          style={{ width: "20rem" }}
          onChange={handleChange}
        />
        <TextField
          name="introduction"
          label="Introduction"
          value={diseaseData.introduction}
          style={{ width: "20rem" }}
          onChange={handleChange}
        />
        <TextField
          name="diagnosis"
          label="Diagnosis"
          value={diseaseData.diagnosis}
          style={{ width: "20rem" }}
          onChange={handleChange}
        />
        <TextField
          name="ref"
          value={diseaseData.ref}
          label="References"
          style={{ width: "20rem" }}
          onChange={handleChange}
        />
        <TextField
          name="cause"
          value={diseaseData.cause}
          label="Causes"
          style={{ width: "20rem" }}
          onChange={handleChange}
        />
        <div className="syms-container">
          {symptoms.map((sym, i) => (
            <div key={i} className="sym-container">
              <TextField
                name={`Symptoms ${i + 1}`}
                value={sym}
                label="symptoms"
                style={{ width: "20rem" }}
                onChange={(e) => handleSymChange(e, i)}
              />
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
