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
import { ACCOUNT_MENU_OPTIONS } from "../../../constants";
import { signIn, signUp } from "@/api";

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

  const handleMenuItemClick = async (option: string) => {
    handleClose();

    switch (option) {
      case ACCOUNT_MENU_OPTIONS.SIGN_UP:
        try {
          const result = await signUp("username_123", "password_123");
          console.log("result: ", result);
        } catch (error) {
          console.error("Error signing up:", error);
        }
        break;
      case ACCOUNT_MENU_OPTIONS.SIGN_IN:
        try {
          const result = await signIn();
          console.log("result: ", result);
        } catch (error) {
          console.error("Error signing in:", error);
        }
        break;
      default:
        console.error(`Option ${option} does not exist`);
        break;
    }
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
        <MenuItem
          onClick={() => handleMenuItemClick(ACCOUNT_MENU_OPTIONS.SIGN_UP)}
        >
          {ACCOUNT_MENU_OPTIONS.SIGN_UP}
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick(ACCOUNT_MENU_OPTIONS.SIGN_IN)}
        >
          {ACCOUNT_MENU_OPTIONS.SIGN_IN}
        </MenuItem>
      </Menu>
    </Box>
  );
};
