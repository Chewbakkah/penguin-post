async function newSearchHandler(event) {
    event.preventDefault();
  
    const search_result = document.querySelector("#search").value.trim();
    if (search_result) {
      const response = await fetch(`/api/search/${search_result}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        // console.log(response);
          let id = response.url.toString().split('/')[response.url.toString().split('/').length - 1];
        // let id = response.JSON;
        // console.log(id);
          window.location.replace(`/profile/${id}`);

      } else {
        alert("User Not Found");
      }
    }
  }

  
    document.querySelector('.search-form').addEventListener('submit', newSearchHandler);