import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <h1 className="text-6xl font-bold">Welcome to Next.js!</h1>
        <p className="mt-3 text-2xl"> Doing Hard Things! <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">pages/index.tsx</code></p>   
      <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        <a
          href="https://nextjs.org/docs"
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
          <p className="mt-4 text-xl">Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn"
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Learn &rarr;</h3>
          <p className="mt-4 text-xl">Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://vercel.com/new"
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
          <p className="mt-4 text-xl">Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
      </div>
    </>
  );
}
Home.getLayout = function PageLayout(page: React.ReactElement) {
  return <main className={`${geistSans.variable} ${geistMono.variable}`}>{page}</main>;
}
