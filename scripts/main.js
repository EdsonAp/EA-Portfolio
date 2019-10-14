
var firebaseConfig = {
    apiKey: "AIzaSyCn3Bvy38X3BHAWSS8ICaPyvQEZa0vgVU8",
    authDomain: "form-96144.firebaseapp.com",
    databaseURL: "https://form-96144.firebaseio.com",
    projectId: "form-96144",
    storageBucket: "",
    messagingSenderId: "1432802987",
    appId: "1:1432802987:web:8af4e8a6378b5ef6f989ee",
    measurementId: "G-XBJR28DV5J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var messg = getInputVal('messg');

    saveMessage(name, email, messg);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, messg) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: messg
    });
}