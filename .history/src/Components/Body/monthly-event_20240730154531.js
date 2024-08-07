import loc from '../../Images/location.png'


const MonthlyEvent = () => {
    const course_details = {name:"Web Development", teachers:"2.10K", category:"AI, DATE_TIME:"}
    return (
        <>
        <div className="monthly_event">
            <div className="upper_part">
                <h1 className="heading">Event of the month</h1>
                <img src={loc} alt="location" />
            </div>

            <div className="bottom_part">
                <div className="first_row">
                    <h3 className='course_title'></h3>
                </div>
                <div className="second_row"></div>
            </div>
        </div>
        </>
    ) 
}


export default MonthlyEvent;