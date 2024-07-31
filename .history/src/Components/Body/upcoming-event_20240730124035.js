
const Upcommingevent = () => {
    return (
        <>  {/* add multiple tags when use empty tags */}
            <div className="upcomingevents">
                <h2 className="title">Upcoming Events</h2>

                <ul className="events">
                    <li className="event">
                        <div className="title_date">
                            <span className="event_title"></span>
                            <span className="event_date"></span>
                        </div>
                        <div className="image">
                            <img src="" alt="" />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )

}


export default Upcommingevent;