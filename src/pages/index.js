import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import LogRocket from 'logrocket';
LogRocket.init('sprnyp/docscyclicsh');

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link> */}
          <Link  href="/docs/intro" className={clsx("pagination-nav__link", styles.textButton)}>
            <div className={styles.textButtonHead}><strong>Get Started »</strong></div>
            <div className={styles.textButtonDesc}>Build something cool, learn how to start fresh or deploy an existing project with Cyclic</div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for cyclic.sh"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
