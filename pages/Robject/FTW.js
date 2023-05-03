import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { cats: data },
  };
};

const Cats = ({ cats }) => {
  return (
    <div>
      <h1>Cast by 9 arm</h1>
      {cats.map((cats) => (
        <Link href={"/Robject/" + cats.id}>
          <div key={cats.id}>
            <h3>{cats.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cats;
