export type DiaSemana =
  | "lunes"
  | "martes"
  | "miercoles"
  | "jueves"
  | "viernes"
  | "sabado"
  | "domingo";

export interface HorarioDia {
  dia: DiaSemana;
  etiqueta: string;
  turnos: string[] | null;
}

export interface RedSocial {
  nombre: "WhatsApp";
  url: string;
  handle?: string;
}

export interface RestauranteInfo {
  nombre: string;
  nombreCorto: string;
  eslogan: string;
  descripcionCorta: string;
  descripcionLarga: string;
  direccion: string;
  localidad: string;
  provincia: string;
  telefonoDisplay: string;
  whatsappNumero: string;
  email?: string;
  coordenadas: { lat: number; lng: number };
  mapsUrl: string;
  mapsEmbedUrl: string;
  rating: number;
  totalResenas: number;
  horarios: HorarioDia[];
  redes: RedSocial[];
}

export type CategoriaId =
  | "parrilla"
  | "carnes"
  | "guarniciones"
  | "ensaladas"
  | "bebidas"
  | "postres";

export interface CategoriaMenu {
  id: CategoriaId;
  nombre: string;
  descripcion: string;
  imagen: string;
}

export interface ProductoMenu {
  id: string;
  categoriaId: CategoriaId;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen?: string;
  etiqueta?: "Más pedido" | "Nuevo" | "Para compartir" | "Casa";
  destacado?: boolean;
}

export interface CorteEspecialidad {
  id: string;
  nombre: string;
  descripcion: string;
  detalle: string;
  imagen: string;
}

export interface ImagenGaleria {
  id: string;
  src: string;
  alt: string;
  categoria: "parrilla" | "ambiente" | "platos" | "equipo";
  ancho: number;
  alto: number;
}

export interface FranjaHoraria {
  hora: string;
  estado: "disponible" | "pocos-lugares" | "completo";
}

export interface ReservaFormData {
  nombre: string;
  apellido: string;
  whatsapp: string;
  email?: string;
  personas: number;
  fecha: string;
  horario: string;
  comentarios?: string;
}
