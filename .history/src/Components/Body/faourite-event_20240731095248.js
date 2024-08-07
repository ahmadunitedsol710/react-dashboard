import '../../App.css';
import swap from '../../Images/swap.png';
import fillfav from '../../Images/fill_fav.png'
import filter from '../../Images/filter.png'


const FavouriteEvent = () => {
    const tabledata = [
        {id:"01",name:"Web Development",time:'12:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:fillfav},
        {id:"02",name:"Hardware",time:'12:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:fillfav},
        {id:"03",name:"AI Integration",time:'02:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:fillfav},
        {id:"04",name:"Team Collaboration",time:'04:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:fillfav},
        {id:"05",name:"Front End Development",time:'06:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:fillfav},
        {id:"06",name:"Front End Development",time:'06:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:fillfav},
        {id:"07",name:"Front End Development",time:'06:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:fillfav},
        {id:"08",name:"Front End Development",time:'06:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village",action:fillfav}
   ]

return (
    <>
        <div className="event_details">
            <div className="evenlist">
                <div className="main">
                    <h2 className='heading'>Favourite Events</h2>
                    <img src={filter} alt="filter" className='filter' />
                </div>
                <div className="table_data">
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
                    </table>
                    <div className="tbody_container">
                        <table>
                            <tbody>
                                {tabledata.map((data)=>(
                                    <tr className='body_row'>
                                    <td className='index' data-label="index">{data?.id}</td>
                                    <td className='details' data-label="name">{data?.name}</td>
                                    <td className='details' data-label="time">{data?.time}</td>
                                    <td className='details' data-label="date">{data?.date}</td>
                                    <td className='details' data-label="location">{data?.location}</td>
                                    <td className='details' data-label="location"> <img src={data.action} alt="favourite" /></td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default FavouriteEvent;