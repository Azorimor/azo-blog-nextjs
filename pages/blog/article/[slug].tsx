import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  const {slug} = router.query;

  return (
    <h1>Article: { slug }</h1>
  )
};

export default Article;
