document.addEventListener('DOMContentLoaded', () => {
  const modalFondo = document.createElement('div');
  modalFondo.classList.add('modal-fondo');
  modalFondo.style.cssText = `
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;
  
  modalFondo.innerHTML = `
    <div class="modal-contenido" style="
      background: white;
      padding: 20px;
      border-radius: 8px;
      max-width: 500px;
      max-height: 80vh;
      overflow-y: auto;
      position: relative;">
      <button class="modal-cerrar" style="
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 24px;
        background: transparent;
        border: none;
        cursor: pointer;">&times;</button>
      <div id="modal-texto" style="white-space: pre-line;"></div>
    </div>
  `;

  document.body.appendChild(modalFondo);

  const modalTexto = modalFondo.querySelector('#modal-texto');
  const cerrarBtn = modalFondo.querySelector('.modal-cerrar');

  cerrarBtn.addEventListener('click', () => {
    modalFondo.style.display = 'none';
  });

  modalFondo.addEventListener('click', (e) => {
    if (e.target === modalFondo) {
      modalFondo.style.display = 'none';
    }
  });

  document.querySelectorAll('.mas').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const texto = descripciones[id] || 'Descripción no disponible.';
      modalTexto.textContent = texto;
      modalFondo.style.display = 'flex';
    });
  });
});

const descripciones = {
  iphone16: `
📱 iPhone 16 – Ventajas

✅ Chip A18 Bionic ultra rápido.
📷 Cámara mejorada con fotos nocturnas.
🔋 Batería optimizada.
🧠 iOS 18 con inteligencia avanzada.
`,

  motoedge50: `
📱 Moto Edge 50 – Características

✅ Procesador Snapdragon.
📷 Cámara 50MP con estabilización.
🔋 Carga rápida TurboPower.
🖥️ Pantalla OLED 144Hz.
`,

  auriculares: `
🎧 Auriculares Inalámbricos – Ventajas

✅ Sonido envolvente.
🔋 Batería de larga duración.
📡 Conexión Bluetooth 5.2.
💧 Resistentes al agua (IPX4).
`,

  lenovoT14: `
💻 Lenovo T14 Gen 2 – Especificaciones

✅ Intel Core i7 / Ryzen Pro.
💾 Hasta 32GB RAM.
🖥️ Pantalla Full HD antirreflejo.
🔐 Lector de huellas + TPM.
`,
  LenovoT480s: `🔹 Lenovo ThinkPad T480s
  
💼 Potencia y portabilidad en un solo equipo.
✅ Procesador Intel Core i5/i7
✅ Pantalla Full HD de 14”
✅ Teclado retroiluminado y diseño ultradelgado
✅ Batería de larga duración y carga rápida
✅ Seguridad con lector de huellas y TPM`,

asusL410:`🔹ASUS L410 MA-DB02 Ultra

💡 Ligera, eficiente y hecha para el día a día.
✅ Procesador Intel Celeron N4020
✅ Pantalla de 14" Full HD
✅ 4GB RAM y 64GB eMMC – ideal para tareas ligeras y navegación
✅ Windows 11 Home en modo S
✅ Diseño delgado y batería de larga duración

🧳 Perfecta para estudiantes, trabajo remoto y movilidad sin complicaciones.`,

HPEliteBook:
 `HP EliteBook 640 G11 – 14”

💼 Potencia empresarial en un diseño compacto.
✅ Procesador Intel Core i5 / i7 de última generación (según configuración)
✅ Pantalla de 14" Full HD antirreflejo
✅ Hasta 16GB RAM y SSD de alto rendimiento
✅ Seguridad empresarial con HP Wolf Security
✅ Teclado cómodo y chasis resistente para uso intensivo

🔐 Ideal para profesionales que buscan productividad, seguridad y movilidad en un solo equipo.`,

HPPavilionGaming:
` 🎮 HP Pavilion Gaming 15-ec1038la – 15.6”

⚡ Rendimiento explosivo para gamers y creadores.
✅ Procesador AMD Ryzen 5 4600H
✅ 8 GB RAM DDR4 (expandible)
✅ SSD 512 GB – arranques y cargas ultrarrápidas
✅ Gráfica NVIDIA GeForce GTX 1650 – juegos fluidos en calidad alta
✅ Pantalla FHD de 15.6” con microbordes y antirreflejo
✅ Teclado retroiluminado y sistema de refrigeración eficiente

🔥 Perfecta para gaming, edición de video y multitarea sin límites.  `,

HPStream14:
`💻 HP Stream 14 – Laptop compacta y ligera

🎯 Ideal para estudiantes, tareas básicas y movilidad.
✅ Procesador Intel Celeron N4000
✅ 4 GB RAM DDR4
✅ 64 GB eMMC – almacenamiento rápido para archivos esenciales
✅ Pantalla HD de 14” – imagen clara y tamaño cómodo
✅ Windows 10/11 S preinstalado
✅ Batería de larga duración y diseño ultraligero

🌐 Perfecta para navegar, estudiar y trabajar desde cualquier lugar.`,

AcerAspire1: 
`💻 Acer Aspire 1 A115-31-C2Y3 – Simplicidad y eficiencia para el día a día

✅ Procesador Intel Celeron N4020 – rendimiento confiable para tareas básicas
✅ 4 GB RAM DDR4 – multitarea ligera sin complicaciones
✅ 64 GB eMMC – almacenamiento rápido para tus archivos esenciales
✅ Pantalla de 15.6" HD – visualización amplia y cómoda
✅ Diseño delgado y elegante – ideal para el hogar o movilidad ligera
✅ Windows 11 Home en modo S – seguro y optimizado para rendimiento diario

🎯 Perfecta para estudiar, navegar por internet y trabajo liviano sin gastar de más. `,

AcerAspire5:
` 💻 Acer Aspire 5 A515-43-R5QW – Potencia y versatilidad para tu productividad diaria

✅ Procesador AMD Ryzen 5 3500U – excelente rendimiento para trabajo y entretenimiento
✅ 8 GB de RAM DDR4 – fluidez multitarea sin interrupciones
✅ 256 GB SSD – arranques rápidos y acceso ágil a tus archivos
✅ Pantalla Full HD de 15.6" – imágenes nítidas y colores vibrantes
✅ Diseño delgado y moderno – ideal para oficina o uso en casa
✅ Windows 10 Home – entorno familiar y funcional

🎯 Una laptop equilibrada para quienes buscan rendimiento sin comprometer precio ni estilo. `,

AcerAspire3:
` 💻 Acer Aspire 3 – Rendimiento profesional en un diseño accesible

🔥 AMD Ryzen 7 5700U – 8 núcleos de potencia para trabajo pesado, edición y multitarea
💡 8 GB de RAM DDR4 (expandible) – fluidez garantizada en todo momento
⚡ 512 GB SSD – velocidad de arranque y almacenamiento ultrarrápido
🎨 Pantalla Full HD de 15.6" – gran definición y comodidad visual
🔋 Batería de larga duración – trabaja o estudia sin preocuparte por cargar
🌐 Conectividad completa – Wi-Fi rápido, HDMI, USB 3.2 y más

✅ Ideal para profesionales, estudiantes y creadores que exigen más rendimiento por su inversión. `,

AsusL410:
` 💻 Asus L410 MA-DB02 – Ligera, eficiente y lista para el día a día

⚙️ Procesador Intel Celeron N4020 – perfecto para tareas cotidianas y navegación ágil
💾 4 GB RAM + 64 GB eMMC – ideal para ofimática, estudio y navegación ligera
🌟 Pantalla de 14" Full HD – calidad visual nítida en un formato compacto
🔋 Batería de larga duración – trabaja todo el día sin interrupciones
🧳 Diseño ultraligero y delgado – llévala a donde necesites sin esfuerzo
🖱️ Touchpad numérico integrado – funcionalidad adicional en menos espacio
🎓 Windows 11 S – seguridad y rendimiento optimizados para estudiantes y usuarios casuales

✅ Una excelente opción para quienes buscan portabilidad y practicidad a un precio accesible.

 `,

AsusGaming:
`🎮 ASUS Gaming – Potencia que domina cada partida

⚙️ Procesador AMD Ryzen / Intel Core de alto rendimiento – fluidez total en juegos exigentes
🖥️ Pantalla Full HD de 15.6" / 144Hz – imágenes más suaves y realistas
🎨 Gráficos NVIDIA GeForce GTX / RTX – máximo detalle visual en tus juegos favoritos
💾 8GB / 16GB RAM + SSD de 512GB / 1TB – arranques rápidos y multitarea sin esfuerzo
🔊 Sistema de refrigeración inteligente – mantiene la potencia sin sobrecalentamiento
🔋 Batería optimizada + diseño agresivo y moderno – ideal para gaming y productividad
🕹️ Teclado retroiluminado RGB – juega con estilo en cualquier ambiente

🔥 Diseñada para gamers que exigen rendimiento, velocidad y estilo.  `,

Huaweinova12:
`📱 Huawei Nova 12 SE – Estilo, potencia y fotografía en tu mano

✨ Almacenamiento de 256GB – espacio de sobra para tus apps, fotos y videos
📸 Cámara triple de hasta 108MP – captura imágenes nítidas, incluso de noche
📲 Pantalla OLED de 6.67” FHD+ – colores vivos y fluidez en cada movimiento
⚡ Carga rápida de 66W – energía completa en minutos
🔐 Diseño delgado y elegante – acabado premium que destaca
🧠 Rendimiento fluido – ideal para multitarea, redes y entretenimiento

🔥 Un smartphone con todo lo que necesitas para destacar cada día.  `,

Samsunga35:
` 📱 Samsung Galaxy A35 – Rendimiento y estilo en equilibrio perfecto

✨ Pantalla Super AMOLED de 6.6” FHD+ – colores intensos y fluidez con 120Hz
📸 Triple cámara de 50 MP – fotos nítidas, incluso en baja luz
💾 128GB de almacenamiento y 6GB/8GB de RAM – espacio y velocidad asegurados
🔋 Batería de 5000 mAh con carga rápida – energía para todo el día
🛡️ Resistencia IP67 al agua y polvo – durabilidad sin preocupaciones
🔒 Samsung Knox y lector de huellas en pantalla – seguridad avanzada

🚀 Ideal para quienes buscan potencia, cámara y diseño moderno a un excelente precio. `,

Pocox7:
` 📱 Poco X7 Pro – Potencia y estilo para el usuario exigente

⚡ Pantalla AMOLED de 6.67” Full HD+ con 120Hz — imágenes nítidas y movimiento suave
📷 Cámara principal de 108 MP — fotos ultra detalladas y videos en alta calidad
🚀 Procesador Snapdragon 778G — rendimiento rápido para juegos y multitarea
🔋 Batería de 4500 mAh con carga rápida de 33W — energía que dura todo el día
🎮 Sistema de enfriamiento avanzado — para jugar sin interrupciones
🎵 Altavoces estéreo duales — sonido envolvente para multimedia

✨ Ideal para gamers y creadores que quieren máxima potencia sin gastar de más.`,

Honor7:
`📱 HONOR Magic7 Lite – Elegancia y rendimiento equilibrado

💎 Pantalla OLED de 6.72” Full HD+ — colores vivos y negros profundos
⚙️ Procesador Snapdragon 4 Gen 1 — rendimiento fluido para uso diario y multitarea
📸 Cámara triple con sensor principal de 48 MP — fotos claras y nítidas
🔋 Batería de 4800 mAh con carga rápida de 22.5W — autonomía para todo el día
🎨 Diseño ligero y estilizado — cómodo para usar y transportar
📶 Conectividad 5G — navegación rápida y estable

✨ Perfecto para quienes buscan estilo y funcionalidad en un smartphone accesible.  `,

smartredondo:
` ⌚ Smart Watch Bluetooth – Tu asistente en la muñeca

📲 Conexión Bluetooth para sincronizar con tu smartphone fácilmente
💓 Monitor de ritmo cardíaco y actividad física para cuidar tu salud
⏰ Alarmas, cronómetro y notificaciones en tiempo real
💧 Resistente al agua y al sudor para uso diario y deportivo
🔋 Batería de larga duración para acompañarte todo el día
🎨 Diseño moderno y personalizable con múltiples esferas y correas

✨ El complemento perfecto para mantenerte conectado y activo. `,

Soportescel:
` 📱 Soportes para Teléfonos – Mantén tu dispositivo siempre a la vista

🔧 Diseño ergonómico y ajustable para adaptarse a cualquier modelo
🚗 Ideal para usar en el coche, escritorio o en casa
👐 Fácil instalación y gran estabilidad
🛡️ Material resistente y antideslizante para proteger tu teléfono
🎯 Perfecto para videollamadas, ver videos o navegación GPS sin manos

✨ La solución práctica para tener tu teléfono siempre accesible y seguro. `,

AcerAspire:
`  `,

AcerAspire:
`  `,
};

function btnReIn(){
  window.location.href="index.html";
};

function btn(){
  window.location.href="index.html";
};

document.getElementById("btnbuscar").addEventListener("click", function(){
  const texto = document.getElementById("buscador").value.toLowerCase();

  if(texto === "computadoras"){
    window.location.href="computadoras.html";
  }

  
})


  