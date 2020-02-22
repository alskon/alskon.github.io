//callback form


const buttonContact = document.getElementById('button-contact');
const messSendForm = document.getElementById('mess-send-form')
buttonContact.addEventListener('click', saveToDB);

function saveToDB () {
    const guestName = document.getElementById('guest-name').value.trim();
    const guestEmail = document.getElementById('guest-email').value.trim();
    const guestMessage = document.getElementById('guest-text').value.trim();
    const msgId = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    const successMes = 'Сообщение успешно отправлено'
    const errMes = 'Не все данные заполнены';

     return (guestName.length>0 && guestEmail.length>0 && guestMessage.length>0) ? 
     (writeGuestMessage (guestName, guestEmail, guestMessage, msgId), messSendForm.innerHTML = successMes) : 
     messSendForm.innerHTML = errMes

}

function writeGuestMessage (name, email, message, msgId) {
    firebase.database().ref('message' + msgId).set({
        username: name,
        email,
        message
    });
}
