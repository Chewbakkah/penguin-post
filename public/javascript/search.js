async function newSearchHandler(event) {
  event.preventDefault();

  
  //const search_result = document.querySelector('input[name="search"]').value;
  //  console.log(search_result);

  var button = document.getElementById("searchBtn");

  button.onclick = function () {
    var text = document.getElementById("search").value;
    var url = ("localhost:3003/profile/" + text);
    window.open(url);
}
        
  }
  
  document.querySelector('.search-form').addEventListener('submit', newSearchHandler);
  
  
