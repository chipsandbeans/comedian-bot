let jokeIndex = 0;

const jokes = [
  ["Why was 6 afraid of 7?", "Because 7 8 9!"],
  ["Why did the chicken cross the road?", "to get to the other side!"],
];
const chatContent = document.querySelector(".chat-content");

const jokeButton = document.getElementById("requestJokeButton");

function appendBotMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";

  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;

  messageDiv.append(avatar, contentDiv);
  chatContent.appendChild(messageDiv);

  chatContent.scrollTop = chatContent.scrollHeight;
}

function appendUserMessage() {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = "Tell me a joke!";
  messageDiv.append(contentDiv, avatar);
  chatContent.appendChild(messageDiv);
}
appendBotMessage(
  "Hello, I am Funny Bot! I am here to make you laugh. Would you like to hear a joke?",
);

function requestJoke() {
  appendUserMessage();
  if (jokeIndex >= jokes.length) {
    appendBotMessage("Oops, I'm out of jokes for now! Try again later.");
    return;
  }
  jokeButton.style.display = "none";

  setTimeout(function () {
    appendBotMessage("Ok, got one.");
  }, 1000);

  setTimeout(function () {
    appendBotMessage(jokes[jokeIndex][0]);
  }, 1500);

  setTimeout(function () {
    appendBotMessage(jokes[jokeIndex][1]);
    jokeIndex++;
    jokeButton.style.display = "inline-block";
  }, 2000);
}
