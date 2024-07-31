import '../../App.css';
import Sidebar from './sidebar';
import List from './eventlist';
import UpcomingEvent from './upcoming-event';
import Monthlyevent from './monthly-event'
import { useState } from 'react';

const Index = () => {
    const [showfav, setshowfav] = useState(true)
   
   const storedData =  localStorage.getItem("array")
   const [fav, setfav] = useState(showfav ?  JSON.parse(storedData)  : tabledata)
   console.log("loaasd", tabledata)
    return (
        <>
            <div className="events">
                <div className='parent_block'>
                    <Sidebar setshowfav={setshowfav}/>
                    <List showfav={showfav} tabledata={fav}/>

                 {showfav &&   <div className='child_block'>
                        <UpcomingEvent/>
                        <Monthlyevent/>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Index;