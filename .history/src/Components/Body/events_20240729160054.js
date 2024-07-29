import '../../App.css';
import Sidebar from './sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Index = () => {

    return (
        <>
            <div className="events">
            <Router>
            <Routes>        
                <Route path="/" exact element={<Header/>}/>
            </Routes>
            </Router>
            </div>
        </>
    )
}

export default Index;