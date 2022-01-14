import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { useEffect } from "react";
import generateMessage, { Message } from "./api/Api";
import CustomButton from "./components/Button/Button";
import Header from "./components/Header/Header";
import MessagesContainer from "./containers/MessagesContainer";
import { MessagesContext } from "./context/messages";
import CustomSnackbar from "./components/Snackbar/Snackbar";

const App: React.FC<{}> = () => {
  const [isStopped, setStopped] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const appContext = React.useContext(MessagesContext);

  const { clearAll, addMessages, updateCount } = appContext;

  useEffect(() => {
    if (!isStopped) {
      const cleanUp = generateMessage((message: Message) => {
        addMessages(message);
        updateCount(message.priority);
        if (message.priority === 0) {
          setShowSnackbar(true);
          setSnackMessage(message.message);
        }
      });

      return cleanUp;
    }
  }, [addMessages, isStopped, updateCount]);

  return (
    <main>
      <Header />
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <CustomSnackbar
          message={snackMessage}
          open={showSnackbar}
          onClose={() => setShowSnackbar(false)}
        />
        <div>
          <CustomButton
            label={`${isStopped ? "START" : "STOP"}`}
            onClick={() => setStopped(!isStopped)}
          />
          <CustomButton
            label="CLEAR"
            onClick={clearAll}
            data-testid="clear-btn"
          />
        </div>
        <MessagesContainer />
      </Box>
    </main>
  );
};

export default App;
