import { Done, Download } from "@mui/icons-material";
import {
  CircularProgress,
  IconButton,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const diseases = [
  "Abdominal Pain",
  "Alzheimers Disease",
  "Anaemia",
  "Anxiety",
  "Appendicitis",
  "Arthritis",
  "Asthma",
  "Autism",
  "Dengue Fever",
  "Diabetes",
  "Digit-Sucking or Thumb or Finger Sucking",
  "Diphtheria",
  "Dyslexia",
  "Eclampsia",
  "Eczema",
  "Endometriosis",
  "Epidemic dropsy",
  "Epilepsy Generalized seizures",
  "Epilepsy Partial seizures",
  "Food Poisoning",
  "Gaming disorder",
  "Gangrene",
  "Gastro Esophageal Reflux Disease or GERD",
  "Goitre",
  "Gum disease",
  "Haemophilia",
  "Hand Foot and Mouth Disease",
  "Helminthiasis",
  "Hemangioma",
  "Hepatitis",
  "Hypertension or High Blood pressure",
  "Hypervitaminosis A",
  "Inflammatory Bowel Disease",
  "Insomnia",
  "Iron Deficiency Anemia",
  "Japanese Encephalitis",
  "Jaundice",
  "Kala azar Leishmaniasis",
  "Kala-azar Leishmaniasis",
  "Keratosis Pilaris",
  "Lead poisoning",
  "Leprosy",
  "Leptospirosis",
  "Leukemia",
  "Lichen Planus",
  "Lymphoedema",
  "Malaria",
  "Mastitis",
  "Measles or Khasra",
  "Meningitis",
  "Migraine",
  "Mouth Breathing",
  "Mumps",
  "Myocardial Infarction Heart Attack",
  "Narcolepsy",
  "Nasal Polyps",
  "Neuralgia",
  "Obesity",
  "Obsessive Compulsive Disorder",
  "Osteoarthritis",
  "Osteomyelitis",
  "Osteoporosis",
  "Parkinsons Disease",
  "Pneumonia",
  "Premenstrual syndrome",
  "Pseudostrabismus",
  "Psoriasis",
  "Quinsy",
  "Rabies",
  "Ramsay Hunt Syndrome",
  "Rubella",
  "Scabies",
  "Schizophrenia",
  "Silicosis",
  "Spinal cord Injury",
  "Stroke",
  "Tetanus",
  "Tooth Sensitivity",
  "Tuberculosis",
  "Typhoid",
  "Urticaria",
  "Varicose Veins",
  "Vitamin B12 Deficiency",
  "lactose intolerance",
];

function UploadDetails({ handleToggle, title }) {
  const [introductionList, setListIntroduction] = useState({});
  const [done, setDone] = useState(false);
  const [uploadURL, setUploadURL] = useState("");
  const [uploadFiles, setUploadFiles] = useState(null);
  const [showData, setShowData] = useState(false);

  const uploadFile = (e) => {
    setUploadFiles(e.target.files[0]);
  };

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    setListIntroduction((state) => ({
      ...state,
      [name]: {
        ...state[name],
        [type]: value,
      },
    }));
  };

  const handleSubmitImages = () => {
    console.log(uploadFiles);
    const { name, type } = uploadFiles;
    console.log(name, type);
    var data = new FormData();
    data.append("user_id", "Arbhasun");
    data.append("token", "arb123");
    data.append("content_type", type);
    data.append("document_name", getName(name));
    data.append("file", uploadFiles);

    // console.log(uploadFile)
    setDone(true);

    var config = {
      method: "post",
      url: "https://cb-health-f5cl2wkbpq-wl.a.run.app/ccannotations/fileupload/",
      // headers: {
      //   ...data.getHeaders(),
      // },
      data: data,
    };
    axios(config)
      .then((response) => {
        setDone(false);
        console.log(response.data);
        setUploadURL(response.data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (title !== handleToggle.currentTab) return;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
          onClick={handleSubmitImages}
          style={{ height: "3rem", width: "3rem" }}
        >
          {done ? <CircularProgress /> : <Done style={{ color: "green" }} />}
        </IconButton>
        <IconButton
          onClick={() => {
            setShowData((state) => !state);
          }}
          style={{ height: "3rem", width: "3rem" }}
        >
          <Download />
        </IconButton>
      </div>
      <div className="syms-container">
        {diseases.map((ele, i) => (
          <div key={i} className="uploadData">
            <Typography>{ele}</Typography>
            <TextField
              value={introductionList[ele]?.nhp}
              name={ele}
              label="nhp url"
              onChange={(e) => handleChange(e, "nhp")}
            />
            <TextField
              value={introductionList[ele]?.upload}
              name={ele}
              label="upload url"
              onChange={(e) => handleChange(e, "upload")}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {uploadURL && (
          <React.Fragment>
            <Typography>{uploadURL}</Typography>
            <img
              style={{ width: "5rem", height: "5rem" }}
              src={uploadURL}
              alt="upload-image1"
            />
          </React.Fragment>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {showData && (
          <Typography>{JSON.stringify(introductionList)}</Typography>
        )}
      </div>
    </div>
  );
}

export default UploadDetails;

// const verifyArray = (data) => (Array.isArray(data) ? data : []);
const getName = (name) => name.split(".")[0];
