"use client";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { PillButtonFunctional } from "@/components/PillButtonFunctional";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Container = styled("div")({
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
});

const GreyCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "75vw",
  height: "80vh",
  backgroundColor: "#020408",
  padding: "2rem 4rem",
  boxShadow: "0px 4px 250px 24px #FFFFFF33",
  overflow: "auto",
});

const TextBox = styled(TextField)({
  backgroundColor: "#0D1116",
  border: "3px solid #383838",
  borderRadius: "12px",
  width: "100%",

  input: {
    color: "#737578",
  },

  "input::placeholder": {
    color: "white",
  },

  textarea: {
    color: "#737578",
  },

  "textarea::placeholder": {
    color: "white",
  },
});

const CardTitle = styled("h3")({});
const CardSubTitle = styled("h4")({
  color: "#656565",
});

export default function Start({ params }: { params: { id: string } }) {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();

  const interviewId = params.id;

  return (
    <Container>
      <GreyCard>
        <CardTitle>Apply for Interview</CardTitle>
        <TextBox
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <TextBox
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <TextBox
          placeholder="Phone No"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <Divider
          variant="middle"
          sx={{ borderColor: "#383838", borderWidth: "2px" }}
        />
        <PillButtonFunctional
          text="Submit"
          color="#00A7DC"
          backgroundColor="#003E61"
          onClick={async () => {
            const data = {
              name: name,
              interviewId: interviewId,
            };
            const response = await fetch("http://localhost:3000/apply", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const result = await response.json();
            if (result.interviewId === "64690fef7e09492a14acfe14") {
              router.push(`${pathname}/${result._id}`);
            }
          }}
        />
      </GreyCard>
    </Container>
  );
}
