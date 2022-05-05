import { FormEvent, useState } from "react";
import useLetras from '../hooks/useLetras';

export interface IBusqueda {
    artista : string,
    cancion : string
}

const Formulario = (): JSX.Element => {
    const {setAlerta,busquedaLetra} = useLetras();
  const [busqueda, setBusqueda] = useState<IBusqueda>({
    artista: "",
    cancion: "",
  });

  const handleSubmit = (evento:FormEvent) => {
    evento.preventDefault();

    if(Object.values(busqueda).includes('')){
        return setAlerta('Coloca el nombre del artista y la canción')
    }
    busquedaLetra(busqueda);
    setAlerta('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <legend>Busca por Artistas y Canción</legend>
      <div className="form-grid">
        <div>
          <label htmlFor="artista">Artista</label>
          <input
            type="text"
            name="artista"
            placeholder="Nombre Artista"
            value={busqueda.artista}
            onChange={(evento) =>
              setBusqueda({
                ...busqueda,
                [evento.target.name]: evento.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="cancion">Canción</label>
          <input
            type="text"
            name="cancion"
            placeholder="Nombre Canción"
            value={busqueda.cancion}
            onChange={(evento) =>
              setBusqueda({
                ...busqueda,
                [evento.target.name]: evento.target.value,
              })
            }
          />
        </div>
        <input type="submit" value="Buscar" />
      </div>
    </form>
  );
};

export default Formulario;
