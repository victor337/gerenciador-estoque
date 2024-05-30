async function generateList() {
  var api = new XMLHttpRequest();
  api.open("GET", "scripts.php", true);

  api.onload = function () {

  }

  api.send();

  console.log('aosjoasosa');

}

generateList();