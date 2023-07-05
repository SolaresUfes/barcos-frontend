import Image from "next/image";
import { useState } from "react"
import { FiSend } from "react-icons/fi";

interface MessageProps {
  question: string;
  answer: string;
}

interface ChatProps {
  dadosBarco?: string;
}

export function Chat({ dadosBarco }: ChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if(isLoading || input == "") return;

    let chatArea = document.getElementById("chat-area");
    setMessages(prevMessages => [...prevMessages, { question: input, answer: '' }]);
    if(chatArea) chatArea.scrollTop = chatArea?.scrollHeight;

    const promptText = `Você é um analisador de barcos eletricos solares. Analisando o barco "Poente" com os ultimos dados coletados e o padrão esperado responda a pergunta abaixo:

Dados:
${dadosBarco}

Padrão esperado para o barco "Poente":
correnteMotor: 85A
correnteBaterias: 90A;
tensaoSaidaMPPT: 48.0V
tensaoEntradaMPPT: 60V
tensaoAlimentacaoPCB: 12V
velocidadeBarco: 7 nós 

Pergunta: ${input}`

setInput("");

    const response = await fetch(`https://barcos-backend.onrender.com/gpt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        prompt: promptText
      }),
    });
  
    if (!response.body) {
      throw new Error('ReadableStream not supported.');
    }
  
    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    setIsLoading(true);
  
    let result = '';
  
    reader.read().then(function processText({ done, value }) {
      if (done) {
        console.log('Stream complete.');
        setIsLoading(false);
        return;
      }
  
      result += decoder.decode(value);
      if(chatArea) chatArea.scrollTop = chatArea?.scrollHeight;

      setMessages(prevMessages => {
        let messages = [...prevMessages];
        messages[messages.length - 1].answer = result;
        return messages;
      });
  
      reader.read().then(processText);
    });
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="w-full max-w-[330px] h-[600px] bg-slate-900 text-white rounded shadow-lg p-5 overflow-y-scroll flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">PoenteGPT</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 rounded-full bg-red-500 text-white">
              X
            </button>
          </div>
          <div className="flex flex-col mt-5 flex-grow overflow-y-scroll gap-4" id="chat-area">
            {messages?.map((message, index) => (
              <div key={index} className="flex flex-col bg-slate-800 p-3 rounded gap-1">
                <p><strong></strong> {message.question}</p>
                {message.answer && <p><strong>PoenteGPT:</strong> {message.answer}</p>}
              </div>
            ))}
          </div>
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-row mt-4 items-center justify-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="w-full min-w-[250px] rounded border-gray-300 px-3 py-2 text-black"
              placeholder="Digite uma mensagem"
              maxLength={2000}
            />
            <button 
              type="submit"
              className={`w-full bg-blue-500 text-white p-2 rounded ${isLoading ? 'opacity-50 cursor-not-allowed animate-pulse' : ''}`}
              disabled={isLoading}
            >
              <FiSend size={18} color="#FFF" />
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-2xl border-2 border-gray-600">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="Chat"
          />
        </button>
      )}
    </div>
  )
}
