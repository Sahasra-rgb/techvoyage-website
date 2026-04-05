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

const liveInput = document.getElementById("live-input");
const liveMessages = document.getElementById("live-messages");

if (liveInput && liveMessages) {

  // fake connection
  setTimeout(() => {
    liveMessages.innerHTML = "";
    addAgentMsg("Hi! 👋 I'm a support agent. How can I help you?");
  }, 1000);

  liveInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter" && liveInput.value.trim() !== "") {

      const text = liveInput.value;

      addUserMsg(text);
      liveInput.value = "";

      // typing delay
      setTimeout(() => {
        addAgentMsg(getReply(text));
      }, 1200);
    }
  });
}

function addUserMsg(text) {
  const msg = document.createElement("p");
  msg.innerHTML = "<b>You:</b> " + text;
  liveMessages.appendChild(msg);
}

function addAgentMsg(text) {
  const msg = document.createElement("p");
  msg.innerHTML = "<b>Agent:</b> " + text;
  liveMessages.appendChild(msg);
}

function getReply(text) {
  text = text.toLowerCase();

  if (text.includes("price")) {
    return "Sure! We offer flexible pricing based on your needs.";
  }

  if (text.includes("robot")) {
    return "We have industrial, cleaning, and warehouse robots available.";
  }

  if (text.includes("help")) {
    return "Of course! Tell me what you need 😊";
  }

  return "Let me check that for you...";
}