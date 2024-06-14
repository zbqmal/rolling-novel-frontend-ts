"use client";

import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { accountIconStyle } from "./styles";

export const TopMenuBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? "account-menu" : undefined;

  // Handlers
  const handleAccountClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: string) => {
    console.log(`${option} clicked`);
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rolling Novel
          </Typography>
          <IconButton onClick={handleAccountClick}>
            <AccountCircleIcon sx={accountIconStyle} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick("Test")}>Test</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("Sign In")}>
          Sign In
        </MenuItem>
      </Menu>
    </Box>
  );
};
