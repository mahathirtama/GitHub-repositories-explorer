import React from "react";
import Button from "@mui/material/Button";

export const ButtonComponent = () => {
  return (
    <Button variant="contained" disableElevation type="submit" sx={{ height: '60px', width: '100%' }}>
      Search
    </Button>
  );
};
