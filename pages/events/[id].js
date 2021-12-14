import { useRouter } from "next/router"
import { Fragment } from "react";
import { getEventById } from "../../data";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EventDetailPage(){
    const router = useRouter();

    const eventId = router.query.id;
    const event = getEventById(eventId);

    if(!event){
        return <h1>No event found.</h1>
    }

    return (
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.title} 
                address={event.location} 
                image={event.image} 
                imageAlt={event.title} />
            <EventContent>
                <p>{ event.description }</p>
            </EventContent>
        </Fragment>
    )
}

export default EventDetailPage