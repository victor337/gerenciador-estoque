

async function generateList() {
  const xhttpr = new XMLHttpRequest();
   xhttpr.open('GET', 'scripts.php', true);

   xhttpr.send();

  xhttpr.onload = () => {
    console.log(JSON.parse(xhttpr.responseText));
  };


}

generateList();