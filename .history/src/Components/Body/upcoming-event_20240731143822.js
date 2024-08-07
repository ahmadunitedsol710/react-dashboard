import emptyfav from '../../Images/empty_fav.png'
import Index from './events'

const Upcommingevent = () => {
    const eventdata = [
        {id:1, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM',action:emptyfav},
        {id:1, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM',action:emptyfav},
        {id:1, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM',action:emptyfav},
        {id:1, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM',action:emptyfav},
        {id:1, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM',action:emptyfav},
        {id:1, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM',action:emptyfav},
        {id:1, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM',action:emptyfav},
        {id:1, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM',action:emptyfav},
        {id:1, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM',action:emptyfav}
   ]
    return (
        <>  {/* add multiple tags when use empty tags */}
            <div className="upcomingevents">
                <h2 className="title">Upcoming Events</h2>

                <ul className="events_list">
                    {eventdata.map((list) => {
                        return (
                        <li className="event">
                            <div className="title_date_time">
                                <p className="event_title">{list.name}</p>
                                <p className="event_date_time">{list.date_time}</p>
                            </div>
                            <div>
                                <img src={list.action} alt="emptyfav" />
                            </div>
                        </li>
                        )
                    })}

                </ul>
            </div>
        </>
    )

}

export default Upcommingevent;