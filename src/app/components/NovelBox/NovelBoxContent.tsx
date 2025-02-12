"use client";

import React, { useState } from "react";
import { NovelBoxContentState } from "./types";
import { NovelBoxContentStyles } from "./styles";
import { useRouter } from "next/navigation";

interface NovelBoxContentProps {
  id: string;
  title: string;
  description: string;
}

const NovelBoxContent: React.FC<NovelBoxContentProps> = ({
  id,
  title,
  description,
}) => {
  const router = useRouter();
  const [novelBoxContentState, setNovelBoxContentState] =
    useState<NovelBoxContentState>({
      title,
      description,
    });

  const pushToNovelDetailsPage = () => router.push(`novel/${id}`);

  return (
    <div
      style={NovelBoxContentStyles.box}
      onClick={() => pushToNovelDetailsPage()}
      data-testid={`novel-box-container-${id}`}
    >
      <h2 style={NovelBoxContentStyles.title}>{novelBoxContentState.title}</h2>
      <p style={NovelBoxContentStyles.description}>
        {novelBoxContentState.description}
      </p>
    </div>
  );
};

export default NovelBoxContent;
