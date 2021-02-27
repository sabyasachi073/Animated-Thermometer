const tempLoad = () => {
  let temp = document.getElementById("temp");
  temp.innerHTML = "&#xf2cb;";

  setTimeout(() => {
    temp.innerHTML = "&#xf2ca;";
    temp.style.color = "#ffdd59";
  }, 1000);

  setTimeout(() => {
    temp.innerHTML = "&#xf2c9;";
    temp.style.color = "#ffd32a";
  }, 2000);
  setTimeout(() => {
    temp.innerHTML = "&#xf2c8;";
    temp.style.color = "#ffa801";
  }, 3000);
  setTimeout(() => {
    temp.innerHTML = "&#xf2c7;";
    temp.style.color = "#d63031";
  }, 4000);

  setTimeout(() => {
    temp.style.color = "white";
  }, 5000);
};

tempLoad();

setInterval(tempLoad, 5000);
