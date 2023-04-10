import React from "react";
import { Box, Typography } from "@mui/material";
import welcome from "../../Assests/HomePage/welcome.svg";

function HomePage() {
  return (
    <>
      <Box
        sx={{
          height: "70vh",
          border: "2px solid #000",
          display: "flex",
        }}
      >
        <Box sx={{ width: "40%", border: "2px solid #000" }}>
          <Box>
            <Typography></Typography>
          </Box>
        </Box>
        <Box sx={{ width: "60%", margin: "auto" }}>
          <Box
            sx={{
              margin: "auto",
            }}
          >
            <img src={welcome} alt="" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
