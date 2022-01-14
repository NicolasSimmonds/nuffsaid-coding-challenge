import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

interface ISnackbar {
  message: string;
  onClose: () => void;
  open: boolean;
}
const CustomSnackbar: React.FC<ISnackbar> = ({ message, onClose, open }) => (
  <Snackbar
    open={open}
    autoHideDuration={2000}
    onClose={onClose}
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
  >
    <Alert onClose={onClose} severity="error">
      {message}
    </Alert>
  </Snackbar>
);

export default CustomSnackbar;
