import { useLoaderData, useNavigate } from "react-router-dom";

export default function JobsDetails() {
  const jobsDetailsData = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="max-w-lg">
      <h2>Job No is: {jobsDetailsData.location}</h2>
      <h2> {jobsDetailsData.title}</h2>
      <h2>
        <b>{jobsDetailsData.salary}</b>
      </h2>
      <h2>
        {" "}
        <b>Description:</b>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cum
          odio dolorum perferendis maiores aut ullam esse temporibus. Alias sunt
          rem veritatis dolore id vero quasi earum pariatur magnam magni!
        </p>
      </h2>
      <button className="bg-indigo-600 p-4 " onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export const JobsDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch("http://localhost:5000/jobs/" + id);
  if (!response.ok) {
    throw Error("Could Not Fond The Job Details");
  }

  return response.json();
};
