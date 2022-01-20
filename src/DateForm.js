const DateForm = ({startDate, endDate, startDateHandler, endDateHandler, submitHandler}) => {
    return(
        <form action="submit" onSubmit={submitHandler}>
            <label htmlFor="start">Start date</label>
            <input type="date"
            onChange={startDateHandler} 
            id="start" 
            name="start"
            value={startDate}/>
            <label htmlFor="end">End date</label>
            <input type="date"
                onChange={endDateHandler}
                id="end"
                name="end"
                value={endDate} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default DateForm;