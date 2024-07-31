import loc from '../../Images/location.png'
import teachers from '../../Images/user.png'


const MonthlyEvent = () => {
import teachers from '../../Images/user.png'
const course_details = {name:"Web Development", teachers:, category:"AI", location:"Bahria Intellectual Village", date:"Thu 2 Nov 2023", time:"12:00 am" }
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