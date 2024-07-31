import '../../App.css';
import Sidebar from './sidebar';
import List from './eventlist';
import UpcomingEvent from './upcoming-event';
import Monthlyevent from './monthly-event'

const Index = () => {

    return (
        <>
            <div className="events">
                <div>
                    <Sidebar/>
                    <List/>
                </div>
                <div>
                    
                </div>
                <UpcomingEvent/>
                <Monthlyevent/>
            </div>
        </>
    )
}

export default Index;