import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

export const Message = styled(Paper)<{ color: string }>`
  background-color: ${(p): string => p.color};
  height: 60px;
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  color: black;

  ${"button"} {
    align-self: flex-end;
    text-transform: none;
    font-weight: bold;
  }
`;
