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
                        return (

                        )
                    }
                </ul>
            </div>
        </>
    )

}


export default Upcommingevent;