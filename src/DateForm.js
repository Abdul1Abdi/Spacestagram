const DateForm = ({startDate, endDate, startDateHandler, endDateHandler, submitHandler}) => {
    return(
        <form action="submit" onSubmit={submitHandler}>
            <h2>Select a start and end date to see NASA's photos of the day</h2>
            <div className="labelInputContainer">
                <label htmlFor="start">Start date:</label>
                <input type="date"
                    onChange={startDateHandler}
                    id="start"
                    name="start"
                    value={startDate} />
            </div>
            <div className="labelInputContainer">
                <label htmlFor="end">End date:</label>
                <input type="date"
                    onChange={endDateHandler}
                    id="end"
                    name="end"
                    value={endDate} />
            </div>
            <button type="submit">See Space</button>
        </form>
    )
}

export default DateForm;