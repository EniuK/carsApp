export type CollectionDb = Array<{
  id: string
  name: string
  ownerUserId: string
  featured: boolean
}>

export type CollectionWithElements = CollectionDb & {
  elements: ElementDb[]
}

export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  premium: boolean
  blocked: boolean
  password: string
  status: string
  dateOfJoining: string
}

export type ElementDb = {
  id: string
  collectionsId: string[]
  owneruserid: string
  name: string
  carLink: string
  year: string
  colors: string[]
  tags: string[]
}
