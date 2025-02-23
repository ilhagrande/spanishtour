// Seleciona todas as imagens com a classe 'clickable-img'
const images = document.querySelectorAll(".clickable-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentImageIndex = 0; // Índice da imagem atual

// Função para abrir a lightbox e exibir a imagem clicada
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex"; // Exibe a lightbox
    lightboxImg.src = img.src; // Define a imagem da lightbox para a imagem clicada
    currentImageIndex = index; // Atualiza o índice da imagem atual
  });
});

// Função para fechar a lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none"; // Oculta a lightbox
});

// Navegação para a imagem anterior
prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Decrementa o índice e faz o loop
  lightboxImg.src = images[currentImageIndex].src; // Atualiza a imagem da lightbox
});

// Navegação para a próxima imagem
nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length; // Incrementa o índice e faz o loop
  lightboxImg.src = images[currentImageIndex].src; // Atualiza a imagem da lightbox
});

// Fecha a lightbox quando clicar fora da imagem
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});
