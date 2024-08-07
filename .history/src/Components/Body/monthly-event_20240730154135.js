import loc from '../../Images/location.png'


const MonthlyEvent = () => {
    return (
        <>
        <div className="monthly_event">
            <div className="upper_part">
                <h1 className="heading">Event of the month</h1>
                <img src={loc} alt="location" />
            </div>

            <div className="bottom_part">
                <div className="first_row">
                    <h3></h3>
                </div>
                <div className="second_row"></div>
            </div>
        </div>
        </>
    ) 
}


export default MonthlyEvent;