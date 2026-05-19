import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = { title: 'CiteFlow GEO Page', description: 'Programmatic SEO page for GEO', alternates: { canonical: 'https://getciteflow.ai' } };

export default function Page() { return <main className='min-h-screen'><Navbar /><section className='pt-32 px-6 max-w-4xl mx-auto'><h1 className='text-4xl font-bold mb-4'>CiteFlow GEO Landing</h1><p className='text-slate-400'>This is a programmatic SEO page template for AI visibility growth.</p></section></main>; }
