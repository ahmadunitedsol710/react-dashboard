import loc from '../../Images/location.png'
import teacher_img from '../../Images/user.png'


const MonthlyEvent = () => {
    const course_details = {name:"Web Development", image:teacher_img, category:"AI", location:"Bahria Intellectual Village", date:"Thu 2 Nov 2023", time:"12:00 am" }
    return (
        <>
        <div className="monthly_event">
            <div className="upper_part">
                <h1 className="heading">Event of the month</h1>
                <img src={loc} alt="location" />
            </div>

            <div className="bottom_part">
                <div className="first_row">
                    <h3 className='course_title'>{course_details.name}</h3>
                    <img src={course_details.image} alt="teachers" />
                </div>
                <div className="second_row">
                    <div className="cat_loc"></div>
                    div.da
                </div>
            </div>
        </div>
        </>
    ) 
}


export default MonthlyEvent;