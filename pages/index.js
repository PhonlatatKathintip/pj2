import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tesla Cat List | Home</title>
        <meta name="keyword" content="Tesla" />
      </Head>
      <div>
        <h1 className="text-l">My Cat Web</h1>
        <p>This web site is made for Cat</p>
        <p>For Studies not for Sale</p>
      </div>
      <Link href="/Robject">See All the cats</Link>
    </div>
  );
}
