import { useRouter } from "next/router";

function CLientProjectId() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>This is ClientProjectId</h1>
    </div>
  );
}

export default CLientProjectId;
