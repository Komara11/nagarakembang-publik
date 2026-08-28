import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export const metadata = {
  title: "Sejarah Desa - Nagara Kembang",
};

export default function SejarahPage() {
  const timelineEvents = [
    {
      year: "1930",
      title: "Asal Mula Pemukiman",
      desc: "Kawasan Nagara Kembang awalnya adalah sebuah pedukuhan kecil yang didirikan oleh para petani pendatang dari daerah pesisir yang mencari lahan subur di kaki bukit.",
    },
    {
      year: "1945",
      title: "Masa Kemerdekaan",
      desc: "Menjadi salah satu basis pertahanan rakyat. Nama 'Nagara Kembang' resmi digunakan sebagai simbol kebangkitan dan harapan baru bagi penduduk pasca proklamasi.",
    },
    {
      year: "1978",
      title: "Penetapan Status Desa",
      desc: "Pemerintah Daerah secara resmi menetapkan Nagara Kembang sebagai desa otonom, dengan pemilihan Kepala Desa definitif pertama yang dipilih secara demokratis.",
    },
    {
      year: "1995",
      title: "Pembangunan Infrastruktur Utama",
      desc: "Dimulainya pengaspalan jalan poros desa dan pembangunan irigasi yang secara drastis meningkatkan hasil panen dan mobilitas ekonomi warga.",
    },
    {
      year: "2015",
      title: "Era Desa Digital",
      desc: "Peluncuran inisiatif 'Desa Pintar' dengan penyediaan akses internet publik dan digitalisasi sistem administrasi desa.",
    },
    {
      year: "2024",
      title: "Nagara Kembang Hari Ini",
      desc: "Berkembang menjadi desa mandiri pariwisata dan sentra UMKM unggulan di tingkat kabupaten, memadukan kearifan lokal dengan teknologi modern.",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9s-fH7c_tI-GfI3fI9-j-uS3Qd9-d0sF_9fH2X-E8B_IqW2Jd-A5xN4s8w3R9D8y1V8z-R_3n-N9E_p3L_N_s3Z_u6t-E6J6S-V_k8S-L3h6A9V4Y3m9H3u4C-F4C5t5u4D8V6C4J5g-X_p8Y-R_z-H7N9w_V_Q9H5t5V_k_k_H6t_R9j3t4H')", // Vintage or landscape placeholder
            filter: "sepia(0.3)",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0f172a]/80"></div>
        <SlideUp className="relative z-10 text-center px-6 md:px-margin-desktop text-white" delay={0.2}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Menelusuri Jejak Waktu
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90 text-slate-300">
            Sejarah berdirinya Desa Nagara Kembang: dari sebuah pedukuhan kecil hingga menjadi desa mandiri yang progresif.
          </p>
        </SlideUp>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 px-6 md:px-margin-desktop max-w-4xl mx-auto w-full relative">
        <SlideUp className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Garis Waktu Sejarah</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Tonggak-tonggak penting dalam perjalanan panjang Desa Nagara Kembang.
          </p>
        </SlideUp>

        <div className="relative border-l-4 border-primary/30 ml-4 md:ml-8 flex flex-col gap-12">
          {timelineEvents.map((event, idx) => (
            <SlideUp key={idx} delay={idx * 0.1} className="relative pl-8 md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute w-6 h-6 rounded-full bg-primary border-4 border-surface -left-[14px] top-1 shadow-md"></div>
              
              {/* Content */}
              <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-ambient border border-outline-variant hover:-translate-y-1 transition-transform">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                  Tahun {event.year}
                </span>
                <h3 className="text-2xl font-bold text-on-surface mb-3">{event.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                  {event.desc}
                </p>
              </div>
            </SlideUp>
          ))}
        </div>
      </section>
    </div>
  );
}
