"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Trash2 } from "lucide-react";

export default function AdminProjectPage() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<any[]>([]);

  // Form States khusus Proyek
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (data) setProjects(data);
    if (error) console.error("Error fetch:", error.message);
  };

  useEffect(() => {
    if (isLoggedIn) fetchProjects();
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "tuka2026") setIsLoggedIn(true);
    else alert("Password Salah!");
  };

  const addProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Silakan pilih foto proyek terlebih dahulu!");
    setLoading(true);
    
    try {
      const fileName = `${Date.now()}-${file.name.replace(/\s/g, '_')}`;
      const { error: uploadError } = await supabase.storage
        .from('project-images') 
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('project-images')
        .getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from("projects")
        .insert([{ title, category, image_url: publicUrl }]);

      if (dbError) throw dbError;

      alert("Proyek Berhasil Disimpan!");
      
      // RESET FORM OTOMATIS: Membersihkan input untuk data berikutnya
      setTitle(""); 
      setCategory(""); 
      setFile(null);
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      
      fetchProjects();
      
    } catch (error: any) {
      alert("Terjadi kesalahan: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id: string, imageUrl: string) => {
    if (!confirm("Hapus proyek ini dari portofolio?")) return;

    try {
      // 1. Hapus dari Database
      const { error: dbError } = await supabase.from("projects").delete().eq("id", id);
      if (dbError) throw dbError;

      // 2. Hapus file fisik dari Storage
      const fileName = imageUrl.split('/').pop();
      if (fileName) {
        await supabase.storage.from('project-images').remove([fileName]);
      }

      alert("Proyek dihapus!");
      fetchProjects();
    } catch (error: any) {
      alert("Gagal menghapus: " + error.message);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a192f] px-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm rounded-2xl border border-[#d4af37]/20 bg-white/5 p-8 text-center">
          <h1 className="mb-6 text-xl font-bold text-[#d4af37] uppercase tracking-widest">Project Admin</h1>
          <input 
            type="password" 
            placeholder="Password Admin" 
            className="mb-4 w-full rounded-lg bg-white/10 p-3 text-white outline-none border border-[#d4af37]/10 focus:border-[#d4af37]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full rounded-lg bg-[#d4af37] py-3 font-bold text-[#0a192f] uppercase tracking-widest">Masuk</button>
        </form>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a192f] p-8 md:p-24 space-y-12">
      <div className="mx-auto max-w-2xl rounded-2xl border border-[#d4af37]/20 bg-white/5 p-10 shadow-2xl">
        <h1 className="mb-8 text-2xl font-black text-[#f9e2af] uppercase tracking-tighter text-center">Tambah Portofolio Proyek</h1>
        
        <form onSubmit={addProject} className="space-y-6">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[#d4af37] mb-2">Judul Proyek</label>
            <input 
              type="text" value={title} onChange={(e) => setTitle(e.target.value)} required
              className="w-full rounded-lg bg-white/5 p-4 text-white border border-[#d4af37]/10 focus:border-[#d4af37] outline-none"
              placeholder="Contoh: Website E-Commerce Luxury"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[#d4af37] mb-2">Kategori</label>
            <input 
              type="text" value={category} onChange={(e) => setCategory(e.target.value)} required
              className="w-full rounded-lg bg-white/5 p-4 text-white border border-[#d4af37]/10 focus:border-[#d4af37] outline-none"
              placeholder="Contoh: Landing Page / SaaS"
            />
          </div>
          
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[#d4af37] mb-2">Screenshot Proyek (Portrait)</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
              required
              className="w-full rounded-lg bg-white/5 p-4 text-white border border-[#d4af37]/10 focus:border-[#d4af37] outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#d4af37] file:text-[#0a192f]"
            />
          </div>

          <button 
            disabled={loading}
            className="w-full rounded-full bg-[#d4af37] py-4 text-xs font-bold uppercase tracking-widest text-[#0a192f] hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            {loading ? "Menyimpan..." : "Posting ke Portofolio"}
          </button>
        </form>
      </div>

      {/* MONITORING DAFTAR PROYEK */}
      <div className="mx-auto max-w-6xl rounded-2xl border border-[#d4af37]/10 bg-white/5 p-10">
        <h2 className="mb-8 text-sm font-bold text-[#d4af37] uppercase tracking-[0.3em]">Total Portofolio ({projects.length})</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {projects.map((proj) => (
            <div key={proj.id} className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-[#d4af37]/20 bg-zinc-900 transition-all hover:border-[#d4af37]">
              <img src={proj.image_url} alt={proj.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              
              <button 
                onClick={() => deleteProject(proj.id, proj.image_url)}
                className="absolute top-2 right-2 z-30 p-2 bg-red-600 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
              >
                <Trash2 size={12} />
              </button>
              
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[9px] text-white text-center uppercase truncate font-bold">{proj.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}