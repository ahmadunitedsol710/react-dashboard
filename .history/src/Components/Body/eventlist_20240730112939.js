import '../../App.css';
import swap from '../../Images/swap.png';
import emptyfav from '../../Images/empty_fav.png'
import fillfav from '../../Images/fill_fav.png'
import filter from '../../Images/filter.png'

const Eventlist = () => {
       const tabledata = [
         
        
    {id:1,name:"web",time:'12;am',date:"12marg",location:"happy"},
    {id:2,name:"web",time:'12;am',date:"12marg",location:"sad"}
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
                                <td className='details' data-label="name">{data.</td>
                                <td className='details' data-label="time">12:00AM</td>
                                <td className='details' data-label="date">Thu 2 Nov</td>
                                <td className='details' data-label="location">Bahria Intellectual Village</td>
                                <td className='details' data-label="location"> <img src={emptyfav} alt="emptyfav" /> </td>
                            </tr>
                            ))}
                            <tr className='body_row'>
                                <td className='index' data-label="index">01</td>
                                <td className='details' data-label="name">Web Development</td>
                                <td className='details' data-label="time">12:00AM</td>
                                <td className='details' data-label="date">Thu 2 Nov</td>
                                <td className='details' data-label="location">Bahria Intellectual Village</td>
                                <td className='details' data-label="location"> <img src={emptyfav} alt="emptyfav" /> </td>
                            </tr>

                            <tr className='body_row'>
                                <td className='index' data-label="index">02</td>
                                <td className='details' data-label="name">Web Development</td>
                                <td className='details' data-label="time">12:00AM</td>
                                <td className='details' data-label="date">Thu 2 Nov</td>
                                <td className='details' data-label="location">Bahria Intellectual Village</td>
                                <td className='details' data-label="location"> <img src={fillfav} alt="fillfav" /> </td>
                            </tr>

                            <tr className='body_row'>
                                <td className='index' data-label="index">03</td>
                                <td className='details' data-label="name">Web Development</td>
                                <td className='details' data-label="time">12:00AM</td>
                                <td className='details' data-label="date">Thu 2 Nov</td>
                                <td className='details' data-label="location">Bahria Intellectual Village</td>
                                <td className='details' data-label="location"> <img src={emptyfav} alt="emptyfav" /> </td>
                            </tr>

                            <tr className='body_row'>
                                <td className='index' data-label="index">04</td>
                                <td className='details' data-label="name">Web Development</td>
                                <td className='details' data-label="time">12:00AM</td>
                                <td className='details' data-label="date">Thu 2 Nov</td>
                                <td className='details' data-label="location">Bahria Intellectual Village</td>
                                <td className='details' data-label="location"> <img src={emptyfav} alt="emptyfav" /> </td>
                            </tr>

                            <tr className='body_row'>
                                <td className='index' data-label="index">05</td>
                                <td className='details' data-label="name">Web Development</td>
                                <td className='details' data-label="time">12:00AM</td>
                                <td className='details' data-label="date">Thu 2 Nov</td>
                                <td className='details' data-label="location">Bahria Intellectual Village</td>
                                <td className='details' data-label="location"> <img src={emptyfav} alt="emptyfav" /> </td>
                            </tr>

                            <tr className='body_row'>
                                <td className='index' data-label="index">06</td>
                                <td className='details' data-label="name">Web Development</td>
                                <td className='details' data-label="time">12:00AM</td>
                                <td className='details' data-label="date">Thu 2 Nov</td>
                                <td className='details' data-label="location">Bahria Intellectual Village</td>
                                <td className='details' data-label="location"> <img src={emptyfav} alt="emptyfav" /> </td>
                            </tr>
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