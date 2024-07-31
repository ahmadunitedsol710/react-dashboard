import '../../App.css';
import swap from '../../Images/swap.png';
import emptyfav from '../../Images/empty_fav.png'
import fillfav from '../../Images/fill_fav.png'
import filter from '../../Images/filter.png'
import { useState } from 'react';

const Eventlist = ({showfav}) => {
    const [faviconarray, setfaviconarray] = useState([]);

    const add_fav = (data) => {
      if (faviconarray.some(favitem => favitem.id === data.id)) {
        // Remove the item if it already exists
        setfaviconarray(prevFavarr => prevFavarr.filter(favitem => favitem.id !== data.id));
        console.log(faviconarray)
      } else {
        // Add the item if it does not exist
        setfaviconarray(prevFavarr => [...prevFavarr, data]);
        console.log(faviconarray)
      }
      console.log(faviconarray)
    };

       const tabledata = [
            {id:"01",name:"Web Development",time:'12:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
            
            {id:"02",name:"Hardware",time:'12:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
            
            {id:"03",name:"AI Integration",time:'02:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
            
            {id:"04",name:"Team Collaboration",time:'04:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
            
            {id:"05",name:"Front End Development",time:'06:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
            
            {id:"06",name:"Front End Development",time:'06:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
            
            {id:"07",name:"Front End Development",time:'06:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
            
            {id:"08",name:"Front End Development",time:'06:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"}
       ]

       const all_events = {text:"All Events", title:"2.10K"}
       const this_month = {text:"This Month Events", title:"30"}
       const fav_events = {text:"Favourite Events", title:"25"}
    return (
        <>
            <div className="event_details">
                <div className="evenlist">
                    <div className="main">
                        <h2 className='heading'>Events List</h2>
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
                                        <td className='details' data-label="location"> <img src={faviconarray.some(favitem=>favitem.id===data.id) ? emptyfav :fillfav} alt="favourite" 
                                        onClick={()=>add_fav(data)}/></td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

             {showfav &&   <div className="cards">
                    <div className="all_events">
                        <p className='text'>{all_events.text}</p>
                        <h2 className='title'>{all_events.title}</h2>
                    </div>
                    <div className="this_month">
                        <p className='text'>{this_month.text}</p>
                        <h2 className='title'>{this_month.title}</h2>
                    </div>
                    <div className="fav_events">
                        <p className='text'>{fav_events.text}</p>
                        <h2 className='title'>{fav_events.title}</h2>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Eventlist;