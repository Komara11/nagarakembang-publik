import { FadeIn, SlideUp } from "@/components/ui/animations";
import { getTransparansi } from "@/lib/data";

export const metadata = {
  title: "Transparansi Anggaran - Nagara Kembang",
};

export default function TransparansiPage() {
  const dataList = getTransparansi();
  
  // Ambil tahun terbaru
  const years = Array.from(new Set(dataList.map(d => d.tahun))).sort((a, b) => parseInt(b) - parseInt(a));
  const latestTahun = years.length > 0 ? years[0] : null;

  const latestItems = latestTahun ? dataList.filter(d => d.tahun === latestTahun) : [];

  const pendapatanItems = latestItems.filter(d => d.tipe === "Pemasukan");
  const belanjaItems = latestItems.filter(d => d.tipe === "Pengeluaran");

  const totalPendapatan = pendapatanItems.reduce((acc, curr) => acc + curr.nominal, 0);
  const totalBelanja = belanjaItems.reduce((acc, curr) => acc + curr.nominal, 0);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Header Section */}
      <section className="bg-[#0f172a] pt-32 pb-16 px-6 md:px-margin-desktop text-white border-b-4 border-primary">
        <div className="max-w-4xl mx-auto text-center">
          <SlideUp>
            {latestTahun && (
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-bold text-primary mb-6 border border-white/20">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Tahun Anggaran {latestTahun}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Transparansi APBDes
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Wujud komitmen Pemerintah Desa dalam mengelola anggaran secara terbuka, akuntabel, dan berpusat pada kesejahteraan masyarakat.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6 md:px-margin-desktop bg-surface max-w-container-max mx-auto w-full">
        {latestTahun ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            
            {/* Pendapatan Desa */}
            <SlideUp className="flex flex-col gap-6">
              <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant shadow-ambient h-full">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-surface-variant">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]">payments</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-on-surface">Pendapatan Desa</h2>
                    <p className="text-3xl font-extrabold text-green-600 mt-1">
                      Rp {totalPendapatan.toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  {pendapatanItems.map((item, idx) => {
                    const percent = totalPendapatan > 0 
                      ? (item.nominal / totalPendapatan) * 100 
                      : 0;
                      
                    return (
                      <div key={idx} className="flex flex-col gap-2">
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-on-surface">{item.kategori}</span>
                          <span className="text-on-surface-variant font-bold">Rp {item.nominal.toLocaleString('id-ID')}</span>
                        </div>
                        <div className="w-full bg-surface-variant rounded-full h-3 overflow-hidden">
                          <div 
                            className="bg-green-500 h-full rounded-full" 
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SlideUp>

            {/* Belanja Desa */}
            <SlideUp delay={0.2} className="flex flex-col gap-6">
              <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant shadow-ambient h-full">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-surface-variant">
                  <div className="w-14 h-14 rounded-full bg-orange-500/10 text-orange-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]">shopping_cart_checkout</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-on-surface">Belanja Desa</h2>
                    <p className="text-3xl font-extrabold text-orange-600 mt-1">
                      Rp {totalBelanja.toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  {belanjaItems.map((item, idx) => {
                    const percent = totalBelanja > 0 
                      ? (item.nominal / totalBelanja) * 100 
                      : 0;
                      
                    return (
                      <div key={idx} className="flex flex-col gap-2">
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-on-surface">{item.kategori}</span>
                          <span className="text-on-surface-variant font-bold">Rp {item.nominal.toLocaleString('id-ID')}</span>
                        </div>
                        <div className="w-full bg-surface-variant rounded-full h-3 overflow-hidden">
                          <div 
                            className="bg-orange-500 h-full rounded-full" 
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SlideUp>

          </div>
        ) : (
          <div className="text-center py-12 text-outline">
            Belum ada data transparansi anggaran.
          </div>
        )}
      </section>

      {/* Info Banner */}
      <section className="px-6 md:px-margin-desktop pb-24">
        <FadeIn className="bg-primary/10 rounded-2xl p-8 border border-primary/20 max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
            <span className="material-symbols-outlined text-[32px]">info</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-on-surface mb-2">Punya Pertanyaan Terkait Anggaran?</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Dokumen Rincian APBDes lengkap dapat diakses secara fisik di Kantor Kepala Desa selama jam kerja operasional. Kami terbuka untuk diskusi dan aspirasi pembangunan.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
