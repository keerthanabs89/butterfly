document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chatInput');
    const chatBox = document.getElementById('chatBox');

    function addMessage(text, sender = 'user') {
        const msgElem = document.createElement('p');
        msgElem.textContent = (sender === 'user' ? "You: " : "Bot: ") + text;
        msgElem.style.fontWeight = sender === 'bot' ? 'bold' : 'normal';
        chatBox.appendChild(msgElem);
        chatBox.scrollTop = chatBox.scrollHeight; // auto-scroll
    }

    function botReply(userMessage) {
        // Simple AI-like logic
        let reply = "I didn't understand that.";
        const msg = userMessage.toLowerCase();

        if (msg.includes('hi') || msg.includes('hello')) reply = "Hello! How can I help you today?";
        else if (msg.includes('how are you')) reply = "I'm just a bot, but I'm doing fine!";
        else if (msg.includes('help')) reply = "Sure! Tell me what you need help with.";
        else if (msg.includes('thank')) reply = "You're welcome!";
        else reply = "That's interesting!";

        setTimeout(() => addMessage(reply, 'bot'), 500); // simulate typing delay
    }

    if (chatInput && chatBox) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const message = chatInput.value.trim();
                if (message !== '') {
                    addMessage(message, 'user');
                    chatInput.value = '';
                    botReply(message);
                }
            }
        });
    }
});
