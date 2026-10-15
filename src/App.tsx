import { PersonaNavColumn } from './PersonaNavColumn'
import { personasInOrder } from './navData'

export default function App() {
  return (
    <div className="nav-compare">
      <header className="nav-compare__header">
        <h1 className="nav-compare__title">OSAC Navigation by Persona</h1>
        <p className="nav-compare__subtitle">
          Provider Admin · Tenant Admin · Tenant User — side-by-side prototype
        </p>
      </header>

      <div className="nav-compare__columns">
        {personasInOrder.map((persona) => (
          <PersonaNavColumn key={persona.id} config={persona} />
        ))}
      </div>
    </div>
  )
}
