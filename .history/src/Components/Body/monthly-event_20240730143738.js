import loc from '../../Images/location.png'


const MonthlyEvent = () => {
    return (
        <>
        <div className="monthly_event">
            <div className="upper_part">
                
            </div>
            <h1 className="heading">Event of the month</h1>
            <img src={loc} alt="location" />
        </div>
        </>
    ) 
}


export default MonthlyEvent;