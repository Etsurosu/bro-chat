import React from "react";
import Chat from "./components/chat";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Chat
        messages={[
          { username: "PA", content: "yoyoyooyoyyo" },
          { username: "Giliane", content: "yaayayayayayayaya" },
          { username: "Gus", content: "yiyiyiyiyiyiyyiyi" },
          {
            username: "Micky",
            content:
              "yuyuyuyuyuyyuyuyuyualksjdlaskdjalsjdlakjsdlaksjdlakjsdlasjdlaksjdlaksjdlakjsdlakjsdlkajsdlkajsdlkajsldkjaslkdjalskjdlaksjdlaksjdlaksjdlaksjdlaksjd az,mnsdlskdjlsdkfjsldkfjsldkfjsldkfj"
          }
        ]}
      ></Chat>
    </div>
  );
};

export default App;
