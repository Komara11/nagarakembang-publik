import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export const metadata = {
  title: "Tim KKM Desa Nagarakembang",
};

export default function KKMPage() {
  const anggota = [
    { foto: "/tim-kkm/dpl.jpeg" },
    { foto: "/tim-kkm/dpl2.jpeg" },
    { foto: "/tim-kkm/ketua.jpeg" },
    { foto: "/tim-kkm/skertaris.jpeg" },
    { foto: "/tim-kkm/bendahara.jpeg" },
    { foto: "/tim-kkm/acara.jpeg" },
    { foto: "/tim-kkm/konsumsi.jpeg" },
    { foto: "/tim-kkm/konsumsi2.jpeg" },
    { foto: "/tim-kkm/logistik.jpeg" },
    { foto: "/tim-kkm/logistik2.jpeg" },
    { foto: "/tim-kkm/pubdok.jpeg" },
    { foto: "/tim-kkm/pubdok2.jpeg" },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface pb-24">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] min-h-[300px] flex items-center justify-center bg-surface-container-high border-b border-outline-variant">
        <div className="absolute inset-0 bg-primary/5"></div>
        <SlideUp className="relative z-10 text-center px-margin-mobile md:px-margin-desktop text-on-surface" delay={0.2}>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-sm text-primary">
            Tim KKM Desa Nagarakembang
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto text-on-surface-variant px-4 md:px-0">
            Dedikasi Mahasiswa Institut Budi Utomo Nasional untuk Kemajuan Digitalisasi Desa Nagarakembang
          </p>
        </SlideUp>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop w-full">
        <SlideUp className="max-w-3xl mx-auto flex flex-col gap-6" delay={0.3}>
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-ambient border border-surface-variant text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-headline-md text-on-surface mb-6">
              Tentang Pembuatan Website
            </h2>
            
            <div className="prose prose-lg dark:prose-invert text-on-surface-variant mx-auto text-justify md:text-center">
              <p>
                Website Resmi Desa Nagarakembang ini merupakan salah satu program kerja unggulan dari 
                <strong> Tim Kuliah Kerja Mahasiswa (KKM) Institut Budi Utomo Nasional</strong> yang mengabdi di Desa Nagarakembang. 
              </p>
              <p className="mt-4">
                Melalui kolaborasi erat dengan aparatur desa dan masyarakat, tim KKM merancang dan membangun platform digital ini dengan tujuan untuk meningkatkan transparansi informasi, mempermudah akses pengaduan masyarakat, serta mempromosikan potensi lokal yang dimiliki oleh Desa Nagarakembang kepada khalayak luas.
              </p>
              <p className="mt-4">
                Kami berharap website ini dapat terus menjadi jembatan informasi yang bermanfaat bagi seluruh warga desa dan pihak-pihak terkait di masa mendatang, mendukung terwujudnya tata kelola desa yang modern dan informatif.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-outline-variant/30 flex flex-col items-center">
              <p className="font-label-md text-primary tracking-wide uppercase mb-4">
                Dipersembahkan Oleh
              </p>
              <div className="flex gap-6 mb-4 items-center">
                <img src="/tim-kkm/logo_kampus.png" alt="Logo Kampus" className="h-20 w-20 object-contain drop-shadow-sm" />
                <img src="/tim-kkm/logo-kkm.png" alt="Logo KKM" className="h-20 w-20 object-contain drop-shadow-sm" />
              </div>
              <p className="text-2xl font-bold text-on-surface mt-2">
                Tim KKM Institut Budi Utomo Nasional
              </p>
              <p className="text-on-surface-variant mt-1">
                Tahun Pengabdian {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </SlideUp>

        {/* Daftar Anggota */}
        <div className="max-w-container-max mx-auto mt-12 md:mt-16">
          <SlideUp className="text-center mb-10">
            <h3 className="text-3xl font-bold text-primary mb-3">Anggota Tim KKM</h3>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Struktur Tim Mahasiswa yang berkolaborasi dalam program pengabdian di Desa Nagarakembang.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {anggota.map((item, index) => (
              <StaggerItem key={index} className="flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-surface-variant">
                  <img src={item.foto} alt={`Anggota ${index + 1}`} className="w-full h-auto object-contain bg-surface-container-lowest" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
