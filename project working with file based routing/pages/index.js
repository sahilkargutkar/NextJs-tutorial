import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/event-lists";

function HomeComponent() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomeComponent;
