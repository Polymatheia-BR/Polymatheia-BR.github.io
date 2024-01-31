const fundo = document.getElementById('fundo');

for(let x = 0;x<150;x++) {
  let altura = Math.floor(Math.random() * fundo.offsetHeight); //0 a altura da janela (px)
  let velocidade = Math.floor(Math.random() * 5000) + 1000; //1000 a 5000 ms
  let delay = Math.floor(Math.random() * 10000); //0 a 1000 ms
  const movimento = [
    { transform: "translate(100vw, " + altura + "px)"},
    { transform: "translate(-10px, " + altura + "px)"}
  ]

  let estrela = document.createElement("div");
  estrela.classList.add("estrela");
  estrela.animate(movimento, {duration: velocidade, iterations: Infinity, delay: delay});
  
  fundo.appendChild(estrela);
}