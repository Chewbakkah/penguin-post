async function newSearchHandler(event) {
  event.preventDefault();

  //const username = document.querySelector("#username-update").value.trim();
  const search_result = document.querySelector("#search").value.trim();

  if (search_result) {
    const response = await fetch(`/api/users/${search_result}`, {
      method: "GET",
      //body: JSON.stringify({
       // search_result,
      //}),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/profile/${response}`);
    } else {
      alert(response.statusText);
    }
  }
}
  //  console.log(search_result);

 /* var button = document.getElementById("searchBtn");

  button.onclick = function () {
    var text = document.getElementById("search").value;
    var url = ("localhost:3003/profile/" + text);
    window.open(url);
  };
  
        
  } */
  
  document.querySelector('.search-form').addEventListener('submit', newSearchHandler);
  
  
