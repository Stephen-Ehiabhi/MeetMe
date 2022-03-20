import React from "react";

const Message = () => {

  function EnableSockets (){
         var socket = io("https://localhost:8000");

         const form = document.querySelector('.send-message')
         const msgI = document.querySelector('.message-input')
         const chatBox = document.querySelector('.chat-box');
         const status = document.querySelector('.status');
       
         form.addEventListener('submit', (e) => handleSubmit(e))
       
         function handleSubmit(e) {
           e.preventDefault()
           const message = msgI.value;
           appendMessage("You: " + message)
           socket.emit("message", message)
           msgI.value = "";
         }
       
         socket.on("user-connected", (msg) => {
           status.innerText = msg;
         })
       
         socket.on("user-disconnected", (msg) => {
           status.innerText = msg;
         })
       
         socket.on("chat-message", (msg) => {
           appendMessage(msg.message)
         })
       
         function appendMessage(message) {
           const messageElement = document.createElement('div');
           const pElement = document.createElement('p');
           pElement.innerText = message;
           messageElement.appendChild(pElement);
           chatBox.append(messageElement);
         }
  }

  EnableSockets();

  return (
    <>
      <p className="status"></p>
      <div className="chat-box"></div>
      <form className="send-message">
        <input className="message-input" />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

exports.default = Message;
