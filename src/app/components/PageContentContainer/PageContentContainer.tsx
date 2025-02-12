import React, { PropsWithChildren } from "react";
import { pageContentContainerStyles } from "./styles";

interface PageContentContainerProps {
  width?: string;
  height?: string;
}

const PageContentContainer: React.FC<
  PropsWithChildren<PageContentContainerProps>
> = ({ width, height, children }) => {
  return <div style={pageContentContainerStyles.container}>{children}</div>;
};

export default PageContentContainer;
