import '../../App.css';
import swap from '../../Images/swap.png';
import emptyfav from '../../Images/empty_fav.png'
import fillfav from '../../Images/fill_fav.png'
import filter from '../../Images/filter.png'
import { useEffect, useState } from 'react';
import Detailpopup from './Detailpopup';

const Eventlist = ({showfav, favdata, tabledata, setStoredData}) => {
    const [showModal, setShowModal] = useState(false)
    const [selectedData, setselectedData] = useState(null)

    
    const add_fav = (data) => {
        const isFav = favdata.some(favitem => favitem.id === data.id)

        if (isFav) {
            // setStoredData(favdata.filter(favitem => favitem.id !== data.id));    
            const updatedFavData = favdata.filter(favItem => favItem.id !== data.id);
            setStoredData(updatedFavData);
            localStorage.setItem("favourite", JSON.stringify(updatedFavData))
            
            console.log("else 1")
        } 
        else {
            const updatedFavData = [...favdata, data];
            setStoredData(updatedFavData);
            localStorage.setItem("favourite", JSON.stringify(updatedFavData))
            console.log("else 2")
        }
    };

    const closeModal = () => {
        setselectedData
        setShowModal(false)
    }

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
                                    {!showfav ? tabledata.map((data)=>(
                                        <tr className='body_row' key={data.id} onClick={()=>setShowModal(true)}>
                                        <td className='index' data-label="index">{data?.id}</td>
                                        <td className='details' data-label="name">{data?.name}</td>
                                        <td className='details' data-label="time">{data?.time}</td>
                                        <td className='details' data-label="date">{data?.date}</td>
                                        <td className='details' data-label="location">{data?.location}</td>
                                        <td className='details' data-label="location"> <img src={favdata.some(favitem => favitem.id === data.id) ? fillfav : emptyfav} alt="favourite" 
                                        onClick={()=>add_fav(data)}/></td>
                                    </tr>)) : 
                                    favdata.map((data)=>(
                                        <tr className='body_row' key={data.id} onClick={()=>setShowModal(true)}>
                                        <td className='index' data-label="index">{data?.id}</td>
                                        <td className='details' data-label="name">{data?.name}</td>
                                        <td className='details' data-label="time">{data?.time}</td>
                                        <td className='details' data-label="date">{data?.date}</td>
                                        <td className='details' data-label="location">{data?.location}</td>
                                        <td className='details' data-label="location"> <img src={favdata.some(favitem=>favitem.id === data.id) ? fillfav : emptyfav} alt="favourite" 
                                        onClick={()=>add_fav(data)}/></td>
                                    </tr> 
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

             {!showfav &&   <div className="cards">
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
            {showModal && <Detailpopup closeModal={closeModal}/>}
        </>
    )
}

export default Eventlist;