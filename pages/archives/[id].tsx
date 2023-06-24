import React from 'react';
import { useRouter } from 'next/router';

const ArticleDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the article data based on the id and render the details

  return (
    <div>
      <h1>Article Details - {id}</h1>
      {/* Render the article details */}
    </div>
  );
};

export default ArticleDetailsPage;
