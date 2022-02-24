// let session = require('express-session');

async function addFriend(event) {
  event.preventDefault();
  const newFriend = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const ownerId = session.user_id;
console.log(ownerId);

  console.log(user_id);
const response = await fetch(`/api/users/${ownerId}`, {
    method: 'PUT',
    body: JSON.stringify({
        friends: newFriend
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});
if(response.ok){
    document.location.replace('/dashboard/');
}else{
    alert(response.statusText)
}
}


document.querySelector(".add-friend").addEventListener("click", addFriend);
