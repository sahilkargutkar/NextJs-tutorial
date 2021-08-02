import { useRouter } from "next/router";
import Link from "next/link";

function clients() {
  const clients = [
    { id: "ramsh", name: "Ramesh" },
    { id: "su", name: "suresh" },
  ];

  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  function loadClientId() {
    // router.push("/clients/max/projectA"); OR
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projectA" },
    });
  }

  return (
    <div>
      <h1>Clients</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.name}`}>{client.name}</Link>
            <button onClick={loadClientId}>Load client id</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default clients;
