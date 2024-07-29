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
                        <tr key={item.id}>
                            <td className='align-content-center' data-label="Image">
                                <img className='img-thumbnail image' src={user} alt='user' />
                            </td>
                            <td className='align-content-center' data-label="First Name">{item.fname}</td>
                            <td className='align-content-center' data-label="Last Name">{item.lname}</td>
                            <td className='align-content-center' data-label="Email">{item.email}</td>
                            <td className='align-content-center' data-label="Country">{item.country}</td>
                            <td className='align-content-center' data-label="City">{item.city}</td>
                            <td className='align-content-center' data-label="Province">{item.province}</td>
                            <td className='align-content-center' data-label="Postal Code">{item.postal}</td>
                            <td className='align-content-center' data-label="Mobile No.">{item.number}</td>
                            <td className='align-content-center' data-label="Action">
                                <i className="bi bi-trash3" style={{ color: "red", marginTop: "7px" }} onClick={() => props.clickHandler(item.id)}></i>
                                <Link to={`/edit/${item.id}`}>
                                    <i className="bi bi-pencil-square" style={{ color: "green", marginTop: "7px", marginLeft: "7px" }}></i>
                                </Link>
                            </td>
                        </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Eventlist;