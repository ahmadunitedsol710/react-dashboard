import '../../App.css';
import logo from '../../Images/logo.png'

const Index = () => {

    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="search_box">
                    <input type="search"  name="search" placeholder='Search events...' className=''/>
                </div>
            </div>
        </>
    )
}

export default Index;