// ===== Configuración =====
const WHATSAPP_NUMERO = '5493412603942';

// ===== Año dinámico en footer =====
document.getElementById('anio').textContent = new Date().getFullYear();

// ===== Menú móvil =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('nav__links--open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav__links--open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Navbar con fondo al hacer scroll =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 40);
});

// ===== Formulario de reservas -> WhatsApp =====
const formReserva = document.getElementById('formReserva');

function formatearFecha(valor) {
  const [anio, mes, dia] = valor.split('-');
  return `${dia}/${mes}/${anio}`;
}

formReserva.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const personas = document.getElementById('personas').value;
  const comentario = document.getElementById('comentario').value.trim();

  let mensaje = `Hola Pulpo! Quiero reservar una mesa.\n`;
  mensaje += `Nombre: ${nombre}\n`;
  mensaje += `Fecha: ${formatearFecha(fecha)}\n`;
  mensaje += `Hora: ${hora} hs\n`;
  mensaje += `Personas: ${personas}`;
  if (comentario) {
    mensaje += `\nComentario: ${comentario}`;
  }

  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank', 'noopener');
});