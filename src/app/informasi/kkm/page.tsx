import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export const metadata = {
  title: "Tim KKM Desa Nagarakembang",
};

export default function KKMPage() {
  // Data anggota KKM (Placeholder)
  const anggota = [
    { nama: "Nama Anggota 1", peran: "Ketua KKM", prodi: "Teknik Informatika" },
    { nama: "Nama Anggota 2", peran: "Sekretaris", prodi: "Ilmu Komunikasi" },
    { nama: "Nama Anggota 3", peran: "Bendahara", prodi: "Akuntansi" },
    { nama: "Nama Anggota 4", peran: "Divisi IT & Web", prodi: "Sistem Informasi" },
    { nama: "Nama Anggota 5", peran: "Divisi IT & Web", prodi: "Sistem Informasi" },
    { nama: "Nama Anggota 6", peran: "Divisi Humas", prodi: "Ilmu Komunikasi" },
    { nama: "Nama Anggota 7", peran: "Divisi Acara", prodi: "Manajemen" },
    { nama: "Nama Anggota 8", peran: "Divisi Acara", prodi: "Manajemen" },
    { nama: "Nama Anggota 9", peran: "Divisi Dokumentasi", prodi: "Desain Komunikasi Visual" },
    { nama: "Nama Anggota 10", peran: "Divisi Perlengkapan", prodi: "Teknik Industri" },
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
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <span className="material-symbols-outlined text-[40px]">school</span>
            </div>
            
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
            
            <div className="mt-12 pt-8 border-t border-outline-variant/30">
              <p className="font-label-md text-primary tracking-wide uppercase">
                Dipersembahkan Oleh
              </p>
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
              10 Mahasiswa yang berkolaborasi dalam program pengabdian di Desa Nagarakembang.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {anggota.map((item, index) => (
              <StaggerItem key={index} className="bg-surface-container-lowest p-6 rounded-2xl shadow-ambient border border-surface-variant flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-surface-variant rounded-full mb-4 overflow-hidden flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-3xl">person</span>
                </div>
                <h4 className="font-title-md font-bold text-on-surface mb-1">{item.nama}</h4>
                <p className="font-label-sm text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">{item.peran}</p>
                <p className="font-body-sm text-on-surface-variant text-sm">{item.prodi}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
