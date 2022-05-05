import AppLetras from './components/AppLetras';
import { LetrasProvider } from './context/LetrasProvider';
const App = ():JSX.Element => {
  return (
    <LetrasProvider>
      <AppLetras />
    </LetrasProvider>
  )
}

export default App