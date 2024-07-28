import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import DotLoader from "react-spinners/PacmanLoader";
import SuggestionContent from "./SuggestionContent";
import Navbar from "./Navbar";
import Send from "../assets/Send.png";
import Plus from "../assets/Plus.png";


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
            className=" absolute left-[71vw] top-[2.1vh] md:left-[70vw] md:top-[4vh] lg:left-[86.5vw] lg:top-[4.3vh]"
            onClick={() => {
              setSend(false);
              setQuestion("");
              setInput("");
            }}
          >
            <img src={Plus} className=" w-[10vw] md:w-[9vw] lg:w-[5vw]" />
          </span>
        </>
      )}
      {send === true ? (
        <div className=" overflow-y-scroll ml-[5vw] mt-[2vh] pr-[3vw] w-[90vw] h-[68.1vh] md:h-[64vh] md:text-[4vw] lg:w-[90vw] lg:h-[64vh] lg:text-[1.5vw] lg:no-scrollbar lg:ml-[3vw] 4k:mt-[0vh]">
          <div className="flex flex-col gap-[1vh] lg:gap-[3vh]">
            <p className=" text-[6vw] font-bold tracking-wide lg:text-[2.5vw] lg:tracking-wider xl:text-[3vw] 4k:text-[3.5vw]">
              {question}
            </p>
            {answer !== "" ? (
              <p className=" pb-5 lg:tracking-wide lg:pb-[8vh] xl:text-[2vw] 4k:text-[2.5vw]">
                <ReactMarkdown>{answer}</ReactMarkdown>
              </p>
            ) : (
              <DotLoader
                className=" left-24 top-28 md:left-64 md:top-[10vh] lg:top-[10vh] lg:left-[40vw] 4k:left-[43vw] 4k:top-[15vh]"
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
          <div className="pt-[5vh] pl-[5vw] flex flex-col gap-1 font-semibold leading-none lg:pt-[0vh] lg:pl-[2vw] xl:pt-[2vh] 4k:pt-[2vh]">
            <p
              className=" bg-gradient-to-r from-hellocolor1 to-hellocolor2 bg-clip-text text-transparent text-[13vw] lg:text-[6vw] lg:w-[40vw]"
              style={{
                color: "transparent",
              }}
            >
              Hello,Friends
            </p>
            <p className=" text-dimcolor text-[12vw] lg:text-[5vw]">
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
        className=" PROMPT fixed bottom-[3vh] left-[6vw] md:left-[3vw] md:bottom-[1.5vh] lg:bottom-2 xl:bottom-[2vh] 4k:bottom-[3vh]"
        style={{
          boxShadow: " 1px 1px 15px 15px rgb(19,19,20)",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleEnter}
          className=" propmt-input bg-promptbg py-4 pl-5 pr-[14vw] -ml-2 rounded-full border-none outline-none w-[22.55rem] md:w-[95vw] md:py-[2.5vh] md:pl-[5vw] md:text-[4vw] lg:w-[73rem] lg:text-xl lg:pl-8 lg:pr-[8vw] xl:w-[95vw] xl:py-[3.5vh] xl:text-[2vw] 4k:pl-[3vw] "
          type="text"
          placeholder="Enter a prompt here"
        />
        {input !== "" ? (
          <img
            src={Send}
            onClick={() => {
              setSend(true);
              setAnswer("");
              setQuestion(input);
              setQuestionsArray([...questionsArray, input].reverse());
            }}
            className="  w-[5vw] absolute left-[78vw] bottom-[7.2vh] md:left-[84vw] md:bottom-[10vh] lg:w-[2vw] lg:left-[88vw] lg:bottom-[8.5vh] xl:w-[2.8vw] xl:left-[88.5vw] xl:bottom-[6.3vh] 4k:bottom-[7.3vh]"
          />
        ) : (
          ""
        )}
        <p className=" text-promptText text-[3vw] mt-[1vh] md:text-[2.8vw] lg:text-base lg:tracking-wide lg:ml-24 xl:text-[1.5vw] xl:ml-[2.5vw] 4k:mt-[3vh] 4k:text-[1.55vw] 4k:ml-[1.5vw]">
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
