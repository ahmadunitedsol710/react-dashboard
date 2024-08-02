
import { useState } from "react";


const Filterpopup = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <>
            <div className="filterpopup">
                <div className="category">
                    <label className="title">Category</label>
                    <select id="options" className="select" value={selectedOption} onChange={handleChange}>
                        <option value="" disabled>Select an option</option>
                        {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                        ))}
                    </select>
                    {selectedOption && <p>You selected: {selectedOption}</p>}
                </div>
                <div className="date_time">
                    <label className="title">Date</label>
                    <select id="options" className="select" value={selectedOption} onChange={handleChange}>
                        <option value="" disabled>Select an option</option>
                        {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Filterpopup;