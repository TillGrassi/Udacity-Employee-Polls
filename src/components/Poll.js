import { Link } from "react-router-dom";

function Poll({ question }) {
  const humanDateFormat = () => {
    const dateObj = new Date(question.timestamp);
    return dateObj.toLocaleString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Link to={`/questions/${question.id}`} className="Poll Link">
      <h3>{question.author}</h3>
      <p>{humanDateFormat()}</p>
    </Link>
  );
}
export default Poll;
