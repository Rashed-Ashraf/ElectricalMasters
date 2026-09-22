import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Electrical Masters Switchgear Pvt. Ltd. | Industrial Switchgear & Protection Solutions',
  description:
    'Established in 2004, Electrical Masters Switchgear Private Limited provides cutting-edge low voltage switchgear, PFI panels, MCC, PLC systems, AMF/ATS panels, DBs, and cable trays in Lahore, Pakistan.',
  keywords: [
    'Electrical Masters Switchgear',
    'Switchgear Pakistan',
    'Low Voltage Switchgear',
    'PFI Panels',
    'Motor Control Centre',
    'PLC System Panels',
    'ATS Panels',
    'Cable Trays Lahore',
    'Nawab Mashkoor Town Kahna Kacha Road',
  ],
  authors: [{ name: 'Electrical Masters Switchgear Pvt. Ltd.' }],
  icons: {
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-khndPMl--eqyjxng4lPYeRoG65w-Dv34EHPDc9kdhuoTfT0HkjHSDhBuFA6GfVdDyTTibWBPIUdZuu5ie4Lf-JymH9aHrpTUyH3DCq2jB-INKakzKWbhQzJryH71C0FtCvGenmaSvbDQhRIei9qgBE9w-GrpRexhf47u_OeYtXdiSgDthCPyHnm5SiXWGaEkK0ZaOcs5a-zMMvZE0rkD9p-SZh3DbRMO2RU9QWqXQ83ox9Z8hvROu_ZsdLmImvaomA',
    shortcut: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-khndPMl--eqyjxng4lPYeRoG65w-Dv34EHPDc9kdhuoTfT0HkjHSDhBuFA6GfVdDyTTibWBPIUdZuu5ie4Lf-JymH9aHrpTUyH3DCq2jB-INKakzKWbhQzJryH71C0FtCvGenmaSvbDQhRIei9qgBE9w-GrpRexhf47u_OeYtXdiSgDthCPyHnm5SiXWGaEkK0ZaOcs5a-zMMvZE0rkD9p-SZh3DbRMO2RU9QWqXQ83ox9Z8hvROu_ZsdLmImvaomA',
    apple: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-khndPMl--eqyjxng4lPYeRoG65w-Dv34EHPDc9kdhuoTfT0HkjHSDhBuFA6GfVdDyTTibWBPIUdZuu5ie4Lf-JymH9aHrpTUyH3DCq2jB-INKakzKWbhQzJryH71C0FtCvGenmaSvbDQhRIei9qgBE9w-GrpRexhf47u_OeYtXdiSgDthCPyHnm5SiXWGaEkK0ZaOcs5a-zMMvZE0rkD9p-SZh3DbRMO2RU9QWqXQ83ox9Z8hvROu_ZsdLmImvaomA',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="https://lh3.googleusercontent.com/aida-public/AB6AXuB-khndPMl--eqyjxng4lPYeRoG65w-Dv34EHPDc9kdhuoTfT0HkjHSDhBuFA6GfVdDyTTibWBPIUdZuu5ie4Lf-JymH9aHrpTUyH3DCq2jB-INKakzKWbhQzJryH71C0FtCvGenmaSvbDQhRIei9qgBE9w-GrpRexhf47u_OeYtXdiSgDthCPyHnm5SiXWGaEkK0ZaOcs5a-zMMvZE0rkD9p-SZh3DbRMO2RU9QWqXQ83ox9Z8hvROu_ZsdLmImvaomA"
        />
        <link
          rel="shortcut icon"
          href="https://lh3.googleusercontent.com/aida-public/AB6AXuB-khndPMl--eqyjxng4lPYeRoG65w-Dv34EHPDc9kdhuoTfT0HkjHSDhBuFA6GfVdDyTTibWBPIUdZuu5ie4Lf-JymH9aHrpTUyH3DCq2jB-INKakzKWbhQzJryH71C0FtCvGenmaSvbDQhRIei9qgBE9w-GrpRexhf47u_OeYtXdiSgDthCPyHnm5SiXWGaEkK0ZaOcs5a-zMMvZE0rkD9p-SZh3DbRMO2RU9QWqXQ83ox9Z8hvROu_ZsdLmImvaomA"
        />
        <link
          rel="apple-touch-icon"
          href="https://lh3.googleusercontent.com/aida-public/AB6AXuB-khndPMl--eqyjxng4lPYeRoG65w-Dv34EHPDc9kdhuoTfT0HkjHSDhBuFA6GfVdDyTTibWBPIUdZuu5ie4Lf-JymH9aHrpTUyH3DCq2jB-INKakzKWbhQzJryH71C0FtCvGenmaSvbDQhRIei9qgBE9w-GrpRexhf47u_OeYtXdiSgDthCPyHnm5SiXWGaEkK0ZaOcs5a-zMMvZE0rkD9p-SZh3DbRMO2RU9QWqXQ83ox9Z8hvROu_ZsdLmImvaomA"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className="antialiased selection:bg-[#0098da] selection:text-white bg-[#f2f8fc] text-[#00283d] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
