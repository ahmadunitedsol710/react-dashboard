
import pin from '../../Images/pin.png'

const Detailpopup = ({closeModal}) => {
    return (
        <>
        <div className="overlay" onClick={closeModal}>
            <div className="detailpopup">
                <div className="course_Details">
                    <div className="title_time">
                        <h2 className="title">Web Development</h2>
                        <span className="time">Thu 2 Nov 2023, 12:00am</span>
                    </div>
                    <span className="category">Category: AI</span>
                    <div className="description">
                        h4.desc
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Detailpopup;