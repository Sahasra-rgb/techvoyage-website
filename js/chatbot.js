const input = document.getElementById("user-input");
const messages = document.getElementById("messages");

if (input && messages) {

  input.addEventListener("keypress", function(e) {
    if (e.key === "Enter" && input.value.trim() !== "") {

      const userText = input.value;

      // USER MESSAGE
      const userMsg = document.createElement("p");
      userMsg.innerHTML = "<b>You:</b> " + userText;
      messages.appendChild(userMsg);

      input.value = "";

      // BOT REPLY
      setTimeout(() => {
        const botMsg = document.createElement("p");
        botMsg.innerHTML = "<b>AI:</b> " + getBotReply(userText);
        messages.appendChild(botMsg);

        messages.scrollTop = messages.scrollHeight;
      }, 600);
    }
  });

}

function getBotReply(text) {
  text = text.toLowerCase();

  if (text.includes("price") || text.includes("cost")) {
    return "Our pricing is flexible — project-based, monthly, or yearly.";
  }

  if (text.includes("robot")) {
    return "We offer industrial, cleaning, warehouse, and logistics robots 🤖";
  }

  if (text.includes("hello") || text.includes("hi")) {
    return "Hey there! 👋 What would you like to know?";
  }

  if (text.includes("contact")) {
    return "You can contact us at support@techvoyage.ai 📧";
  }

  return "I’m not fully trained yet 😅 but I’ll help you soon!";
}