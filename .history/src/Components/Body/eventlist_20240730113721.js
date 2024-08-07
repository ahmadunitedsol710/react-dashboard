import '../../App.css';
import swap from '../../Images/swap.png';
import emptyfav from '../../Images/empty_fav.png'
import fillfav from '../../Images/fill_fav.png'
import filter from '../../Images/filter.png'

const Eventlist = () => {
       const tabledata = [
         
        
    {id:1,name:"Web Development",time:'12:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
    {id:2,name:"web",time:'12:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"}
       ]
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
                                <td className='details' data-label="location"> <img src={emptyfav} alt="emptyfav" /> </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="cards">
                    <div className="all_events">
                        <p className='title'>All Events</p>
                        
                    </div>
                    <div className="this_month"></div>
                    <div className="fav_events"></div>
                </div>
            </div>
        </>
    )
}

export default Eventlist;