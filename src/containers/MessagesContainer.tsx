import React from "react";
import Grid from "@material-ui/core/Grid";
import Messages from "../components/Messages/Messages";
import Box from "@material-ui/core/Box";
import { MessagesContext } from "../context/messages";
import { Message } from "../api/Api";
import { ErrorCount, ErrorType } from "./MessagesContainer.styles";
import { countOptions } from "../types";

const MessagesContainer = () => {
  const appContext = React.useContext(MessagesContext);

  const { clearMessage, state, count } = appContext;

  const getMessagesByPriority = (priority: countOptions): Message[] => {
    return state.filter((msg) => msg.priority === priority);
  };

  return (
    <Box sx={{ width: "80%" }}>
      <Grid container>
        <Grid item xs={4}>
          <Grid item xs={12}>
            <ErrorType>Error Type 1</ErrorType>
          </Grid>
          <Grid item xs={12}>
            <ErrorCount>Count {count[0]}</ErrorCount>
          </Grid>
          {getMessagesByPriority(0)
            .reverse()
            .map((msg) => (
              <Messages
                key={msg.message}
                text={msg.message}
                priority={msg.priority}
                clear={clearMessage}
              />
            ))}
        </Grid>
        <Grid item xs={4}>
          <Grid item xs={12}>
            <ErrorType>Error Type 2</ErrorType>
          </Grid>
          <Grid item xs={12}>
            <ErrorCount>Count {count[1]}</ErrorCount>
          </Grid>
          {getMessagesByPriority(1)
            .reverse()
            .map((msg) => (
              <Messages
                key={msg.message}
                text={msg.message}
                priority={msg.priority}
                clear={clearMessage}
              />
            ))}
        </Grid>
        <Grid item xs={4}>
          <Grid item xs={12}>
            <ErrorType>Error Type 3</ErrorType>
          </Grid>
          <Grid item xs={12}>
            <ErrorCount>Count {count[2]}</ErrorCount>
          </Grid>
          {getMessagesByPriority(2)
            .reverse()
            .map((msg) => (
              <Messages
                key={msg.message}
                text={msg.message}
                priority={msg.priority}
                clear={clearMessage}
              />
            ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MessagesContainer;
