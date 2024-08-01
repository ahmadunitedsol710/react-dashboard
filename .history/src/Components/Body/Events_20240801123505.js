import '../../App.css';
import Sidebar from './Sidebar';
import List from './Eventlist';
import Upcommingevent from './Upcomingevent';
import Monthlyevent from './Monthlyevent'
import { useEffect, useState } from 'react';

const Events = () => {
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
    setStoredData(localStorage.getItem("favourite") ? JSON.parse([localStorage.getItem("favourite")]) : [])
   }, [])


   const [storedList, setStoredList] = useState([])
   useEffect(()=>{
    setStoredList(localStorage.getItem("list") ? JSON.parse([localStorage.getItem("list")]) : [])
   }, [])

   const eventdata = [
    {id:1, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM'},
    {id:2, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM'},
    {id:3, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM'},
    {id:4, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM'},
    {id:5, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM'},
    {id:6, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM'},
    {id:7, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM'},
    {id:8, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM'},
    {id:9, name:"Web Development",date_time:'Thu 2 Nov, 12:00AM'}
]
cons

    return (
        <>
            <div className="events">
                <div className='parent_block'>
                    <Sidebar setshowfav={setshowfav}/>
                    <List showfav={showfav} favdata={storedData} tabledata={tabledata} setStoredData={setStoredData}/>

                     <div className='child_block'>
                        <Upcommingevent showfav={showfav} favdata={storedList} eventdata={eventdata} setStoredList={setStoredList}/>
                        <Monthlyevent/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events;