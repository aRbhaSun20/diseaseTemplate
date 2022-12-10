import { Box, Button, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import "react-json-pretty/themes/monikai.css";
import JSONPretty from "react-json-pretty";
import DataComponent from "./DataComponent";
import SymptomDataComponent from "./SymptomDataComponent";
import GeneralInformation from "./GeneralInformation";

function AddDisease() {
  const [show, setShow] = useState(null);
  const [handleToggle, setHandleToggle] = useState({
    handleAdd: false,
    handleReset: false,
    handleSubmit: false,
    currentTab: "generalInformation",
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
          <Tab
            value="generalInformation"
            label="General Informations"
            {...a11yProps(6)}
          />
          <Tab value="introduction" label="Introduction" {...a11yProps(0)} />
          <Tab
            value="symptom_details"
            label="Symptom Details"
            {...a11yProps(1)}
          />
          <Tab value="causes" label="Causes" {...a11yProps(2)} />
          <Tab value="diagnosis" label="Diagnosis" {...a11yProps(3)} />
          <Tab value="references" label="References" {...a11yProps(4)} />
          <Tab value="symptoms" label="Symptoms" {...a11yProps(5)} />
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
            title="introduction"
          />
        </TabPanel>
        <TabPanel value={handleToggle.currentTab} index={1}>
          <DataComponent
            handleToggle={handleToggle}
            setHandleToggle={setHandleToggle}
            show={show}
            setShow={setShow}
            currentTab={handleToggle.currentTab}
            title="symptom_details"
          />
        </TabPanel>
        <TabPanel value={handleToggle.currentTab} index={2}>
          <DataComponent
            handleToggle={handleToggle}
            setHandleToggle={setHandleToggle}
            show={show}
            setShow={setShow}
            currentTab={handleToggle.currentTab}
            title="causes"
          />
        </TabPanel>
        <TabPanel value={handleToggle.currentTab} index={3}>
          <DataComponent
            handleToggle={handleToggle}
            setHandleToggle={setHandleToggle}
            show={show}
            setShow={setShow}
            currentTab={handleToggle.currentTab}
            title="diagnosis"
          />
        </TabPanel>
        <TabPanel value={handleToggle.currentTab} index={4}>
          <DataComponent
            handleToggle={handleToggle}
            setHandleToggle={setHandleToggle}
            show={show}
            setShow={setShow}
            currentTab={handleToggle.currentTab}
            title="references"
          />
        </TabPanel>
        <TabPanel value={handleToggle.currentTab} index={5}>
          <SymptomDataComponent
            handleToggle={handleToggle}
            setHandleToggle={setHandleToggle}
            show={show}
            setShow={setShow}
            currentTab={handleToggle.currentTab}
            title="symptoms"
          />
        </TabPanel>
        <TabPanel value={handleToggle.currentTab} index={6}>
          <GeneralInformation
            handleToggle={handleToggle}
            setHandleToggle={setHandleToggle}
            show={show}
            setShow={setShow}
            currentTab={handleToggle.currentTab}
            title="generalInformation"
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
    >
      {children}
    </Box>
  );
}
