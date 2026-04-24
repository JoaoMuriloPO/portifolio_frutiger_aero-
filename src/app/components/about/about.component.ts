import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <div class="container container-compact">
        <!-- Main Unified Aero Card -->
        <div class="aero-main-card aero-panel">
          <div class="card-grid">
            
            <!-- Left Side: Title + Photo -->
            <div class="left-side">
               <div class="about-header-internal">
                  <span class="aero-tag">SOBRE MIM</span>
                  <h2 class="section-title">Quem sou</h2>
               </div>
               
               <div class="photo-container">
                  <img src="images/profile.png" alt="João Murilo" onerror="this.src='https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=800'">
                  <div class="photo-shine"></div>
               </div>
            </div>

            <!-- Right: Biography -->
            <div class="bio-container">
              <h3 class="bio-intro">Transformo ideias em experiências robustas</h3>
              <div class="bio-text">
                <p>
                  Busco excelência técnica para criar soluções que ampliem a visão do usuário através de <span>criatividade e tecnologia</span>. Atualmente, divido minha rotina entre a graduação na <strong>IFRJ</strong> e meu papel de QA na <strong>ILAB</strong>.
                </p>
                <p>
                  Na <strong>ILAB</strong>, foco em automação de testes e eficiência. No desenvolvimento, busco soluções Full-Stack resilientes, escaláveis e fundamentadas em código limpo.
                </p>
                <p>
                  Fora das telas, trago a paixão por <span>qualidade de software</span> para garantir que a usabilidade e a estabilidade caminhem juntas.
                </p>
              </div>

              <div class="aero-metrics-grid">
                <div class="mini-metric aero-panel">
                   <div class="m-icon">🚀</div>
                   <div class="m-txt">
                      <span class="m-label">Status</span>
                      <span class="m-val">QA na ILAB</span>
                   </div>
                </div>
                <div class="mini-metric aero-panel">
                   <div class="m-icon">🎓</div>
                   <div class="m-txt">
                      <span class="m-label">Formação</span>
                      <span class="m-val">Redes IFRJ</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-gloss"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section { 
      height: 100vh; /* Fixed height to force viewport fit */
      display: flex; 
      align-items: center; 
      justify-content: center;
      padding: 0; /* Remove padding to maximize space */
    }
    
    .container-compact {
      max-width: 1000px; /* Slightly narrower to feel more compact */
    }

    /* Unified Main Card - COMPACT VERSION */
    .aero-main-card {
      border-radius: 50px;
      padding: 40px;
      position: relative;
      max-height: 90vh; /* Ensure it never overflows vertically */
      overflow-y: auto; /* Just in case on very small screens */
    }
    
    .card-grid {
      display: grid;
      grid-template-columns: 1fr 1.6fr;
      gap: 40px;
      align-items: center;
      position: relative; z-index: 10;
    }

    /* Left Column (Header + Photo) */
    .left-side {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .about-header-internal { margin-bottom: 0; }
    .aero-tag { 
      font-size: 0.7rem; font-weight: 900; color: #22D3EE; 
      letter-spacing: 2px; text-transform: uppercase; margin-bottom: 5px; display: block;
    }
    .section-title { margin: 0; font-size: 2.2rem; line-height: 1; }

    /* Photo Container - SMALLER */
    .photo-container {
      width: 100%;
      aspect-ratio: 4 / 5;
      max-height: 380px; /* Constraint photo height */
      border-radius: 30px;
      overflow: hidden;
      position: relative;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 15px 40px rgba(0,0,0,0.2);
    }
    .photo-container img {
      width: 100%; height: 100%; object-fit: cover;
      filter: saturate(1.1) contrast(1.1);
    }

    /* Bio Side */
    .bio-intro { font-size: 1.5rem; font-weight: 800; color: #fff; margin-bottom: 20px; line-height: 1.3; }
    .bio-text p { font-size: 0.95rem; color: #fff; opacity: 0.85; line-height: 1.6; margin-bottom: 15px; }
    .bio-text span { color: #22D3EE; font-weight: 800; }

    /* Metrics Grid */
    .aero-metrics-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-top: 15px;
    }
    .mini-metric {
      display: flex; align-items: center; gap: 12px; padding: 15px; 
      border-radius: 20px; background: rgba(255,255,255,0.05);
    }
    .m-icon { font-size: 1.2rem; }
    .m-label { display: block; font-size: 0.65rem; font-weight: 900; color: #fff; opacity: 0.5; text-transform: uppercase; }
    .m-val { font-size: 0.9rem; font-weight: 800; color: #fff; }

    .card-gloss {
      position: absolute; top: 0; left: 0; width: 100%; height: 60px;
      background: linear-gradient(to bottom, rgba(255,255,255,0.1), transparent);
      border-radius: 50px 50px 0 0; pointer-events: none;
    }

    @media (max-width: 1100px) {
      .card-grid { grid-template-columns: 1fr; gap: 30px; }
      .photo-container { max-width: 250px; margin: 0 auto; }
      .section-title { font-size: 2rem; }
      .about-section { height: auto; padding: 60px 0; }
    }
  `]
})
export class AboutComponent {}
