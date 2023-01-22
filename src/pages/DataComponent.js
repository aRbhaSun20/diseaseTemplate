import { Check, Clear, Delete } from "@mui/icons-material";
import { IconButton, ListItemText, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const BOLD_OPTIONS = ["normal", "bold", "bolder"];

function DataComponent({
  handleToggle,
  setHandleToggle,
  resultData,
  show,
  setShow,
  title,
}) {
  // introduction
  const [introductionDesc, setIntroductionDesc] = useState([]);
  const [introductionList, setListIntroduction] = useState("");

  const handleDeleteSymptom = (index) => {
    setIntroductionDesc((state) => state.filter((ele, i) => i !== index));
  };

  const handleSymChange = (e, index) => {
    const { name, value } = e.target;
    setIntroductionDesc((state) =>
      state.map((ele, i) => (i === index ? { ...ele, [name]: value } : ele))
    );
  };

  const handleListInputDescription = () => {
    setIntroductionDesc((state) => {
      const inputList = introductionList
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
    setListIntroduction("");
  };

  useEffect(() => {
    if (handleToggle.currentTab === title && handleToggle.handleAdd) {
      handleAddSymptom();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleToggle.handleAdd]);

  useEffect(() => {
    if (handleToggle.currentTab === title && handleToggle.handleReset) {
      handleReset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleToggle.handleReset]);

  useEffect(() => {
    if (typeof show === "object" && handleToggle.handleSubmit) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleToggle.handleSubmit]);

  useEffect(() => {
    if (resultData.submitData && resultData.data) {
      const formatData = JSON.parse(resultData.data);
      const requiredData = formatData[title];
      if (requiredData && typeof requiredData === "object") {
        const resultingData = Object.entries(requiredData).map(
          ([_, value]) => value
        );
        setIntroductionDesc(resultingData);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultData]);

  const handleReset = () => {
    if (introductionDesc.length !== 0) {
      setIntroductionDesc([]);
    }
    if (introductionList !== "") {
      setListIntroduction("");
    }
    setHandleToggle((state) => ({ ...state, handleReset: false }));
  };

  const handleAddSymptom = (type = "description") => {
    setIntroductionDesc((state) =>
      state.concat({
        text: "",
        fontWeight: "normal",
        fontSize: 16,
        type: `${handleToggle.handleAdd === 1 ? "list" : type} ${state.length}`,
      })
    );
    setHandleToggle((state) => ({ ...state, handleAdd: false }));
  };

  const handleSubmit = () => {
    const returnObj = {};
    introductionDesc.forEach((ele, i) => {
      returnObj[ele.type] = ele;
    });
    setShow((state) => ({
      ...state,
      [title]: returnObj,
    }));

    setHandleToggle((state) => ({ ...state, handleSubmit: false }));
  };

  if (title !== handleToggle.currentTab) return;
  return (
    <div className="syms-container">
      <div className="list-desc">
        <TextField
          name="text"
          value={introductionList}
          label="List Collection description"
          multiline
          maxRows={8}
          style={{ width: "40rem" }}
          onChange={(e) => {
            setListIntroduction(e.target.value);
          }}
        />
        <IconButton
          onClick={() => {
            setListIntroduction("");
          }}
        >
          <Clear style={{ color: "red" }} />
        </IconButton>
        <IconButton onClick={handleListInputDescription}>
          <Check style={{ color: "green" }} />
        </IconButton>
      </div>

      {introductionDesc.map((sym, i) => (
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
  );
}

export default DataComponent;
