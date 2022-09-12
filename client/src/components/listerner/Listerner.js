const Listerner = ({ element, className, name}) => {
  return (
    <ul className={className}>
      {element.map(e => <li key={e.name} className="flex elips"> <p><img className="icon" src={e.icon} alt={e.name} /></p> <h3 className="elips">{name ? e.name : ''}</h3></li>)}
    </ul>
  )
}
export default Listerner;