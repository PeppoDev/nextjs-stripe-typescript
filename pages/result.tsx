import { useRouter } from "next/router";
import useSWR from "swr";

export default function Result(params) {
  const router = useRouter();
  const { session_id } = router.query;

  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    (url) => fetch(url).then((res) => res.json())
  );

  console.log();

  return (
    <div>
      <h1>Payment result</h1>
      <pre>{JSON.stringify(data) ?? "Loading..."}</pre>
    </div>
  );
}
