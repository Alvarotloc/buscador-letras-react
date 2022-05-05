type IChildren = {
    children : string
}
const Alerta = ({children}:IChildren):JSX.Element => {
  return (
    <div className="alerta">{children}</div>
  )
}

export default Alerta