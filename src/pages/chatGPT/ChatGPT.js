import { TextField, Button } from "@mui/material";
import React, { useMemo, useState } from "react";
import JSONPretty from "react-json-pretty";
import { useChatGPT } from "../../context/useChatGPT";
// import { ChatGPTAPI, getOpenAIAuth } from "chatgpt";

function ChatGPT() {
  const [textInput, setTextInput] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  const { chatGPTData } = useChatGPT(message);

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = async () => {
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

  const showData = useMemo(() => {
    if (chatGPTData && chatGPTData.choices) {
      return chatGPTData.choices;
    }
    return false;
  }, [chatGPTData]);

  return (
    <div>
      <div className="chatGPT">
        <TextField
          label="search text"
          style={{ width: "40rem" }}
          multiline
          minRows={5}
          value={textInput}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </div>
      {showData && <JSONPretty id="json-pretty" data={showData} />}
    </div>
  );
}

export default ChatGPT;
