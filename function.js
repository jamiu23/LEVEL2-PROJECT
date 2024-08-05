// X
// show signin modal onload
function showModal() {
    $('#modal').modal('show');
};

// load homepage
function redirectToNewPage() {
    setTimeout(() => {
        window.location.href = "homepage.html";
    }, 5000); 
};

// message side
// div hoolding messages and angle icon show inbox modal onclick
let message = document.getElementById("message")
message.onclick = function(){
    $('#inboxModal').modal ('show');
};

// message icon onclick show messagesModal
function newMessage(){
    $('#messagesModal').modal ('show');
};
// onclick hide messagesModal and show chatModal
function nextChat(){
    $('#messagesModal').modal ('hide');
    $('#chatModal').modal ('show');
};
// onclick change nextButton backgroundColor and color
let nextButtonColor = document.getElementById("nextButtonColor")
function nextButton(){
    nextButtonColor.style.backgroundColor = "white";
    nextButtonColor.style.color = "black";
};

// angle up onclick shows inboxModal
function newMessageOpen(){
    $('#inboxModal').modal ('show'); 
};


// inbox side
// onclick hide inboxModal
function messageClosed(){
    $('#inboxModal').modal ('hide');
};
// onclick show chatModal
function showChat(){
    $('#chatModal').modal ('show');  
};
// onclick hide inboxModal
function closeInbox(){
    $('#inboxModal').modal ('hide');  
};
// onclick show inboxModal
function undoChat() {
    $('#inboxModal').modal ('show');
};

// onclick hide chatModal
function closeChat(){
    $('#chatModal').modal ('hide');
};
// onclick show chatModal
function directChat(){
    $('#chatModal').modal ('show');
}



// THIS IS FIREBASE SECTION

const chat = document.getElementById("chatText");
const file = document.getElementById("chatFile");
const btn = document.getElementById("sendChat");

btn.addEventListener('click',()=>{
db.collection('userInfo').add({
    chat: chat.value,
    file: file.value
});
chat.value = '';
file.value = '';
})

const messages = document.getElementById("messages")
db.collection("userInfo")
.get()
.then((querySnapshot)=>{
    querySnapshot.foreach((doc)=>{
        let li = document.createElement("li");
        let chat = document.createElement("h4");
        let file = document.createElement("p");

        // file.style.width = "100px"
        // file.style.height = "100px"
        // chat.style.color = "blue";
        chat.textContent = doc.data().chat;
        file.textContent = doc.data().file;

        li.appendChild(chat);
        li.appendChild(file);


        messages.appendChild(li);
    });
})
.catch((error)=>{
    console.log("Erro getting documents",error);
});