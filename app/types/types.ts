export type CollectionDb = Array<{
  id: string
  name: string
  ownerUserId: string
  featured: boolean
}>

export type CollectionWithElements = CollectionDb & {
  elements: ElementDb[]
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
