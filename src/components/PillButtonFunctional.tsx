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
  padding?: string | number;
  width?: string | number;
  style?: React.CSSProperties;
  backgroundColor?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
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
  cursor: "pointer",
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

export function PillButtonFunctional({
  color = "white",
  darkModeColor,
  text,
  padding = "0.613rem 2rem",
  width = "min-content",
  style = {},
  backgroundColor = "transparent",
  onClick = (e) => {},
}: PillButtonProps) {
  const [hover, setHover] = useState<boolean>(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ButtonWrapper style={{ width: width, ...style }}>
      <ButtonContainer
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={(e) => {
          onClick(e);
        }}
        style={{
          color:
            !prefersDarkMode && darkModeColor !== undefined
              ? darkModeColor
              : color,
          padding: padding,
          backgroundColor: backgroundColor,
        }}
      >
        <ButtonArrow
          style={hover ? { opacity: 1, transform: "translateX(-0.25rem)" } : {}}
        />
        <ButtonText style={hover ? { transform: "translateX(0.25rem)" } : {}}>
          {text}
        </ButtonText>
      </ButtonContainer>
    </ButtonWrapper>
  );
}
