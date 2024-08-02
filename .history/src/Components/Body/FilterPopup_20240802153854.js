
import { useState } from "react";


const Filterpopup = ({tabledata}) => {
    const [courseinfo, setcourseinfo] = useState({course:"",tooption:"",fromoption:""})

    const handleChange = (event) => {
        // setCourseOption(event.target.value);
        // setToOption(event.target.value);
        // setFromOption(event.target.value);
    };
    return (
        <>
            <div className="filterpopup">
                <div className="category">
                    <label className="title">Category</label>
                    <select id="category" className="select" name="course" value={courseinfo.} onChange={handleChange}>
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
                        <select id="to" className="select" value={ToOption} onChange={handleChange}>
                            <option value="" disabled>Select an option</option>
                            {tabledata.map((option, index) => (
                            <option key={index} value={option.date}>
                                {option.date}
                            </option>
                            ))}
                        </select>

                        <select id="from" className="select" value={FromOption} onChange={handleChange}>
                            <option value="" disabled>Select an option</option>
                            {tabledata.map((option, index) => (
                            <option key={index} value={option.date}>
                                {option.date}
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