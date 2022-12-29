import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="w-full text-center mt-8">
        <h3 className="text-lg text-red-600 font-bold">Blog page</h3>
        <div className="hover:text-red-400">
          <Link href="/">Geri dön</Link>
        </div>
      </div>
    </div>
  );
}
