import React, { useState } from "react";
import { OctoCat } from "./assets/octocat.jsx";

export const RecordVoice = () => {
  const [color, setColor] = useState("magenta");
  const [text, setText] = useState("");
  const initText = () => setText("recorded text");
  const [isRecording, setRecording] = useState(false);
  const record = () => {
    console.log("start");
    initText();
    setRecording(true);
  };
  const stop = () => {
    console.log("stopped");
    setRecording(false);
  };
  return (
    <>
      <button
        style={{
          margin: "4em",
          border: "1px solid white",
          backgroundColor: isRecording ? color : "white",
          minWidth: "4em",
          minHeight: "4em",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => (!isRecording ? record : stop)()}
        value="record"
      >
        <OctoCat color={!isRecording ? "purple" : "red"} />
        {/* {!isRecording ? "Record" : "Stop"} */}
      </button>
      <textarea
        style={{ minHeight: "8em", borderRadius: "3em", padding: "1em" }}
        value={text}
      />
      <div style={{ position: "relative", right: '-110px' }}>🤖</div>
    </>
  );
};
