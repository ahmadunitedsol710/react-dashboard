import '../../App.css';

const Eventlist = () => {

    return (
        <>
            <div className="evenlist">
                <h2 className='heading'>Events List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>TIME</th>
                            <th>DATE</th>
                            <th>LOCATION</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr >
                                <td className='align-content-center' data-label="index">01</td>
                                <td className='align-content-center' data-label="name">Web Development</td>
                                <td className='align-content-center' data-label="time">Web Development</td>
                                <td className='align-content-center' data-label="date">Web Development</td>
                                <td className='align-content-center' data-label="location">Web Development</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Eventlist;