import '../../App.css';
import Sidebar from './sidebar';
import List from './eventlist';
import UpcomingEvent from './eventlist';

const Index = () => {

    return (
        <>
            <div className="events">
             <Sidebar/>
             <List/>
            </div>
        </>
    )
}

export default Index;