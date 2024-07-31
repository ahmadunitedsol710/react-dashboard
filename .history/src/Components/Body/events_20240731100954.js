import '../../App.css';
import Sidebar from './sidebar';
import List from './eventlist';
import UpcomingEvent from './upcoming-event';
import Monthlyevent from './monthly-event'
import { useState } from 'react';

const Index = () => {
    const [first, setfirst] = useState(second)
    return (
        <>
            <div className="events">
                <div className='parent_block'>
                    <Sidebar/>
                    <List/>

                    <div className='child_block'>
                        <UpcomingEvent/>
                        <Monthlyevent/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;