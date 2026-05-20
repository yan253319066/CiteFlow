import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = { title: 'Profound vs CiteFlow | CiteFlow', description: 'Coming soon.', robots: { index: false }, alternates: { canonical: 'https://www.getciteflow.ai/compare/profound-vs-citeflow' } };

export default function Page() { return <main className='min-h-screen'><Navbar /><section className='pt-32 px-6 max-w-4xl mx-auto'><h1 className='text-4xl font-bold mb-4'>Profound vs CiteFlow</h1><p className='text-slate-400'>Coming soon.</p></section></main>; }
