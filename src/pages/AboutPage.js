import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hello there, my name is Matthew Stephens and I am a Computer Science
          student at San Francisco State University
        </p>
        Hello
      </Content>
    </div>
  );
}

export default AboutPage;
