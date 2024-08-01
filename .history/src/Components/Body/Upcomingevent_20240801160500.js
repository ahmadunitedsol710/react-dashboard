import emptyfav from '../../Images/empty_fav.png'
import fillfav from '../../Images/fill_fav.png'

const Upcommingevent = ({showfav, eventdata, setStoredList, favdata}) => {

    const add_fav = (list) => {
        const isFav = favdata.some(favitem => favitem.id === data.id)

        if (isFav) {  
            const updatedFavData = favdata.filter(favItem => favItem.id !== list.id);
            setStoredList(updatedFavData);
            localStorage.setItem("favourite", JSON.stringify(updatedFavData))    
            console.log("else 1")
        } 
        else {
            const updatedFavData = [...favdata, list];
            setStoredList(updatedFavData);
            localStorage.setItem("favourite", JSON.stringify(updatedFavData))
            console.log("else 2")
        }
    };
    
    return (
        <>  {/* add multiple tags when use empty tags */}
            <div className="upcomingevents">
                <h2 className="title">Upcoming Events</h2>

                <ul className="events_list">
                    {showfav ? eventdata.map((list) => (
                        <li className="event" key={list.id}>
                            <div className="title_date_time">
                                <p className="event_title">{list.name}</p>
                                <p className="event_date_time">{list.date_time}</p>
                            </div>
                            <div>
                                <img src={favdata.some(favitem => favitem.id === list.id) ? fillfav : emptyfav} alt="emptyfav" 
                                onClick={()=>add_fav(list)}/>
                            </div>
                        </li>
                    )) : 
                    favdata.map((list) => (
                        <li className="event" key={list.id}>
                            <div className="title_date_time">
                                <p className="event_title">{list.name}</p>
                                <p className="event_date_time">{list.date_time}</p>
                            </div>
                            <div>
                                <img src={favdata.some(favitem => favitem.id === list.id) ? fillfav : emptyfav} alt="emptyfav" 
                                onClick={()=>add_fav(list)}/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )

}

export default Upcommingevent;