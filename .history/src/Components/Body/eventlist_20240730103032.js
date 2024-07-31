import '../../App.css';
import swap from '../../Images/swap.png'

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
                        </tr>
                    </thead>
                    <tbody>
                            <tr className='body_row'>
                                <td className='index' data-label="index">01</td>
                                <td className='' data-label="name">Web Development</td>
                                <td className='' data-label="time">12:00AM</td>
                                <td className='' data-label="date">Thu 2 Nov</td>
                                <td className='' data-label="location">Bahria Intellectual Village</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Eventlist;