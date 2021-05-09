import React from "react";
import Section from "elements/Section";
import Header from "components/Header";
import Clients from "components/Clients";
import HeroImage from "assets/images/hero-image.png";
import Feature from "components/Feature";

import Fade from "react-reveal/Fade";

import FeatureTile01 from "assets/images/feature-tile-icon-01.svg";
import FeatureTile02 from "assets/images/feature-tile-icon-02.svg";
import FeatureTile03 from "assets/images/feature-tile-icon-03.svg";

export default function Homepage() {
  const features = [
    {
      imgSrc: FeatureTile01,
      imgAlt: "Feature Tile Icon 01",
      title: "Join the System",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile02,
      imgAlt: "Feature Tile Icon 02",
      title: "Join the System",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile03,
      imgAlt: "Feature Tile Icon 03",
      title: "Join the System",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
  ];

  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={500}>
                  <h1
                    className="mt-0 mb-16 reveal-from-bottom"
                    data-reveal-delay="200"
                  >
                    Landing template for startups
                  </h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={1000}>
                    <p
                      className="mt-0 mb-32 reveal-from-bottom"
                      data-reveal-delay="400"
                    >
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </Fade>
                </div>
              </div>
              <div
                className="hero-figure reveal-from-bottom illustration-element-01"
                data-reveal-value="20px"
                data-reveal-delay="800"
              >
                <Fade bottom delay={1500}>
                  <img
                    className="has-shadow"
                    src={HeroImage}
                    alt="Hero image"
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Clients></Clients>
      <Section className="features-tiles">
        <div className="container">
          <div className="features-tiles-inner section-inner">
            <div className="tiles-wrap">
              {features.map((feature, index) => (
                <Feature
                  key={index}
                  delayInMS={index * 500}
                  data={feature}
                ></Feature>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
