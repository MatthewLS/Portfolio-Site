import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hello there, my name is Matthew Stephens. I am a Computer Science
          student at San Francisco State University, and I made this site to
          concurrently learn React and showcase projects I have worked on.
        </p>
        <p>some other stuff</p>
      </Content>
    </div>
  );
}

export default AboutPage;
