var firebaseConfig = {
    apiKey: "AIzaSyCepgU3di1G51IevEL51WFhz6luGEs7ens",
    authDomain: "vsereshaem-8493b.firebaseapp.com",
    databaseURL: "https://vsereshaem-8493b.firebaseio.com",
    projectId: "vsereshaem-8493b",
    storageBucket: "vsereshaem-8493b.appspot.com",
    messagingSenderId: "858006205103",
    appId: "1:858006205103:web:81a108fed04e5ca6475a5a"
  };

firebase.initializeApp(firebaseConfig);
//autentification form
const enterAuthForm = document.getElementById('enter-user-but');
const modalForm = document.getElementById('modal-enter-form');
const modalEnterUser = document.getElementsByClassName('overlay-modal-enter-user')[0];
const closeAuthForm = document.getElementsByClassName('close-modal-enter-user')[0];
const enterAuthBut = document.getElementsByClassName('close-modal-enter-user-but-enter')[0];
const resultAuthForm = document.getElementById('resultAuthForm');
let loginFB;
let passwordFB;

enterAuthForm.addEventListener('click', ()=>{
    enterAuthForm.innerHTML === 'Войти' ?
    (modalEnterUser.style.display = 'block', modalForm.reset(), resultAuthForm.innerHTML = '') : 
    enterAuthForm.innerHTML === 'Выйти' ? enterAuthForm.innerHTML = 'Войти' : ''
});
closeAuthForm.addEventListener('click', ()=>{
    modalEnterUser.style.display = 'none';
});

firebase.database().ref('users/admin/login').once('value').then(function(snapshot) {
    loginFB=snapshot.node_.value_;  
});
firebase.database().ref('users/admin/password').once('value').then(function(snapshot) {
    passwordFB=snapshot.node_.value_;  
});

const authority = ()=>{
    const guestLogin = document.getElementById('login-user').value.trim();
    const guestPassword = document.getElementById('login-password').value.trim();    
    (guestLogin === loginFB && guestPassword === passwordFB) ? 
    (resultAuthForm.innerHTML = 'Welcome, admin', 
    setTimeout (()=>{
        modalEnterUser.style.display = 'none'
    },1500), 
     enterAuthForm.innerHTML = 'Выйти') :
    resultAuthForm.innerHTML = 'Неверные данные'
}

enterAuthBut.addEventListener('click', authority);
modalEnterUser.addEventListener('keydown', (e)=>{
    e.key === 'Enter' ? enterAuthBut.click() : ''
});
