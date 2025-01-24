"use client";

import React, { useState } from "react";
import { NovelBoxContentProps, NovelBoxContentState } from "./types";
import { NovelBoxContentStyles } from "./styles";

const NovelBoxContent = ({ title, description }: NovelBoxContentProps) => {
  const [novelBoxContentState, setNovelBoxContentState] =
    useState<NovelBoxContentState>({
      title,
      description,
    });

  return (
    <div style={NovelBoxContentStyles.box}>
      <h2 style={NovelBoxContentStyles.title}>{novelBoxContentState.title}</h2>
      <p style={NovelBoxContentStyles.description}>
        {novelBoxContentState.description}
      </p>
    </div>
  );
};

export default NovelBoxContent;
