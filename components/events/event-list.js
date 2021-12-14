import EventItemComponent from "./event-item";

import classes from "./event-list.module.css";

function EventListComponent(props){
    const { items } = props;

    return(
        <ul className={classes.list}>
            {
                items.map(event => (
                    <EventItemComponent id={event.id}
                        title={event.title}
                        description={event.description}
                        location={event.location}
                        date={event.date}
                        image={event.image}
                    />
                ))
            }
        </ul>
    )
}

export default EventListComponent;