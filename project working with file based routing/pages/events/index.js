import { getAllEvents } from "../../dummy-data";
import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/event-lists";
import EventSearch from "../../components/event-search";

function eventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;

    router.push;
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default eventsPage;
