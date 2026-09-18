// ─── Tipos ──────────────────────────────────────────────────────────────────

export interface Activity {
  time: string;      // "4:00 PM"
  title: string;
  location: string;
  category: ActivityCategory;
}

export type ActivityCategory =
  | "cultural"
  | "religioso"
  | "musical"
  | "deportivo"
  | "tradicional"
  | "desfile";

export interface FeriaDay {
  date: string;        // ISO "2026-09-22"
  dayLabel: string;   // "Martes 22"
  dayName: string;    // "Martes"
  dayNumber: number;  // 22
  activities: Activity[];
}

export interface FeriaInfo {
  name: string;
  town: string;
  year: number;
  startDate: string;
  endDate: string;
  totalDays: number;
  patronSaint: string;
  days: FeriaDay[];
}

// ─── Colores por categoría ──────────────────────────────────────────────────

export const categoryColors: Record<ActivityCategory, { bg: string; text: string; label: string }> = {
  cultural:    { bg: "bg-violet-100",  text: "text-violet-700",  label: "Cultural"     },
  religioso:   { bg: "bg-amber-100",   text: "text-amber-700",   label: "Religioso"    },
  musical:     { bg: "bg-rose-100",    text: "text-rose-700",    label: "Musical"      },
  deportivo:   { bg: "bg-emerald-100", text: "text-emerald-700", label: "Deportivo"    },
  tradicional: { bg: "bg-orange-100",  text: "text-orange-700",  label: "Tradicional"  },
  desfile:     { bg: "bg-sky-100",     text: "text-sky-700",     label: "Desfile"      },
};

// ─── Datos ficticios ────────────────────────────────────────────────────────

export const feria: FeriaInfo = {
  name: "Feria Patronal de San Marcos",
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
        { time: "9:00 AM",  title: "Pregón de Feria",           location: "Alcaldía Municipal", category: "cultural"    },
        { time: "11:00 AM", title: "Misa de apertura",          location: "Iglesia San Marcos",  category: "religioso"   },
        { time: "4:00 PM",  title: "Desfile inaugural",         location: "Calle Principal",     category: "desfile"     },
        { time: "7:00 PM",  title: "Noche de apertura",         location: "Plaza Municipal",     category: "musical"     },
      ],
    },
    {
      date: "2026-09-21",
      dayLabel: "Lunes 21",
      dayName: "Lunes",
      dayNumber: 21,
      activities: [
        { time: "10:00 AM", title: "Feria de artesanías",       location: "Parque Central",      category: "cultural"    },
        { time: "3:00 PM",  title: "Torneo de ajedrez",         location: "Casa Cultural",       category: "deportivo"   },
        { time: "7:00 PM",  title: "Concurso de danza",         location: "Plaza Municipal",     category: "cultural"    },
        { time: "9:00 PM",  title: "Verbena popular",           location: "Plaza Municipal",     category: "musical"     },
      ],
    },
    {
      date: "2026-09-22",
      dayLabel: "Martes 22",
      dayName: "Martes",
      dayNumber: 22,
      activities: [
        { time: "10:00 AM", title: "Misa patronal",             location: "Iglesia San Marcos",  category: "religioso"   },
        { time: "2:00 PM",  title: "Cabalgata por el pueblo",   location: "Calle Principal",     category: "tradicional" },
        { time: "4:00 PM",  title: "Desfile de carrozas",       location: "Parque Central",      category: "desfile"     },
        { time: "7:00 PM",  title: "Noche cultural",            location: "Plaza Municipal",     category: "cultural"    },
        { time: "8:30 PM",  title: "Concierto de feria",        location: "Plaza Municipal",     category: "musical"     },
      ],
    },
    {
      date: "2026-09-23",
      dayLabel: "Miércoles 23",
      dayName: "Miércoles",
      dayNumber: 23,
      activities: [
        { time: "10:00 AM", title: "Juegos tradicionales",      location: "Cancha Municipal",    category: "tradicional" },
        { time: "3:00 PM",  title: "Torneo de fútbol",          location: "Campo Deportivo",     category: "deportivo"   },
        { time: "7:00 PM",  title: "Noche de música",           location: "Plaza Municipal",     category: "musical"     },
      ],
    },
    {
      date: "2026-09-24",
      dayLabel: "Jueves 24",
      dayName: "Jueves",
      dayNumber: 24,
      activities: [
        { time: "9:00 AM",  title: "Feria artesanal",           location: "Parque Central",      category: "cultural"    },
        { time: "2:00 PM",  title: "Competencia de peinados",   location: "Casa Cultural",       category: "tradicional" },
        { time: "8:00 PM",  title: "Noche de marimba",          location: "Plaza Municipal",     category: "musical"     },
      ],
    },
    {
      date: "2026-09-25",
      dayLabel: "Viernes 25",
      dayName: "Viernes",
      dayNumber: 25,
      activities: [
        { time: "10:00 AM", title: "Olimpiadas estudiantiles",  location: "Campo Deportivo",     category: "deportivo"   },
        { time: "4:00 PM",  title: "Coronación de la reina",    location: "Plaza Municipal",     category: "cultural"    },
        { time: "8:00 PM",  title: "Gran concierto",            location: "Plaza Municipal",     category: "musical"     },
      ],
    },
    {
      date: "2026-09-26",
      dayLabel: "Sábado 26",
      dayName: "Sábado",
      dayNumber: 26,
      activities: [
        { time: "11:00 AM", title: "Desfile final",             location: "Calle Principal",     category: "desfile"     },
        { time: "6:00 PM",  title: "Misa de clausura",          location: "Iglesia San Marcos",  category: "religioso"   },
        { time: "8:00 PM",  title: "Gran finale y fuegos",      location: "Plaza Municipal",     category: "musical"     },
      ],
    },
  ],
};

// ─── Lugares del pueblo ─────────────────────────────────────────────────────

export interface Place {
  name: string;
  description: string;
  hours?: string;
  address: string;
}

export const restaurants: Place[] = [
  {
    name: "El Rincón Típico",
    description: "Baleadas, platos típicos y frescos naturales",
    hours: "7:00 AM – 9:00 PM",
    address: "Calle Principal, frente al Parque",
  },
  {
    name: "Comedor Doña Rosa",
    description: "Comida casera, sopas y antojitos hondureños",
    hours: "6:00 AM – 8:00 PM",
    address: "Barrio El Centro, una cuadra del mercado",
  },
];

export const cafes: Place[] = [
  {
    name: "Café San Marcos",
    description: "Café de altura local, desayunos y pasteles",
    hours: "7:00 AM – 7:00 PM",
    address: "Parque Central, esquina norte",
  },
  {
    name: "La Terraza",
    description: "Café, jugos y meriendas con vista al pueblo",
    hours: "8:00 AM – 6:00 PM",
    address: "Calle La Loma, segundo piso",
  },
];

export const hotels: Place[] = [
  {
    name: "Hotel La Ceiba",
    description: "Habitaciones cómodas, wifi y desayuno incluido",
    hours: "Recepción 24h",
    address: "Av. Principal, salida norte",
  },
  {
    name: "Posada El Parque",
    description: "Alojamiento familiar, ambiente tranquilo",
    hours: "Check-in desde 2:00 PM",
    address: "Media cuadra del Parque Central",
  },
];

export const landmarks: Place[] = [
  {
    name: "Iglesia San Marcos",
    description: "Iglesia colonial construida en 1800, patrimonio del pueblo",
    address: "Parque Central",
  },
  {
    name: "Mirador El Cerro",
    description: "Vista panorámica del valle y el pueblo, a 15 min a pie",
    address: "Camino al cerro, salida este",
  },
];
