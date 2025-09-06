document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chatInput');
    const chatBox = document.getElementById('chatBox');

    if (chatInput && chatBox) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const message = chatInput.value.trim();
                if (message !== '') {
                    const msgElem = document.createElement('p');
                    msgElem.textContent = message;
                    chatBox.appendChild(msgElem);
                    chatInput.value = '';
                }
            }
        });
    }
});
