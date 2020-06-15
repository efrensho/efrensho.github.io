// Obtener valores de la clase .close

let links = document.querySelectorAll(".close");

// Recorrerlos
links.forEach(function(link) {

  // Agregar un evento click a cada uno
  link.addEventListener("click",function(ev) {
      ev.preventDefault();

      let content = document.querySelector('.content');
      // Quitar clases de animación al content
      content.classList.remove("animate__animated");
      content.classList.remove("animate__fadeInLeft");
      // Agregar clases para animar su salida
      content.classList.add("animate__animated");
      content.classList.add("animate__fadeOutLeft");

      setTimeout(function () {
        location.href = "/";
      }, 600);


      return false; //no funcionó alv
  });
});



/*
let links = document.querySelectorAll("a");

links.forEach(function(link) {
  console.log(link)
});
*/
/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td) {
  td.addEventListener('click',function(){
    console.log(this);
  })
});
*/
