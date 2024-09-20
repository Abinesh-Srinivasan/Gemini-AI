import axios from "axios";
const ApiAnswer = ({ input }) => {
  const ApiResponse = async () => {
    const response = await axios({
      url: apiUrl,
      method: "post",
      data: {
        contents: [{ parts: [{ text: input }] }],
      },
    });
    const Answer =
      response["data"]["candidates"][0]["content"]["parts"][0]["text"];
    console.log(Answer);
  };
  ApiResponse();
};

export default ApiAnswer;
