import { SanityClient, urlFor } from '@/sanity';

const Post = ({ posts }) => {
  console.log(posts);

  return (
    <div>
      <h1>Welcome to My Blog</h1>
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
