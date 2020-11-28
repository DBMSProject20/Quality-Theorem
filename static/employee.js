var firebaseConfig = {
    apiKey: "AIzaSyBi1lE0ANWQSW5qtWfGufpv2F8elNbrv-4",
    authDomain: "employeedatabase-fb0d2.firebaseapp.com",
    databaseURL: "https://employeedatabase-fb0d2.firebaseio.com",
    projectId: "employeedatabase-fb0d2",
    storageBucket: "employeedatabase-fb0d2.appspot.com",
    messagingSenderId: "958125068574",
    appId: "1:958125068574:web:cec5a15484cf22d7da790f",
    measurementId: "G-61F6YR6CYL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

var messagesRef= firebase.database().ref('messages'); 
document.getElementById('eform').addEventListener('submit',submitform);

function submitform(e)
{
    e.preventDefault();

    var fname=getinput('fname');
    var lname=getinput('lname');
    var contact=getinput('contact');
    var mail=getinput('mail');
    var qualification=getinput('qualification');
    var designation=getinput('designation');
    
    savemessage(fname,lname,contact,mail,qualification,designation);

    
}
function getinput(id)
{
    return document.getElementById(id).value;

}

function savemessage(fname,lname,contact,mail,qualification,designation)
{
    var newMessageRef=messagesRef.push();
    newMessageRef.set(
        {
            fname:fname,
            lname:lname,
            contact:contact,
            mail:mail,
            qualification:qualification,
            designation:designation
        }
    );
}