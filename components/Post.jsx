import { SanityClient, urlFor } from '@/sanity';

const Post = ({ posts }) => {
  console.log(posts);

  // Ensure that posts is an array before trying to map over it
  const postItems = Array.isArray(posts) ? posts : [];

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      {postItems.length > 0 ? (
        // Render your posts here
        postItems.map(post => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            {/* Additional post details */}
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  try {
    const posts = await SanityClient.fetch(query);

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Post;
