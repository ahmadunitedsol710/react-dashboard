import '../../App.css';

const Eventlist = () => {

    return (
        <>
            <div className="evenlist">
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
                            <td className='align-content-center' data-label="Image"></td>
                        </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Eventlist;