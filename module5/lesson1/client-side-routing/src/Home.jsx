import { Link } from "react-router-dom";

export function Home() {
  const users = [
    {
      id: 1,
      name: "Joseph Ditton",
    },
    {
      id: 2,
      name: "Catelyn Schmidt",
    },
    {
      id: 3,
      name: "Sophie Annette",
    }
  ];

  return (
    <div>
      {
        users.map(user => (
          <div key={user.id} style={{ padding: "16px", border: "1px solid black", marginTop: "8px" }}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </div>
        ))
      }
    </div>
  );
}