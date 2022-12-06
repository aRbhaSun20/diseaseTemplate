import { Box, Button, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import "react-json-pretty/themes/monikai.css";
import JSONPretty from "react-json-pretty";
import DataComponent from "./DataComponent";

function AddDisease() {
  const [show, setShow] = useState(null);
  const [handleToggle, setHandleToggle] = useState({
    handleAdd: false,
    handleReset: false,
    handleSubmit: false,
    currentTab: "Introduction",
  });

  const handleReset = () => {
    setHandleToggle((state) => ({ ...state, handleReset: true }));
    setShow(null);
  };

  const handleAddSymptom = () => {
    setHandleToggle((state) => ({ ...state, handleAdd: true }));
  };

  const handleSubmit = () => {
    setHandleToggle((state) => ({ ...state, handleSubmit: true }));
    setShow({});
  };

  const handleTabChange = (e, value) => {
    setHandleToggle((state) => ({ ...state, currentTab: value }));
  };

  const handleDownload = () => {
    if (show !== null) {
      downloadFile({
        data: JSON.stringify(show),
        fileName: "data.json",
        fileType: "text/json",
      });
    }
  };

  return (
    <div className="container">
      <div className="but-container">
        <Button variant="outlined" onClick={handleAddSymptom}>
          Add Description
        </Button>
        {/* <Button
          variant="outlined"
          onClick={() => {
            setHandleToggle((state) => ({ ...state, handleList: true }));
          }}
        >
          Add List as text
        </Button> */}
        <Button
          variant="outlined"
          onClick={() => {
            setHandleToggle((state) => ({ ...state, handleAdd: 1 }));
          }}
        >
          Add List
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="outlined" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="outlined" onClick={handleDownload}>
          Download JSON
        </Button>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={handleToggle.currentTab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab value="Introduction" label="Introduction" {...a11yProps(0)} />
          <Tab
            value="Symptom Details"
            label="Symptom Details"
            {...a11yProps(1)}
          />
          <Tab value="Causes" label="Causes" {...a11yProps(2)} />
          <Tab value="Diagnosis" label="Diagnosis" {...a11yProps(3)} />
          <Tab value="References" label="References" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <div className="tabContainers">
        <TabPanel value={handleToggle.currentTab} index={0}>
          <DataComponent
            handleToggle={handleToggle}
            setHandleToggle={setHandleToggle}
            show={show}
            setShow={setShow}
            currentTab={handleToggle.currentTab}
            title="Introduction"
          />
        </TabPanel>
        <TabPanel value={handleToggle.currentTab} index={1}>
          <DataComponent
            handleToggle={handleToggle}
            setHandleToggle={setHandleToggle}
            show={show}
            setShow={setShow}
            currentTab={handleToggle.currentTab}
            title="Symptom Details"
          />
        </TabPanel>
        <TabPanel value={handleToggle.currentTab} index={2}>
          <DataComponent
            handleToggle={handleToggle}
            setHandleToggle={setHandleToggle}
            show={show}
            setShow={setShow}
            currentTab={handleToggle.currentTab}
            title="Causes"
          />
        </TabPanel>
        <TabPanel value={handleToggle.currentTab} index={1}>
          <DataComponent
            handleToggle={handleToggle}
            setHandleToggle={setHandleToggle}
            show={show}
            setShow={setShow}
            currentTab={handleToggle.currentTab}
            title="Diagnosis"
          />
        </TabPanel>
        <TabPanel value={handleToggle.currentTab} index={2}>
          <DataComponent
            handleToggle={handleToggle}
            setHandleToggle={setHandleToggle}
            show={show}
            setShow={setShow}
            currentTab={handleToggle.currentTab}
            title="References"
          />
        </TabPanel>
        <div className="show">
          {show && <JSONPretty id="json-pretty" data={show} />}
        </div>
      </div>
    </div>
  );
}

const downloadFile = ({ data, fileName, fileType }) => {
  // Create a blob with the data we want to download as a file
  const blob = new Blob([data], { type: fileType });
  // Create an anchor element and dispatch a click event on it
  // to trigger a download
  const a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};

export default AddDisease;

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      // hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="tabPanel"
      sx={{ p: 3 }}
    >
      {children}
    </Box>
  );
}
