// Datos compartidos del sitio. Fuentes: brief de Línea+Vital (promts.odt), brochure,
// ENGAGED BPO CALI.pdf y VALORES_2026.pdf. Regla del brief: el sitio no publica precios.

// Único número de WhatsApp para todos los botones (regla del brief). Formato: 57 + 10 dígitos.
export const WHATSAPP = '573112525109';

export const wa = (text = 'Hola, quiero hablar con un asesor de Línea+Vital.') =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const telefonos = [
  { numero: '311 252 5109', nota: 'WhatsApp' },
  { numero: '317 089 0602', nota: 'Lorena Martínez' },
  { numero: '312 391 1090' },
];
export const tel = (numero: string) => `tel:+57${numero.replace(/\D/g, '')}`;
export const CORREO = 'slineavital@gmail.com';
export const FRASE = 'Juntos Construimos Empresas más Saludables, Sostenibles y Productivas.';

// Rutas internas con la base del sitio: '' en local, '/landing-alturas' en GitHub Pages.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const ruta = (p: string) => BASE + p;

// Handles tomados del brochure. Las URL se arman desde el handle y no están verificadas.
export const redes = {
  instagram: 'https://www.instagram.com/lineavitalco/',
  tiktok: 'https://www.tiktok.com/@lineavitalco',
  facebook: '', // TODO: URL de la página "Linea Vital"
};

// Una entrada por landing de servicio: menú, formulario y catálogo salen de aquí.
export const paginas = {
  salud: { nombre: 'Salud ocupacional', href: '/servicios/salud-ocupacional', icon: 'steth' },
  alturas: { nombre: 'Trabajo seguro en alturas', href: '/servicios/trabajo-seguro-en-alturas', icon: 'helmet' },
  confinados: { nombre: 'Espacios confinados', href: '/servicios/espacios-confinados', icon: 'ladder' },
  alimentos: { nombre: 'Manipulación de alimentos', href: '/servicios/manipulacion-alimentos', icon: 'food' },
  social: { nombre: 'Seguridad social', href: '/servicios/seguridad-social', icon: 'shield' },
  subsidios: { nombre: 'Subsidios', href: '/servicios/subsidios', icon: 'home' },
  exequias: { nombre: 'Servicios exequiales y repatriación', href: '/servicios/exequias-repatriacion', icon: 'sprout' },
  vehiculares: { nombre: 'Trámites vehiculares', href: '/servicios/tramites-vehiculares', icon: 'car' },
  transporte: { nombre: 'Transporte premium', href: '/servicios/transporte-premium', icon: 'bus' },
  ingenieria: { nombre: 'Ingeniería y diseño', href: '/servicios/ingenieria-diseno', icon: 'compass' },
  web: { nombre: 'Diseño gráfico, contenido y desarrollo web', href: '/servicios/diseno-contenido-web', icon: 'pen' },
  juridico: { nombre: 'Servicios jurídicos y financieros', href: '/servicios/juridico-financiero', icon: 'scale' },
  terapia: { nombre: 'Terapia holística y ancestral', href: '/servicios/terapia-holistica', icon: 'leaf' },
  inmobiliarios: { nombre: 'Servicios inmobiliarios', href: '/servicios/inmobiliarios', icon: 'building' },
} as const;

const p = paginas;
const item = (pg: { nombre: string; href: string }, nombre = pg.nombre, ancla = '') => ({ nombre, href: pg.href + ancla });

// Categorías del brief, en su orden. Cada servicio lleva a su landing o a su sección dentro de ella.
export const categorias = [
  { id: 'salud-ocupacional', titulo: 'Salud ocupacional', icon: 'steth', href: p.salud.href, items: [
    item(p.salud, 'Exámenes médicos ocupacionales', '#ingreso'),
    item(p.salud, 'Exámenes de aptitud en alturas', '#aptitud-alturas'),
    item(p.salud, 'Exámenes psicosensométricos', '#psicosensometrico'),
    item(p.salud, 'Exámenes osteomusculares', '#osteomuscular'),
    item(p.salud, 'Exámenes toxicológicos', '#toxicologico'),
    item(p.alimentos, 'Exámenes de manipulación de alimentos', '#examen'),
    item(p.salud, 'Gestión de incapacidades', '#incapacidades'),
  ] },
  { id: 'capacitacion', titulo: 'Capacitación y certificación', icon: 'cert', href: p.alturas.href, items: [
    item(p.alturas),
    item(p.alturas, 'Reentrenamiento', '#reentrenamiento'),
    item(p.confinados),
    item(p.alturas, 'Coordinador en alturas', '#coordinador'),
    item(p.alimentos),
  ] },
  { id: 'seguridad-social', titulo: 'Seguridad social', icon: 'shield', href: p.social.href, items: [
    item(p.social, 'EPS', '#eps'),
    item(p.social, 'ARL', '#arl'),
    item(p.social, 'AFP', '#afp'),
    item(p.social, 'Caja de compensación familiar', '#ccf'),
  ] },
  { id: 'otros', titulo: 'Otros servicios', icon: 'plus', href: '/servicios#otros', items: [
    p.subsidios, p.exequias, p.vehiculares, p.transporte, p.ingenieria, p.web, p.juridico, p.terapia, p.inmobiliarios,
  ].map((pg) => item(pg)) },
] as const;

// Opciones del formulario de contacto.
export const servicios = [...Object.values(paginas).map((pg) => pg.nombre), 'Otro servicio'];

// Centros de capacitación presencial (ENGAGED BPO CALI.pdf, pág. 6).
export const centros = [
  { depto: 'Atlántico', ciudad: 'Barranquilla', nombre: 'HBCU Consultores SAS', dir: 'Cra. 26 # 74b – 62, B/ Carlos Meisel' },
  { depto: 'Cundinamarca', ciudad: 'Bogotá', nombre: 'ANSAR', dir: 'Cra. 22 # 164 – 58, B/ Toberín' },
  { depto: 'Cundinamarca', ciudad: 'Girardot', nombre: 'Alturas & Anclajes', dir: 'Calle 11 # 20 – 39 Esquina, B/ Centenario' },
  { depto: 'Valle del Cauca', ciudad: 'Jamundí', nombre: 'Seguridad en Alturas C&O', dir: 'Cra. 10 # 14 – 56, B/ Libertadores' },
  { depto: 'Valle del Cauca', ciudad: 'Cali', nombre: 'ABC - Risk Training', dir: 'Cra. 26 # 6ª - 09, B/ Alameda' },
  { depto: 'Antioquia', ciudad: 'Bello', nombre: 'TSA Alturas SAS', dir: 'Dg. 55 # 44 – 114' },
  { depto: 'Tolima', ciudad: 'Ibagué', nombre: 'Onix Ingeniería SAS', dir: 'Calle 134 # 14 – 148' },
  { depto: 'Meta', ciudad: 'Vía Acacías', nombre: 'Trébol Alturas SAS', dir: 'Mz 7 Casa 19' },
];

// Conceptos de la propuesta de valor (brief).
export const conceptos = [
  { t: 'Salud', icon: 'heart' },
  { t: 'Seguridad', icon: 'shield' },
  { t: 'Bienestar', icon: 'leaf' },
  { t: 'Prevención', icon: 'check' },
  { t: 'Productividad', icon: 'trend' },
  { t: 'Sostenibilidad organizacional', icon: 'globe' },
] as const;

export const RED_NACIONAL = 'Contamos con una red nacional de aliados e IPS propias para centralizar diferentes servicios y optimizar tiempos y recursos.';
