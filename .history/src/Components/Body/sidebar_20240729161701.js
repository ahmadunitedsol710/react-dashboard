import '../../App.css';
import grid from '../../Images/grid.png';
import favourite from '../../Images/fav.png'

const sidebar = () => {

    return (
        <>
            <div className="sidebar">
                <img src={grid} alt="" className='sidebar_img'/>
                <img src={favourite} alt="favourite" className='sidebar_img'/>
            </div>
        </>
    )
}

export default sidebar;