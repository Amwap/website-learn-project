function load_content(){
    scene('1');

    // var mail = 
    let div = document.createElement('div');
    div.className = "mail_box";
    div.innerHTML = `<div class="mail"></div><h1 class="mail_text"> hello</h1>`;
    document.querySelector(".message_field").appendChild(div);

};

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
    div.className = "mail_box";
    div.innerHTML = `<div class="mail"></div><h1 class="mail_text">${e.data}</h1>`;
    document.querySelector(".message_field").appendChild(div);

    var block = document.querySelector(".message_field");
    block.scrollTop = block.scrollHeight;
}


function scene(scene_id){
    document.getElementById('1').className = 'holder';
    document.getElementById('2').className = 'holder';
    document.getElementById('3').className = 'holder';
    document.getElementById('4').className = 'holder';
    document.getElementById(scene_id ).className = 'choised_category';
    document.getElementById('showed_text').innerHTML = "";

    let text = { '1': text1,  '2': text2, '3': text3,  '4': text4  }[scene_id];
    document.getElementById('showed_text').innerHTML = text;

    // var a = document.getElementById('showed_text').innerHTML = "";
    // console.log(a);
    
}

