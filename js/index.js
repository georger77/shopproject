// setInterval(function() {
//     if (contacts.hidden) {contacts.hidden = false; }
// }else {
//     contacts.hidden = true;
// }
// },1000 );





document.getElementById('page-loaded').innerHTML = (new Date()).toLocaleTimeString();
document.getElementById('btn-promotion').addEventListener('click', checkPromotion);
document.getElementById('send-information').addEventListener('click', answerForMessage);

function checkPromotion() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            document.getElementById('action').innerHTML = data['action'];
        }
    }
    xhr.open('GET', 'promotion.json', true);
    xhr.send();
}
function answerForMessage() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            document.getElementById('answer').innerHTML = data['answer'];
        }
    }
    xhr.open('GET', 'answer-for-send.json', true);
    xhr.send();
}