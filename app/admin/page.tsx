"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Trash2 } from "lucide-react"; // Pastikan sudah install lucide-react

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<any[]>([]);

  // Form States
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (data) setProducts(data);
    if (error) console.error("Error fetch:", error.message);
  };

  useEffect(() => {
    if (isLoggedIn) fetchProducts();
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "tuka2026") setIsLoggedIn(true);
    else alert("Password Salah!");
  };

  const addProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Silakan pilih foto produk terlebih dahulu!");
    setLoading(true);
    
    try {
      const fileName = `${Date.now()}-${file.name.replace(/\s/g, '_')}`;
      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from("products")
        .insert([{ name, image_url: publicUrl, funnel_link: link }]);

      if (dbError) throw dbError;

      alert("Produk Berhasil Disimpan!");
      
      // RESET FORM OTOMATIS: Kembali bersih untuk input selanjutnya
      setName(""); 
      setLink(""); 
      setFile(null);
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      
      fetchProducts();
      
    } catch (error: any) {
      alert("Terjadi kesalahan: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // FUNGSI DELETE PRODUK
  const deleteProduct = async (id: string, imageUrl: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus produk ini?")) return;

    try {
      // 1. Hapus dari Database
      const { error: dbError } = await supabase.from("products").delete().eq("id", id);
      if (dbError) throw dbError;

      // 2. Hapus file dari Storage (Ekstrak nama file dari URL)
      const fileName = imageUrl.split('/').pop();
      if (fileName) {
        await supabase.storage.from('product-images').remove([fileName]);
      }

      alert("Produk berhasil dihapus!");
      fetchProducts();
    } catch (error: any) {
      alert("Gagal menghapus: " + error.message);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a192f] px-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm rounded-2xl border border-[#d4af37]/20 bg-white/5 p-8 text-center">
          <h1 className="mb-6 text-xl font-bold text-[#d4af37] uppercase tracking-widest">Admin Login</h1>
          <input 
            type="password" 
            placeholder="Masukkan Password" 
            className="mb-4 w-full rounded-lg bg-white/10 p-3 text-white outline-none border border-[#d4af37]/10 focus:border-[#d4af37]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full rounded-lg bg-[#d4af37] py-3 font-bold text-[#0a192f] uppercase">Masuk</button>
        </form>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a192f] p-8 md:p-24 space-y-12">
      <div className="mx-auto max-w-2xl rounded-2xl border border-[#d4af37]/20 bg-white/5 p-10">
        <h1 className="mb-8 text-2xl font-black text-[#f9e2af] uppercase tracking-tighter text-center">Tambah Produk SaaS</h1>
        
        <form onSubmit={addProduct} className="space-y-6">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[#d4af37] mb-2">Nama Produk</label>
            <input 
              type="text" value={name} onChange={(e) => setName(e.target.value)} required
              className="w-full rounded-lg bg-white/5 p-4 text-white border border-[#d4af37]/10 focus:border-[#d4af37] outline-none"
              placeholder="Contoh: Invoice Maker Pro"
            />
          </div>
          
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[#d4af37] mb-2">Upload Foto Produk (Portrait)</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
              required
              className="w-full rounded-lg bg-white/5 p-4 text-white border border-[#d4af37]/10 focus:border-[#d4af37] outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#d4af37] file:text-[#0a192f] hover:file:opacity-80"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[#d4af37] mb-2">Link Funnel</label>
            <input 
              type="text" value={link} onChange={(e) => setLink(e.target.value)} required
              className="w-full rounded-lg bg-white/5 p-4 text-white border border-[#d4af37]/10 focus:border-[#d4af37] outline-none"
              placeholder="https://invoice.guidify.app"
            />
          </div>

          <button 
            disabled={loading}
            className="w-full rounded-full bg-[#d4af37] py-4 text-xs font-bold uppercase tracking-widest text-[#0a192f] hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            {loading ? "Sedang Menyimpan..." : "Simpan Produk Ke Store"}
          </button>
        </form>
      </div>

      {/* SECTION DAFTAR PRODUK DENGAN TOMBOL HAPUS */}
      <div className="mx-auto max-w-5xl rounded-2xl border border-[#d4af37]/10 bg-white/5 p-10">
        <h2 className="mb-8 text-sm font-bold text-[#d4af37] uppercase tracking-[0.3em]">Koleksi Store Anda ({products.length})</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {products.map((p) => (
            <div key={p.id} className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-[#d4af37]/20">
              <img src={p.image_url} alt={p.name} className="w-full h-full object-cover" />
              
              {/* TOMBOL DELETE (Overlay) */}
              <button 
                onClick={() => deleteProduct(p.id, p.image_url)}
                className="absolute top-2 right-2 z-30 p-1.5 bg-red-600 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
              >
                <Trash2 size={12} />
              </button>
              
              <div className="absolute inset-x-0 bottom-0 bg-black/80 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[8px] text-white text-center uppercase truncate">{p.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}