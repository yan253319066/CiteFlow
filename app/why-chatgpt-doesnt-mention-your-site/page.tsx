import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = { title: 'Why ChatGPT Doesn\'t Mention Your Site | CiteFlow', description: 'Coming soon.', robots: { index: false }, alternates: { canonical: 'https://getciteflow.ai/why-chatgpt-doesnt-mention-your-site' } };

export default function Page() { return <main className='min-h-screen'><Navbar /><section className='pt-32 px-6 max-w-4xl mx-auto'><h1 className='text-4xl font-bold mb-4'>Why ChatGPT Doesn't Mention Your Site</h1><p className='text-slate-400'>Coming soon.</p></section></main>; }
