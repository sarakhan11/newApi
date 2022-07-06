export const getStaticProps = async ()  => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
};

const API = ({ data }) =>{
  return (
    <div>
      {data.results.map((curElem) => {
        return ( 
        <div key={curElem.id}>
          <h3>{curElem.id}</h3>
          <h2>{curElem.title}</h2>
          <h2>{curElem.name}</h2>
          <h2>{curElem.status}</h2>
        </div>
      );
    })}
  </div>
);
};
export default API;