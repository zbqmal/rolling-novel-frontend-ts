import React from "react";
import { TopMenuBar } from "./components/TopMenuBar/TopMenuBar";
import PageContentContainer from "./components/PageContentContainer/PageContentContainer";
import NovelBoxContent from "./components/NovelBox/NovelBoxContent";
import { fullHeightStyles } from "./styles";

const Page: React.FC = () => {
  return (
    <div style={fullHeightStyles}>
      <TopMenuBar />
      <PageContentContainer>
        <NovelBoxContent title="title1" description="description1" />
        <NovelBoxContent title="title2" description="description2" />
        <NovelBoxContent title="title3" description="description3" />
        <NovelBoxContent title="title4" description="description4" />
        <NovelBoxContent title="title5" description="description5" />
        <NovelBoxContent title="title6" description="description6" />
      </PageContentContainer>
    </div>
  );
};

export default Page;
