import { useRouter } from "next/router";

const SlugPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Slufghbg: {slug}</h1>;
};

export default SlugPage;
