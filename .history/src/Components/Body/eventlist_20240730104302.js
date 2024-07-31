import '../../App.css';
import swap from '../../Images/swap.png';
import emptyfav from '../../Images/empty_fav.png'
import fillfav from '../../Images/fill_fav.png'

const Eventlist = () => {

    return (
        <>
            <div className="evenlist">
                <h2 className='heading'>Events List</h2>
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
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Eventlist;