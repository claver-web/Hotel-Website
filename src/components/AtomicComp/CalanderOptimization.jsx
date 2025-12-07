
export default function CalanderOptimization({name, value, onChange, classes}){

    const today = new Date();
    const nextYear = new Date();
    nextYear.setFullYear(today.getFullYear() + 1);

    const formatDate = (date) => date.toISOString().split("T")[0];

    return (
        <input type="date"
            name={name}
            id="checkIn"
            min={formatDate(today)}
            max={formatDate(nextYear)}
            value={value}
            onChange={onChange}
            className={classes}
        />
    )
}