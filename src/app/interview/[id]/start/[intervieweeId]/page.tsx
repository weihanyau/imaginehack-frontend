import { Middleman } from "@/components/Middleman";

async function getData() {
  const response = await fetch(
    "http://localhost:3000/interview/64690fef7e09492a14acfe14",
    { method: "GET", cache: "no-store" }
  );

  return response.json();
}

export default async function Question({
  params,
}: {
  params: { intervieweeId: string };
}) {
  // console.log(await getData());
  const { questions } = await getData();

  const intervieweeId = params.intervieweeId;
  const question = questions[0];
  // const question = "Introduce yourself"

  return <Middleman question={question} intervieweeId={intervieweeId} />;
}
