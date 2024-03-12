document.addEventListener('DOMContentLoaded', () => {
    const replyForm = document.querySelector('.reply');
    const messageInput = replyForm.querySelector('input');
    const chatScreen = document.querySelector('.main-screen');
  
    replyForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevents form from submitting in the traditional way
  
      const message = messageInput.value.trim();
      if (message) {
        // Create the message elements
        const messageRow = document.createElement('div');
        const messageRowContent = document.createElement('div');
        const messageInfo = document.createElement('div');
        const messageBubble = document.createElement('span');
        const messageTime = document.createElement('span');
        
        // Set classes and content
        messageRow.className = 'message-row message-row--own';
        messageRowContent.className = 'message-row__content';
        messageInfo.className = 'message__info';
        messageBubble.className = 'message__bubble';
        messageTime.className = 'message__time';
  
        // Set current time or a predefined time
        const currentTime = new Date();
        messageTime.textContent = currentTime.getHours() + ':' + (currentTime.getMinutes()<10?'0':'') + currentTime.getMinutes();
  
        messageBubble.textContent = message;
  
        // Append elements
        messageInfo.appendChild(messageBubble);
        messageInfo.appendChild(messageTime);
        messageRowContent.appendChild(messageInfo);
        messageRow.appendChild(messageRowContent);
        chatScreen.appendChild(messageRow);
  
        // Clear the input field and scroll to the new message
        messageInput.value = '';
        chatScreen.scrollTop = chatScreen.scrollHeight;
      }
    });
  });