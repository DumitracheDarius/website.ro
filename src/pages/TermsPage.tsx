import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-textPrimary flex flex-col">
      <Navbar activeSection="" scrollToSection={() => {}} />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Termeni și Condiții</h1>
          <p className="text-textSecondary">
            Ultima actualizare: 15 Martie 2025
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introducere</h2>
            <p className="text-textSecondary mb-4">
              Acești termeni și condiții guvernează utilizarea serviciilor oferite de WeSite ("noi", "nouă" sau "Compania"). Prin accesarea și utilizarea serviciilor noastre, sunteți de acord cu acești termeni în totalitate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Serviciile Noastre</h2>
            <p className="text-textSecondary mb-4">
              Oferim servicii de design și dezvoltare web, inclusiv dar nu limitat la:
            </p>
            <ul className="list-disc list-inside text-textSecondary mb-4 ml-4">
              <li>Design și dezvoltare website-uri personalizate</li>
              <li>Optimizare SEO</li>
              <li>Integrare sisteme de management al conținutului</li>
              <li>Mentenanță și suport tehnic</li>
              <li>Consultanță web și marketing digital</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Prețuri și Plăți</h2>
            <p className="text-textSecondary mb-4">
              Prețurile pentru serviciile noastre sunt prezentate în secțiunea de prețuri a website-ului. Toate prețurile sunt în RON și includ TVA. Plata se efectuează conform termenelor stabilite în contractul de servicii.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Proprietate Intelectuală</h2>
            <p className="text-textSecondary mb-4">
              După finalizarea plății integrale, clientul primește drepturile de proprietate asupra design-ului și conținutului personalizat creat specific pentru proiectul său. Codul sursă și alte elemente tehnice rămân proprietatea WeSite.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Confidențialitate</h2>
            <p className="text-textSecondary mb-4">
              Ne angajăm să protejăm informațiile confidențiale ale clienților noștri. Nu vom divulga informații confidențiale către terțe părți fără acordul explicit al clientului.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Limitarea Răspunderii</h2>
            <p className="text-textSecondary mb-4">
              WeSite nu este responsabilă pentru:
            </p>
            <ul className="list-disc list-inside text-textSecondary mb-4 ml-4">
              <li>Întreruperi ale serviciilor cauzate de terți</li>
              <li>Pierderi de date sau profit rezultate din utilizarea serviciilor</li>
              <li>Conținutul furnizat de client</li>
              <li>Modificări neautorizate aduse website-ului de către client sau terți</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Reziliere</h2>
            <p className="text-textSecondary mb-4">
              Contractul poate fi reziliat de oricare dintre părți cu un preaviz de 30 de zile. În cazul rezilierii, clientul este obligat să achite serviciile prestate până la data rezilierii.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Modificări ale Termenilor</h2>
            <p className="text-textSecondary mb-4">
              Ne rezervăm dreptul de a modifica acești termeni în orice moment. Modificările vor intra în vigoare la data publicării lor pe website. Utilizarea continuă a serviciilor noastre după modificări constituie acceptarea noilor termeni.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
            <p className="text-textSecondary mb-4">
              Pentru orice întrebări legate de acești termeni și condiții, vă rugăm să ne contactați la:
            </p>
            <div className="text-textSecondary">
              <p>Email: info@wesite.ro</p>
              <p>Telefon: +40 769 245 781</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;