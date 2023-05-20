"use client";

import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { Property } from "csstype";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

type PillButtonProps = {
  color?: Property.Color | string;
  darkModeColor?: Property.Color | string;
  text?: string;
  href?: string;
  padding?: string | number;
  width?: string | number;
  style?: React.CSSProperties;
};

const ButtonWrapper = styled("div")({});

const ButtonContainer = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  whiteSpace: "nowrap",
  border: "2px solid",
  borderRadius: "2rem",
  pointerEvents: "all",
});

const ButtonText = styled("p")({
  transition: "all 0.25s ease-in-out",
  transform: "translateX(-0.5rem)",
});

const ButtonArrow = styled(AiOutlineArrowRight)({
  marginBottom: "0.2rem",
  opacity: 0,
  transition: "all 0.25s ease-in-out",
  marginTop: "0.2rem",
  transform: "translateX(-1rem)",
});

export function PillButton({
  color = "white",
  darkModeColor,
  text,
  href,
  padding = "0.613rem 2rem",
  width = "min-content",
  style = {},
}: PillButtonProps) {
  const [hover, setHover] = useState<boolean>(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ButtonWrapper style={{ width: width, ...style }}>
      <Link href={href !== undefined ? href : "https://www.google.com"}>
        <ButtonContainer
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          style={{
            color:
              !prefersDarkMode && darkModeColor !== undefined
                ? darkModeColor
                : color,
            padding: padding,
          }}
        >
          <ButtonArrow
            style={
              hover ? { opacity: 1, transform: "translateX(-0.25rem)" } : {}
            }
          />
          <ButtonText style={hover ? { transform: "translateX(0.25rem)" } : {}}>
            {text}
          </ButtonText>
        </ButtonContainer>
      </Link>
    </ButtonWrapper>
  );
}
