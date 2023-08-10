import { CLOSE_ICON, MESSAGE_ICON, styles, aditionalStyles } from "./assets.js";

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
    container.style.position = "fixed";
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

    try {
      const chatbotResponse = await this.sendChatbotRequest(userMessage);
      this.displayMessage(chatbotResponse, 'bot');
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
    }

    messageInput.value = '';
  });

}

async sendChatbotRequest(query) {
  const script = document.getElementById('chatbotParameters');
  const chatbotId = script.getAttribute('chatbotId');
  const userId = script.getAttribute('userId');
  const chatbot_url = 'https://aichain-chat-api-dw2j52225q-uc.a.run.app';
  const endpoint = `https://aichain-chat-api-dw2j52225q-uc.a.run.app/conversation_stream`;
  const secret_token = 'chatpgt-token-xkaos2z';
  const headers = {'token': secret_token};

  const data = {
    "chatbotId": chatbotId,
    "userId": userId,
    'messages': [  
      {'role':'user', 'content': query},
    ],
    stream: true,
    model: 'gpt-3.5-turbo',
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers, 
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let partialData = '';
    let chatbotMessages = [];

    let chatbotMessage = '';

    while (true) {
      const { done, value } = await reader.read();
    
      if (done) {
        break;
      }
    
      partialData += new TextDecoder("utf-8").decode(value);
    
      if (partialData.startsWith("data: ")) {
        const eventData = partialData.substring(6);
    
        if (eventData.includes("content")) {
          const contentStart = eventData.indexOf('"content": "') + 12;
          const contentEnd = eventData.indexOf('",', contentStart);
          if (contentStart !== -1 && contentEnd !== -1) {
            const chatMessage = eventData.substring(contentStart, contentEnd);
            console.log("Chatbot Message:", chatMessage);
            
            // Mostrar el mensaje en tiempo real en la interfaz
            this.displayMessage(chatMessage, 'bot');
          }
        }
    
        partialData = partialData.substring(eventData.length + 7);
      }
    }

    return chatbotMessage;

  } catch (error) {
    throw error;
  }
}

displayMessage(text, sender) {
  const chatBox = document.querySelector('.chat-box');
  const chatContainer = document.querySelector('.chat-container');
  
  // Buscar el último mensaje en el chat
  const lastMessage = chatBox.querySelector('.chat-message:last-child');
  
  // Si el último mensaje es del mismo remitente, agregar al contenido existente
  if (lastMessage && lastMessage.classList.contains(`message-${sender}`)) {
    const messageContent = lastMessage.querySelector('.message-content');
    messageContent.textContent += unescapeStr(text);
  } else {
    // Si es un nuevo remitente o el primer mensaje, crear un nuevo elemento de mensaje
    const chatMessage = document.createElement('div');
    chatMessage.classList.add('chat-message', `message-${sender}`);
    chatMessage.innerHTML = `<div class="message-content">${unescapeStr(text)}</div>`;
    
    chatBox.appendChild(chatMessage);
    chatBox.scrollTop = chatBox.scrollHeight
  }
  chatContainer.scrollTop = chatContainer.scrollHeight;
  chatBox.scrollTop = chatBox.scrollHeight;
}



  createWidgetContent() {
    this.widgetContainer.innerHTML = `
    <header class="widget__header">
      <h2>AI CHAIN</h2>
      <p>Asistente virtual inteligente</p>
    </header>

  <div class="chat-container">
    <div class="chat-box">
      <div class="chat-message message-bot">
        ¿Hola, en qué puedo ayudarte? 😊
      </div>
    </div>
  </div>

    <form class="input-container">
    <div class="inputGroup">
      <input type="text" required="" autocomplete="off" id="messageInput">
      <label for="name">Tu mensaje</label>
    </div>
      <button class="button-45" role="button" type="submit">Enviar</button>
    </form>
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

  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.widgetIcon.classList.add("widget__hidden");
      this.closeIcon.classList.remove("widget__hidden");
      this.widgetContainer.classList.remove("widget__hidden");
    } else {
      this.createWidgetContent();
      this.widgetIcon.classList.remove("widget__hidden");
      this.closeIcon.classList.add("widget__hidden");
      this.widgetContainer.classList.add("widget__hidden");
    }
  }
}

function initializeWidget() {
  return new MessageWidget();
}

initializeWidget();
