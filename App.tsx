import { useState } from "react";

/* ÖRNEK İÇERİK: Aşağıdaki bilgiler gerçek değildir.
   Klinik doğruladıkça bu bölümden güncelleyin. */
const SHOW_SAMPLE_NOTICE = true;

const clinic = {
  name: "Dentpursak",
  fullName: "Ağız ve Diş Sağlığı Polikliniği",
  district: "Pursaklar, Ankara",
  phone: "Telefon numarası eklenecek",
  address: "Açık adres eklenecek",
  hours: "Çalışma saatleri eklenecek",
};

const nav = [
  { label: "Kliniğimiz", href: "#klinik" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Hekimler", href: "#hekimler" },
  { label: "İletişim", href: "#iletisim" },
];

const services = [
  { name: "Muayene ve diş taşı temizliği", text: "Ağız ve diş sağlığınızın genel kontrolü." },
  { name: "Dolgu ve kanal tedavisi", text: "Çürük ve diş ağrısı şikâyetlerinde tedavi." },
  { name: "İmplant", text: "Eksik dişler için kalıcı çözüm seçenekleri." },
  { name: "Ortodonti", text: "Diş ve çene hizalaması için tel ve şeffaf plak." },
  { name: "Diş beyazlatma", text: "Estetik amaçlı renk açma işlemleri." },
  { name: "Çocuk diş hekimliği", text: "Çocuklar için koruyucu ve tedavi edici bakım." },
];

const values = [
  { title: "Hasta odaklı yaklaşım", text: "Her hasta için ihtiyaca göre planlanan muayene ve tedavi." },
  { title: "Anlaşılır bilgilendirme", text: "Tedavi seçenekleri sade bir dille anlatılır." },
  { title: "Kolay randevu", text: "Online randevu talebi için sistem hazırlanıyor." },
];

const doctors = [
  { name: "Hekim adı soyadı", field: "Uzmanlık alanı" },
  { name: "Hekim adı soyadı", field: "Uzmanlık alanı" },
  { name: "Hekim adı soyadı", field: "Uzmanlık alanı" },
];

function ToothIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 54 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 8c-7 0-12 5-12 12 0 6 3 10 4 16 1 6 2 20 7 20 4 0 4-12 6-16 1-2 3-2 4 0 2 4 2 16 6 16 5 0 6-14 7-20 1-6 4-10 4-16 0-7-5-12-12-12-4 0-6 2-7 2s-3-2-7-2z" />
    </svg>
  );
}

function Icon({ d, className = "h-5 w-5" }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const icons = {
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  pin: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  clock: "M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
};

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label={clinic.name}>
      <ToothIcon className={`h-9 w-8 ${light ? "text-white" : "text-navy-800"}`} />
      <span className="leading-tight">
        <span className={`block font-display text-xl font-semibold ${light ? "text-white" : "text-navy-900"}`}>
          {clinic.name}
        </span>
        <span className={`block text-xs ${light ? "text-navy-200" : "text-navy-500"}`}>{clinic.fullName}</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-navy-100 bg-white/95 backdrop-blur">
      {SHOW_SAMPLE_NOTICE && (
        <p className="bg-navy-900 px-4 py-1.5 text-center text-xs text-navy-100">
          Bu sayfadaki klinik bilgileri örnek içeriktir ve henüz doğrulanmamıştır.
        </p>
      )}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Ana menü">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-navy-700 hover:text-navy-950">
              {n.label}
            </a>
          ))}
          <a href="#iletisim" className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-700">
            Online randevu al
          </a>
        </nav>
        <button
          type="button"
          className="rounded-lg p-2 text-navy-900 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        >
          <Icon d={open ? icons.close : icons.menu} className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <nav className="border-t border-navy-100 bg-white px-5 pb-5 pt-2 md:hidden" aria-label="Mobil menü">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-navy-50 py-3 text-base font-medium text-navy-800">
              {n.label}
            </a>
          ))}
          <a href="#iletisim" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-navy-900 px-5 py-3 text-center font-semibold text-white">
            Online randevu al
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 lg:grid-cols-12 lg:pb-24 lg:pt-20">
      <div className="lg:col-span-7">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-ice px-4 py-1.5 text-sm text-navy-700">
          <Icon d={icons.pin} className="h-4 w-4" /> {clinic.district}
        </p>
        <h1 className="font-display text-4xl font-semibold leading-[1.1] text-navy-950 sm:text-5xl lg:text-6xl">
          Diş ve ağız sağlığınız için randevunuzu kolayca alın
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-700">
          {clinic.name} {clinic.fullName}’nde muayene ve tedavi için online randevu talebinizi birkaç adımda oluşturabileceksiniz.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#iletisim" className="rounded-full bg-navy-900 px-8 py-4 text-center text-base font-semibold text-white shadow-lg shadow-navy-900/20 transition hover:bg-navy-700">
            Online randevu al
          </a>
          <a href="#hizmetler" className="rounded-full border border-navy-200 px-8 py-4 text-center text-base font-semibold text-navy-800 transition hover:border-navy-400">
            Hizmetleri incele
          </a>
        </div>
      </div>
      <div className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] bg-navy-900">
          <div className="absolute inset-6 rounded-t-full rounded-b-2xl border border-white/15" />
          <div className="absolute inset-12 rounded-t-full rounded-b-xl border border-white/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <ToothIcon className="h-40 w-36 text-white" />
          </div>
          <p className="absolute inset-x-0 bottom-5 text-center text-xs text-navy-300">Örnek görsel alanı</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="klinik" className="bg-ice py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-navy-950 sm:text-4xl">Kliniğimiz</h2>
          <p className="mt-5 max-w-prose leading-relaxed text-navy-700">
            {clinic.name}, {clinic.district} bölgesinde hizmet veren bir ağız ve diş sağlığı polikliniğidir. Bu alan, kliniğin
            gerçek tanıtım metniyle değiştirilecek örnek bir metindir.
          </p>
        </div>
        <ul className="space-y-6">
          {values.map((v) => (
            <li key={v.title} className="border-l-2 border-navy-800 pl-5">
              <h3 className="font-display text-xl font-semibold text-navy-900">{v.title}</h3>
              <p className="mt-1 text-navy-700">{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="hizmetler" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
      <h2 className="font-display text-3xl font-semibold text-navy-950 sm:text-4xl">Hizmetler</h2>
      <p className="mt-3 max-w-prose text-navy-600">Bu liste örnektir; kliniğin sunduğu hizmetlere göre güncellenecek.</p>
      <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
        {services.map((s) => (
          <li key={s.name} className="border-t border-navy-100 py-6">
            <h3 className="font-display text-xl font-semibold text-navy-900">{s.name}</h3>
            <p className="mt-1.5 text-navy-700">{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Doctors() {
  return (
    <section id="hekimler" className="bg-ice py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-semibold text-navy-950 sm:text-4xl">Hekimlerimiz</h2>
        <p className="mt-3 max-w-prose text-navy-600">Örnek alan: gerçek hekim bilgileri onay alındıktan sonra eklenecek.</p>
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {doctors.map((d, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto flex aspect-[3/4] w-full max-w-[14rem] items-center justify-center rounded-t-full rounded-b-2xl bg-navy-200">
                <ToothIcon className="h-14 w-12 text-navy-500" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">{d.name}</h3>
              <p className="text-sm text-navy-600">{d.field}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const rows = [
    { icon: icons.phone, label: "Telefon", value: clinic.phone },
    { icon: icons.pin, label: "Adres", value: `${clinic.address}, ${clinic.district}` },
    { icon: icons.clock, label: "Çalışma saatleri", value: clinic.hours },
  ];
  return (
    <section id="iletisim" className="bg-navy-950 py-16 text-white lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">İletişim ve konum</h2>
          <p className="mt-3 max-w-prose text-navy-200">Online randevu sistemi hazır olduğunda bu bölümden randevu alabileceksiniz.</p>
          <ul className="mt-9 space-y-6">
            {rows.map((r) => (
              <li key={r.label} className="flex gap-4">
                <span className="mt-0.5 text-navy-300"><Icon d={r.icon} /></span>
                <span>
                  <span className="block text-sm text-navy-300">{r.label}</span>
                  <span className="block text-lg">{r.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex min-h-[18rem] items-center justify-center rounded-2xl border border-white/15 bg-navy-900 p-6 text-center">
          <div>
            <Icon d={icons.pin} className="mx-auto h-8 w-8 text-navy-300" />
            <p className="mt-3 text-navy-200">Harita burada görünecek</p>
            <p className="text-sm text-navy-400">Örnek alan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-950 pb-10 pt-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 px-5 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo light />
        <p className="text-sm text-navy-300">© {new Date().getFullYear()} {clinic.name}. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
