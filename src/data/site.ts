// Todo lo que cambia seguido vive aquí: WhatsApp, redes y precios.
// Fuente de los precios: VALORES_2026.pdf y el brochure de Línea Vital.

// TODO: número definitivo. Formato internacional sin "+" ni espacios: 57 + 10 dígitos.
// Los PDF muestran tres números distintos (311 252 5109, 312 391 1090, 317 089 0602).
export const WHATSAPP = '570000000000';
export const WHATSAPP_VISIBLE = '+57 [número por confirmar]';

export const wa = (text = 'Hola, quiero información sobre sus servicios.') =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const cop = (n: number) => `$${n.toLocaleString('es-CO')}`;

// Handles tomados del brochure. Las URL se arman desde el handle y no están verificadas.
export const redes = {
  instagram: 'https://www.instagram.com/lineavitalco/',
  tiktok: 'https://www.tiktok.com/@lineavitalco',
  facebook: '', // TODO: URL de la página "Linea Vital"
};

// Fotos de cursos: imágenes sintéticas generadas con IA, recortes de baja resolución.
// TODO: reemplazar por fotos reales de Línea Vital.
export const cursos = [
  // Supuesto: "Curso altura primera vez" de la lista de precios = "Trabajador autorizado" del brochure.
  { nombre: 'Trabajador autorizado', lista: 'Curso de alturas, primera vez', horas: 32, precio: 160000,
    temas: 'Prevención de caídas, técnicas de desplazamiento y evaluación final con certificación.',
    alt: 'Trabajador con equipo de protección junto a una estructura de entrenamiento',
    src: '/fotos/curso-trabajador-autorizado.webp', pos: '55% 45%' },
  { nombre: 'Reentrenamiento', lista: 'Reentrenamiento en alturas', horas: 8, precio: 160000,
    temas: 'Uso de EPP, maniobras de rescate, protocolos y normativas.',
    alt: 'Dos participantes con cascos y arneses durante una práctica',
    src: '/fotos/curso-reentrenamiento.webp', pos: '55% 45%' },
  { nombre: 'Espacios confinados', lista: 'Espacios confinados', horas: 16, precio: null,
    temas: 'Riesgos y ventilación, ingreso seguro, rescate y equipos de respiración autónoma.',
    alt: 'Escena ilustrativa de un trabajador en la entrada de un espacio confinado',
    src: '/fotos/curso-espacios-confinados.webp', pos: '50% 45%' },
  { nombre: 'Coordinador en alturas', lista: 'Coordinador en alturas', horas: 80, precio: null,
    temas: 'Planes de trabajo seguro, supervisión en campo, inspecciones y rescates.',
    alt: 'Profesional con casco y arnés revisando una tableta en una estructura industrial',
    src: '/fotos/curso-coordinador.webp', pos: '52% 45%' },
];

export const examenes = [
  { nombre: 'Examen de aptitud en alturas', precio: 70000 },
  { nombre: 'Examen ocupacional de ingreso', precio: 70000 },
  { nombre: 'Examen toxicológico', detalle: 'Test de drogas', precio: 70000 },
  { nombre: 'Curso de manipulación de alimentos', precio: 70000 },
];

export const licencias = [
  { nombre: 'A2', detalle: 'Motocicletas de más de 125 cc', precio: 800000 },
  { nombre: 'B1', detalle: 'Carros, camperos, camionetas y microbuses particulares', precio: 805000 },
  { nombre: 'C1', detalle: 'Carros, camperos, camionetas, microbuses y taxis', precio: 1050000 },
  { nombre: 'C2', detalle: 'Camiones rígidos, busetas y buses de servicio público', precio: 1500000 },
  { nombre: 'A2 + B1', detalle: 'Las dos categorías', precio: 1600000 },
  { nombre: 'A2 + C1', detalle: 'Las dos categorías', precio: 1700000 },
];

// TODO: confirmar si estos valores son mensuales.
export const seguridadSocial = [
  { nivel: 'Sin ARL', eps: 125000, epsAfp: 400000, epsAfpCcf: null },
  { nivel: 'Nivel 1', eps: 135000, epsAfp: 415000, epsAfpCcf: 480000 },
  { nivel: 'Nivel 2', eps: 150000, epsAfp: 430000, epsAfpCcf: 492000 },
  { nivel: 'Nivel 3', eps: 170000, epsAfp: 450000, epsAfpCcf: 505000 },
  { nivel: 'Nivel 4', eps: 185000, epsAfp: 465000, epsAfpCcf: 537000 },
  { nivel: 'Nivel 5', eps: 200000, epsAfp: 480000, epsAfpCcf: 580000 },
];

export const terapias = [
  { nombre: 'Radiestesia', precio: 220000 },
  { nombre: 'Reiki', precio: 180000 },
  { nombre: 'Chakras', precio: 160000 },
  { nombre: 'Hipnosis', precio: 150000 },
  { nombre: 'Péndulo hebreo', precio: 150000 },
  { nombre: 'Obesidad', precio: 70000 },
  { nombre: 'Adicciones', precio: 70000 },
  { nombre: 'Reflexología', precio: 70000 },
  { nombre: 'Auriculoterapia', precio: 60000 },
];

export const exequial = 44000;

export const otrosServicios = [
  'Trámites vehiculares y SOAT', 'Subsidios y caja de compensación', 'Servicios jurídicos',
  'RUT y trámites de comercio', 'Ingeniería y obras civiles', 'Diseño gráfico y web',
  'Servicios inmobiliarios', 'Transporte premium',
];

export const pagos = ['Nequi', 'Daviplata', 'Bancolombia', 'Datáfono', 'Efectivo', 'PayPal', 'Zelle', 'Cripto'];

// Opciones del formulario de contacto.
export const servicios = [
  'Curso de trabajo en alturas', 'Reentrenamiento en alturas', 'Espacios confinados',
  'Coordinador en alturas', 'Examen médico', 'Seguridad social', 'Licencia de conducción',
  'Plan exequial', 'Otro servicio',
];
