export interface Equipo {
    id: number;
    nombre: string;
    estado: string;
  }
  
  export interface Quirofano {
    id: number;
    numero: string;
    estado: string;
    equipos: Equipo[];
  }
  