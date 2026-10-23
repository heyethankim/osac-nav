import { useState } from 'react'
import { PersonaNavColumn } from './PersonaNavColumn'
import { personasInOrder, type PersonaId } from './navData'

export default function App() {
  const [tipOwnerId, setTipOwnerId] = useState<PersonaId | null>(null)

  return (
    <div className="nav-compare">
      <header className="nav-compare__header">
        <div className="nav-compare__title-row">
          <img
            className="nav-compare__brand"
            src={`${import.meta.env.BASE_URL}redhat-hat.svg`}
            alt="Red Hat"
            width={36}
            height={27}
            decoding="async"
          />
          <h1 className="nav-compare__title">
            Cloud Extensions (previously OSAC) by Persona
          </h1>
        </div>
        <p className="nav-compare__subtitle">
          Provider Admin · Tenant Admin · Tenant User · IdP Manager — side-by-side prototype.
          Pages are read-only for the dev preview.
        </p>
      </header>

      <div className="nav-compare__columns">
        {personasInOrder.map((persona) => (
          <PersonaNavColumn
            key={persona.id}
            config={persona}
            tipActive={tipOwnerId === persona.id}
            onActivate={() => setTipOwnerId(persona.id)}
          />
        ))}
      </div>
    </div>
  )
}
