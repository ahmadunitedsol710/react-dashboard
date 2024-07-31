import loc from '../../Images/location.png'


const MonthlyEvent = () => {
    return (
        <>
        <div className="monthly_event">
            <h1 className="heading">Event of the month</h1>
            <img src={loc} alt="" />
        </div>
        </>
    ) 
}


export default MonthlyEvent;