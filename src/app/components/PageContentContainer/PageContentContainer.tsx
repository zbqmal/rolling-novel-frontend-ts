import React from "react";
import { pageContentContainerStyles } from "./styles";
import { PageContentContainerProps } from "./types";

const PageContentContainer: React.FC<PageContentContainerProps> = ({
  width,
  height,
  children,
}) => {
  return <div style={pageContentContainerStyles.container}>{children}</div>;
};

export default PageContentContainer;
