import { useRouter } from "next/router";
import Link from "next/link";

function clientId() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jenny" },
  ];

  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1> ID</h1>
      {users.map((user) => (
        <li>
          <Link
            href={{
              pathname: "/clients/[id]/[clientprojectid]",
              query: { id: "Ramesh", clientprojectid: user.id },
            }}
          >
            {user.name}
          </Link>
        </li>
      ))}
    </div>
  );
}
export default clientId;
