import type { RestauranteInfo } from "@/types";

// Dirección, teléfono y rating sacados de Google Maps
export const restaurante: RestauranteInfo = {
  nombre: "Parrilla el Refugio",
  nombreCorto: "El Refugio",
  eslogan: "El fuego, la carne y los buenos momentos",
  descripcionCorta:
    "Parrilla tradicional argentina en Cañada de Gómez, con cocción a las brasas y ambiente familiar.",
  descripcionLarga:
    "Desde nuestra parrilla a las brasas servimos los cortes de siempre con el cuidado de la cocina de barrio: fuego lento, buena mesa y la calidez de encontrarse con los tuyos. Una experiencia pensada para quienes valoran la tradición de la parrilla argentina, llevada con esmero y hospitalidad.",
  direccion: "Av. Santa Fe 1901",
  localidad: "Cañada de Gómez",
  provincia: "Santa Fe",
  telefonoDisplay: "03471 60-0980",
  whatsappNumero: "5493471600980",
  coordenadas: { lat: -32.8225, lng: -61.4038 },
  mapsUrl: "https://maps.app.goo.gl/PYojSSxSanmknttQ8",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Parrilla+el+Refugio,+Av.+Santa+Fe+1901,+Ca%C3%B1ada+de+G%C3%B3mez,+Santa+Fe&output=embed",
  rating: 4.3,
  totalResenas: 659,
  // Solo sé que abre a las 20, el resto hay que confirmarlo con el dueño
  horarios: [
    { dia: "lunes", etiqueta: "Lunes", turnos: ["20:00 - 00:00"] },
    { dia: "martes", etiqueta: "Martes", turnos: ["20:00 - 00:00"] },
    { dia: "miercoles", etiqueta: "Miércoles", turnos: ["20:00 - 00:00"] },
    { dia: "jueves", etiqueta: "Jueves", turnos: ["20:00 - 00:00"] },
    { dia: "viernes", etiqueta: "Viernes", turnos: ["20:00 - 00:30"] },
    { dia: "sabado", etiqueta: "Sábado", turnos: ["20:00 - 00:30"] },
    { dia: "domingo", etiqueta: "Domingo", turnos: ["12:30 - 15:30", "20:00 - 00:00"] },
  ],
  redes: [
    {
      nombre: "WhatsApp",
      url: "https://wa.me/5493471600980",
    },
  ],
};

export const reseñasDestacadas = [
  {
    texto:
      "Excelente servicio, las carnes exquisitas y variedad de entradas y ensaladas.",
    fuente: "Reseña de Google",
  },
  {
    texto: "Exquisita parrilla, precios accesibles y una muy buena atención.",
    fuente: "Reseña de Google",
  },
  {
    texto:
      "Lindo, me gustó, un ambiente agradable para familia, pareja, encuentro. Una atención esmerada.",
    fuente: "Reseña de Google",
  },
];
