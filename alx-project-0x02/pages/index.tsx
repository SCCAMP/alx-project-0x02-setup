// pages/index.tsx
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <div>
       <Header />
       <main className="p-4">
         <h1 className="text-2xl font-bold">Welcome to the Next.js Project</h1>
       </main>
    </div>
  );
}