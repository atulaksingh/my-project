import React from "react";
import { useRouter } from "next/router";
function Slug() {
  const router = useRouter();
  const pageNumber = router.query.slug;
  console.log("gg", pageNumber);
  return (
    <>
      <div>fghbns{pageNumber}</div>
    </>
  );
}

export default Slug;
