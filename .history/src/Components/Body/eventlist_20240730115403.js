import '../../App.css';
import swap from '../../Images/swap.png';
import emptyfav from '../../Images/empty_fav.png'
import fillfav from '../../Images/fill_fav.png'
import filter from '../../Images/filter.png'

const Eventlist = () => {
       const tabledata = [
         
        
    {id:"01",name:"Web Development",time:'12:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:emptyfav},
    {id:"02",name:"Hardware",time:'12:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:fillfav}
       ]
       console.log(tabledata)
    return (
        <>
            <div className="event_details">
                <div className="evenlist">
                    <div className="main">
                        <h2 className='heading'>Events List</h2>
                        <img src={filter} alt="filter" className='filter' />
                    </div>
                    <table className="table">
                        <thead className='table_head'>
                            <tr>
                                <th># <img src={swap} alt="swap" /> </th>
                                <th>NAME</th>
                                <th>TIME</th>
                                <th>DATE</th>
                                <th>LOCATION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tabledata.map((data)=>(
                                <tr className='body_row'>
                                <td className='index' data-label="index">{data.id}</td>
                                <td className='details' data-label="name">{data.name}</td>
                                <td className='details' data-label="time">{data.time}</td>
                                <td className='details' data-label="date">{data.date}</td>
                                <td className='details' data-label="location">{data.location}</td>
                                <td className='details' data-label="location"> <img src={data.action} alt="favourite" /></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="cards">
                    <div className="all_events">
                        <p className='text'>All Events</p>
                        <h2 className='title'></h2>
                    </div>
                    <div className="this_month">
                        <p className='text'>This Month Events</p>
                        <h2 className=''></h2>
                    </div>
                    <div className="fav_events">
                        <p className='text'>Favorite Events</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eventlist;