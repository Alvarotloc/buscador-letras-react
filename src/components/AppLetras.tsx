import Formulario from "./Formulario";
import useLetras from "../hooks/useLetras";
import Alerta from "./Alerta";
import Letra from "./Letra";
const AppLetras = (): JSX.Element => {
  const { alerta, letra, isCargando } = useLetras();
  return (
    <>
      <header>Búsqueda de letras de canciones</header>
      <Formulario />
      <main>
        {alerta ? (
          <Alerta>{alerta}</Alerta>
        ) : letra ? (
          <Letra />
        ) : isCargando ? (
          "Cargando..."
        ) : (
          <p className="text-center">Busca Letras De Tus Artistas Favoritos</p>
        )}
      </main>
    </>
  );
};

export default AppLetras;
