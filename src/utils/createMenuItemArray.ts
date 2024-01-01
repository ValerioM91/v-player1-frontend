import { type MenuItem } from "@/gql/graphql"
import type { TMenuItem } from "@/types"

const createMenuItemArray = (itemsNodes: Omit<MenuItem, "databaseId" | "id">[]) => {
  if (!itemsNodes || !itemsNodes.length) return []

  const menuItemsPaths: TMenuItem[] = itemsNodes.map(item => {
    const path = item.path.replace("/v-player1", "")
    return { label: item.label, cssClasses: item.cssClasses.join(" "), path }
  })

  return menuItemsPaths
}

export default createMenuItemArray
