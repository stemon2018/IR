import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import "../styles/Navbar.scss"

// Styled Navbar
const StyledAppBar = styled(AppBar)({
  backgroundColor: "#003366", // Blue Navbar
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
});

export default function Navbar() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <img
          src="/1.png"  // Make sure your logo is inside `public/`
          alt="Company Logo"
          style={{ height: 50, marginRight: 10 }}
        />
        <Typography variant="h6" style={{ flexGrow: 1, fontWeight: "bold", color: "white" }}>
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}