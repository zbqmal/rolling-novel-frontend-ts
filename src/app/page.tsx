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
        <NovelBoxContent id="1" title="title1" description="description1" />
        <NovelBoxContent id="2" title="title2" description="description2" />
        <NovelBoxContent id="3" title="title3" description="description3" />
        <NovelBoxContent id="4" title="title4" description="description4" />
        <NovelBoxContent id="5" title="title5" description="description5" />
        <NovelBoxContent id="6" title="title6" description="description6" />
      </PageContentContainer>
    </div>
  );
};

export default Page;
