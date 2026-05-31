import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JFLG11 - Galpão Logístico Premium em Juiz de Fora",
  description: "Condomínio logístico Padrão AAA no entroncamento das BRs 040 e 267. Área total de 100.000m², 4 módulos independentes, certificação LEED e localização estratégica.",
  keywords: "galpão logístico, Juiz de Fora, BR-040, BR-267, condomínio logístico, armazém, distribuição, Minas Gerais",
  openGraph: {
    title: "JFLG11 - Galpão Logístico Premium em Juiz de Fora",
    description: "Condomínio logístico Padrão AAA no entroncamento das BRs 040 e 267",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
