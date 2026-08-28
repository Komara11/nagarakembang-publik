import Link from "next/link";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export const metadata = {
  title: "Perangkat Desa - Nagara Kembang",
};

export default function PerangkatDesaPage() {
  const aparatur = [
    {
      nama: "Budi Santoso",
      jabatan: "Kepala Desa",
      foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4ol_um-dgiQ2-IYx1Zrp5_gLRsHMurG_BeTHfQZTjHehe6DBwsOFzR_uiD4QjPEoDHXXqFN8GP2I1CuZHetW4UqriN0CploUAGD8joyqW_A-g1LwI6ksIPNUSSFngqIWDBiEmyjC2MWHHvwSpZ6e89xGZWJqMlP2s8fCucOkJ2yFG0JMKZCaBzjcv-GbRuukLHB_A07mHUIxy_UOouWHPH5i_WE4heWjDIjp7HlQQsraIkHP7OHVV",
    },
    {
      nama: "Siti Aminah",
      jabatan: "Sekretaris Desa",
      foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCyd89gjmyVWeglyrZNnLO4xD_2TBG7xCPsJpOhrWSSwT6dUSm7KMyZpeqcHcw3rXOI0qM96ckSMpR3WW39Jd0N8gBPck6B5qZkJ8oq1FL51rhmGy2q2rQWc1TKgrqaRAZ6jk28j0kQbTmAzO8DM0iLMIEteXLJrc7OK2I4-6cQIlV1c8yMBYCZjlyWsszmPpIlNVxca2vpM6LYku5CYRy2F53dj5hv5C-BievI09FYQgA6fFxHcYa",
    },
    {
      nama: "Agus Riyanto",
      jabatan: "Kaur Keuangan",
      foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm-m0pAWBqjEBpPQxkELRkG_Uzj51YH7756i7p3Xf7olzUnK_Sb1yRbJ1tLFmsgquwLAhYqu3xevO4uIZEvqYs9R5iOJc7TyAZa4dd0B8p_0Wdz_82AejYpF0dfZdXIotNfQhw39f4jqpdad-L-WIg7QTHLXNJBXcQs1b0j6VIU2n_gk8FjpxU9Yo9UX2pbSZO12EDxoziUHv3RSwJK1l2b1GiWiyCfYrZTAukG1tLXYhadnyD7aw4",
    },
    {
      nama: "Rina Mulyani",
      jabatan: "Kaur Perencanaan",
      foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmg5_aDx3_Cli2CWjIQAlJTGH4b3BmypRz8PGf9urlzqMkE2Z0RblASt6NimIYonUdDQcrgCouSWcjNcNzl8Yq9H7g9fREZw1fF7A3ZAuds0cEYg_qMWou-93DONuUMS0VdMsCVFfnk20cSV--M87H5uTjgxcjiaJAUMMoCPyCIM16uup9SetPUqYYS6cHS9rGBq4wmp4aYecdgdwXr55orZpA7yXxg5DkmlAisl0-fRPBwaVNloB4",
    },
    {
      nama: "Dedi Setiawan",
      jabatan: "Kasi Pemerintahan",
      foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPHaFlLNrbWO8tOz6YqSvl4qMX5ZqVUo0ZJT5UUpJhIKe_Tkw5xq6LgOvkJ5a2194vR6e102aCdpI97Doop6iUBm97hFt8CqZfQcSYMetqE2IiQuVAACexc1OAps-lqW5oudocf4lnM3yjRemRMn0syJjHidyInFloRPW7J6NbS7ixKo1lW_ESLUyMsH0Rn1w1LckUBSSThcgwnm4SEC7iHDkszp7DjGRYToAmKo_57ZlT6r7zEEuW",
    },
    {
      nama: "Hendra Saputra",
      jabatan: "Kepala Dusun I",
      foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEeqqn6FDBmgNhLl_emAdbx-QAhZk9rq7_Rhc1GYuoD10PHVdrkptBt8GAOCjBcjGwq3V86sYrRlQAEfF4w4XiOYZoclxsKF91aqH6nsGvZ2bilVMWjFxyCQDUGmfcWl_6Xt-_o1FCQlQJ-74WXYd5cVL1_aJPcc7qQMzjIbwpUoa69MgPrSS0yxQY0j1VCAX8jMbjwvuOgtT5xmjhdzeO89Ou8YK9A7UyFP3LJ3EdXiGbLbp5ujzC",
    },
    {
      nama: "Ahmad Junaedi",
      jabatan: "Kepala Dusun II",
      foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9mmi-B2ajtPJ-JJVpEbPlz2Zl1N_vbTzzIyvbH85XnSuBBiB8O0Fdhriyc2JsqOfqloxATpsRPqz6f2sO0M4i0X02VQTtURK2SWXnCNhlv5OXaprOYaIK2kn3xEMEdadVpwEsFu9NAbH0jdIxHSFnChiuqlMVxZiYNFeQGGXNONvVGBfElvaqeOpDgbD-B98IHEkWtWt1czQq-SAuzNECb3jtkP6KcNRB7EmlgkjCZN22GYqQSF_k",
    },
    {
      nama: "Siti Zubaedah",
      jabatan: "Staf Administrasi",
      foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCyd89gjmyVWeglyrZNnLO4xD_2TBG7xCPsJpOhrWSSwT6dUSm7KMyZpeqcHcw3rXOI0qM96ckSMpR3WW39Jd0N8gBPck6B5qZkJ8oq1FL51rhmGy2q2rQWc1TKgrqaRAZ6jk28j0kQbTmAzO8DM0iLMIEteXLJrc7OK2I4-6cQIlV1c8yMBYCZjlyWsszmPpIlNVxca2vpM6LYku5CYRy2F53dj5hv5C-BievI09FYQgA6fFxHcYa",
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Header Section */}
      <section className="bg-surface-container-lowest pt-32 pb-16 px-6 md:px-margin-desktop border-b border-outline-variant">
        <div className="max-w-4xl mx-auto text-center">
          <SlideUp>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Perangkat Desa
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Mengenal lebih dekat jajaran aparatur Pemerintah Desa Nagara Kembang yang siap melayani kebutuhan administrasi dan sosial masyarakat.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Officials Grid Section */}
      <section className="py-16 md:py-24 px-6 md:px-margin-desktop bg-surface max-w-container-max mx-auto w-full">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aparatur.map((person, idx) => (
            <StaggerItem key={idx} className="bg-surface-container-lowest rounded-2xl shadow-ambient overflow-hidden hover:-translate-y-2 flex flex-col items-center p-8 text-center border border-outline-variant transition-all duration-300">
              <img
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-6 shadow-md border-4 border-surface"
                alt={person.nama}
                src={person.foto}
              />
              <h3 className="text-xl font-bold text-on-surface mb-2">{person.nama}</h3>
              <p className="font-bold text-primary bg-primary/10 px-4 py-1 rounded-full text-sm mb-6">{person.jabatan}</p>
              <div className="flex gap-4 text-secondary mt-auto">
                <Link href="#" className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
