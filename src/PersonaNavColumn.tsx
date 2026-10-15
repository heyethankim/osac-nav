import { useState, type FormEvent, type MouseEvent as ReactMouseEvent } from 'react'
import {
  Nav,
  NavExpandable,
  NavItem,
  NavList,
} from '@patternfly/react-core'
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon'
import type { PersonaNavConfig } from './navData'

type PersonaNavColumnProps = {
  config: PersonaNavConfig
}

export function PersonaNavColumn({ config }: PersonaNavColumnProps) {
  const [activeItem, setActiveItem] = useState(config.activeItem)
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(config.defaultExpanded.map((id) => [id, true])),
  )

  const onNavSelect = (
    _event: FormEvent<HTMLInputElement>,
    result: { itemId: number | string },
  ) => {
    setActiveItem(String(result.itemId))
  }

  const onNavToggle = (
    _event: ReactMouseEvent<HTMLButtonElement>,
    result: { groupId: number | string; isExpanded: boolean },
  ) => {
    setExpanded((prev) => ({
      ...prev,
      [String(result.groupId)]: result.isExpanded,
    }))
  }

  return (
    <section className="nav-compare__column" aria-label={config.label}>
      <div className="nav-compare__persona">{config.label}</div>
      <div className="nav-compare__shell">
        <header className="nav-compare__masthead">
          <span className="nav-compare__toggle" aria-hidden>
            <BarsIcon />
          </span>
        </header>

        <div className="nav-compare__sidebar">
          <Nav
            onSelect={onNavSelect}
            onToggle={onNavToggle}
            aria-label={`${config.label} primary`}
          >
            <NavList>
              {config.nav.map((row) => {
                if (row.kind === 'link') {
                  return (
                    <NavItem
                      key={row.id}
                      preventDefault
                      to={`#${config.id}-${row.id}`}
                      itemId={row.id}
                      isActive={activeItem === row.id}
                    >
                      {row.label}
                    </NavItem>
                  )
                }

                const childIds = row.children.map((c) => c.id)
                const isGroupActive = childIds.includes(activeItem)

                return (
                  <NavExpandable
                    key={row.groupId}
                    title={row.label}
                    groupId={row.groupId}
                    isActive={isGroupActive}
                    isExpanded={expanded[row.groupId] ?? false}
                  >
                    {row.children.map((child) => (
                      <NavItem
                        key={child.id}
                        preventDefault
                        to={`#${config.id}-${child.id}`}
                        groupId={row.groupId}
                        itemId={child.id}
                        isActive={activeItem === child.id}
                      >
                        {child.label}
                      </NavItem>
                    ))}
                  </NavExpandable>
                )
              })}
            </NavList>
          </Nav>
        </div>

      </div>
    </section>
  )
}
