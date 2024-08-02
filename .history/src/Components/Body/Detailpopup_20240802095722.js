
import pin from '../../Images/pin.png'

const Detailpopup = ({closeModal}) => {
    return (
        <>
        <div className="overlay" onClick={closeModal}>
            <div className="detailpopup">
                <div className="course_Details">
                    <div className="title_time">
                        <h2 className="title"></h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Detailpopup;