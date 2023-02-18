import React from "react"
import { measurePerformance } from "reassure"
import { ListItem } from "./ListItem"

test("Simple test", async () => {
  await measurePerformance(<ListItem />)
})
