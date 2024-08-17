import { useState } from 'react'
import axios from 'axios'
function App() {
  const [question, setQuestion] = useState("");
  const[answer, setAnswer]=useState("")

  async function generateResult(){
    setAnswer("loading.......")
      const response= await  axios ({
        
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB49urnOpGjfrbaVCWtthClPy8JeaH8fqw",
       
       method:"post",
        data :
          {"contents":[{"parts":[{"text":question}]}]},
        
      })
      setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])

  };

  return (
    <>
      <h1>Sasta GPT !</h1>
      <textarea value={question} onChange={(e)=>setQuestion(e.target.value)}></textarea>
      <button onClick={generateResult}>Generate Answer</button> 
      <p>{answer}</p>
    </>
  )
}

export default App
