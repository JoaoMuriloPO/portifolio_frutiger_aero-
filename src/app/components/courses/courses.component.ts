import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="courses" class="education-viewport">
      <div class="container education-layout">
        
        <!-- LEFT COLUMN: ACADEMIC & MAIN -->
        <div class="edu-main-side">
          <div class="aero-tag-label">TRAJETÓRIA TÉCNICA</div>
          <h2 class="edu-section-title">Formação & <span>Evolução</span></h2>
          
          <!-- ACADEMIC HIGHLIGHT -->
          <div class="academic-display aero-panel">
             <div class="ac-icon">🎓</div>
             <div class="ac-info">
                <span class="ac-tag">Ensino Superior</span>
                <h3>Tecnólogo em Redes de Computadores</h3>
                <p class="ac-inst">IFRJ - Campus Engenheiro Paulo de Frontin</p>
                <div class="ac-status">
                   <span class="pulse-dot"></span>
                   CURSANDO
                </div>
             </div>
             <div class="ac-gloss"></div>
          </div>

          <!-- MAIN PROFESSIONAL TRACKS (GRID 2x2) -->
          <div class="main-tracks">
             <div class="track-card aero-panel" *ngFor="let t of mainTracks">
                <div class="track-header" [style.border-bottom-color]="t.color">
                   <div class="track-brand">
                      <img [src]="getIconPath(t.institution)" [alt]="t.institution" class="brand-mini-img">
                      <span class="track-inst">{{ t.institution }}</span>
                   </div>
                   <span class="track-year">{{ t.year || '2026' }}</span>
                </div>
                <h4>{{ t.title }}</h4>
                <div class="track-glow" [style.background]="t.color"></div>
             </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: CERTIFICATE EXPLORER (WITH SCROLL) -->
        <div class="edu-explorer-side">
           <div class="explorer-header aero-panel">
              <div class="win-icon">📂</div>
              <span>Digital_Certificates.log</span>
           </div>
           
           <div class="list-wrapper aero-panel shadow-deep">
              <div class="certificates-list-inner" id="cert-scroll">
                 <div class="cert-item" *ngFor="let cert of certificates">
                    <div class="cert-orb-container">
                       <div class="cert-orb">
                          <img [src]="getIconPath(cert.institution)" [alt]="cert.institution" class="cert-img">
                       </div>
                    </div>

                    <div class="cert-info">
                       <div class="cert-primary">
                          <span class="cert-title">{{ cert.title }}</span>
                          <span class="cert-hours">{{ cert.hours }}</span>
                       </div>
                       <div class="cert-secondary">
                          <span class="cert-inst">{{ cert.institution }}</span>
                          <span class="cert-year">{{ cert.year }}</span>
                       </div>
                    </div>
                    <a [href]="cert.link" target="_blank" class="cert-link">
                       <span>🗂️</span>
                    </a>
                 </div>
              </div>
              
              <div class="fade-top"></div>
              <div class="fade-bottom"></div>
           </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .education-viewport { 
      height: 100vh; display: flex; align-items: center; justify-content: center; 
      padding-top: 80px; position: relative; overflow: hidden;
    }
    
    .education-layout { 
      display: grid; grid-template-columns: 1fr 0.9fr; gap: 60px; 
      max-width: 1300px; width: 95%; height: 80vh; align-items: stretch;
    }

    .aero-tag-label { font-size: 0.7rem; font-weight: 900; color: #22D3EE; letter-spacing: 4px; margin-bottom: 20px; }
    .edu-section-title { font-size: 3.5rem; font-weight: 950; color: #fff; margin-bottom: 30px; letter-spacing: -2px; }
    .edu-section-title span { color: #22D3EE; filter: drop-shadow(0 0 15px rgba(34, 211, 238, 0.4)); }

    .academic-display { 
      padding: 30px; border-radius: 35px; background: rgba(255,255,255,0.06); 
      border: 2px solid rgba(255,255,255,0.25); display: flex; gap: 30px; align-items: center;
      margin-bottom: 35px; position: relative; overflow: hidden;
    }
    .ac-icon { font-size: 3.2rem; filter: drop-shadow(0 0 15px #fff); }
    .ac-tag { font-size: 0.7rem; font-weight: 900; color: #22D3EE; text-transform: uppercase; letter-spacing: 2px; }
    .ac-info h3 { font-size: 1.6rem; color: #fff; font-weight: 950; margin: 5px 0; line-height: 1.1; }
    .ac-inst { color: rgba(255,255,255,0.7); font-size: 0.95rem; margin-bottom: 10px; }
    .ac-status { display: flex; align-items: center; gap: 10px; font-weight: 900; font-size: 0.75rem; color: #4ade80; }
    .pulse-dot { width: 8px; height: 8px; background: #4ade80; border-radius: 50%; box-shadow: 0 0 10px #4ade80; animation: pulseEdu 2s infinite; }
    @keyframes pulseEdu { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.3; transform: scale(0.8); } }

    .main-tracks { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
    .track-card { 
      padding: 20px; border-radius: 22px; background: rgba(255,255,255,0.04); 
      border: 1px solid rgba(255,255,255,0.1); position: relative; overflow: hidden;
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    }
    .track-card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.08); }
    .track-header { display: flex; justify-content: space-between; border-bottom: 2px solid transparent; padding-bottom: 10px; margin-bottom: 12px; align-items: center; }
    .track-brand { display: flex; align-items: center; gap: 10px; }
    .brand-mini-img { width: 18px; height: 18px; border-radius: 4px; object-fit: cover; border: 1px solid rgba(255,255,255,0.2); }
    .track-year { font-size: 0.65rem; font-weight: 900; color: #fff; opacity: 0.8; }
    .track-inst { font-size: 0.65rem; font-weight: 800; color: #22D3EE; }
    .track-card h4 { color: #fff; font-weight: 950; font-size: 0.95rem; margin: 0; line-height: 1.2; }

    .edu-explorer-side { display: flex; flex-direction: column; height: 100%; min-height: 0; }
    .explorer-header { 
      padding: 12px 20px; border-radius: 20px 20px 0 0; background: rgba(255,255,255,0.1); 
      border: 2px solid rgba(255,255,255,0.3); border-bottom: none;
      display: flex; align-items: center; gap: 12px; color: #fff; font-size: 0.8rem; font-weight: 800;
    }
    .list-wrapper { flex-grow: 1; min-height: 0; position: relative; background: rgba(0,0,0,0.25); border: 2px solid rgba(255,255,255,0.3); border-radius: 0 0 32px 32px; overflow: hidden; }
    .certificates-list-inner { height: 100%; overflow-y: auto; padding: 25px; }

    .cert-item { display: flex; align-items: center; gap: 18px; padding: 18px; border-radius: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); transition: all 0.2s; }
    .cert-item:hover { background: rgba(255,255,255,0.06); transform: scale(1.02); }
    .cert-orb { width: 44px; height: 44px; border-radius: 12px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); flex-shrink: 0; overflow: hidden; display: flex; align-items: center; justify-content: center; transition: 0.4s; }
    .cert-img { width: 100%; height: 100%; object-fit: cover; }
    .cert-item:hover .cert-orb { transform: rotate(10deg) scale(1.15); box-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }

    .cert-info { flex-grow: 1; display: flex; flex-direction: column; gap: 4px; }
    .cert-title { color: #fff; font-weight: 900; font-size: 0.95rem; }
    .cert-hours { font-size: 0.65rem; font-weight: 900; background: rgba(34, 211, 238, 0.15); padding: 2px 8px; border-radius: 50px; color: #22D3EE; }
    .cert-secondary { display: flex; justify-content: space-between; align-items: center; opacity: 0.6; }
    .cert-inst { font-size: 0.75rem; font-weight: 600; color: #fff; }
    .cert-year { font-size: 0.75rem; font-weight: 700; color: #22D3EE; }
    .cert-link { opacity: 0.3; transition: 0.3s; font-size: 1.1rem; }
    .cert-item:hover .cert-link { opacity: 1; transform: scale(1.1); }

    .fade-top { position: absolute; top: 0; left: 0; width: 100%; height: 30px; background: linear-gradient(to bottom, rgba(0,0,0,0.4), transparent); pointer-events: none; z-index: 2; }
    .fade-bottom { position: absolute; bottom: 0; left: 0; width: 100%; height: 30px; background: linear-gradient(to top, rgba(0,0,0,0.4), transparent); pointer-events: none; z-index: 2; }

    @media (max-width: 1100px) {
      .education-layout { grid-template-columns: 1fr; height: auto; gap: 40px; }
      .list-wrapper { height: 400px; }
    }
  `]
})
export class CoursesComponent {
  mainTracks = [
    { title: 'QA & Automação de Testes', institution: 'Alura', year: '2026', color: '#22D3EE' },
    { title: 'Automação com Cypress', institution: 'DIO', year: '2026', color: '#34D399' },
    { title: 'Node.js Complete', institution: 'DIO', year: '2026', color: '#34D399' },
    { title: 'Formação React', institution: 'Rocketseat', year: '2025', color: '#3B82F6' },
  ];

  certificates = [
    { title: 'Formação React', institution: 'Rocketseat', hours: '35h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/180541f3-0a8e-40d8-b55c-50d9b3389757' },
    { title: 'JavaScript', institution: 'Rocketseat', hours: '31h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/b608fe5d-9377-420a-a3a7-8731dc2fc3cc' },
    { title: 'Fundamentos de HTML & CSS', institution: 'Rocketseat', hours: '30h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/da761764-b8eb-4464-9e02-90e15511f356' },
    { title: 'Lógica de programação', institution: 'Rocketseat', hours: '30h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/23cfcc43-4bfe-4783-9869-af1ac74c205f' },
    { title: 'Fundamentos do Next.js', institution: 'Rocketseat', hours: '15h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/0ae1e49b-4adb-4450-a905-5522d0c54604' },
    { title: 'Discover', institution: 'Rocketseat', hours: '12h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/24cd7226-f61f-4166-84b8-a96c1029ce23' },
    { title: 'Fundamentos do React', institution: 'Rocketseat', hours: '6h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/89e6a911-cd82-4e4e-99e6-107c07774dda' },
    { title: 'Git e GitHub', institution: 'Rocketseat', hours: '4h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/4454bd8c-bee4-4b26-95a6-03b2bb18d41d' },
    { title: 'Clean Code', institution: 'Rocketseat', hours: '3h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/d5f4728e-4a11-4f80-a6d5-7adbeedbb170' },
    { title: 'Discover (Foundation)', institution: 'Rocketseat', hours: '2h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/9ddfe78b-0d2b-426a-b042-e165130d0873' }
  ];

  getIconPath(institution: string): string {
    const name = institution.toLowerCase();
    if (name.includes('rocketseat')) return 'images/cursos_icons/Rocketseat.jpg';
    if (name.includes('alura')) return 'images/cursos_icons/alura.jpg';
    if (name.includes('dio')) return 'images/cursos_icons/dio.jpg';
    return 'images/cursos_icons/Rocketseat.jpg';
  }
}
