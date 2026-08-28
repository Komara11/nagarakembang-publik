import Link from "next/link";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { getPemerintahan } from "@/lib/data";

export const metadata = {
  title: "Pemerintahan Desa - Nagara Kembang",
};

export default function PemerintahanPage() {
  const perangkat = getPemerintahan();
  const kades = perangkat.find(p => p.position.toLowerCase().includes("kepala desa"));
  const sekdes = perangkat.find(p => p.position.toLowerCase().includes("sekretaris"));
  
  // Others to show in flowchart
  const others = perangkat.filter(p => p.id !== kades?.id && p.id !== sekdes?.id).slice(0, 3);
  
  // All for the grid
  const allPerangkat = perangkat;

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] min-h-[300px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGAY8bLZaKjvS1dd_4b2TiTNB0Ttgwcp_6mc11pwB0ZR-KJ5kGzyv49lK_hynWOYh8K3mt2tZY9p3XyzSSRmyQFwwe-gd9OPfYhJ22Q1SHMXKaJReYqLt4GuwR1v7-OPSk3w_vvYC28oAReg0EXFP8k_DpRU5lE9rQoQZ3P0nKno2QIjn1De_eRpFOyHhmGE_Wn7ohZD8kiPNV3spOJoSM10vgXAyAL214kjwZxAH5ES5N5DoYLX8k')",
          }}
        ></div>
        <div className="absolute inset-0 bg-overlay"></div>
        <SlideUp className="relative z-10 text-center px-margin-mobile md:px-margin-desktop text-on-primary" delay={0.2}>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-sm text-on-primary">
            Pemerintahan Desa
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto opacity-90 text-on-primary">
            Mengenal lebih dekat struktur organisasi dan jajaran pengurus desa yang berdedikasi melayani masyarakat.
          </p>
        </SlideUp>
      </section>

      {/* Organizational Structure Section */}
      <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <SlideUp className="text-center mb-8 md:mb-stack-lg">
          <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary mb-stack-sm">
            Struktur Organisasi
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Bagan susunan kepengurusan Pemerintahan Desa.
          </p>
        </SlideUp>

        {/* Simplified Flowchart Diagram using CSS Flexbox */}
        <SlideUp delay={0.2} className="w-full overflow-x-auto pb-8">
          <div className="min-w-[800px] flex flex-col items-center">
            {/* Kepala Desa */}
            {kades && (
              <div className="bg-surface shadow-ambient rounded-xl p-6 border border-outline-variant text-center w-64 hover-lift z-10">
                <div className="w-20 h-20 mx-auto rounded-xl bg-surface-container-high mb-4 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={kades.name}
                    src={kades.photo || "https://lh3.googleusercontent.com/aida-public/AB6AXuC9mmi-B2ajtPJ-JJVpEbPlz2Zl1N_vbTzzIyvbH85XnSuBBiB8O0Fdhriyc2JsqOfqloxATpsRPqz6f2sO0M4i0X02VQTtURK2SWXnCNhlv5OXaprOYaIK2kn3xEMEdadVpwEsFu9NAbH0jdIxHSFnChiuqlMVxZiYNFeQGGXNONvVGBfElvaqeOpDgbD-B98IHEkWtWt1czQq-SAuzNECb3jtkP6KcNRB7EmlgkjCZN22GYqQSF_k"}
                  />
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-1">{kades.name}</h3>
                <p className="font-label-md text-label-md text-secondary">{kades.position}</p>
              </div>
            )}

            {kades && sekdes && <div className="org-line-v h-8"></div>}

            {/* Sekretaris */}
            {sekdes && (
              <div className="bg-surface shadow-ambient rounded-xl p-4 border border-outline-variant text-center w-56 hover-lift z-10">
                <h3 className="font-title-lg text-body-lg font-bold text-primary mb-1">{sekdes.name}</h3>
                <p className="font-label-md text-label-md text-secondary">{sekdes.position}</p>
              </div>
            )}

            {others.length > 0 && (
              <>
                <div className="org-line-v h-8"></div>
                {/* Horizontal connection */}
                <div className="w-[600px] flex flex-col items-center">
                  <div className="org-line-h w-full"></div>
                  <div className="flex justify-between w-full relative">
                    {/* Kaur lines */}
                    {others.map((_, i) => (
                      <div key={i} className={`org-line-v h-8 absolute ${i === 0 ? 'left-0' : i === 1 ? 'left-1/2 -translate-x-1/2' : 'right-0'}`}></div>
                    ))}
                  </div>
                </div>

                {/* Kasi / Kaur Row */}
                <div className={`flex justify-between w-[${others.length > 2 ? '640' : '400'}px] mt-8 gap-4`}>
                  {others.map((other) => (
                    <div key={other.id} className="bg-surface shadow-ambient rounded-xl p-4 border border-outline-variant text-center w-48 hover-lift">
                      <h4 className="font-title-lg text-body-md font-bold text-on-surface">{other.name}</h4>
                      <p className="font-label-md text-caption text-secondary">{other.position}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </SlideUp>
      </section>

      {/* Officials Grid Section */}
      <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <SlideUp className="mb-8 md:mb-stack-lg border-b border-outline-variant pb-4">
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary">
              Jajaran Aparatur Desa
            </h2>
          </SlideUp>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-gutter">
            {allPerangkat.map((item) => (
              <StaggerItem key={item.id} className="bg-surface rounded-xl shadow-ambient overflow-hidden hover-lift flex flex-col items-center p-6 text-center border border-surface-variant h-full">
                <img
                  className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover mb-4 shadow-sm"
                  alt={item.name}
                  src={item.photo || "https://lh3.googleusercontent.com/aida-public/AB6AXuBCyd89gjmyVWeglyrZNnLO4xD_2TBG7xCPsJpOhrWSSwT6dUSm7KMyZpeqcHcw3rXOI0qM96ckSMpR3WW39Jd0N8gBPck6B5qZkJ8oq1FL51rhmGy2q2rQWc1TKgrqaRAZ6jk28j0kQbTmAzO8DM0iLMIEteXLJrc7OK2I4-6cQIlV1c8yMBYCZjlyWsszmPpIlNVxca2vpM6LYku5CYRy2F53dj5hv5C-BievI09FYQgA6fFxHcYa"}
                />
                <h3 className="font-title-lg text-title-lg text-on-surface mb-1">{item.name}</h3>
                <p className="font-label-md text-label-md text-primary mb-4 flex-grow">{item.position}</p>
                <div className="flex gap-3 text-secondary mt-auto">
                  <Link href="#" className="hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </Link>
                  <Link href="#" className="hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
