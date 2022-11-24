
import React, {useState} from 'react';
import { Configuration, OpenAIApi } from "openai";
import ReactLoading from 'react-loading';


const App = () => {

  const [prompt, setPrompt] = useState("");
  const [question, setQuestion] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPEN_AI_KEY
  });
  
  const openai = new OpenAIApi(configuration);

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "256x256",
    });
  
    setResult(res.data.data[0].url);
    setLoading(false);
  };

  const createConversation = async () => {
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: question + "\nAI:",
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });
    console.log(response)
    setAiResponse(response.data.choices[0].text)
  }

	return (
    <div className="app">
        <h2>DALL-E Image generator</h2>

        <textarea
          className="app-input"
          placeholder="Describe an image"
          onChange={(e) => setPrompt(e.target.value)}
          rows="10"
          cols="40"
        />
        <button className="generate-button" onClick={generateImage}>Generate</button>
        
        {loading ? 
        <ReactLoading type="spin" color="black" height={'10%'} width={'10%'} /> : 
        <img className="result-image" src={result} alt="res" />
        }

        <h2>Conversation with an AI</h2>

        <textarea
          className="app-input"
          placeholder="Ask a question"
          onChange={(e) => setQuestion(e.target.value)}
          rows="10"
          cols="40"
        />
        <button onClick={createConversation}>conversation</button>
        <p>{aiResponse}</p>
    </div>
	);
};

export default App;
