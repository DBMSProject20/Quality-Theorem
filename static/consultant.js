var firebaseConfig = {
    apiKey: "AIzaSyAInAET7vNR4mFfsGhFVPLzpHIoAWRG2yQ",
    authDomain: "consultant-database.firebaseapp.com",
    databaseURL: "https://consultant-database.firebaseio.com",
    projectId: "consultant-database",
    storageBucket: "consultant-database.appspot.com",
    messagingSenderId: "179454239801",
    appId: "1:179454239801:web:d2078bded6cd2849c519e8",
    measurementId: "G-G716KK4RXP"
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
    var qualification=getinput('qualification');
    var experience=getinput('experience');
    var visa=getinput('visa');
    var skills=getinput('skills');
    
    savemessage(fname,lname,contact,mail,qualification,experience,visa,skills);

    
}
function getinput(id)
{
    return document.getElementById(id).value;

}

function savemessage(fname,lname,contact,mail,qualification,experience,visa,skills)
{
    var newMessageRef=messagesRef.push();
    newMessageRef.set(
        {
            fname:fname,
            lname:lname,
            contact:contact,
            mail:mail,
            qualification:qualification,
           experience:experience,
           visa:visa,
           skills:skills
        }
    );
}
