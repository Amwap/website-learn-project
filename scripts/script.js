
var socket = new WebSocket("ws://localhost:5678");
socket.onopen = function(){

    document.querySelector(".chat_input").addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        if(this.value.trim() === ""){
        return false;
        }
        socket.send(this.value.trim());
        this.value = "";
    }
    });
};
socket.onerror = function(){
    console.log('Ошибка при подключении');
};

var p = "";
socket.onmessage = function(e){
    let div = document.createElement('div');
    div.className = "mail";
    div.innerHTML = `<h1> ${e.data} </h1>`;
    document.querySelector(".message_field").appendChild(div);

    var block = document.getElementById("message_field_id");
    block.scrollTop = block.scrollHeight;
};

// открывашка для чатика
function OpenBlock(elm1,elm2){
    display = document.getElementById(elm1).style.display;
    if(display=='none'){
        document.getElementById(elm1).style.display='block';
        document.getElementById(elm2).style.display='none';
    }else{
        document.getElementById(elm1).style.display='none';
        document.getElementById(elm2).style.display='block';
    }
}

function ChatInput() {
var elem = document.getElementById('usersfield');
var descript = elem.textContent;
elem.value = "";
elem.value = "";
}

function pressed(e) {
if ( (window.event ? event.keyCode : e.which) == 13) { 
    ChatInput()
    }
    }
