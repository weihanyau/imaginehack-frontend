"use client";

import { styled } from "@mui/system";
import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import logo from "./assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { PillButton } from "../PillButton";

export function NavBar() {
  const NavBarWrapper = styled(AppBar)({
    backgroundColor: "transparent",
    boxShadow: "none",
    pointerEvents: "none",
    zIndex: 999999,
  });
  const NavBarToolBar = styled(Toolbar)({
    display: "flex",
    alignItems: "center",
    paddingTop: "1.125vw",
    paddingLeft: "2.77777778vw",
    paddingRight: "2.77777778vw",
    gap: "1.5vw",
    justifyContent: "space-between",

    "@media (min-width: 600px)": {
      paddingLeft: "1.125vw",
      paddingRight: "2.777777778vw",
    },
  });

  const ImageWrapper = styled("div")({
    display: "flex",
    marginBottom: "-0.5rem",
  });

  const Logo = styled(Image)({
    marginTop: -5,
    pointerEvents: "all",
    cursor: "pointer",
    width: "clamp(13rem, 18vw, 25rem)",
  });

  const LogoText = styled("h1")({
    fontFamily: "Impact",
    fontWeight: 400,
  });

  const LeftWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
  });
  const RightWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
  });

  return (
    <NavBarWrapper position="fixed">
      <NavBarToolBar>
        <LeftWrapper>
          <ImageWrapper>
            <Link href="/">
              <Logo
                src={logo}
                alt="One Shot Logo"
                width={100}
                height={200}
                style={{
                  aspectRatio: "1/1",
                  width: "5rem",
                  height: "auto",
                }}
              />
            </Link>
          </ImageWrapper>
          <LogoText>OneShot</LogoText>
        </LeftWrapper>
        <RightWrapper>
          <PillButton text="Settings" />
        </RightWrapper>
      </NavBarToolBar>
    </NavBarWrapper>
  );
}
