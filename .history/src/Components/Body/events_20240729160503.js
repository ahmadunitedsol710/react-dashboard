import '../../App.css';
import Sidebar from './sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Index = () => {

    return (
        <>
            <div className="events">
             <Sidebar/>
            </div>
        </>
    )
}

export default Index;