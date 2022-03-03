import Container from "../Container";
import Heading from "../Heading";
import PostCard from "../PostCard";

const Component = ({ className, posts }) => {
  return (
    <div className={className}>
      <Container>
        <Heading
          color="textColor"
          heading="Latest Posts"
          headingType="h1"
          size="headingMedium"
          alignment="center"
          className="review-heading"
          borderBottom
          afterLine
        />
        <div className="posts">
          {posts.map((post, i) => (
            <PostCard key={i} {...post} className="post" />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Component;
