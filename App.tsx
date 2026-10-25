import { Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-center gap-2">
          <Heart className="h-5 w-5 text-rose-500" />
          <h1 className="text-xl font-semibold text-stone-800 tracking-wide">
            زين وأمينة
          </h1>
          <Heart className="h-5 w-5 text-rose-500" />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-3xl min-h-[60vh] rounded-2xl border border-stone-200 bg-white shadow-sm" />
      </main>
    </div>
  );
}

export default App;
