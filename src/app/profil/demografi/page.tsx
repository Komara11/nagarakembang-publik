import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { getDemografi } from "@/lib/data";

export const metadata = {
  title: "Demografi Penduduk - Nagara Kembang",
};

export default function DemografiPage() {
  const data = getDemografi();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] min-h-[300px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9s-fH7c_tI-GfI3fI9-j-uS3Qd9-d0sF_9fH2X-E8B_IqW2Jd-A5xN4s8w3R9D8y1V8z-R_3n-N9E_p3L_N_s3Z_u6t-E6J6S-V_k8S-L3h6A9V4Y3m9H3u4C-F4C5t5u4D8V6C4J5g-X_p8Y-R_z-H7N9w_V_Q9H5t5V_k_k_H6t_R9j3t4H')",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0f172a]/70"></div>
        <SlideUp className="relative z-10 text-center px-6 md:px-margin-desktop text-white" delay={0.2}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Demografi Penduduk
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90 text-slate-200">
            Pusat data statistik kependudukan berdasarkan jenis kelamin dan jumlah keluarga.
          </p>
        </SlideUp>
      </section>

      {/* Main Stats Grid */}
      <section className="py-16 md:py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
        <SlideUp className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Ringkasan Kependudukan</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Data kependudukan terkini dari sistem administrasi desa.
          </p>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Total */}
          <StaggerItem className="bg-surface rounded-2xl p-8 border border-outline-variant shadow-ambient flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[32px]">groups</span>
            </div>
            <h3 className="text-5xl font-extrabold text-on-surface mb-2">{data.totalPenduduk.toLocaleString('id-ID')}</h3>
            <p className="text-on-surface-variant font-medium">Total Penduduk</p>
          </StaggerItem>

          {/* Card 2: KK */}
          <StaggerItem className="bg-surface rounded-2xl p-8 border border-outline-variant shadow-ambient flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 rounded-full bg-surface-variant text-on-surface flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[32px]">family_home</span>
            </div>
            <h3 className="text-5xl font-extrabold text-on-surface mb-2">{data.totalKK.toLocaleString('id-ID')}</h3>
            <p className="text-on-surface-variant font-medium">Kepala Keluarga</p>
          </StaggerItem>

          {/* Card 3: Laki-laki */}
          <StaggerItem className="bg-surface rounded-2xl p-8 border border-outline-variant shadow-ambient flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[32px]">man</span>
            </div>
            <h3 className="text-5xl font-extrabold text-on-surface mb-2">{data.lakiLaki.toLocaleString('id-ID')}</h3>
            <p className="text-on-surface-variant font-medium">Laki-laki</p>
          </StaggerItem>

          {/* Card 4: Perempuan */}
          <StaggerItem className="bg-surface rounded-2xl p-8 border border-outline-variant shadow-ambient flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 rounded-full bg-pink-500/20 text-pink-600 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[32px]">woman</span>
            </div>
            <h3 className="text-5xl font-extrabold text-on-surface mb-2">{data.perempuan.toLocaleString('id-ID')}</h3>
            <p className="text-on-surface-variant font-medium">Perempuan</p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Visual Chart Section */}
      <section className="py-16 bg-surface-container-lowest px-6 md:px-margin-desktop border-t border-outline-variant">
        <div className="max-w-container-max mx-auto max-w-4xl">
          <SlideUp className="flex flex-col gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-on-surface mb-2">Perbandingan Jenis Kelamin</h3>
              <p className="text-on-surface-variant">Persentase penduduk berdasarkan jenis kelamin.</p>
            </div>
            
            <div className="flex flex-col gap-6 bg-surface p-8 rounded-2xl border border-outline-variant shadow-ambient">
              {(() => {
                const total = data.lakiLaki + data.perempuan;
                const pctLaki = total > 0 ? Math.round((data.lakiLaki / total) * 100) : 50;
                const pctPerempuan = total > 0 ? Math.round((data.perempuan / total) * 100) : 50;
                
                return (
                  <>
                    <div className="w-full h-8 flex rounded-full overflow-hidden shadow-inner">
                      <div className="bg-blue-500 h-full flex items-center justify-center text-white text-xs font-bold transition-all duration-1000" style={{ width: `${pctLaki}%` }}>
                        {pctLaki}%
                      </div>
                      <div className="bg-pink-500 h-full flex items-center justify-center text-white text-xs font-bold transition-all duration-1000" style={{ width: `${pctPerempuan}%` }}>
                        {pctPerempuan}%
                      </div>
                    </div>
                    <div className="flex justify-between items-center px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-blue-500"></div>
                        <span className="font-medium">Laki-laki ({data.lakiLaki.toLocaleString('id-ID')})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Perempuan ({data.perempuan.toLocaleString('id-ID')})</span>
                        <div className="w-4 h-4 rounded bg-pink-500"></div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
