import "./DateCard.css";

function DateCard({ date, todos, isHoliday }) {
  return (
    <li className="date-card">
      <div
        className={isHoliday && "is-holiday"}
        style={{
          backgroundColor:
            date % 7 === 0
              ? "rgb(202, 250, 28)"
              : date % 7 === 1
              ? "rgb(254, 20, 40)"
              : "",
          color: date % 7 === 0 && "black",
        }}
      >
        {date}
      </div>
      <ul>
        {todos?.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </li>
  );
}

export default DateCard;
