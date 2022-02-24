async function newSearchHandler(event) {
  event.preventDefault();

const search_result = document.querySelector("#search").value.trim();

  if (search_result) {
    const response = await fetch(`/api/search/${search_result}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log(response);
      window.location.replace(response.url);
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.search-form').addEventListener('submit', newSearchHandler);
  
  
