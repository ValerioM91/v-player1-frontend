import parse from "html-react-parser";

import Heading from "../Heading";

export const FinalCommentQuery = `
... on AcfFinalComment1Block {
    attributes: finalComment1 {
      heading
      headingType
      content
    }
  }`;

const Component = ({ className, heading, headingType, content, vote }) => {
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
  );
};

export default Component;
