import type { TMenuItem } from "@/types"

const createMenuItemArray = (itemsNodes: TMenuItem[]) => {
  if (!itemsNodes || !itemsNodes.length) return []
  const menuItemsPaths: TMenuItem[] = []
  itemsNodes.forEach(item => {
    if (!item.path.includes("/v-player1")) return menuItemsPaths.push(item)
    const newPath = item.path.replace("/v-player1", "")
    const newItem = { ...item }
    newItem.path = newPath
    return menuItemsPaths.push(newItem)
  })
  return menuItemsPaths
}

export default createMenuItemArray
