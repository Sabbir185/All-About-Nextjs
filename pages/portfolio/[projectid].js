import { useRouter } from "next/router";

export default function ListPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  console.log(router.query.projectid);

  return (
    <div>
      <h1>Portfolio project dynamic page</h1>
    </div>
  );
}
