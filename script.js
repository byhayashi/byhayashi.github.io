document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    let userAnswered = false;

    function scrollToBottom() {
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function addMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = message;
        chatBox.appendChild(messageElement);
        scrollToBottom();
    }

    function botResponse(userInput) {
        if (userInput.toLowerCase().includes("sentido da vida")) {
            addMessage("Perfeito.");
            addMessage("<a href='home.html'>Isso é o que você busca</a>.");
        } else {
            addMessage("Não temos isso.");
        }
    }

    addMessage("Olá.");
    userInput.focus();

    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const userMessage = userInput.value.trim();
            if (userMessage !== "") {
                addMessage(`Usuário: ${userMessage}`);
                if (!userAnswered) {
                    addMessage("O que você procura?");
                    userAnswered = true;
                } else {
                    botResponse(userMessage);
                }
                userInput.value = "";
            }
        }
    });
});