import '../../App.css';

const Eventlist = () => {

    return (
        <>
            <div className="evenlist">
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>First Name</th>
                        <th>Last Name</th>
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
                                <img className='img-thumbnail image' src={user} alt='user' />
                            </td>
                            
                        </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Eventlist;