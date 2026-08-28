import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { getDemografi, getBerita, getSettings, getPemerintahan } from "@/lib/data";

export default function Home() {
  const demografi = getDemografi();
  const beritaTerbaru = getBerita().slice(0, 3);
  const settings = getSettings();
  const kades = getPemerintahan().find(p => p.position.toLowerCase().includes("kepala desa"));

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <HeroSlideshow />

      {/* Sambutan Kepala Desa Section */}
      <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
        <SlideUp className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-section-gap items-center bg-surface-container-lowest p-6 md:p-stack-lg rounded-2xl shadow-ambient border border-surface-container-low hover:shadow-lg transition-shadow">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-surface ring-2 ring-primary/20">
                <img
                  className="object-cover w-full h-full"
                  alt={kades?.name || "Kepala Desa"}
                  src={kades?.photo || "https://lh3.googleusercontent.com/aida-public/AB6AXuBexCtQ1bSzIG3KvAFYpMGHgvgi72rkdqulhDhUDTJpKJgp5Ksil1V2RtsuU8lNa8iRx6iGKtGK9P4i1DGHk0vD4lCLXB2sRZe6ZI3G19AueS1KKuYx4Heu39QIr0zHcZ-r4BBPNt3bH2VqjBMdC3tX64XAxErO4s-7dvMC-BgAAdnX59_nnH4yNuZUuHlJu1riGcUFY5ED2FHZF56iCE0iOiuW5ppr7f2eHf_9fRMLtAllLb-D71jz"}
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-4 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-12 h-1 bg-secondary rounded-full"></span>
                <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">
                  Sambutan
                </span>
              </div>
              <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-primary">
                {kades?.name || "Bapak Budi Santoso"}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant font-bold">
                {kades?.position || "Kepala Desa Nagara Kembang"}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify md:text-left">
                "Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di portal resmi Desa
                {settings.namaWebsite ? ` ${settings.namaWebsite}` : " Nagara Kembang"}. Website ini kami hadirkan sebagai wujud komitmen transparansi,
                keterbukaan informasi, serta upaya peningkatan kualitas pelayanan publik bagi seluruh
                warga. Melalui platform digital ini, kami berharap potensi desa dapat lebih dikenal
                luas, dan warga dapat dengan mudah mengakses berbagai layanan administrasi maupun
                informasi terkini seputar pembangunan desa."
              </p>
            </div>
          </div>
        </SlideUp>
      </section>

      {/* Statistik Desa */}
      <section className="py-10 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-container-max mx-auto flex flex-col gap-6 md:gap-stack-lg">
          <SlideUp className="text-center flex flex-col items-center gap-2">
            <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">
              Data Terkini
            </span>
            <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-on-background">
              Statistik Desa
            </h2>
          </SlideUp>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-gutter">
            <StaggerItem className="bg-surface-container-lowest p-4 md:p-stack-md rounded-xl shadow-ambient border border-surface-container-low flex flex-col items-center text-center group hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-2xl md:text-3xl text-primary">groups</span>
              </div>
              <span className="font-display-lg text-headline-md-mobile md:text-display-lg-mobile text-primary font-bold">
                {demografi.totalPenduduk?.toLocaleString('id-ID') || "3.250"}
              </span>
              <span className="font-label-md text-caption md:text-label-md text-on-surface-variant mt-2">
                Total Penduduk
              </span>
            </StaggerItem>
            <StaggerItem className="bg-surface-container-lowest p-4 md:p-stack-md rounded-xl shadow-ambient border border-surface-container-low flex flex-col items-center text-center group hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-2xl md:text-3xl text-primary">house</span>
              </div>
              <span className="font-display-lg text-headline-md-mobile md:text-display-lg-mobile text-primary font-bold">
                {demografi.totalKK?.toLocaleString('id-ID') || "850"}
              </span>
              <span className="font-label-md text-caption md:text-label-md text-on-surface-variant mt-2">
                Jumlah KK
              </span>
            </StaggerItem>
            <StaggerItem className="bg-surface-container-lowest p-4 md:p-stack-md rounded-xl shadow-ambient border border-surface-container-low flex flex-col items-center text-center group hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-2xl md:text-3xl text-primary">man</span>
              </div>
              <span className="font-display-lg text-headline-md-mobile md:text-display-lg-mobile text-primary font-bold">
                {demografi.lakiLaki?.toLocaleString('id-ID') || "1.610"}
              </span>
              <span className="font-label-md text-caption md:text-label-md text-on-surface-variant mt-2">
                Laki-laki
              </span>
            </StaggerItem>
            <StaggerItem className="bg-surface-container-lowest p-4 md:p-stack-md rounded-xl shadow-ambient border border-surface-container-low flex flex-col items-center text-center group hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-2xl md:text-3xl text-primary">woman</span>
              </div>
              <span className="font-display-lg text-headline-md-mobile md:text-display-lg-mobile text-primary font-bold">
                {demografi.perempuan?.toLocaleString('id-ID') || "1.640"}
              </span>
              <span className="font-label-md text-caption md:text-label-md text-on-surface-variant mt-2">
                Perempuan
              </span>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Preview Berita */}
      <section className="py-10 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface border-t border-outline-variant">
        <div className="max-w-container-max mx-auto flex flex-col gap-6 md:gap-stack-lg">
          <SlideUp className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">Kabar Desa</span>
              <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-primary">Berita Terbaru</h2>
            </div>
            <Link href="/informasi" className="hidden md:inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-secondary bg-surface-container-low px-4 py-2 rounded-full border border-surface-variant transition-colors hover:bg-surface-variant">
              Lihat Semua <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
          </SlideUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter">
            {beritaTerbaru.map((berita) => (
              <StaggerItem key={berita.id} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient hover:-translate-y-1 transition-all border border-surface-variant flex flex-col group h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={berita.thumbnail || "https://lh3.googleusercontent.com/aida-public/AB6AXuBXWKm6G9_2yilFdycyNUqSc4UFaQySw5sdY_4pzDGjUWEzGVeLog_LXB3oJ20g3bE5NgAtUqPsf_tFsKnHOMsGLbDLu9BNsa1-WxDNg4Ud3FCi7Vx14oz-8oe4czwd-bhHIciXgbxUw_nljsMMLTUhqfPPzeIYVd5Qg7E0oQPrkRYOEV40mN5b1fkfy4Io3i8KRBLgfIW8s9obtH0t4czGAdCvrQ9C5B3GwTkI4TNo3nFhPc8qOXRw"} alt={berita.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-secondary-container text-on-secondary-container px-2 py-1 rounded font-body-md text-caption">{berita.category}</div>
                </div>
                <div className="p-stack-md flex flex-col flex-grow">
                  <span className="font-body-md text-caption text-on-surface-variant mb-2">{berita.date}</span>
                  <h3 className="font-title-lg text-title-lg text-primary mb-2 line-clamp-2">{berita.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2 flex-grow">{berita.content}</p>
                  <Link href={`/informasi/${berita.slug}`} className="inline-flex items-center text-primary font-label-md text-label-md mt-auto hover:text-secondary">
                    Baca <span className="material-symbols-outlined ml-1 text-[18px]">arrow_right_alt</span>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <SlideUp delay={0.2}>
            <Link href="/informasi" className="md:hidden inline-flex justify-center items-center gap-2 font-label-md text-label-md text-primary hover:text-secondary bg-surface-container py-3 rounded-md w-full">
                Lihat Semua Berita <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
          </SlideUp>
        </div>
      </section>

      {/* Maps dan Informasi Operasional */}
      <section className="py-10 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-gutter">
          <SlideUp className="flex flex-col gap-6 md:gap-stack-md">
            <div className="flex flex-col gap-2">
              <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">Lokasi & Kontak</span>
              <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-primary">Informasi Operasional</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-justify md:text-left">
              Kantor Desa melayani warga sesuai dengan jam operasional yang telah ditentukan. Anda juga dapat menghubungi kami melalui layanan kontak darurat atau datang langsung ke balai desa.
            </p>
            <div className="bg-surface-container-lowest p-4 md:p-stack-md rounded-xl shadow-ambient border border-surface-variant mt-2 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px] md:text-[24px]">schedule</span>
                </div>
                <div className="w-full">
                  <h4 className="font-title-lg text-label-md text-on-surface font-bold">Jam Pelayanan Kantor</h4>
                  <ul className="font-body-md text-body-md text-on-surface-variant mt-2 space-y-2">
                    <li className="flex justify-between items-center w-full max-w-[250px]"><span className="font-bold">Senin - Kamis</span> <span>08.00 - 15.00</span></li>
                    <li className="flex justify-between items-center w-full max-w-[250px]"><span className="font-bold">Jumat</span> <span>08.00 - 11.30</span></li>
                    <li className="flex justify-between items-center w-full max-w-[250px]"><span className="font-bold text-error">Sabtu - Minggu</span> <span className="text-error">Tutup</span></li>
                  </ul>
                </div>
              </div>
              <div className="w-full h-[1px] bg-outline-variant/50 my-2"></div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px] md:text-[24px]">contact_support</span>
                </div>
                <div>
                  <h4 className="font-title-lg text-label-md text-on-surface font-bold">Layanan Darurat & Pengaduan</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Hubungi Call Center Desa: <br />
                    <span className="font-bold text-primary text-lg md:text-xl">{settings.telepon || "(021) 1234-5678"}</span>
                  </p>
                  <Link href="/pelayanan" className="inline-flex mt-3 text-primary font-label-md hover:underline hover:text-secondary transition-colors">
                    Buat Laporan Pengaduan &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
          
          <FadeIn delay={0.3} className="rounded-xl overflow-hidden shadow-ambient h-[350px] md:h-[400px] lg:h-full lg:min-h-[400px] border border-surface-variant">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.468819077598!2d107.5768!3d-6.9077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Desa"
            ></iframe>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
