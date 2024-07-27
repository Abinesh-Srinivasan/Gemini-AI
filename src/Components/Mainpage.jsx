import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import DotLoader from "react-spinners/PacmanLoader";
import SuggestionContent from "./SuggestionContent";
import Navbar from "./Navbar";

const Mainpage = () => {
  const [input, setInput] = useState("");
  const [questionsArray, setQuestionsArray] = useState([]);
  const [questionFromNavbar, setQuestionFromNavbar] = useState("");
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [send, setSend] = useState(false);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#c4c4c4");
  const suggestionItems = [
    "Suggest me the Best Books for read to maintain a good Physical and Mental health",
    "How to crack the Job at Top Product Based Companies like FAANG and Microsoft",
    "Explain the full process of how Stock Market works and how to invest in the Stock Market",
    "What is Lok Sabha and Rajya Sabha. Explain how Indian Government is running",
  ];
  const handleInput = (suggestion) => setInput(suggestion);
  const handleQuestionFromNavbar = (qnFrNav) => setQuestionFromNavbar(qnFrNav);

  useEffect(() => {
    const ApiResponse = async () => {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAL5CTqVZZfIg8IyM1OkCZkF7vSqSOXr9k",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });
      setInput("");
      const Answer =
        response["data"]["candidates"][0]["content"]["parts"][0]["text"];
      console.log(Answer);
      setAnswer(Answer);
    };
    ApiResponse();
  }, [question]);

  useEffect(() => {
    setAnswer("");
    setQuestion(questionFromNavbar);
    questionFromNavbar !== "" && setSend(true);
  }, [questionFromNavbar]);

  const handleEnter = (e) => {
    if (e.key === "Enter" && input !== null) {
      setAnswer("");
      setSend(true);
      setQuestion(input);
      setQuestionsArray([...questionsArray, input].reverse());
    }
  };

  return (
    <div>
      <Navbar
        sidebarQuestions={questionsArray}
        questionFromNav={handleQuestionFromNavbar}
      />
      {question !== "" && (
        <>
          <span
            className=" absolute rounded-full p-[0.65rem] bg-plusbg left-[17.5rem] top-[1.10rem] md:left-[41rem] lg:left-[68.5rem] lg:top-[1.20rem]"
            onClick={() => {
              setSend(false);
              setQuestion("");
              setInput("");
            }}
          >
            <svg
              width="19px"
              height="19px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#e3e3e4,"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 12H20M12 4V20"
                  stroke="#e3e3e4"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
        </>
      )}
      {send === true ? (
        <div className=" overflow-y-scroll ml-[5vw] mt-[2vh] pr-[3vw] w-[90vw] h-[68.1vh] md:h-[80vh] md:text-[4vw] lg:w-[90vw] lg:h-[64vh] lg:text-[1.5vw] lg:no-scrollbar lg:ml-[3vw]">
          <div className="flex flex-col gap-[1vh] lg:gap-[3vh]">
            <p className=" text-[6vw] font-bold tracking-wide lg:text-[2.5vw] lg:tracking-wider">
              {question}
            </p>
            {answer !== "" ? (
              <p className=" pb-5 lg:tracking-wide">
                <ReactMarkdown>{answer}</ReactMarkdown>
              </p>
            ) : (
              <DotLoader
                className=" left-24 top-28 md:left-64 md:top-8 lg:top-16 lg:left-[29rem]"
                color={color}
                loading={loading}
                size={60}
                speedMultiplier={1.25}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="pt-[5vh] pl-[5vw] flex flex-col gap-1 font-semibold leading-none md:pt-[8vh] lg:pt-[2vh] lg:pl-[2vw]">
            <p
              className=" bg-gradient-to-r from-hellocolor1 to-hellocolor2 bg-clip-text text-transparent text-[13vw] lg:text-[6vw] lg:w-[40vw]"
              style={{
                color: "transparent",
              }}
            >
              Hello,Friends
            </p>
            <p className=" text-dimcolor text-[9vw] leading-10 md:leading-none lg:text-[5vw]">
              How can I help you today?
            </p>
          </div>
          <SuggestionContent
            suggestionItems={suggestionItems}
            handleInput={handleInput}
          />
        </>
      )}
      <div
        className=" PROMPT fixed bottom-5 left-6 lg:bottom-2"
        style={{
          boxShadow: " 1px 1px 15px 15px rgb(19,19,20)",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleEnter}
          className=" propmt-input bg-promptbg py-4 pl-5 pr-20 -ml-2 rounded-full border-none outline-none w-[22.55rem] md:w-[46em] lg:w-[73rem] lg:text-xl lg:pl-8"
          type="text"
          placeholder="Enter a prompt here"
        />
        {input !== "" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-send"
            viewBox="0 0 16 16"
            onClick={() => {
              setSend(true);
              setAnswer("");
              setQuestion(input);
              setQuestionsArray([...questionsArray, input].reverse());
            }}
            className="w-4 absolute rotate-45 left-[19rem] bottom-[3.9rem] md:left-[42rem] md:bottom-[2.9rem] lg:left-[69rem] lg:bottom-[3.55rem]"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
          </svg>
        ) : (
          ""
        )}
        <p className=" text-promptText text-xs mt-3 lg:text-base lg:tracking-wide lg:ml-24">
          Gemini may display inaccurate info, including about people, so
          double-check its responses.{" "}
          <a href="https://support.google.com/gemini/answer/13594961?hl=en">
            <span className="underline"> Your privacy and Gemini Apps</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Mainpage;
