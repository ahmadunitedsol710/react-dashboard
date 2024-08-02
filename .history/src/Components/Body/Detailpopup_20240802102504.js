
import pin from '../../Images/pin.png'

const Detailpopup = ({closeModal, data}) => {
    return (
        <>
        <div className="overlay" onClick={closeModal}>
            <div className="detailpopup">
                <div className="course_Details">
                    <div className="title_time">
                        <h2 className="title">{data.name}</h2>
                        <span className="time">{data.time {}}</span>
                    </div>
                    <span className="category">Category: <strong>AI</strong></span>
                    <div className="description">
                        <h4 className="desc_title">Description</h4>
                        <p className="text">Lorem ipsum dolor sit amet consectetur. Massa fermentum suspendisse nec id turpis et. Diam lacus rutrum nec habitasse ridiculus malesuada amet. Consectetur ultrices netus sed et vitae euismod. Non volutpat justo morbi faucibus. Lectus pulvinar aliquet vel luctus lectus. Gravida ultricies est eget aliquet odio blandit eget. Viverra nunc est nunc quam tincidunt. Arcu duis cras in mollis et. At amet integer sit commodo elementum consequat facilisi nunc mi. Vitae ac et et vel.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Detailpopup;