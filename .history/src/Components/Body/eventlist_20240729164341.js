import '../../App.css';

const Eventlist = () => {

    return (
        <>
            <div className="sidebar">
                <div className="image">
                    <img src={grid} alt="grid" className='sidebar_img'/>
                </div>
                <div className="image">
                    <img src={favourite} alt="favourite" className='sidebar_img'/>
                </div>
            </div>
        </>
    )
}

export default sidebar;