"use client";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { PillButtonFunctional } from "@/components/PillButtonFunctional";
import { useRef } from "react";
import { Video } from "@/components/Video";

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

export function Middleman({
  question,
  intervieweeId,
}: {
  question: string;
  intervieweeId: string;
}) {
  const videoBlobRef = useRef<Blob | string>("");

  return (
    <Container>
      <GreyCard>
        <CardTitle>Question 1</CardTitle>
        <TextBox
          placeholder="Question"
          value={question}
          InputProps={{ readOnly: true }}
        />
        <Divider
          variant="middle"
          sx={{ borderColor: "#383838", borderWidth: "2px" }}
        />
        <Video videoBlobRef={videoBlobRef} />
        <PillButtonFunctional
          text="Submit"
          color="#00A7DC"
          backgroundColor="#003E61"
          onClick={async () => {
            const formData = new FormData();
            formData.append("file", videoBlobRef.current);
            formData.append("intervieweeId", intervieweeId);

            fetch("http://localhost:3000/upload", {
              method: "POST",
              body: formData,
            })
              .catch((e) => {
                console.log(e);
              })
              .then((response) => response?.json())
              .then((result) => {
                console.log(result);
              });
          }}
        />
      </GreyCard>
    </Container>
  );
}
