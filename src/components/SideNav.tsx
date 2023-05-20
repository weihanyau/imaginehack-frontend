"use client";

import { styled } from "@mui/system";
import Link from "next/link";

const SideNavContainer = styled("div")({
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  height: "85vh",
  width: "5.5rem",
  marginBottom: "1.2rem",
  left: 0,
  bottom: 0,
});

const NavText = styled("p")({
  writingMode: "vertical-rl",
  transform: "scale(-1)",
  fontFamily: "Impact",
  fontSize: "1.3rem",
  fontWeight: 400,
});

export function SideNav() {
  return (
    <SideNavContainer>
      <Link href="/about">
        <NavText>About</NavText>
      </Link>
      <Link href="/create">
        <NavText>Create Interview</NavText>
      </Link>
      <Link href="/results">
        <NavText>Results</NavText>
      </Link>
    </SideNavContainer>
  );
}
