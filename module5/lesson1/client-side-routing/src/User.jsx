import { useParams, useNavigate } from "react-router-dom";

export function User() {
  const params = useParams();
  const navigate = useNavigate();
  // go to db to get user with id blah
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>I am the user page</h1>
    </div>
  )
}