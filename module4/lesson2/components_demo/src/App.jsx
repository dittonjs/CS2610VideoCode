import { ChatMessage } from "./ChatMessage";


export function App() {

  // pretend this data comes from a server :)
  const chatMessages = [
    {id: 1, message: "Hey! How are you?", sender: "Catelyn"},
    {id: 2, message: "Doing well, thanks!", sender: "Joseph"},
    {id: 3, message: "Good to hear! Did, you get the forms I sent you?", sender: "Catelyn"},
    {id: 4, message: "I did, I will fill them out todaym.", sender: "Joseph"},
    {id: 5, message: "Great, thanks!", sender: "Catelyn"},
  ];

  return (
    <main>
      {
        chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              key={chatMessage.id}
              chatMessage={chatMessage}
            />
          )
        })
      }
    </main>
  );
}