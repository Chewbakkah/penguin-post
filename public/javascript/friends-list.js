
async function showFriends() {
  let url = `/api/users/2`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      throw err;
    });
}

document.querySelector(".friend-list").addEventListener("click", showFriends);
