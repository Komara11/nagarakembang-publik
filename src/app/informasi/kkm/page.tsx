import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export const metadata = {
  title: "Tim KKM Desa Nagarakembang",
};

export default function KKMPage() {
  const anggota = [
    { nama: "Dosen Pembimbing", peran: "DPL", prodi: "Institut Budi Utomo", foto: "/tim-kkm/WhatsApp Image 2026-08-25 at 10.26.19 PM.jpeg" },
    { nama: "Ketua KKM", peran: "Ketua", prodi: "Sistem Informasi", foto: "/tim-kkm/WhatsApp Image 2026-08-25 at 10.26.20 PM.jpeg" },
    { nama: "Wakil Ketua", peran: "Wakil Ketua", prodi: "Teknik Informatika", foto: "/tim-kkm/WhatsApp Image 2026-08-25 at 10.26.20 PM (1).jpeg" },
    { nama: "Sekretaris", peran: "Sekretaris", prodi: "Ilmu Komunikasi", foto: "/tim-kkm/WhatsApp Image 2026-08-25 at 10.26.20 PM (2).jpeg" },
    { nama: "Bendahara", peran: "Bendahara", prodi: "Akuntansi", foto: "/tim-kkm/WhatsApp Image 2026-08-25 at 10.26.21 PM.jpeg" },
    { nama: "Anggota 1", peran: "Divisi Humas", prodi: "Ilmu Komunikasi", foto: "/tim-kkm/WhatsApp Image 2026-08-25 at 10.26.21 PM (1).jpeg" },
    { nama: "Anggota 2", peran: "Divisi Acara", prodi: "Manajemen", foto: "/tim-kkm/WhatsApp Image 2026-08-25 at 10.26.21 PM (2).jpeg" },
    { nama: "Anggota 3", peran: "Divisi IT & Web", prodi: "Sistem Informasi", foto: "/tim-kkm/WhatsApp Image 2026-08-25 at 10.26.22 PM.jpeg" },
    { nama: "Anggota 4", peran: "Divisi Dokumentasi", prodi: "Desain Komunikasi Visual", foto: "/tim-kkm/WhatsApp Image 2026-08-25 at 10.26.22 PM (1).jpeg" },
    { nama: "Anggota 5", peran: "Divisi Perlengkapan", prodi: "Teknik Industri", foto: "/tim-kkm/WhatsApp Image 2026-08-25 at 10.26.22 PM (2).jpeg" },
    { nama: "Anggota 6", peran: "Anggota", prodi: "Manajemen", foto: "/tim-kkm/WhatsApp Image 2026-08-25 at 10.26.23 PM.jpeg" },
    { nama: "Anggota 7", peran: "Anggota", prodi: "Teknik Informatika", foto: "/tim-kkm/WhatsApp Image 2026-08-25 at 10.26.23 PM (1).jpeg" },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface pb-24">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] min-h-[300px] flex items-center justify-center bg-surface-container-high border-b border-outline-variant">
        <div className="absolute inset-0 bg-primary/5"></div>
        <SlideUp className="relative z-10 text-center px-margin-mobile md:px-margin-desktop text-on-surface" delay={0.2}>
          <div className="flex justify-center gap-6 mb-6">
            <img src="/tim-kkm/logo_kampus.png" alt="Logo Kampus" className="h-20 w-auto object-contain drop-shadow-md" />
            <img src="/tim-kkm/logo-kkm.png" alt="Logo KKM" className="h-20 w-auto object-contain drop-shadow-md" />
          </div>
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
              <div className="flex gap-4 mb-4">
                <img src="/tim-kkm/logo_kampus.png" alt="Logo Kampus" className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="/tim-kkm/logo-kkm.png" alt="Logo KKM" className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
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
              Mahasiswa yang berkolaborasi dalam program pengabdian di Desa Nagarakembang.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {anggota.map((item, index) => (
              <StaggerItem key={index} className="bg-surface-container-lowest p-6 rounded-2xl shadow-ambient border border-surface-variant flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-5 overflow-hidden flex items-center justify-center bg-surface-variant border-4 border-surface shadow-sm relative group">
                  <img src={item.foto} alt={item.nama} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="font-title-lg font-bold text-on-surface mb-2">{item.nama}</h4>
                <p className="font-label-md text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-3">{item.peran}</p>
                <p className="font-body-md text-on-surface-variant">{item.prodi}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
