import { Check } from "@mui/icons-material";
import { TextField, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
// import JSONPretty from "react-json-pretty";
// import { useChatGPT } from "../../context/useChatGPT";
// import { ChatGPTAPI, getOpenAIAuth } from "chatgpt";

const keys = [
  "significance",
  "low_value_indicate",
  "high_value_indicate",
  "eat_excercise_to_increase",
  "eat_excercise_to_decrease",
  "lesser_known_facts",
  "gender_specific_facts",
  "risks_low_value",
  "risks_high_value",
  "fun_facts",
  "region_country_specifics",
  "value_with_age",
  "existing_disease_impact",
  "climate_impact",
  "genetic_conditions_impact",
];

function ChatGPT() {
  const [textInput, setTextInput] = useState("");
  const [reportName, setReportName] = useState("");
  const [jsonValue, setJsonValue] = useState("");
  const [parameters, setParameters] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState(false);
  // const { chatGPTData } = useChatGPT(message);

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };
  const handleReportChange = (e) => {
    setReportName(e.target.value);
  };

  const handleSubmit = () => {
    const returnObj = {};
    parameters.forEach((ele) => {
      returnObj[ele.jsonKey] = ele.answer;
    });
    setMessage({
      parameter_name: textInput,
      report_name: reportName,
      tags: "",
      ...returnObj,
    });

    // const openAIAuth = await getOpenAIAuth({
    //   email: "arbhasun1606@hotmail.com",
    //   password: "Arb@16062000",
    // });
    // const api = new ChatGPTAPI({ ...openAIAuth });
    // await api.initSession();
    // // send a message and wait for the response
    // const result = await api.sendMessage(
    //   "Write a python version of bubble sort."
    // );
    // // result.response is a markdown-formatted string
    // console.log(result.response);
  };

  // const showData = useMemo(() => {
  //   if (chatGPTData && chatGPTData.choices) {
  //     return chatGPTData.choices;
  //   }
  //   return false;
  // }, [chatGPTData]);

  const handleQuestionChange = (e, index) => {
    const { name, value } = e.target;
    setParameters((state) =>
      state.map((param, i) =>
        i === index ? { ...param, [name]: value } : param
      )
    );
  };

  const handleAddQuestion = () => {
    setParameters((state) => state.concat({ question: "", answer: "" }));
  };
  const handleRemoveQuestion = (index) => {
    setParameters((state) => state.filter((ele, i) => i !== index));
  };
  const handleToggle = () => {
    if (parameters.length < keys.length) {
      setParameters([
        {
          question: `What is the significance of ${textInput} in the Blood Test report? Explain to a person who is not a doctor or less technical`,
          answer: checkParameter(0),
          jsonKey: keys[0],
        },
        {
          question: `What does the low value of ${textInput} indicate. Explain to a non technical person`,
          answer: checkParameter(1),
          jsonKey: keys[1],
        },
        {
          question: `What does high value of ${textInput} indicates. Explain in not more than 100 words`,
          answer: checkParameter(2),
          jsonKey: keys[2],
        },
        {
          question: `What should some eat or exercise to increase ${textInput}`,
          answer: checkParameter(3),
          jsonKey: keys[3],
        },
        {
          question: `What should some eat or exercise to decrease ${textInput}`,
          answer: checkParameter(4),
          jsonKey: keys[4],
        },
        {
          question: `Are there any lesser known facts about ${textInput}`,
          answer: checkParameter(5),
          jsonKey: keys[5],
        },
        {
          question: `Are there any gender specific facts about ${textInput}`,
          answer: checkParameter(6),
          jsonKey: keys[6],
        },
        {
          question: `What are the risks of having low value of ${textInput}`,
          answer: checkParameter(7),
          jsonKey: keys[7],
        },

        {
          question: `What are the risks of having high value of ${textInput}`,
          answer: checkParameter(8),
          jsonKey: keys[8],
        },
        {
          question: `Are there any fun facts about ${textInput}`,
          answer: checkParameter(9),
          jsonKey: keys[9],
        },
        {
          question: `Are there any region or country specifics about ${textInput}`,
          answer: checkParameter(10),
          jsonKey: keys[10],
        },
        {
          question: `Does normal value of ${textInput} varies with Age?`,
          answer: checkParameter(11),
          jsonKey: keys[11],
        },
        {
          question: `How existing medical diseases impact ${textInput} levels`,
          answer: checkParameter(12),
          jsonKey: keys[12],
        },
        {
          question: `Does climate conditions impact ${textInput} levels`,
          answer: checkParameter(13),
          jsonKey: keys[13],
        },
        {
          question: `Does genetic conditions impact ${textInput} levels`,
          answer: checkParameter(14),
          jsonKey: keys[14],
        },
      ]);
    } else {
    }
  };
  const checkParameter = (index) => {
    if (parameters[index]) {
      if (parameters[index].answer) return parameters[index].answer;
    }
    return "";
  };
  const handleJsonChange = (e) => {
    const { value } = e.target;
    setJsonValue(value);
  };

  const handleJsonSubmit = () => {
    const value = JSON.parse(jsonValue);
    if (value.parameterName) {
      setTextInput(value.parameterName);
    }
    if (Array.isArray(value.question)) {
      setParameters(
        value.question.map((quest, i) => ({
          ...quest,
          jsonKey: keys[i],
        }))
      );
    }
  };

  return (
    <div>
      <div className="chatGPT">
        <TextField
          label="Parameter Name"
          style={{ width: "10rem" }}
          value={textInput}
          onChange={handleChange}
        />
        <TextField
          label="Report Name"
          style={{ width: "10rem" }}
          value={reportName}
          onChange={handleReportChange}
        />
        <IconButton onClick={handleToggle}>
          <Check />
        </IconButton>
        <Button color="primary" onClick={handleAddQuestion} variant="contained">
          Add Question
        </Button>
        <Button color="success" onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </div>
      <div className="chatGPT">
        <TextField
          onChange={handleJsonChange}
          value={jsonValue}
          style={{ width: "40rem" }}
          multiline
          maxRows={5}
          label="JSON value"
        />
        <IconButton onClick={handleJsonSubmit}>
          <Check />
        </IconButton>
      </div>
      <div className="questions">
        {parameters.map((ele, i) => (
          <div key={i} className="question">
            <TextField
              label={`Question ${i + 1}`}
              style={{ width: "15rem" }}
              name="question"
              multiline
              value={ele.question}
              onChange={(e) => handleQuestionChange(e, i)}
            />
            <TextField
              label={`Answer ${i + 1}`}
              style={{ width: "15rem" }}
              value={ele.answer}
              name="answer"
              multiline
              maxRows={5}
              onChange={(e) => handleQuestionChange(e, i)}
            />
            <Button
              color="error"
              onClick={() => handleRemoveQuestion(i)}
              variant="contained"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
      {message && <div className="json">{JSON.stringify(message)}</div>}
    </div>
  );
}

export default ChatGPT;
