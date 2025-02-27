import { Link, useLoaderData } from "react-router";

export default function Jobs() {
  const jobsData = useLoaderData();
  return (
    <div className="flex justify-between ">
      {jobsData.map(job => {
        return (
          <Link
            to={job.id.toString()}
            key={job.id}
            className="bg-red-400 rounded-3xl mx-1 text-lg  p-10"
          >
            <h2>{job.title}</h2>
            <h3>{job.salary}</h3>
            <p>{job.location}</p>
          </Link>
        );
      })}
    </div>
  );
}
export const jobsLoader = async () => {
  const response = await fetch("http://localhost:5000/jobs");
  if (!response.ok) {
    throw Error("Could Not Found Job List");
  }
  return response.json();
};
