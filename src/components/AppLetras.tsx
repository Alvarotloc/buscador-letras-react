import Formulario from "./Formulario";
import useLetras from "../hooks/useLetras";
import Alerta from './Alerta';
const AppLetras = (): JSX.Element => {
  const { alerta } = useLetras();
  return (
    <>
      <header>Búsqueda de letras de canciones</header>
      <Formulario />
      <main>
          {alerta && <Alerta>{alerta}</Alerta>}
      </main>
    </>
  );
};

export default AppLetras;
