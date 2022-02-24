async function addFriend() {
    let route = `/api/users/1`;
  
    fetch(route)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        throw err;
      });
  }
  
  document.querySelector(".friend-list").addEventListener("click", addFriend);