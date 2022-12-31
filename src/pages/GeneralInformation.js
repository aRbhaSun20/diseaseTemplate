import { Clear, Done } from "@mui/icons-material";
import {
  CircularProgress,
  IconButton,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function GeneralInformation({
  handleToggle,
  setHandleToggle,

  show,
  setShow,
  title,
  resultData,
  setResultData,
}) {
  const [introductionList, setListIntroduction] = useState({
    disease_name: "",
    disease_severity: "",
    image_url: "",
  });
  const [done, setDone] = useState(false);

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
    if (
      introductionList.disease_name !== "" ||
      introductionList.disease_severity !== ""
    ) {
      setListIntroduction({
        disease_name: "",
        disease_severity: "",
      });
    }
    setHandleToggle((state) => ({ ...state, handleReset: false }));
  };

  const handleSubmit = () => {
    setShow((state) => ({
      ...state,
      ...introductionList,
    }));

    setHandleToggle((state) => ({ ...state, handleSubmit: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListIntroduction((state) => ({ ...state, [name]: value }));
  };

  const handleChangeReset = (type) => {
    setListIntroduction((state) => ({ ...state, [type]: "" }));
  };

  const uploadFile = (e) => {
    console.log(e.target.files);
  };
  if (title !== handleToggle.currentTab) return;
  return (
    <div className="syms-container" style={{ flexDirection: "column" }}>
      <div className="list-desc">
        <TextField
          name="disease_name"
          value={introductionList.disease_name}
          label="Disease Name"
          // helperText="Please add symptom Ids comma separated"
          maxRows={8}
          style={{ width: "40rem" }}
          onChange={handleChange}
        />
        <IconButton
          onClick={() => {
            handleChangeReset("disease_name");
          }}
        >
          <Clear style={{ color: "red" }} />
        </IconButton>
      </div>
      <div className="list-desc">
        <TextField
          name="disease_severity"
          value={introductionList.disease_severity}
          label="Disease Severity"
          // helperText="Please add symptom Ids comma separated"
          maxRows={8}
          style={{ width: "40rem" }}
          onChange={handleChange}
        />
        <IconButton
          onClick={() => {
            handleChangeReset("disease_severity");
          }}
        >
          <Clear style={{ color: "red" }} />
        </IconButton>
      </div>
      <div className="list-desc">
        <div
          className="list-desc vertical"
          style={{ alignItems: "flex-start" }}
        >
          <Typography>Choose disease image</Typography>
          <Input
            type="file"
            name="disease image"
            // value={introductionList.disease_severity}
            label="Disease file"
            // style={{ width: "40rem" }}
            onChange={uploadFile}
          />
        </div>
        <IconButton
          onClick={() => {
            setDone((state) => !state);
          }}
        >
          {done ? <CircularProgress /> : <Done style={{ color: "green" }} />}
        </IconButton>
      </div>

      <div className="list-desc">
        <TextField
          name="data"
          value={resultData.data}
          label="Resulting JSON data"
          // helperText="Please add symptom Ids comma separated"
          maxRows={8}
          multiline
          style={{ width: "40rem" }}
          onChange={(e) => {
            const { value } = e.target;
            if (value) {
              setResultData((state) => ({ ...state, data: value }));
            }
          }}
        />
        <IconButton
          onClick={() => {
            if (resultData.submitData && resultData.data) {
              const formatData = JSON.parse(resultData.data);
              setListIntroduction({
                disease_name: formatData.disease_name,
                disease_severity: formatData.disease_severity,
              });
            }
            setResultData((state) => ({ ...state, submitData: true }));
          }}
        >
          <Done style={{ color: "green" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default GeneralInformation;
