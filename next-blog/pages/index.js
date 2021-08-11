import { Fragment } from "react";
import FeaturedPosts from "../components/homepage/featured-posts";
import Head from "next/head";
import Hero from "../components/homepage/hero";
import { getFeaturedPosts } from "../lib/posts.util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Sahil's Blog</title>
        <meta name="description" content="I post  web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
