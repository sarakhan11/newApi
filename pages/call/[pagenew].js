export const getStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  const paths = data.results.map((curElem) => {
    return { params: { pagenew: curElem.id.toString() } };
  });
  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const id = context.params.pagenew;
  const res = await fetch(`https://rickandmortyapi.com/api/character/ ${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
const myData = ({ data }) => {
  return (
    <>
      <div
        key={data.id}
        className="flex  bg-gray-400 items-center justify-center p-5"
      >
        <img className="my-2 rounded md:w-64 w-40" src={data.image} />
        <div class="ml-2 md:ml-5 my-auto">
          <h3 className="font-extrabold italic sm:text-lg text-sm text-indigo-200 sm:mb-2 mb-0">
            {data.id}
          </h3>

          <h2 className="font-bold text-xl  text-indigo-100">
            Name: {data.name}
          </h2>

          <h2 className="font-semibold text-lg  text-indigo-100">
            Status:{data.status}
          </h2>

          <h2 className="italic text-sm  text-indigo-100">{data.url}</h2>
          <h2 className="italic text-sm  text-indigo-100">{data.speciesl}</h2>
        </div>
      </div>
    </>
  );
};

export default myData;
