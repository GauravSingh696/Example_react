import axios from 'axios';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './app.css'

const App = () => {
  const [ans, SetAns] = useState('');
  const [prompt, SetPrompt] = useState('');

  const generatetext = async () => {
    SetAns('Loading...');

    try {
      const res = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB0PytuN1vVflL0VmYIZu_ah_81lrslHys",
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          contents: [
            {
              parts: [
                {
                  text: `Tell me about the question \"${prompt}\" in a brief`
                }
              ]
            }
          ]
        }
      });
      
      const data = res.data.candidates[0].content.parts[0].text;
      SetAns(data);
    } catch (error) {
      SetAns('❌ gaurav singh Error from the server side...');
    }
  };

  return (
    <>
      <div className='flex flex-col h-screen bg-blue-500 justify-center items-center px-4 py-8'>
        <div className='text-5xl text-white font-bold mb-6'>Chat with AI</div>

        <textarea
          onChange={(e) => SetPrompt(e.target.value)}
          className='bg-blue-300 mt-2 focus:outline-none p-3 rounded-xl text-black w-full max-w-2xl'
          cols={50}
          rows={10}
          placeholder="Enter your question here..."
        ></textarea>

        <button
          onClick={generatetext}
          className='cursor-pointer text-xl mt-4 bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700 transition duration-200'
        >
          Generate Answer
        </button>

        <div className='border-2 p-4 rounded-xl mt-5 text-white w-[70vw] prose prose-invert h-[30vh] overflow-auto text-justify scrollbar-hide'>
          <ReactMarkdown>{ans}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default App;
