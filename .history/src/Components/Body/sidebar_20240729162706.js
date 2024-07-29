import '../../App.css';
import grid from '../../Images/grid.png';
import favourite from '../../Images/fav.png'

const sidebar = () => {

    return (
        <>
            <div className="sidebar">
                <div className="image">
                <img src={grid} alt="grid" className='sidebar_img'/>
                </div>
                <div className="image">
                    
                </div>
                <img src={favourite} alt="favourite" className='sidebar_img'/>
            </div>
        </>
    )
}

export default sidebar;