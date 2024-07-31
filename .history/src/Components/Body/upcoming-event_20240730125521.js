import emptyfav from '../../Images/empty_fav.png'

const Upcommingevent = () => {
    const eventdata = [
        {name:"Web Development",date_time:'Thu 2 Nov, 12:00AM',action:emptyfav}
   ]
    return (
        <>  {/* add multiple tags when use empty tags */}
            <div className="upcomingevents">
                <h2 className="title">Upcoming Events</h2>

                <ul className="events_list">
                    eventdata.map((list) => {
                        r
                    })

                    <li className="event">
                        <div className="title_date_time">
                            <p className="event_title">Web Development</p>
                            <p className="event_date_time">Thu 2 Nov, 12:00AM</p>
                        </div>
                        <div>
                            <img src={emptyfav} alt="emptyfav" />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )

}


export default Upcommingevent;