
import { useState } from "react";


const Filterpopup = ({tabledata}) => {
    const [courseinfo, setcourseinfo] = useState({course:"",tooption:"",fromoption:""})

    const handleChange = (event) => {
        const {name,value}=event.target;
        setcourseinfo((previousdetails )=> ({...previousdetails,[name]:value}))
    };
    return (
        <>
            <div className="filterpopup">
                <div className="category">
                    <label className="title">Category</label>
                    <select id="category" className="select" name="course" value={courseinfo.course} onChange={handleChange}>
                        <option value="" disabled>Select an option</option>
                        {tabledata.map((option, index) => (
                        <option key={index} value={option.name}>
                            {option.name}
                        </option>
                        ))}
                    </select>
                </div>
                <div className="date_time">
                    <label className="title">Date & Time</label>
                    <span className="date_time_select">
                        <select id="to" className="select" name="tooption" value={courseinfo.tooption} onChange={handleChange}>
                            <option value="" disabled>Select an option</option>
                            {tabledata.map((option, index) => (
                            <option key={index} value={option.time}>
                                {option.time}
                            </option>
                            ))}
                        </select>

                        <select id="from" className="select" name="fromoption" value={courseinfo.fromoption} onChange={handleChange}>
                            <option value="" disabled>Select an option</option>
                            {tabledata.map((option, index) => (
                            <option key={index} value={option.time}>
                                {option.time}
                            </option>
                            ))}
                        </select>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Filterpopup;