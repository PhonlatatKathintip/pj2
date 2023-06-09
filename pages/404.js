import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooooooops.....</h1>
      <h2>That page can't be found.</h2>
      <Link href="/">Go Back To The Home page</Link>
    </div>
  );
};

export default NotFound;
