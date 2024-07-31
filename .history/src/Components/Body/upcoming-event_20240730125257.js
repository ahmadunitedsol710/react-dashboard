import emptyfav from '../../Images/empty_fav.png'

const Upcommingevent = () => {
    const eventsdata = [
        {id:"01",name:"Web Development",time:'12:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:emptyfav},
        {id:"02",name:"Hardware",time:'12:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:fillfav},
        {id:"03",name:"AI Integration",time:'02:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:fillfav},
        {id:"04",name:"Team Collaboration",time:'04:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:emptyfav},
        {id:"05",name:"Front End Development",time:'16:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:fillfav}
   ]
    return (
        <>  {/* add multiple tags when use empty tags */}
            <div className="upcomingevents">
                <h2 className="title">Upcoming Events</h2>

                <ul className="events_list">
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