import { useRouter } from "next/router";
import Hotpoptime from "../../components/Hotpoptime";
import TweetBook from "../../components/TweetBook";
import VKcodes from "../../components/VKcodes";
import Voidisall from "../../components/Voidisall";

export default function ID() {
  const router = useRouter();

  switch (router.query.id) {
    case "1":
      return <TweetBook />;
    case "2":
      return <Hotpoptime />;
    case "3":
      return <Voidisall />;
    case "4":
      return <VKcodes />;

    default:
      return <h1>router.query.id</h1>;
  }
}
