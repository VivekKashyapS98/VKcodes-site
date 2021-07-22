import { useRouter } from "next/router";

export default function ID() {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.id}</h1>
    </div>
  );
}
