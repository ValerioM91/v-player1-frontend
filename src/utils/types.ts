import "styled-components"
import type theme from "./theme"

declare module "styled-components" {
  export interface DefaultTheme {
    animations: typeof theme.animations
    colors: typeof theme.colors
    device: typeof theme.device
    fontSizes: typeof theme.fontSizes
    maxWidth: typeof theme.maxWidth
  }
}
