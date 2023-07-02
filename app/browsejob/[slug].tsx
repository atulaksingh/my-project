import React from "react";
import { useRouter } from "next/router";
const Slug = () => {
  const router = useRouter();
  const pageNumber = router.query.slug;
  console.log("gg", pageNumber);
  return (
    <>
      <h1>fghbns{pageNumber}</h1>
    </>
  );
};
export default Slug;
