var firebaseConfig = {
    apiKey: "AIzaSyAQjWMrWU3ho3gkwg_Pe3WVKFmb-53YUlk",
    authDomain: "qtdatabase-db964.firebaseapp.com",
    databaseURL: "https://qtdatabase-db964.firebaseio.com",
    projectId: "qtdatabase-db964",
    storageBucket: "qtdatabase-db964.appspot.com",
    messagingSenderId: "948098034963",
    appId: "1:948098034963:web:8673510efa138d7560bee6",
    measurementId: "G-71MWM4YC6N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

var messagesRef= firebase.database().ref('messages'); 
document.getElementById('cform').addEventListener('submit',submitform);

function submitform(e)
{
    e.preventDefault();

    var fname=getinput('fname');
    var lname=getinput('lname');
    var contact=getinput('contact');
    var mail=getinput('mail');
    var company=getinput('company');
    var req=getinput('req');
    
    savemessage(fname,lname,contact,mail,company,req);

    
}
function getinput(id)
{
    return document.getElementById(id).value;

}

function savemessage(fname,lname,contact,mail,company,req)
{
    var newMessageRef=messagesRef.push();
    newMessageRef.set(
        {
            fname:fname,
            lname:lname,
            contact:contact,
            mail:mail,
            company:company,
            req:req
        }
    );
}