import emptyfav from '../../Images/empty_fav.png'
import fillfav from '../../Images/fill_fav.png'

const Upcommingevent = (eventdata, setStoredData, favdata) => {
    const add_fav = (data) => {
        const isFav = favdata.some(favitem => favitem.id === data.id)

        if (isFav) {
            setStoredData(favdata.filter(favitem => favitem.id !== data.id));    
            // localStorage.setItem("not favourite", JSON.stringify(favdata))
            localStorage.removeItem(JSON.stringify(favdata))
            console.log("else 1")
        } 
        else {
            // Add the item if it does not exist
            setStoredData(prevFavarr => [...prevFavarr, data]);
            localStorage.setItem("favourite", JSON.stringify(favdata))
            console.log("else 2")
        }
    };
    
    return (
        <>  {/* add multiple tags when use empty tags */}
            <div className="upcomingevents">
                <h2 className="title">Upcoming Events</h2>

                <ul className="events_list">
                    {eventdata.map((list) => {
                        return (
                        <li className="event" key={list.id}>
                            <div className="title_date_time">
                                <p className="event_title">{list.name}</p>
                                <p className="event_date_time">{list.date_time}</p>
                            </div>
                            <div>
                                <img src={favdata.some(favitem => favitem.id === list.id) ? fillfav : emptyfav} alt="emptyfav" 
                                onClick={()=>add_fav(list)/>
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