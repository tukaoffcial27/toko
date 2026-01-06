import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";

// 1. FUNGSI UNTUK MEMBACA DATA (Agar tidak membebani memori browser)
async function getSeoData() {
  const filePath = path.join(process.cwd(), "data-seo.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export const dynamicParams = true;

// 2. GENERATE STATIC PARAMS (Tetap batasi 200 di awal)
export async function generateStaticParams() {
  const dataSeo = await getSeoData();
  return dataSeo.slice(0, 200).map((item: any) => ({
    slug: item.slug,
  }));
}

// 3. GENERATE METADATA
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dataSeo = await getSeoData();
  const item = dataSeo.find((d: any) => d.slug === slug);
  
  if (!item) return { title: "Not Found" };
  
  return {
    title: item.copywriting.h1,
    description: item.copywriting.p1,
    alternates: { canonical: `https://toko.guidify.app/id/${slug}` },
  };
}

export default async function pSEOPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dataSeo = await getSeoData();
  const data = dataSeo.find((item: any) => item.slug === slug);
  
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-[#0a192f] text-[#f9e2af] py-24 px-6 selection:bg-[#d4af37] selection:text-[#0a192f]">
      <div className="mx-auto max-w-4xl">
        
        {/* NAVIGASI */}
        <nav className="mb-12 flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] opacity-50">
          <Link href="/" className="hover:text-[#d4af37]">Home</Link>
          <span>/</span>
          <span className="text-[#d4af37]">{data.profesi}</span>
        </nav>

        {/* HERO */}
        <div className="text-center mb-16 border-b border-[#d4af37]/20 pb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10">
            {data.profesi} <br/> 
            <span className="text-[#d4af37]">{data.kota}</span>
          </h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            {data.rich_content.intro}
          </p>
        </div>

        {/* ARTICLE */}
        <article className="prose prose-invert max-w-none space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-[#d4af37] mb-6 uppercase italic">Tantangan Bisnis</h2>
            <p className="opacity-70 text-justify leading-relaxed">{data.rich_content.masalah}</p>
          </section>

          <section className="bg-white/5 p-10 rounded-3xl border border-[#d4af37]/10">
            <h2 className="text-xl font-bold mb-4 text-white uppercase">Solusi TUKA</h2>
            <p className="opacity-70 italic text-justify">{data.rich_content.solusi}</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-center mb-10 uppercase">FAQ {data.profesi}</h3>
            <div className="space-y-6">
              {data.rich_content.faq.map((f: any, i: number) => (
                <div key={i} className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
                  <h4 className="font-bold text-[#d4af37] mb-2">Q: {f.q}</h4>
                  <p className="opacity-60 text-sm">A: {f.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-center space-y-6">
          <Link 
            href="/" 
            className="bg-[#d4af37] text-[#0a192f] px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
          >
            Mulai di {data.kota} Sekarang
          </Link>
          <Link href="/" className="text-[10px] opacity-40 hover:opacity-100">
            ← KEMBALI KE HOME
          </Link>
        </div>

      </div>
    </main>
  );
}