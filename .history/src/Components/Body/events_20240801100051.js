import '../../App.css';
import Sidebar from './sidebar';
import List from './eventlist';
import UpcomingEvent from './upcoming-event';
import Monthlyevent from './monthly-event'
import { useEffect, useState } from 'react';

const Index = () => {
    const [showfav, setshowfav] = useState(true)
    const tabledata = [
        {id:"01",name:"Web Development",time:'12:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
        
        {id:"02",name:"Hardware",time:'12:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
        
        {id:"03",name:"AI Integration",time:'02:00 AM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
        
        {id:"04",name:"Team Collaboration",time:'04:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
        
        {id:"05",name:"Front End Development",time:'06:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
        
        {id:"06",name:"Front End Development",time:'06:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
        
        {id:"07",name:"Front End Development",time:'06:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"},
        
        {id:"08",name:"Front End Development",time:'06:00 PM',date:"Thu 2 Nov",location:"Bahria Intellectual Village"}
   ]
   const [storedData, setStoredData] = useState([])
   useEffect(()=>{
    setStoredData(localStorage.getItem("array") ?JSON.parse([localStorage.getItem("array")]) : [])
   }, [])

   console.log(storedData)
    return (
        <>
            <div className="events">
                <div className='parent_block'>
                    <Sidebar setshowfav={setshowfav}/>
                    <List showfav={showfav} favdata={storedData} tabledata={tabledata} setStoredData={setStoredData}/>

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