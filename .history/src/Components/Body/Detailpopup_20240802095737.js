
import pin from '../../Images/pin.png'

const Detailpopup = ({closeModal}) => {
    return (
        <>
        <div className="overlay" onClick={closeModal}>
            <div className="detailpopup">
                <div className="course_Details">
                    <div className="title_time">
                        <h2 className="title">Web Development</h2>
                        <span className="time"></span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Detailpopup;