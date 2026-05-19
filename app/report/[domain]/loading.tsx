import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <main className="min-h-screen pb-20 overflow-x-hidden">
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#6E7BFF] opacity-[0.05] blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#8B5CF6] opacity-[0.05] blur-[100px] rounded-full -z-10" />
      <div className="pt-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
          <Loader2 className="w-10 h-10 text-primary animate-spin" />
          <p className="text-slate-400 text-sm font-medium">Analyzing your site...</p>
          <p className="text-slate-600 text-xs">This may take up to 30 seconds</p>
        </div>
      </div>
    </main>
  );
}
