export type NavLink = {
  kind: 'link'
  id: string
  label: string
}

export type NavExpand = {
  kind: 'expand'
  groupId: string
  label: string
  children: { id: string; label: string }[]
}

export type NavRow = NavLink | NavExpand

export type PersonaId = 'provider-admin' | 'tenant-admin' | 'tenant-user'

export type PersonaNavConfig = {
  id: PersonaId
  label: string
  activeItem: string
  defaultExpanded: string[]
  nav: NavRow[]
}

/** Provider Admin */
export const providerAdminNav: PersonaNavConfig = {
  id: 'provider-admin',
  label: 'Provider Admin',
  activeItem: 'tenants',
  defaultExpanded: ['administration', 'compute', 'networking', 'storage'],
  nav: [
    { kind: 'link', id: 'overview', label: 'Overview' },
    { kind: 'link', id: 'catalog', label: 'Catalog' },
    {
      kind: 'expand',
      groupId: 'administration',
      label: 'Administration',
      children: [
        { id: 'tenants', label: 'Tenants' },
        { id: 'billing', label: 'Billing' },
      ],
    },
    {
      kind: 'expand',
      groupId: 'compute',
      label: 'Compute',
      children: [
        { id: 'bare-metal-instance-types', label: 'Bare metal instance types' },
        { id: 'instance-types', label: 'Virtual machine instance types' },
      ],
    },
    {
      kind: 'expand',
      groupId: 'networking',
      label: 'Networking',
      children: [{ id: 'external-ip-pools', label: 'External IP pools' }],
    },
    {
      kind: 'expand',
      groupId: 'storage',
      label: 'Storage',
      children: [
        { id: 'backends', label: 'Backends' },
        { id: 'tiers', label: 'Tiers' },
        { id: 'disk-images', label: 'Disk images' },
      ],
    },
    { kind: 'link', id: 'secrets', label: 'Secrets' },
  ],
}

/** Tenant Admin */
export const tenantAdminNav: PersonaNavConfig = {
  id: 'tenant-admin',
  label: 'Tenant Admin',
  activeItem: 'catalog',
  defaultExpanded: ['services', 'networking', 'storage', 'administration'],
  nav: [
    { kind: 'link', id: 'overview', label: 'Overview' },
    { kind: 'link', id: 'catalog', label: 'Catalog' },
    {
      kind: 'expand',
      groupId: 'services',
      label: 'Services',
      children: [
        { id: 'bare-metal', label: 'Bare metal' },
        { id: 'clusters', label: 'Clusters' },
        { id: 'models', label: 'Models' },
        { id: 'virtual-machines', label: 'Virtual machines' },
      ],
    },
    { kind: 'link', id: 'projects', label: 'Projects' },
    {
      kind: 'expand',
      groupId: 'networking',
      label: 'Networking',
      children: [
        { id: 'virtual-networks', label: 'Virtual networks' },
        { id: 'external-ips', label: 'External IPs' },
      ],
    },
    {
      kind: 'expand',
      groupId: 'storage',
      label: 'Storage',
      children: [{ id: 'volumes', label: 'Volumes' }],
    },
    {
      kind: 'expand',
      groupId: 'administration',
      label: 'Administration',
      children: [
        { id: 'roles', label: 'Roles' },
        { id: 'billing', label: 'Billing' },
        { id: 'identity-provider', label: 'Identity provider' },
      ],
    },
    { kind: 'link', id: 'secrets', label: 'Secrets' },
  ],
}

/** Tenant User */
export const tenantUserNav: PersonaNavConfig = {
  id: 'tenant-user',
  label: 'Tenant User',
  activeItem: 'catalog',
  defaultExpanded: ['services', 'networking'],
  nav: [
    { kind: 'link', id: 'overview', label: 'Overview' },
    { kind: 'link', id: 'catalog', label: 'Catalog' },
    {
      kind: 'expand',
      groupId: 'services',
      label: 'Services',
      children: [
        { id: 'bare-metal', label: 'Bare metal' },
        { id: 'clusters', label: 'Clusters' },
        { id: 'models', label: 'Models' },
        { id: 'virtual-machines', label: 'Virtual machines' },
      ],
    },
    { kind: 'link', id: 'projects', label: 'Projects' },
    {
      kind: 'expand',
      groupId: 'networking',
      label: 'Networking',
      children: [
        { id: 'virtual-networks', label: 'Virtual networks' },
        { id: 'external-ips', label: 'External IPs' },
      ],
    },
    { kind: 'link', id: 'secrets', label: 'Secrets' },
    { kind: 'link', id: 'activity-log', label: 'Activity log' },
  ],
}

export const personasInOrder: PersonaNavConfig[] = [
  providerAdminNav,
  tenantAdminNav,
  tenantUserNav,
]
