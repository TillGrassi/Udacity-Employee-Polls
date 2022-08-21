import { useEffect, useState } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import Table from "react-bootstrap/table";
import sarahedo from "../avatar/avatar1.jpg";
import tylermcginnis from "../avatar/avatar2.jpg";
import mtsamis from "../avatar/avatar3.jpg";
import zoshikanlu from "../avatar/avatar4.jpg";

function Leaderboard({ users, authedUser }) {
  const [getRanking, setGetRanking] = useState([]);
  useEffect(() => {
    setGetRanking(
      users
        .map((user) => {
          const answerCount = Object.keys(user.answers);
          return {
            name: user.name,
            answers: answerCount.length,
            questions: user.questions.length,
            combined: answerCount.length + user.questions.length,
          };
        })
        .sort((a, b) => b.combined - a.combined)
    );
  }, [users, authedUser]);

  return (
    <div>
      <NavBar />
      <Table data-testid="leaderboard" className="Table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Questions</th>
            <th>Answers</th>
          </tr>
        </thead>
        <tbody>
          {getRanking.map((user) => {
            return (
              <tr key={getRanking.indexOf(user)}>
                <td>{getRanking.indexOf(user) + 1}</td>
                <td>
                  {user.name === "Sarah Edo" && (
                    <img src={sarahedo} alt="" className="NavAvatar" />
                  )}
                  {user.name === "Mike Tsamis" && (
                    <img src={mtsamis} alt="" className="NavAvatar" />
                  )}
                  {user.name === "Tyler McGinnis" && (
                    <img src={tylermcginnis} alt="" className="NavAvatar" />
                  )}
                  {user.name === "Zenobia Oshikanlu" && (
                    <img src={zoshikanlu} alt="" className="NavAvatar" />
                  )}
                  {user.name}
                </td>
                <td>{user.questions}</td>
                <td>{user.answers}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users: Object.keys(users).map(function (key) {
      return users[key];
    }),
    authedUser,
  };
};
export default connect(mapStateToProps)(Leaderboard);
