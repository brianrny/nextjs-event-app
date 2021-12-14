import { Fragment } from "react/cjs/react.production.min";
import EventListComponent from "../../components/events/event-list";
import EventsSearchComponent from "../../components/events/events-search";

import { getAllEvents } from "../../data";

function AllEventPage(){
    const events = getAllEvents();

    return (
        <Fragment>
            <EventsSearchComponent />
            <EventListComponent items={events} />
        </Fragment>
    )
}

export default AllEventPage;