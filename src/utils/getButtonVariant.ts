import type Button from "@/components/Button"

const getButtonVariant = (buttonType: string) => {
  return (
    ["primary", "secondary", "tertiary", "quaternary"].includes(buttonType) ? buttonType : "primary"
  ) as React.ComponentProps<typeof Button>["variant"]
}
export default getButtonVariant
