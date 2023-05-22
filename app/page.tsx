import Posts from './components/Posts';

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-auto pt-5 max-w-xs md:max-w-xl">
      <h1 className="text-2xl">{`Hello and Welcome, 👋 I'm Fernando`}</h1>
      <Posts />
    </main>
  );
}
