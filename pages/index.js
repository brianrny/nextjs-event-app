import { getFeaturedEvents } from "../data";

import EventListComponent from "../components/events/event-list";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventListComponent items={featuredEvents} />
    </div>
  )
}

export default HomePage;