import React from "react";
import Button from "@material-ui/core/Button";
import { Message } from "./Messages.styles";
import { countOptions } from "../../types";

export interface IMessages {
  text: string;
  clear: (text: string, priority: countOptions) => void;
  priority: countOptions;
}
const Messages: React.FC<IMessages> = ({
  text,
  clear,
  priority,
}): React.ReactElement => {
  const colorsArray: string[] = ["#F56236", "#FCE788", "#88FCA3"];

  const color = colorsArray[priority];
  return (
    <Message color={color}>
      <span>{text}</span>
      <Button
        size="small"
        onClick={() => clear(text, priority)}
        data-testid="message-button"
      >
        Clear
      </Button>
    </Message>
  );
};

export default Messages;
