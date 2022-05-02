import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import { Author } from '../components/Author';

const AllAuthorsQuery = gql`
  query AllAuthorsQuery {
    authors {
      id
      name
    }
  }
`;

function Home() {
  const { data, loading, error } = useQuery(AllAuthorsQuery, {});

  if (loading) return <p>Loading authors...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <Head>
        <title>Authors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto max-w-5xl my-20 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.authors.map(({ node }, i) => (
              <Author
                id={node.id}
                name={node.name}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
