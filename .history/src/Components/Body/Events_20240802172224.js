import '../../App.css';
import Sidebar from './Sidebar';
import List from './Eventlist';
import Upcommingevent from './Upcomingevent';
import Monthlyevent from './Monthlyevent'
import { useEffect, useState } from 'react';

const Events = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://api.predicthq.com/v1/events',{
        method: "GET",
        headers:{
            "content-type": "application/json",
            "Authorization": `Bearer 49lyctjsCMWmiFnjRdx_v7OxL0E9vnA6XOot_oqv`
        }
    })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
            if(data){
          setData(data.results);
          setLoading(false);
            }
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);
  

console.log(data);


    const [showfav, setshowfav] = useState(false)
    const tabledata = data;
   const [storedData, setStoredData] = useState([])
   useEffect(()=>{
    setStoredData(localStorage.getItem("favourite") ? JSON.parse([localStorage.getItem("favourite")]) : [])
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

   const [storedList, setStoredList] = useState([])
   useEffect(()=>{
    setStoredList(localStorage.getItem("list") ? JSON.parse([localStorage.getItem("list")]) : [])
   }, [])

 
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;
    return (
        <>
            <div className="events">
                <div className='parent_block'>
                    <Sidebar setshowfav={setshowfav}/>
                    <List showfav={showfav} favdata={storedData} tabledata={data} setStoredData={setStoredData}/>

                     <div className='child_block'>
                        <Upcommingevent showfav={showfav} favdata={storedList} eventdata={eventdata} setStoredList={setStoredList}/>
                        {!showfav && <Monthlyevent/> }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Events;