import loc from '../../Images/location.png'


const MonthlyEvent = () => {
    const all_events = {text:"All Events", title:"2.10K"}
    const this_month = {text:"This Month Events", title:"30"}
    const fav_events = {text:"Favourite Events", title:"25"}
    
    return (
        <>
        <div className="monthly_event">
            <div className="upper_part">
                <h1 className="heading">Event of the month</h1>
                <img src={loc} alt="location" />
            </div>

            <div className="bottom_part">
                <div className="first_row">
                    <h3 className='course_title'><Web Development/h3>
                </div>
                <div className="second_row"></div>
            </div>
        </div>
        </>
    ) 
}


export default MonthlyEvent;