

const Filterpopup = () => {
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
                <div className="time"></div>
            </div>
        </>
    )
}

export default Filterpopup;