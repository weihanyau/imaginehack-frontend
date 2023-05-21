import { ResultSection } from "@/components/ResultsSection";

async function getData() {
  const res = await fetch(
    "http://localhost:3000/interview/64690fef7e09492a14acfe14",
    { method: "GET", cache: "no-store" }
  );

  return res.json();
}

async function getCandidate() {
  const res = await fetch("http://localhost:3000/intervieweeDetail", {
    method: "GET",
    cache: "no-store",
  });

  return res.json();
}

export default async function Create() {
  const { name, questions } = await getData();
  const allDetail = await getCandidate();
  return <ResultSection name={name} allDetail={allDetail} />;
}
