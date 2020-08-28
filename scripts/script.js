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

var text1='Other Wave это проект который оценит далеко не каждый. ' +
'У нас нет конкретной цели или чётко поставленного сценария, ' +
'лишь интуитивное понимание в каком направлении развиваться ' +
'и это даёт широкий простор для мысли и творчества! ' +
'Мы не изобретаем велосипед и не смотрим "как там у других" ' +
'[Любые совпадения случайны :)]. ' + 
'Каждое нововведение делается без малейшего понимания как это работает, ' +
'изучается в процессе и доводится до совершенства! Так что для нас данный ' + 
'проект является ещё и платформой саморазвития ' +
'в таких областях как IT, медиа, дизайн и прочих. <br> ' +
'В данный момен мы занимаемся разработкой разговорного чат бота с ' +
'возможной интеграцией в ваши проекты. Если вы владелец тёплого и адекватного ' +
'сообщества или разработчик, желающий одарить своё творение письменной речью, ' +
'мы были бы рады сотрудничать с вами! Подробнее в разделе "Интеграция"';

var text2 = "To Order";
var text3 = "Integration";
var text4 = "about aura";