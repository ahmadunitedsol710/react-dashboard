import '../../App.css';

const side = () => {

    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="search_box">
                    <input type="search"  name="search" placeholder='Search events...' className='srch'/>
                </div>
            </div>
        </>
    )
}

export default Index;