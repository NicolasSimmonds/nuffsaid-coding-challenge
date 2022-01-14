import React from "react";
import Box from "@material-ui/core/Box";

const Header: React.FC<{}> = () => (
  <Box
    component="section"
    borderBottom="1px solid"
    borderColor="black"
    paddingY="10px"
  >
    <Box sx={{ fontWeight: 600, fontSize: 35 }} component="span">
      nuffsaid.com Coding Challenge
    </Box>
  </Box>
);

export default Header;
