export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: Date;
  readTime: number;
  tags: string[];
  image: string;
  slug: string;
  relatedPosts: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Cum să îți Optimizezi Website-ul pentru SEO în 2025',
    slug: 'optimizare-seo-2025',
    excerpt: 'Ghid complet pentru optimizarea SEO a website-ului tău, adaptat ultimelor tendințe și algoritmi.',
    content: `
      <h2>Introducere în SEO 2025</h2>
      <p>În era digitală actuală, optimizarea pentru motoarele de căutare (SEO) este mai importantă ca niciodată. Acest ghid vă va arăta cele mai eficiente strategii pentru 2025.</p>

      <h3>1. Optimizarea pentru Mobile First</h3>
      <p>Google utilizează indexarea mobile-first, ceea ce înseamnă că versiunea mobilă a site-ului tău este considerată versiunea primară pentru indexare și clasificare.</p>

      <h3>2. Core Web Vitals</h3>
      <p>Acești metri de performanță sunt esențiali pentru experiența utilizatorului și clasificarea în Google:</p>
      <ul>
        <li>Largest Contentful Paint (LCP)</li>
        <li>First Input Delay (FID)</li>
        <li>Cumulative Layout Shift (CLS)</li>
      </ul>

      <h3>3. Conținut de Calitate</h3>
      <p>Crearea de conținut valoros și relevant rămâne una dintre cele mai importante strategii SEO.</p>

      <h2>Strategii Avansate</h2>
      <p>Implementarea acestor tactici va ajuta la îmbunătățirea vizibilității site-ului tău în 2025 și ulterior.</p>
    `,
    date: new Date('2025-03-15'),
    readTime: 8,
    tags: ['SEO', 'Marketing Digital', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    relatedPosts: ['2', '3']
  },
  {
    id: '2',
    title: 'Tendințe în Design Web pentru 2025',
    slug: 'tendinte-design-web-2025',
    excerpt: 'Descoperă cele mai noi tendințe în design web și cum să le implementezi în proiectele tale.',
    content: `
      <h2>Tendințe Majore în Design Web 2025</h2>
      <p>Anul 2025 aduce schimbări semnificative în modul în care abordăm design-ul web. Iată principalele tendințe:</p>

      <h3>1. Design-ul Minimalist Evoluat</h3>
      <p>Minimalismul continuă să evolueze, incorporând elemente interactive subtile și micro-animații.</p>

      <h3>2. Dark Mode și Personalizare</h3>
      <p>Dark mode devine standard, cu opțiuni avansate de personalizare pentru utilizatori.</p>

      <h3>3. Experiențe Imersive</h3>
      <p>Realitatea augmentată și experiențele 3D devin mai accesibile și mai răspândite în design-ul web.</p>

      <h2>Implementare Practică</h2>
      <p>Cum să implementezi aceste tendințe în proiectele tale fără să sacrifici performanța și accesibilitatea.</p>
    `,
    date: new Date('2025-03-10'),
    readTime: 6,
    tags: ['Design Web', 'UI/UX', 'Tendințe'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80',
    relatedPosts: ['1', '3']
  },
  {
    id: '3',
    title: 'Importanța Vitezei de Încărcare pentru Website-ul Tău',
    slug: 'importanta-vitezei-incarcare',
    excerpt: 'Află de ce viteza de încărcare este crucială pentru succesul online și cum să o optimizezi.',
    content: `
      <h2>De Ce Este Importantă Viteza de Încărcare?</h2>
      <p>Viteza de încărcare a unui website influențează direct experiența utilizatorului și ratele de conversie.</p>

      <h3>1. Impact asupra SEO</h3>
      <p>Google consideră viteza de încărcare un factor important în clasificarea site-urilor.</p>

      <h3>2. Experiența Utilizatorului</h3>
      <p>Un site rapid oferă o experiență mai bună și reduce rata de abandon.</p>

      <h3>3. Optimizare pentru Mobile</h3>
      <p>Viteza este și mai importantă pe dispozitive mobile, unde conexiunile pot fi mai lente.</p>

      <h2>Cum să Optimizezi Viteza</h2>
      <p>Tehnici și strategii practice pentru îmbunătățirea performanței website-ului tău.</p>
    `,
    date: new Date('2025-03-05'),
    readTime: 7,
    tags: ['Performanță', 'Web Development', 'SEO'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    relatedPosts: ['1', '2']
  }
];