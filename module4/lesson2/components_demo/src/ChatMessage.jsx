export function ChatMessage(props) {
  return (
    <div className="chat-message" style={{
      fontSize: "3em",
    }}>
      <h3>{props.chatMessage.message}</h3>
      <div>{props.chatMessage.sender}</div>
    </div>
  )
}