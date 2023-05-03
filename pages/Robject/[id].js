import { useEffect } from "react";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((cats) => {
    return {
      params: { id: cats.id.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (Context) => {
  const id = Context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: { cats: data },
  };
};

const Detail = ({ cats }) => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <div>
      <h1>{cats.name}</h1>
      <p>{cats.email}</p>
      <p>{cats.website}</p>
      <p>{cats.address.city}</p>
    </div>
  );
};

export default Detail;
