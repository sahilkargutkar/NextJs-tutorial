import { getAllEvents } from "../../helpers/api-util";
import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/event-lists";
import EventSearch from "../../components/event-search";
import Head from "next/head";

function eventsPage(props) {
  const { events } = props;
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;

    router.push;
  }

  return (
    <Fragment>
      <Head>
        <title> New Events</title>
        <meta name="description" content="Find a lot of great events" />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default eventsPage;
