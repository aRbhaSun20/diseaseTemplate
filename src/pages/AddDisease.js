import { Check, Clear, Delete } from "@mui/icons-material";
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
  const [symptomsDesc, setSymptomsDesc] = useState([]);
  const [listInput, setListInput] = useState(null);

  const handleReset = () => {
    if (symptomsDesc.length !== 0) {
      setSymptomsDesc([]);
    }
    if (show !== "") {
      setShow("");
    }
    if (listInput !== null) {
      setListInput(null);
    }
  };

  const handleAddSymptom = (type) => {
    setSymptomsDesc((state) =>
      state.concat({
        text: "",
        fontWeight: "normal",
        fontSize: 16,
        type: `${type} ${state.length}`,
      })
    );
  };

  const handleDeleteSymptom = (index) => {
    setSymptomsDesc((state) => state.filter((ele, i) => i !== index));
  };

  const handleSymChange = (e, index) => {
    const { name, value } = e.target;
    setSymptomsDesc((state) =>
      state.map((ele, i) => (i === index ? { ...ele, [name]: value } : ele))
    );
  };

  const handleSubmit = () => {
    const returnObj = {};
    symptomsDesc.forEach((ele, i) => {
      returnObj[ele.type] = ele;
    });
    setShow(JSON.stringify(returnObj));
  };

  const handleListInputDescription = () => {
    setSymptomsDesc((state) => {
      const inputList = listInput
        .split("#")
        .filter((ele) => ele)
        .map((ele, i) => ({
          text: ele.split("\n")[0],
          fontWeight: "normal",
          fontSize: 16,
          type: `list ${state.length + i}`,
        }));
      return state.concat(inputList);
    });
    setListInput(null);
  };

  return (
    <div className="container">
      <div className="but-container">
        <Button
          variant="outlined"
          onClick={() => handleAddSymptom("description")}
        >
          Add Description
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            setListInput("");
          }}
        >
          Add List as text
        </Button>
        <Button variant="outlined" onClick={() => handleAddSymptom("list")}>
          Add List
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
          {listInput !== null && (
            <div className="list-desc">
              <TextField
                name="text"
                value={listInput}
                label="List Collection description"
                multiline
                maxRows={8}
                style={{ width: "40rem" }}
                onChange={(e) => {
                  setListInput(e.target.value);
                }}
              />
              <IconButton
                onClick={() => {
                  setListInput(null);
                }}
              >
                <Clear style={{ color: "red" }} />
              </IconButton>
              <IconButton onClick={handleListInputDescription}>
                <Check style={{ color: "green" }} />
              </IconButton>
            </div>
          )}
          {symptomsDesc.map((sym, i) => (
            <div key={i} className="sym-container">
              <TextField
                name="text"
                value={sym.text}
                label={
                  sym.type.includes("list") ? "List-description" : "Description"
                }
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
