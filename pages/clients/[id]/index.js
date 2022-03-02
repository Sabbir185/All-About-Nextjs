import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>The project of a given client</h1>
    </div>
  );
};

export default ClientProjectPage;
