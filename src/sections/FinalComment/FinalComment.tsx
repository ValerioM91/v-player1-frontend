import parse from "html-react-parser"

import Heading from "@/components/Heading"
import type { FinalCommentSectionQueryFragment } from "@/gql/graphql"
import getHeadingType from "@/utils/getHeadingType"

type Props = FinalCommentSectionQueryFragment["fields"] & {
  className?: string
  vote?: number
}

const Component = ({ className, heading, headingType, content, vote }: Props) => {
  return (
    <div className={className}>
      {heading && (
        <Heading
          headingType={getHeadingType(headingType)}
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
