
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
                    <select id="options" value={selectedOption} onChange={handleChange}>
                        <option value="" disabled>Select an option</option>
                        {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                        ))}
                    </select>
                </div>
                <div className="date_time"></div>
            </div>
        </>
    )
}

export default Filterpopup;