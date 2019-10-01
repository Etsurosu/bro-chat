import React from "react";

const Chat = ({ messages }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      borderRadius: 30,
      overflow: "hidden",
      width: "80vw",
      height: "80vh"
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        backgroundColor: "white",
        height: "100%",
        padding: 10,
        overflow: "scroll",
        overflowX: "hidden",
        marginRight: -17
      }}
    >
      {messages.reverse().map(message => (
        <div
          style={{
            margin: 1,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 12,
            backgroundColor: "#E8E8E8",
            wordWrap: "break-word",
            width: "auto"
          }}
        >
          {message.username} : {message.content}
        </div>
      ))}
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: 100,
        backgroundColor: "grey"
      }}
    >
      <input type="text" style={{ height: "80%", width: "80%" }}></input>
      <input
        type="button"
        style={{ height: "80%", width: "18%", padding: 0, margin: 0 }}
      />
    </div>
  </div>
);

export default Chat;
