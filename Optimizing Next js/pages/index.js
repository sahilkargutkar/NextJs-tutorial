import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/event-lists";

function HomeComponent() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title> New Events</title>
        <meta name="description" content="Find a lot of great events" />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomeComponent;
