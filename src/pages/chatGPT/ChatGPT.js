import { TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
// import JSONPretty from "react-json-pretty";
// import { useChatGPT } from "../../context/useChatGPT";
// import { ChatGPTAPI, getOpenAIAuth } from "chatgpt";

function ChatGPT() {
  const [textInput, setTextInput] = useState("");
  const [parameters, setParameters] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState(false);
  // const { chatGPTData } = useChatGPT(message);

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  useEffect(() => {
    if (parameters.length === 0) {
      const data = localStorage.getItem("chatGPTQuery");
      if (data) {
        const jsonPrase = JSON.parse(data);
        setParameters(jsonPrase.map((ele) => ({ question: ele, answer: "" })));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    if (!message) {
      setMessage({
        parameterName: textInput,
        question: parameters,
      });
    } else {
      setMessage(false);
      localStorage.setItem(
        "chatGPTQuery",
        JSON.stringify(parameters.map((ele) => ele.question))
      );
      setParameters((state) => state.map((ele) => ({ ...ele, answer: "" })));
    }

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
  return (
    <div>
      <div className="chatGPT">
        <TextField
          label="Parameter Name"
          style={{ width: "20rem" }}
          value={textInput}
          onChange={handleChange}
        />
        <Button color="primary" onClick={handleAddQuestion} variant="contained">
          Add Question
        </Button>
        <Button color="success" onClick={handleSubmit} variant="contained">
          Submit
        </Button>
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
