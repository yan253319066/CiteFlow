import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = { title: 'GEO for SaaS | CiteFlow', description: 'Coming soon.', robots: { index: false }, alternates: { canonical: 'https://getciteflow.ai/geo-for-saas' } };

export default function Page() { return <main className='min-h-screen'><Navbar /><section className='pt-32 px-6 max-w-4xl mx-auto'><h1 className='text-4xl font-bold mb-4'>GEO for SaaS</h1><p className='text-slate-400'>Coming soon.</p></section></main>; }
