import '../../App.css';
import Sidebar from './sidebar';
import List from './eventlist';
import UpcomingEvent from './upcoming-event';

const Index = () => {

    return (
        <>
            <div className="events">
             <Sidebar/>
             <List/>
             <UpcomingEvent
            </div>
        </>
    )
}

export default Index;