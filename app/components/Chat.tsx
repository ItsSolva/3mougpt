import { useState } from "react";
import { useChat } from "ai/react";

const Chat = () => {
  const [loading, setLoading] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    handleSubmit(event);
    setLoading(false);
  };

  const userColors = {
    user: "#34d865",
    assistant: "#3488d8",
    function: "#fff",
    system: "#fff",
    tool: "#fff",
    data: "#fff",
  };

  return (
    <>
      <div className="response">
        {messages.map((m) => (
          <div key={m.id} className="chat-line">
            <span style={{ color: userColors[m.role] }}>
              {m.role === "user" ? "You: " : "👳🏻3mouGPT: "}
            </span>
            {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit} className="mainForm">
        <input
          name="input-field"
          placeholder="Say anything"
          onChange={handleInputChange}
          value={input}
        />
        <button type="submit" className="mainButton" disabled={loading}>
          SEND
          <img
            src="/send-icon.svg"
            alt="Send Icon"
            style={{ width: "16px", height: "16px", marginLeft: "8px" }}
          />
        </button>
      </form>
    </>
  );
};

export default Chat;
