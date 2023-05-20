"use client";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { PillButtonFunctional } from "@/components/PillButtonFunctional";

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

export default function Create() {
  return (
    <Container>
      <GreyCard>
        <CardTitle>Create Interview</CardTitle>
        <TextBox placeholder="Interview Name" />
        <TextBox placeholder="Description" multiline rows={5} />
        <Divider
          variant="middle"
          sx={{ borderColor: "#383838", borderWidth: "2px" }}
        />
        <TextBox placeholder="Question 1" multiline rows={5} />
        <PillButtonFunctional
          text="Complete"
          color="#00A7DC"
          backgroundColor="#003E61"
          onClick={() => {}}
        />
      </GreyCard>
    </Container>
  );
}
