
// chatBox
// Collapsible
let chatbotToggler = document.querySelector('.chatbot-toggler');
let chatBarCollapsible = document.querySelector('.chat-bar-collapsible');

chatbotToggler.addEventListener('click', () => {
    chatBarCollapsible.classList.toggle('opsc');
    chatbotToggler.classList.toggle('iconHS');
});

let collapsible = document.querySelector('.collapsible span');
collapsible.addEventListener('click', () => {
    chatBarCollapsible.classList.remove('opsc');
});

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hello Sir";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let textLoC = userText.toLowerCase().trim();
    let botResponse = getBotResponse(textLoC);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000);

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText('<i class="fa-solid fa-heart" style="font-size: 1.5rem;color: red;"></i>');

    setTimeout(() => {
        let replyHert = '<p class="botText"><span> Thank You </span></p>';
        $("#chatbox").append(replyHert);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }, 1000);
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});