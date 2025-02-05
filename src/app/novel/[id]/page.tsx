"use client";

import { useParams } from "next/navigation";

const NovelDetailsPage: React.FC = () => {
  const params = useParams();
  const id = params.id;

  return <div>Novel {id}</div>;
};

export default NovelDetailsPage;
