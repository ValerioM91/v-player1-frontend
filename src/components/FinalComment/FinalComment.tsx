import parse from "html-react-parser"

import Heading from "../Heading"
import { THeadingType } from "../../types"

export type Props = {
  className?: string
  heading?: string
  headingType?: THeadingType
  content?: string
  vote?: number
  onClick: (any: any) => any
}

const Component = ({ className, heading, headingType, content, vote }: Props) => {
  return (
    <div className={className}>
      {heading && (
        <Heading
          headingType={headingType}
          heading={heading}
          size="headingSmall"
          className="heading"
          color="white"
          alignment="center"
          borderBottom
        />
      )}
      {content && <div className="content">{parse(content)}</div>}

      {vote && (
        <div className="final-score heading-font">
          <span>V-SCORE</span> <span className="score">{vote.toFixed(1)}</span>
        </div>
      )}
    </div>
  )
}

export default Component
