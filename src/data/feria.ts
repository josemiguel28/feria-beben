// ─── Tipos ──────────────────────────────────────────────────────────────────

export interface Activity {
  time: string;
  title: string;
  location: string;
  category: ActivityCategory;
  image?: string;    // ruta desde /public, ej: "/images/activity-desfile.jpg"
  featured?: boolean; // actividad destacada del día
}

export type ActivityCategory =
  | "cultural"
  | "religioso"
  | "musical"
  | "deportivo"
  | "tradicional"
  | "desfile";

export interface FeriaDay {
  date: string;
  dayLabel: string;
  dayName: string;
  dayNumber: number;
  activities: Activity[];
}

export interface FeriaInfo {
  name: string;
  shortName: string;   // nombre corto para navbar mobile
  town: string;
  year: number;
  startDate: string;
  endDate: string;
  totalDays: number;
  patronSaint: string;
  days: FeriaDay[];
}

// ─── Datos de la feria ───────────────────────────────────────────────────────

export const feria: FeriaInfo = {
  name: "Feria Patronal de San Marcos",
  shortName: "Feria San Marcos",
  town: "San Marcos de la Sierra",
  year: 2026,
  startDate: "2026-09-20",
  endDate: "2026-09-26",
  totalDays: 7,
  patronSaint: "San Marcos Evangelista",
  days: [
    {
      date: "2026-09-20",
      dayLabel: "Domingo 20",
      dayName: "Domingo",
      dayNumber: 20,
      activities: [
        { time: "9:00 AM",  title: "Pregón de Feria",    location: "Alcaldía Municipal",  category: "cultural"   },
        { time: "11:00 AM", title: "Misa de apertura",   location: "Iglesia San Marcos",  category: "religioso"  },
        { time: "4:00 PM",  title: "Desfile inaugural",  location: "Calle Principal",     category: "desfile", featured: true, image: "/images/activity-desfile.jpg" },
        { time: "7:00 PM",  title: "Noche de apertura",  location: "Plaza Municipal",     category: "musical"    },
      ],
    },
    {
      date: "2026-09-21",
      dayLabel: "Lunes 21",
      dayName: "Lunes",
      dayNumber: 21,
      activities: [
        { time: "10:00 AM", title: "Feria de artesanías",  location: "Parque Central",    category: "cultural"   },
        { time: "3:00 PM",  title: "Torneo de ajedrez",    location: "Casa Cultural",     category: "deportivo"  },
        { time: "7:00 PM",  title: "Concurso de danza",    location: "Plaza Municipal",   category: "cultural", featured: true },
        { time: "9:00 PM",  title: "Verbena popular",      location: "Plaza Municipal",   category: "musical"    },
      ],
    },
    {
      date: "2026-09-22",
      dayLabel: "Martes 22",
      dayName: "Martes",
      dayNumber: 22,
      activities: [
        { time: "10:00 AM", title: "Misa patronal",          location: "Iglesia San Marcos",  category: "religioso"  },
        { time: "2:00 PM",  title: "Cabalgata por el pueblo", location: "Calle Principal",    category: "tradicional" },
        { time: "4:00 PM",  title: "Desfile de carrozas",    location: "Parque Central",      category: "desfile", featured: true, image: "/images/activity-desfile.jpg" },
        { time: "7:00 PM",  title: "Noche cultural",         location: "Plaza Municipal",     category: "cultural"   },
        { time: "8:30 PM",  title: "Concierto de feria",     location: "Plaza Municipal",     category: "musical"    },
      ],
    },
    {
      date: "2026-09-23",
      dayLabel: "Miércoles 23",
      dayName: "Miércoles",
      dayNumber: 23,
      activities: [
        { time: "10:00 AM", title: "Juegos tradicionales", location: "Cancha Municipal",  category: "tradicional" },
        { time: "3:00 PM",  title: "Torneo de fútbol",     location: "Campo Deportivo",   category: "deportivo"   },
        { time: "7:00 PM",  title: "Noche de música",      location: "Plaza Municipal",   category: "musical", featured: true },
      ],
    },
    {
      date: "2026-09-24",
      dayLabel: "Jueves 24",
      dayName: "Jueves",
      dayNumber: 24,
      activities: [
        { time: "9:00 AM",  title: "Feria artesanal",          location: "Parque Central",  category: "cultural"    },
        { time: "2:00 PM",  title: "Competencia de peinados",  location: "Casa Cultural",   category: "tradicional" },
        { time: "8:00 PM",  title: "Noche de marimba",         location: "Plaza Municipal", category: "musical", featured: true },
      ],
    },
    {
      date: "2026-09-25",
      dayLabel: "Viernes 25",
      dayName: "Viernes",
      dayNumber: 25,
      activities: [
        { time: "10:00 AM", title: "Olimpiadas estudiantiles", location: "Campo Deportivo", category: "deportivo"  },
        { time: "4:00 PM",  title: "Coronación de la reina",  location: "Plaza Municipal", category: "cultural", featured: true },
        { time: "8:00 PM",  title: "Gran concierto",           location: "Plaza Municipal", category: "musical"    },
      ],
    },
    {
      date: "2026-09-26",
      dayLabel: "Sábado 26",
      dayName: "Sábado",
      dayNumber: 26,
      activities: [
        { time: "11:00 AM", title: "Desfile final",         location: "Calle Principal",     category: "desfile", featured: true, image: "/images/activity-desfile.jpg" },
        { time: "6:00 PM",  title: "Misa de clausura",     location: "Iglesia San Marcos",  category: "religioso" },
        { time: "8:00 PM",  title: "Gran finale y fuegos", location: "Plaza Municipal",     category: "musical"   },
      ],
    },
  ],
};

// ─── Tipos de lugar ──────────────────────────────────────────────────────────

export interface Place {
  name: string;
  tagline: string;       // texto corto bajo el nombre en la card
  description: string;
  hours?: string;
  address: string;
  image: string;         // ruta desde /public
  mapsUrl?: string;
}

// ─── Lugares del pueblo ──────────────────────────────────────────────────────

export const restaurants: Place[] = [
  {
    name: "El Rincón Típico",
    tagline: "Comida típica hondureña",
    description: "Baleadas, platos del día y frescos naturales en el corazón del pueblo.",
    hours: "7:00 AM – 9:00 PM",
    address: "Calle Principal, frente al Parque",
    image: "/images/place-rincon.jpg",
    mapsUrl: "https://maps.google.com",
  },
  {
    name: "Comedor Doña Rosa",
    tagline: "Cocina casera de siempre",
    description: "Sopas, antojitos y desayunos hechos con amor. El sabor de casa.",
    hours: "6:00 AM – 8:00 PM",
    address: "Barrio El Centro, una cuadra del mercado",
    image: "/images/place-comedor.jpg",
    mapsUrl: "https://maps.google.com",
  },
];

export const cafes: Place[] = [
  {
    name: "Café San Marcos",
    tagline: "Café de altura local",
    description: "Café cultivado en las montañas de Intibucá, pasteles artesanales y buen ambiente.",
    hours: "7:00 AM – 7:00 PM",
    address: "Parque Central, esquina norte",
    image: "/images/place-cafe-sanmarcos.jpg",
    mapsUrl: "https://maps.google.com",
  },
  {
    name: "La Terraza",
    tagline: "Vista al valle y al pueblo",
    description: "Café, jugos y meriendas con una vista panorámica que no tiene precio.",
    hours: "8:00 AM – 6:00 PM",
    address: "Calle La Loma, segundo piso",
    image: "/images/place-terraza.jpg",
    mapsUrl: "https://maps.google.com",
  },
];

export const hotels: Place[] = [
  {
    name: "Hotel La Ceiba",
    tagline: "Cómodo y bien ubicado",
    description: "Habitaciones limpias, wifi y desayuno incluido. A dos cuadras de todo.",
    hours: "Recepción 24h",
    address: "Av. Principal, salida norte",
    image: "/images/place-hotel.jpg",
    mapsUrl: "https://maps.google.com",
  },
  {
    name: "Posada El Parque",
    tagline: "Ambiente familiar y tranquilo",
    description: "Hospedaje íntimo en un patio colonial lleno de flores. La experiencia auténtica.",
    hours: "Check-in desde 2:00 PM",
    address: "Media cuadra del Parque Central",
    image: "/images/place-posada.jpg",
    mapsUrl: "https://maps.google.com",
  },
];

export const landmarks: Place[] = [
  {
    name: "Iglesia San Marcos",
    tagline: "Patrimonio colonial · Desde 1800",
    description: "El corazón espiritual del pueblo. Arquitectura colonial única en la región.",
    address: "Parque Central",
    image: "/images/place-iglesia.jpg",
    mapsUrl: "https://maps.google.com",
  },
  {
    name: "Mirador El Cerro",
    tagline: "Vista panorámica del valle",
    description: "A 15 minutos a pie. Una vista que lo cambia todo.",
    address: "Camino al cerro, salida este",
    image: "/images/place-mirador.jpg",
    mapsUrl: "https://maps.google.com",
  },
];
