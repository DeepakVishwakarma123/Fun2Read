import { useEffect, useState } from "react";
import FetchApiGet from "../Hooks/FetchApiGet";

function HistoryPage() {

  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    FetchApiGet("http://localhost:4002/api/v1/quiz/getallquiz")
      .then((res) => {
        setQuizzes(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 bg-[#131B2E]">
      <h1 className="text-xl font-bold mb-4  text-white">Quiz History</h1>

      {quizzes.map((q, index) => (
        <div key={q._id} className="border p-4 mb-3 rounded-lg bg-[#2D3748] text-gray-500 font-semibold">

          <p><b>Quiz {index + 1}</b></p>

          <p>
            Score: {q.score} / {q.questions.length}
          </p>

          <p>
            Total Questions: {q.questions.length}
          </p>

          <p>
            Date: {new Date(q.createdAt).toLocaleString()}
          </p>

        </div>
      ))}
    </div>
  );
}

export default HistoryPage;