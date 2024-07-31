import 

const Upcommingevent = () => {
    return (
        <>  {/* add multiple tags when use empty tags */}
            <div className="upcomingevents">
                <h2 className="title">Upcoming Events</h2>

                <ul className="events">
                    <li className="event">
                        <div className="title_date_time">
                            <span className="event_title">Web Development</span>
                            <span className="event_date_time">Thu 2 Nov, 12:00AM</span>
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