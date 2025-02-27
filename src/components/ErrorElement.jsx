import { useNavigate, useRouteError } from "react-router";

export default function ErrorElement() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <>
      <h1>An Error Occurred</h1>
      <p>{error.massage}</p>
      <button onClick={() => navigate("/")}>Back to home age</button>
    </>
  );
}
