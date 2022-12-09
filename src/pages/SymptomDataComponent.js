import { Clear } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function SymptomDataComponent({
  handleToggle,
  setHandleToggle,

  show,
  setShow,
  title,
}) {
  const [introductionList, setListIntroduction] = useState("");

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

  const handleReset = () => {
    if (introductionList !== "") {
      setListIntroduction("");
    }
    setHandleToggle((state) => ({ ...state, handleReset: false }));
  };

  const handleSubmit = () => {
    const symptomIDS = introductionList.split(",").filter((ele) => ele);
    setShow((state) => ({
      ...state,
      [title]: verifyArray(symptomIDS),
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
          label="Symptom ids"
          multiline
          // helperText="Please add symptom Ids comma separated"
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
      </div>
    </div>
  );
}

export default SymptomDataComponent;

const verifyArray = (data) => (Array.isArray(data) ? data : []);
