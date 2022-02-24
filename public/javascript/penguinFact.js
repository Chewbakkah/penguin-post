//Variable fact selector
var penguinFact=[]
function penguinFact() {
    var randomFact = Math.floor(Math.random()*(penguinFact.length));
    document.getElementById(pFacts).innerHTML = penguinFact[randomFact]
}

<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
</div>

// NEED TO ADD <script src="/public/javascript/penguinFact.js"></script>  TO THE BOTTOM OF HTML PAGE

