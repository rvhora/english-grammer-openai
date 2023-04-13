import React, { useState } from "react";
import Welcome from "./Welcome";
import Result from "./Result";
import { Configuration, OpenAIApi } from "openai";
import { useGlobalContext } from "./AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { starter } = useGlobalContext();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(true);
  const [qa, setQa] = useState({
    question: "",
    answer: "",
  });

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, // your api key...
  });

  const openAI = new OpenAIApi(configuration);

  const correctGrammar = async () => {
    const response = await openAI.createCompletion({
      model: "text-davinci-003",
      prompt: `Correct this to standard English:\n\n${prompt}`,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    setQa({ ...qa, question: prompt, answer: response.data.choices[0].text });
    setLoading(false);
    setPrompt("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    correctGrammar();
  };

  const notify = () => {
    navigator.clipboard.writeText(qa.answer);
    toast.success("Copied to clipboard!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="container1">
      {starter ? (
        <Welcome />
      ) : (
        <div className="form-div">
          <ToastContainer />
          <div className="row p-5">
            <div className="col-lg-12">
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the text..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                  <button
                    className="input-group-text"
                    id="basic-addon1"
                    type="submit"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {loading || <Result qa={qa} notify={notify} />}
    </div>
  );
};

export default Home;
