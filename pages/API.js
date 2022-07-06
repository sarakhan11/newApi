import image from "next/image";
export const getStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const API = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-blue-400 border">
      {data.results.map((curElem) => {
        return (
          <div
            key={curElem.id}
            className="flex  bg-indigo-400 items-center justify-center p-5"
          >
            <img className="rounded md:w-64 w-40 my-1" src={curElem.image} />
            <div class="md:ml-5 ml-3 my-auto">
              <h3 className="font-extrabold italic sm:text-lg text-sm text-indigo-200 sm:mb-2 mb-0">
                {curElem.id}.
              </h3>
              <h2 className="text-blue-200 font-bold text-xl">
                Name: {curElem.name}
              </h2>
              <h2 className="text-blue-200 font-semibold text-lg">
                Status:{curElem.status}
              </h2>
              <h2 className="text-blue-200 font-semibold text-lg">
                Species:{curElem.species}
              </h2>
              <h2 className="text-blue-200 font-semibold text-lg">
                Gender:{curElem.gender}
              </h2>
              <h2 className="text-blue-200 text-sm italic">{curElem.url}</h2>
            </div>
          </div>
      );
    })}
  </div>
);
};
export default API;