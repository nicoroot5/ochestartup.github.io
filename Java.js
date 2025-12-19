// Parallax simples: sol de fundo se move um pouco com o mouse
(function(){
  const bg = document.getElementById('bgSun');
  let windowW = window.innerWidth;
  let windowH = window.innerHeight;

  function handleMove(e) {
    // posição do ponteiro entre -1 e 1
    const x = (e.clientX / windowW) * 2 - 1;
    const y = (e.clientY / windowH) * 2 - 1;
    // multiplique para um deslocamento sutil
    const tx = x * 20; // move até 20px
    const ty = y * 12;
    bg.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
  }

  // para toque (mobile) use o movimento do scroll como fallback suave
  function handleScroll() {
    const s = window.scrollY;
    // desloca o sol proporcional ao scroll (sutil)
    bg.style.transform = `translate3d(0, ${s * -0.05}px, 0)`;
  }

  window.addEventListener('mousemove', handleMove);
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', function(){ windowW = window.innerWidth; windowH = window.innerHeight; });

})();

function enviarFormulario(event) {
  if (event) event.preventDefault();

  const nome = document.getElementById('nome') ? document.getElementById('nome').value.trim() : '';
  const mensagem = document.getElementById('mensagem') ? document.getElementById('mensagem').value.trim() : '';

  if (nome && mensagem) {
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso! ☀️`);
  } else {
    alert('Por favor, preencha todos os campos!');
  }
}
