import json
import random

# 1. DATA MASTER (100 Profesi & 100 Kota tetap sama)
professions = ["Arsitek Mandiri", "Fotografer Wedding", "Kontraktor Sipil", "MUA Professional", "Interior Designer", "Freelance Developer", "Dokter Praktik", "Pengacara", "Digital Marketer", "Social Media Manager", "Agen Properti", "Desainer Perhiasan", "Tukang Kebun Luxury", "Peternak Ikan Hias", "Pengusaha Laundry", "Konsultan Pajak", "Notaris", "Psikolog", "Personal Trainer", "Chef Private", "Akuntan Publik", "Apoteker", "Arsitek Lanskap", "Auditor", "Penulis Buku", "Baker", "Barber", "Barista", "Blogger", "Bodyguard", "Makelar Mobil", "Pemotong Daging", "Tukang Kayu", "Kasir", "Supir Pribadi", "Petugas Kebersihan", "Pelatih Bisnis", "Copywriter", "Kurir", "Penari", "Dokter Gigi", "Desainer Grafis", "Detektif", "Ahli Gizi", "Sutradara", "DJ", "Ekonom", "Editor", "Tukang Listrik", "Insinyur", "Petani Modern", "Fashion Designer", "Nelayan", "Florist", "Geologist", "Penata Rambut", "Illustrator", "Influencer", "Penerjemah", "Investigator", "Jurnalis", "Hakim", "Pustakawan", "Penjaga Pantai", "Ahli Kunci", "Pesulap", "Manajer Proyek", "Mekanik", "Model", "Musikus", "Pengasuh Anak", "Perawat", "Ahli Optik", "Pelukis", "Paramedis", "Pilot", "Tukang Ledeng", "Podcaster", "Polisi", "Politisi", "Tukang Pos", "Pendeta", "Produser", "Profesor", "Programmer", "Penerbit", "Resepsionis", "Peneliti", "Pelaut", "Ilmuwan", "Pemahat", "Sekretaris", "Satpam", "Penyanyi", "Pekerja Sosial", "Software Engineer", "Tentara", "Ahli Bedah", "Surveyor", "Penjahit", "Guru", "Teknisi", "Telemarketer", "Terapis", "Agen Travel", "Tutor", "Wasit", "Pelayan", "Pembuat Jam", "Web Designer", "Welder", "Penulis Skenario", "Instruktur Yoga"]
cities = ["Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Makassar", "Palembang", "Denpasar", "Batam", "Yogyakarta", "Malang", "Balikpapan", "Solo", "Manado", "Padang", "Pekanbaru", "Bandar Lampung", "Banjarmasin", "Pontianak", "Serang", "Samarinda", "Tasikmalaya", "Jambi", "Cimahi", "Mataram", "Jayapura", "Ambon", "Kupang", "Kendari", "Palu", "Gorontalo", "Mamuju", "Sofifi", "Manokwari", "Tanjung Selor", "Tarakan", "Bontang", "Banjarbaru", "Singkawang", "Palangkaraya", "Pangkalan Bun", "Sampit", "Salatiga", "Sukabumi", "Pasuruan", "Probolinggo", "Kediri", "Blitar", "Madiun", "Mojokerto", "Magelang", "Pekalongan", "Tegal", "Purwokerto", "Cilacap", "Kebumen", "Banyuwangi", "Jember", "Banyumas", "Brebes", "Indramayu", "Cirebon", "Garut", "Cianjur", "Karawang", "Bekasi", "Depok", "Bogor", "Tangerang", "Tangerang Selatan", "Cilegon", "Pandeglang", "Lebak", "Kuningan", "Majalengka", "Sumedang", "Subang", "Purwakarta", "Banjar", "Pangandaran", "Pariaman", "Bukittinggi", "Payakumbuh", "Solok", "Sawahlunto", "Padang Panjang", "Sibolga", "Tanjungbalai", "Binjai", "Tebing Tinggi", "Pematangsiantar", "Lhokseumawe", "Langsa", "Banda Aceh", "Sabang", "Meulaboh", "Muara Teweh", "Bima"]

# 2. PERLUASAN PAIN POINTS (30 Kunci Masalah)
pains_pool = [
    "tagihan klien yang sering macet", "administrasi manual yang melelahkan", "citra bisnis kurang mewah", 
    "laporan keuangan berantakan", "quotation yang lambat dibuat", "pajak usaha yang membingungkan",
    "data klien sering hilang", "sulit memantau profit harian", "invoice terlihat amatir",
    "kesulitan rekap piutang", "kebocoran biaya operasional", "kurangnya kepercayaan klien high-ticket",
    "proses penagihan yang tidak profesional", "arsip dokumen fisik yang menumpuk", "sulit menghitung komisi tim",
    "manajemen inventory yang tidak akurat", "penjadwalan proyek yang kacau", "komunikasi invoice lewat chat yang tidak rapi",
    "kehilangan potensi proyek karena respon lambat", "tidak adanya sistem pengingat otomatis", "kesalahan input nominal harga",
    "format penawaran harga yang kaku", "sulit menganalisa perkembangan bisnis tahunan", "ketergantungan pada excel manual",
    "biaya langganan tool luar negeri yang mahal", "tidak memiliki database portofolio terintegrasi", "sulit mengelola termin pembayaran",
    "kurangnya keamanan data transaksi", "proses approval yang berbelit", "tampilan brand yang tidak konsisten di mata publik"
]

def generate_long_article(p, c, pain):
    # BLOK KALIMAT UNTUK MENGEJAR 1000 KATA
    intros = [
        f"Persaingan industri {p} di {c} telah mencapai level baru di tahun 2026.",
        f"Membangun kredibilitas sebagai {p} profesional di wilayah {c} menuntut efisiensi tanpa batas.",
        f"Setiap {p} sukses di {c} menyadari bahwa sistem administrasi adalah tulang punggung bisnis."
    ]
    
    analysis = [
        f"Kendala utama seperti {pain} sering kali menjadi 'silent killer' bagi pertumbuhan usaha Anda.",
        f"Tanpa disadari, {pain} menyebabkan kerugian finansial yang signifikan bagi para {p} di {c}.",
        f"Masalah {pain} tidak hanya soal angka, tapi soal integritas profesi Anda di hadapan klien {c}."
    ]

    # Narrative Expansion (Blok untuk menambah panjang teks)
    details = f"Dalam operasional sehari-hari di kota sepadat {c}, seorang {p} tidak boleh lagi berkutat dengan metode usang. Digitalisasi bukan lagi opsi, melainkan syarat mutlak. Dengan mengandalkan TUKA, Anda mengeliminasi risiko manusiawi yang sering muncul akibat {pain}. Bayangkan jika setiap penagihan dilakukan secara otomatis, memberikan Anda ruang lebih untuk fokus pada karya dan inovasi..."

    return {
        "intro": random.choice(intros) + " " + details[:150],
        "masalah": random.choice(analysis) + " " + details[150:500] + f" Hal ini sangat terasa bagi komunitas {p} di {c}.",
        "solusi": f"Solusi TUKA hadir untuk mentransformasi total alur kerja {p}. Dari mulai mengatasi {pain} hingga membangun sistem pelaporan otomatis yang presisi khusus untuk pasar {c}."
    }

def slugify(text):
    return text.lower().replace(" ", "-").replace("/", "-")

def generate_data():
    dataset = []
    id_count = 1
    
    for p in professions:
        for c in cities:
            # Ambil 3 pain points berbeda secara acak per halaman agar lebih unik
            current_pains = random.sample(pains_pool, 3)
            main_pain = current_pains[0]
            
            slug = f"{slugify(p)}-{slugify(c)}"
            article = generate_long_article(p, c, main_pain)
            
            entry = {
                "id": id_count,
                "slug": slug,
                "profesi": p,
                "kota": c,
                "produk": "TUKA Premium Suite 2026",
                "link_funnel": f"https://toko.guidify.app/order?ref={slug}",
                "copywriting": {
                    "h1": f"Solusi {p} Terbaik di {c}",
                    "p1": f"Atasi {main_pain} dan tingkatkan efisiensi bisnis Anda di {c}."
                },
                "rich_content": {
                    "intro": article["intro"],
                    "masalah": article["masalah"],
                    "solusi": article["solusi"],
                    "faq": [
                        {"q": f"Apakah {p} di {c} butuh sistem ini?", "a": f"Ya, terutama untuk mengatasi {current_pains[1]}."},
                        {"q": "Bagaimana cara mulainya?", "a": "Cukup daftar dan sistem akan menyesuaikan dengan skala bisnis Anda."},
                        {"q": "Apa keunggulannya?", "a": f"Mengeliminasi {current_pains[2]} secara instan melalui otomasi cerdas."}
                    ]
                }
            }
            dataset.append(entry)
            id_count += 1

    with open('data-seo.json', 'w', encoding='utf-8') as f:
        json.dump(dataset, f, indent=2, ensure_ascii=False)
    
    print(f"✅ SUKSES: {len(dataset)} halaman unik dihasilkan!")

if __name__ == "__main__":
    generate_data()