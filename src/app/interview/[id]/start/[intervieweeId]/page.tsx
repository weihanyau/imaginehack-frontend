import { Middleman } from "@/components/Middleman";

async function getData() {
  const res = await fetch(
    "http://localhost:3000/interview/64690fef7e09492a14acfe14"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Question({
  params,
}: {
  params: { intervieweeId: string };
}) {
  const { questions } = await getData();

  const intervieweeId = params.intervieweeId;
  const question = questions[0];

  return <Middleman question={question} intervieweeId={intervieweeId} />;
}
