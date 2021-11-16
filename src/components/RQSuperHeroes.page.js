import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    'super-heros',
    fetchSuperHeroes,
    {
      // staleTime: 40000,
      enabled: false,
    }
  );
  console.log(isLoading, isFetching);
  if (isLoading || isFetching) {
    return <div>is loading.......</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <h2>rq hero</h2>
      <button onClick={refetch}>btn</button>
      {data?.data.map((hero) => {
        return <div key={hero.name}> {hero.name}</div>;
      })}
    </>
  );
};
