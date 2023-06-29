'use client'
import { useState } from "react"

interface MessageProps {
  question: string;
  answer: string;
}

export function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<MessageProps[]>([]);
  
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const promptText = `Você é um analisador de barcos eletricos solares. Analisando o barco "Poente" com os ultimos 10s de dados coletados e o padrão esperado responda a pergunta abaixo:

Dados:
correnteMotor,correnteBaterias,temperatura,umidade,tensaoAlimentacaoPCB,estadoStringSolar1,estadoStringSolar2,tensaoSaidaMPPT,tensaoEntradaMPPT,correnteMPPT,updateAt,velocidadeBarco
80.5,90.0,30.0,70,12,1,1,48,50,20,22/06/2023 22:09:35,1.43
81.5,91.0,30.5,71,12.1,1,1,48.1,50.1,20.1,22/06/2023 22:09:36,1.44
82.5,92.0,31.0,72,12.2,1,1,48.2,50.2,20.2,22/06/2023 22:09:37,1.45
83.5,93.0,31.5,73,12.3,1,1,48.3,50.3,20.3,22/06/2023 22:09:38,1.46
84.5,94.0,32.0,74,12.4,1,1,48.4,50.4,20.4,22/06/2023 22:09:39,1.47
85.5,95.0,32.5,75,12.5,1,1,48.5,50.5,20.5,22/06/2023 22:09:40,1.48
86.5,96.0,33.0,76,12.6,1,1,48.6,50.6,20.6,22/06/2023 22:09:41,1.49
87.5,97.0,33.5,77,12.7,1,1,48.7,50.7,20.7,22/06/2023 22:09:42,1.50
88.5,98.0,34.0,78,12.8,1,1,48.8,50.8,20.8,22/06/2023 22:09:43,1.51
89.5,99.0,34.5,79,12.9,1,1,48.9,50.9,20.9,22/06/2023 22:09:44,1.52

Padrão esperado:
correnteMotor: 85A
tensaoSaidaMPPT:  48.0V
tensaoEntradaMPPT: 60V

Pergunta: ${input}`

    const response = await fetch(`https://barcos-backend.onrender.com/gpt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        prompt: promptText
      }),
    });

    setMessages(prevMessages => [...prevMessages, { question: input, answer: '' }]);
  
    if (!response.body) {
      throw new Error('ReadableStream not supported.');
    }
  
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
  
    let result = '';
  
    reader.read().then(function processText({ done, value }) {
      if (done) {
        console.log('Stream complete.');
        return;
      }
  
      result += decoder.decode(value);
      console.log(result);

      setMessages(prevMessages => {
        let messages = [...prevMessages];
        messages[messages.length - 1].answer = result;
        return messages;
      });
  
      reader.read().then(processText);
    });

    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5">
      {isOpen ? (
        <div className="w-96 h-[600px] bg-slate-900 text-white rounded shadow-lg p-5 overflow-y-scroll flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">PoenteGPT</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 rounded-full bg-red-500 text-white">
              X
            </button>
          </div>
          <div className="flex flex-col mt-5 flex-grow overflow-y-scroll gap-4">
            {messages?.map((message, index) => (
              <div key={index} className="flex flex-col bg-slate-800 p-3 rounded gap-1">
                <p><strong></strong> {message.question}</p>
                <p><strong>PoenteGPT:</strong> {message.answer}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="w-full rounded border-gray-300 px-3 py-2 text-black"
              placeholder="Digite uma mensagem"
            />
            <button 
              type="submit"
              className="mt-3 w-full bg-blue-500 text-white p-2 rounded">
              Enviar
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
          P
        </button>
      )}
    </div>
  )
}
