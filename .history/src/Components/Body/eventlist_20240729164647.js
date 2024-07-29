import '../../App.css';

const Eventlist = () => {

    return (
        <>
            <div className="evenlist">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Province</th>
                        <th>Postal Code</th>
                        <th>Mobile No.</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        <tr >
                            <td className='align-content-center' data-label="Image">
                            </td>
                        </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Eventlist;