"use client";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { PillButtonFunctional } from "@/components/PillButtonFunctional";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";

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

  ["input"]: {
    color: "#737578",
    cursor: "pointer !important",
  },

  "input::placeholder": {
    color: "white",
  },

  textarea: {
    color: "#737578",
    cursor: "pointer !important",
  },

  "textarea::placeholder": {
    color: "white",
  },
});

const CardTitle = styled("h3")({});

const CardSubTitle = styled("h4")({
  color: "#656565",
});

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#232e3c",
    color: "#656565",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "#0D1116",
    color: "#656565",
  },
});

export function ResultSection({
  name,
  allDetail,
}: {
  name: string;
  allDetail: {
    _id: string;
    transcript: string;
    anomaly: string[];
    normal: string[];
    summary: [string];
    confidence: number;
    name: string;
  }[];
}) {
  return (
    <Container>
      <GreyCard>
        <CardTitle>{name}</CardTitle>
        <CardSubTitle>Link to Interview</CardSubTitle>
        <Link href="/interview/64690fef7e09492a14acfe14/start">
          <TextBox
            placeholder="Shareable Link"
            value="http://localhost:3001/interview/64690fef7e09492a14acfe14/start"
            InputProps={{
              readOnly: true,
            }}
          />
        </Link>
        <Divider
          variant="middle"
          sx={{ borderColor: "#383838", borderWidth: "2px" }}
        />
        <CardSubTitle>Overall</CardSubTitle>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ border: "2px solid #383838" }}>
                <StyledTableCell>Candidate</StyledTableCell>
                <StyledTableCell align="right">Confidence</StyledTableCell>
                <StyledTableCell align="right">Anomaly</StyledTableCell>
                <StyledTableCell align="right">Normal</StyledTableCell>
                <StyledTableCell align="right">Summary</StyledTableCell>
                <StyledTableCell align="right">Transcript</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allDetail.map((detail) => {
                return (
                  <TableRow
                    key={detail._id}
                    sx={{ border: "2px solid #383838" }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {detail.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {detail.confidence}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {detail.anomaly}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {detail.normal}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {detail.summary}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {detail.transcript}
                    </StyledTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </GreyCard>
    </Container>
  );
}
