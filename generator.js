const fs = require('fs');

// 1. DAFTAR 100 PROFESI (Contoh 20, silakan Anda teruskan hingga 100)
const professions = [
  "Arsitek Mandiri", "Fotografer Wedding", "Kontraktor Sipil", "MUA Professional", "Interior Designer", 
  "Freelance Developer", "Dokter Praktik", "Pengacara", "Digital Marketer", "Social Media Manager",
  "Agen Properti", "Desainer Perhiasan", "Tukang Kebun Luxury", "Peternak Ikan Hias", "Pengusaha Laundry",
  "Konsultan Pajak", "Notaris", "Psikolog", "Personal Trainer", "Chef Private"
];

// 2. DAFTAR 100 KOTA (Contoh 20, silakan Anda teruskan hingga 100)
const cities = [
  "Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Makassar", "Palembang", "Denpasar", "Batam", "Yogyakarta",
  "Malang", "Balikpapan", "Solo", "Manado", "Padang", "Pekanbaru", "Bandar Lampung", "Banjarmasin", "Pontianak", "Serang"
];

// 3. VARIABEL PAIN POINTS & KATA KUNCI (Keywords)
const pains = [
  "tagihan sering terlambat dibayar klien",
  "administrasi manual yang melelahkan",
  "branding bisnis kurang terlihat mewah",
  "sulit mengelola rekap laporan bulanan",
  "data klien berantakan tidak terorganisir"
];

// FUNGSI MEMBANGUN NARASI PANJANG (TARGET 1000 KATA)
const generateRichContent = (profesi, kota, pain) => {
  // Blok intro (Luxury & Premium)
  const intro = `Di era digital 2026, eksklusivitas dan presisi adalah kunci utama bagi setiap ${profesi} yang beroperasi di wilayah ${kota}. TUKA hadir sebagai solusi administrasi premium yang dirancang untuk menjawab tantangan ${pain} yang sering menghambat pertumbuhan bisnis Anda. Kami memahami bahwa di ${kota}, citra profesionalisme sangatlah mahal harganya... (lanjutkan hingga 200 kata)`;

  // Blok Masalah (Deep Dive)
  const detailMasalah = `Banyak ${profesi} di ${kota} terjebak dalam lingkaran setan administrasi manual. Masalah ${pain} bukan hanya menguras energi, tetapi juga merusak reputasi Anda di mata klien premium. Bayangkan kerugian yang Anda alami saat sistem penagihan di ${kota} dilakukan tanpa standar otomasi yang mumpuni... (lanjutkan hingga 300 kata)`;

  // Blok Solusi (Technical Solution)
  const solusi = `TUKA Business Suite hadir dengan teknologi otomasi tercanggih. Fitur cerdas kami memungkinkan Anda menghasilkan Invoice, Quotation, hingga Payslip dalam hitungan detik. Bagi ${profesi} di ${kota}, efisiensi ini berarti lebih banyak waktu untuk fokus pada kreativitas dan pengembangan klien, bukan lagi berkutat dengan kertas... (lanjutkan hingga 300 kata)`;

  return {
    intro,
    detailMasalah,
    solusi,
    faq: [
      { q: `Mengapa ${profesi} di ${kota} harus beralih ke TUKA?`, a: `Karena persaingan pasar di ${kota} kini menuntut standar digitalisasi yang cepat dan terpercaya.` },
      { q: `Bagaimana TUKA menyelesaikan masalah ${pain}?`, a: `Melalui sistem otomasi pengingat dan template luxury yang meningkatkan konversi pembayaran.` }
    ]
  };
};

const generateData = () => {
  const result = [];
  let id = 1;

  // LOOPING UNTUK MENCAPAI 10.000 KOMBINASI
  professions.forEach(p => {
    cities.forEach(c => {
      // Pilih pain point secara acak agar konten unik
      const pain = pains[Math.floor(Math.random() * pains.length)];
      const slug = `${p.toLowerCase().replace(/ /g, '-')}-${c.toLowerCase()}`;

      result.push({
        id: id++,
        profesi: p,
        kota: c,
        slug: slug,
        template_type: id % 2 === 0 ? "premium" : "luxury",
        produk: "TUKA Business Suite v.2",
        link_funnel: `https://toko.guidify.app/order?ref=${slug}`,
        copywriting: {
          h1: `Otomasi Bisnis ${p} Terpercaya di ${c}`,
          p1: `Solusi efisien mengatasi ${pain} bagi para pengusaha di ${c}.`
        },
        rich_content: generateRichContent(p, c, pain)
      });
    });
  });

  fs.writeFileSync('data-seo.json', JSON.stringify(result, null, 2));
  console.log(`✅ BERHASIL: Menghasilkan ${result.length} data pSEO.`);
};

generateData();