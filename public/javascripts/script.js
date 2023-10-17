
var slide = document.querySelector("#slide");
var arrow = document.querySelector("#arrow");
var searched =document.querySelector("#searched")



slide.addEventListener("click", function(){
  gsap.to("#profile", {
        left:"0",
        ease:Expo.easeInOut,
        duration:0.7
    })
})

arrow.addEventListener("click", function(){
    gsap.to("#profile", {
          left:"-100%",
          ease:Expo.easeInOut,
          duration:0.7
      })
  })

searched.addEventListener("click",function(){
      searched.style.display="none"
})


var chat= document.querySelector("#chatUser");
function chatusers(username, image){
    chat.innerHTML += `<div onclick="openchat('${username}', '${image}')" class="chats" >
         <div id="cri">
             <img src="${image}" alt="">
         </div>
         <h3>${username}</h3>
         <i class="ri-arrow-down-s-line"></i>
     </div>`
}

function sendMessage(){
    console.log("send the message");
   var msg = document.querySelector('#textarea').value
   var payload = {
    msg,
    toUser:oppositeUser,
    fromUser:username
   }
   socket.emit('newmsg',msg)
   console.log(payload);
   document.querySelector('#textarea').value =""
}

var right = document.querySelector("#right")
function openchat(username, image){
    oppositeUser = username
    right.innerHTML =`<div id="chat">
        <div id="navR">
           <img src="${image}" alt="">
           <h4>${username}</h4>
           <i class="ri-search-line"></i> <i class="ri-more-2-fill"></i>
        </div>
        <div id="writechat">
            <i class="ri-emotion-line"></i>
            <i class="ri-attachment-2"></i>
            <input onChange="sendMessage()" name="textarea" id="textarea"  placeholder="Type a message"></input>
            <i class="ri-mic-fill"></i>
        </div>
    </div>`
}

// function addprofile(username, image) {
//     chats.innerHTML += ` <div id="profile">
//     <div id="navP">
//         <i class="ri-arrow-left-line"></i> <h5>Profile</h5>
//     </div>
//     <div id="image">
//         <div id="cricle">
//             <img src="https://images.unsplash.com/photo-1685209170962-eae093d26379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="">
//         </div>
//     </div>
//     <div id="name">
//        <div class="top">
//         <h6>Your name</h6>
//        </div>
//        <div class="bottom">
//         <h5><%= user.username %></h5> <i class="ri-pencil-fill"></i>  
//        </div>
//     </div>
//     <div id="gap">
//         <p>This is not your username or pin. This name will be visible to your WhatsApp contacts.</p>
//     </div>
//     <div id="about">
//         <div class="top">
//          <h6>About</h6>
//         </div>
//         <div class="bottom">
//          <h5><%= user.username %></h5> <i class="ri-pencil-fill"></i>  
//         </div>
//      </div>
// </div>`
//   }


 


