import { CLOSE_ICON, MESSAGE_ICON, styles, aditionalStyles, chatbotWindowName, welcomeMessage, placeHolder, iconUrl } from "./assets.js";

function unescapeStr(str) {
  return str.replace(/\\u[\dA-F]{4}/gi, function (match) {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
  });
}

class MessageWidget {
  constructor(position = "bottom-right") {
    this.position = this.getPosition(position);
    this.open = false;
    this.initialize();
    this.injectStyles();
    this.messages = [];
  }

  position = "";
  open = false;
  widgetContainer = null;

  getPosition(position) {
    const [vertical, horizontal] = position.split("-");
    return {
      [vertical]: "30px",
      [horizontal]: "30px",
    };
  }

  async initialize() {
    const container = document.createElement("div");
    // container.style.position = "fixed";
    container.style.zIndex = "9999";
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );
    document.body.appendChild(container);

    const buttonContainer = document.createElement("button");
    buttonContainer.classList.add("button__container");

    const widgetIconElement = document.createElement("span");
    widgetIconElement.innerHTML = MESSAGE_ICON;
    widgetIconElement.classList.add("widget__icon");
    this.widgetIcon = widgetIconElement;

    const closeIconElement = document.createElement("span");
    closeIconElement.innerHTML = CLOSE_ICON;
    closeIconElement.classList.add("widget__icon", "widget__hidden");
    this.closeIcon = closeIconElement;

    buttonContainer.appendChild(this.widgetIcon);
    buttonContainer.appendChild(this.closeIcon);
    buttonContainer.addEventListener("click", this.toggleOpen.bind(this));

    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__hidden", "widget__container");

    this.createWidgetContent();

    container.appendChild(this.widgetContainer);
    container.appendChild(buttonContainer);
    const sendButton = container.querySelector('.button-45');

    sendButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const messageInput = container.querySelector('#messageInput');
      const userMessage = messageInput.value.trim();

      if (userMessage === '') return;

      this.displayMessage(userMessage, 'user');
      this.sendMessage(userMessage);
      
      messageInput.value = '';
    });

    // sendButton.addEventListener('click', async (event) => {
    // event.preventDefault();
    // const messageInput = container.querySelector('#messageInput');
    // const userMessage = messageInput.value.trim();

    // if (userMessage === '') return;

    // this.displayMessage(userMessage, 'user');

    // try {
    //   const chatbotResponse = await this.sendChatbotRequest(userMessage);
    //   this.displayMessage(chatbotResponse, 'bot');
    // } catch (error) {
    //   console.error('Error fetching chatbot response:', error);
    // }

    // messageInput.value = '';
  // });

}

async createChatbotSession() {
  const url = "https://dev-aichain-chatbot-upload-ydpzijw4tq-uc.a.run.app/chatbot/sessions";
  const script = document.getElementById('chatbotParameters')
  const chatbotId = script.getAttribute('chatbotId');
  const channel_type = "WEB";
  const userId = script.getAttribute('userId');
  const chatbotSessionId = localStorage.getItem('chatbotSessionId');
  const sessionId = null;
  this.messages.length = 0;

  const data = {
    chatbot_id: chatbotId,
    channel_type: channel_type,
    user_id: userId,
    session_id: chatbotSessionId,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create chatbot session");
    }

    const responseData = await response.json();
    const chatMessages = responseData.messages;

    for (const messageId in chatMessages) {
      const message = chatMessages[messageId];
      this.messages.push(message);
    }
    this.messages.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
    for (const message of this.messages) {
      const sender = message.reaction === "NORMAL" ? "bot" : "user";
      this.displayPreviousMessages(message.question, "user");
      this.displayPreviousMessages(message.answer, "bot");
    }

    this.chatbotSessionId = responseData.session_id;
    localStorage.setItem('chatbotSessionId', this.chatbotSessionId);
  } catch (error) {
    console.error("Error creating chatbot session:", error);
  }
}

// async sendChatbotRequest(query) {
//   const script = document.getElementById('chatbotParameters');
//   const chatbotId = script.getAttribute('chatbotId');
//   const userId = script.getAttribute('userId');
//   const chatbot_url = 'https://dev-aichain-chatbot-users-qd5u6w2c6q-uc.a.run.app';
//   const endpoint = `https://aichain-chat-api-v2-qd5u6w2c6q-uc.a.run.app/conversation_stream`;
//   const secret_token = 'chatpgt-token-xkaos2z';
//   const headers = {'token': secret_token};
//   const chatbotSessionId = localStorage.getItem('chatbotSessionId');

//   const data = {
//     question: query,
//     metadata: {
//       "userId": userId,
//       "sessionId": "12345",
//       "chatbotId": chatbotId,
//       "channelType": "WEB"
//     }
//   };

//   try {
//     const response = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         ...headers, 
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const reader = response.body.getReader();
//     const decoder = new TextDecoder("utf-8");
//     let partialData = '';
//     let chatbotMessages = [];

//     let chatbotMessage = '';
//     let finalMessage = '';

//     while (true) {
//       const { done, value } = await reader.read();
    
//       if (done) {
//         break;
//       }
    
//       partialData += new TextDecoder("utf-8").decode(value);
    
//       if (partialData.startsWith("data: ")) {
//         const eventData = partialData.substring(6);
    
//         if (eventData.includes("content")) {
//           const contentStart = eventData.indexOf('"content": "') + 12;
//           const contentEnd = eventData.indexOf('",', contentStart);
//           if (contentStart !== -1 && contentEnd !== -1) {
//             const chatMessage = eventData.substring(contentStart, contentEnd);
//             console.log("Chatbot Message:", chatMessage);
//             finalMessage += chatMessage;
//             // Mostrar el mensaje en tiempo real en la interfaz
//             this.displayMessage(chatMessage, 'bot');
//           }
//         }
    
//         partialData = partialData.substring(eventData.length + 7);

//       }
//     }
//     this.addMessageSession(query, finalMessage);
//     console.log*("Final Message:", finalMessage);
//     return chatbotMessage;

//   } catch (error) {
//     throw error;
//   }
// }

async addMessageSession(question, answer) {
  const decodedAnswer = unescapeStr(answer);
  const url = "https://aichain-chat-api-v2-qd5u6w2c6q-uc.a.run.app/add_message";
  const script = document.getElementById('chatbotParameters')
  const chatbotId = script.getAttribute('chatbotId');
  const channel_type = "WEB";
  const userId = script.getAttribute('userId');
  const chatbotSessionId = localStorage.getItem('chatbotSessionId');
  const secret_token = 'chatpgt-token-xkaos2z';
  const headers = {'token': secret_token};
  const sessionId = null;

  const data = {
    question: question,
    answer: decodedAnswer,
    metadata: {
      chatbotId: chatbotId,
      channelType: channel_type,
      userId: userId,
      sessionId: chatbotSessionId,
    }
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        ...headers, 
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create chatbot session");
    }

    const responseData = await response.json();

  } catch (error) {
    console.error("Error :", error);
  }
}

// displayMessage(text, sender) {
//   const chatBox = document.querySelector('.chat-box');
//   const chatContainer = document.querySelector('.chat-container');
  
//   // Buscar el último mensaje en el chat
//   const lastMessage = chatBox.querySelector('.chat-message:last-child');
  
//   // Si el último mensaje es del mismo remitente, agregar al contenido existente
//   if (lastMessage && lastMessage.classList.contains(`message-${sender}`)) {
//     const messageContent = lastMessage.querySelector('.message-content');
//     messageContent.textContent += unescapeStr(text);
//   } else {
//     // Si es un nuevo remitente o el primer mensaje, crear un nuevo elemento de mensaje
//     const chatMessage = document.createElement('div');
//     chatMessage.classList.add('chat-message', `message-${sender}`);
//     chatMessage.innerHTML = `<div class="message-content">${unescapeStr(text)}</div>`;
    
//     chatBox.appendChild(chatMessage);
//     chatBox.scrollTop = chatBox.scrollHeight
//   }
//   chatContainer.scrollTop = chatContainer.scrollHeight;
//   chatBox.scrollTop = chatBox.scrollHeight;
  
// }

createWebSocketConnection() {
  this.socket = new WebSocket('https://dev-aichain-chatbot-messenger-ydpzijw4tq-uc.a.run.app/web/webhook');

  this.socket.onopen = () => {
    console.log('WebSocket connection opened');
  };

  this.socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.status) {
      this.displayMessage(data.answer, 'bot');
    }
  };

  this.socket.onclose = () => {
    console.log('WebSocket connection closed');
  };

  this.socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };
}

sendMessage(query) {
  const script = document.getElementById('chatbotParameters');
  const chatbotId = script.getAttribute('chatbotId');
  const userId = script.getAttribute('userId');
  const chatbotSessionId = localStorage.getItem('chatbotSessionId');

  const data = {
    session_id: chatbotSessionId,
    owner_id: userId,
    user_id: 'xd-test-123',
    text: query,
  };

  this.socket.send(JSON.stringify(data));
}

displayMessage(text, sender) {
  const chatBox = document.querySelector('.chat-box');
  const chatContainer = document.querySelector('.chat-container');

  const chatMessage = document.createElement('div');
  chatMessage.classList.add('chat-message', `message-${sender}`);
  chatMessage.innerHTML = `<div class="message-content">${unescapeStr(text)}</div>`;

  chatBox.appendChild(chatMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

displayPreviousMessages(text, sender) {
  const chatBox = document.querySelector('.chat-box');
  const chatContainer = document.querySelector('.chat-container');
  
    const chatMessage = document.createElement('div');
    chatMessage.classList.add('chat-message', `message-${sender}`);
    chatMessage.innerHTML = `<div class="message-content">${unescapeStr(text)}</div>`;
    
    chatBox.appendChild(chatMessage);
    chatBox.scrollTop = chatBox.scrollHeight
  chatContainer.scrollTop = chatContainer.scrollHeight;
  chatBox.scrollTop = chatBox.scrollHeight;
  
}



  createWidgetContent() {
    this.widgetContainer.innerHTML = `
    <header class="widget__header">
      <h2>${chatbotWindowName}</h2>
      <img class='icon-style' src=${iconUrl}></img>
    </header>

    <div class="chat-container">
      <div class="chat-box">
        <div class="chat-message message-bot">
          ${welcomeMessage}
        </div>
      </div>
    </div>

    <form class="input-container">
    <div class="inputGroup">
      <input type="text" required="" autocomplete="off" id="messageInput" class="form-input">
      <label for="name">${placeHolder}</label>
    </div>
    <button class="button-45" role="button" type="submit">Enviar</button>
    </form>
    <footer class="poweredByContainer">
      <p class="footer__text">Powered by <a class='nubot-link' href='youtube.com' target='_blank'>nubot.io</a></p>
    </footer>
    `;
  }


  injectStyles() {
    const styleTag = document.createElement("style");
    const secondStyleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
    secondStyleTag.innerHTML = aditionalStyles.replace(/^\s+|\n/gm, "");

    document.head.appendChild(styleTag);
    document.body.appendChild(secondStyleTag);
  }

  // toggleOpen() {
  //   this.open = !this.open;
  //   if (this.open) {
  //     this.widgetIcon.classList.add("widget__hidden");
  //     this.closeIcon.classList.remove("widget__hidden");
  //     this.widgetContainer.classList.remove("widget__hidden");
  //     this.createChatbotSession();
  //   } else {
  //     this.createWidgetContent();
  //     this.widgetIcon.classList.remove("widget__hidden");
  //     this.closeIcon.classList.add("widget__hidden");
  //     this.widgetContainer.classList.add("widget__hidden");
  //   }
  // }

  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.widgetIcon.classList.add("widget__hidden");
      this.closeIcon.classList.remove("widget__hidden");
      this.widgetContainer.classList.remove("widget__hidden");
      this.createWebSocketConnection();  // Create WebSocket connection when widget is opened
      this.createChatbotSession();
    } else {
      this.createWidgetContent();
      this.widgetIcon.classList.remove("widget__hidden");
      this.closeIcon.classList.add("widget__hidden");
      this.widgetContainer.classList.add("widget__hidden");
      if (this.socket) {
        this.socket.close();  // Close WebSocket connection when widget is closed
      }
    }
  }
}

function initializeWidget() {
  return new MessageWidget();
}

initializeWidget();