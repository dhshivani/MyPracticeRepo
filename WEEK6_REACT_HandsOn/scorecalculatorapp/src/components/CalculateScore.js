import "../Stylesheets/mystyle.css";

const percent = (decimal) => {
    return (decimal * 100).toFixed(2) + "%";
};

const calcScore = (total, goal) => {
    return percent(total / goal);
};

export default function CalculateScore({ Name, School, total, goal }) {
    return (
        <div className="formatstyle">
            <h1>Student Details:</h1>
            <div className="Name">
                <span> Name: </span> <b>{Name}</b>
            </div>
            <div className="School">
                <span> School: </span> <b>{School}</b>
            </div>
            <div className="Total">
                <span> Total: </span> <b>{total}</b>
            </div>
            <div className="Score">
                <span> Score: </span> <b>{calcScore(total, goal)}</b>
            </div>
        </div>
    );
}
