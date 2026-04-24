import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills-viewport">
      <div class="container container-compact">
        
        <!-- Main Unified Aero Card for Skills -->
        <div class="aero-main-card aero-panel">
          
          <!-- Liquid & Bubble Decor INSIDE the card -->
          <div class="card-internal-decor">
             <div class="inner-bubble ib-1"></div>
             <div class="inner-bubble ib-2"></div>
             <!-- Improved Shimmer (Liquid Light) -->
             <div class="aero-shimmer"></div>
          </div>

          <!-- Internal Header -->
          <div class="skills-header-internal">
             <div class="title-meta">
                <span class="aero-tag">DOMÍNIO TÉCNICO</span>
                <h2 class="section-title">Habilidades</h2>
             </div>
             <div class="header-orb">💎</div>
          </div>

          <!-- Skills Horizontal Grid -->
          <div class="skills-internal-grid">
            <div class="skill-group aero-panel nested" *ngFor="let cat of categories">
              <div class="group-header">
                <div class="glass-icon-container">
                   <span class="group-icon">{{ cat.icon }}</span>
                   <div class="icon-gloss"></div>
                </div>
                <h3>{{ cat.name }}</h3>
              </div>
              <ul class="skill-mini-list">
                <li *ngFor="let s of cat.skills">
                   <div class="aero-bullet">
                      <div class="bullet-inner" [style.background]="cat.color"></div>
                   </div>
                   {{ s }}
                </li>
              </ul>
              <div class="nested-gloss"></div>
            </div>
          </div>

          <!-- Bottom Decorative Footer (Vista Style) -->
          <div class="card-footer-glow"></div>
          <!-- More natural reflection line -->
        </div>

      </div>
    </section>
  `,
  styles: [`
    .skills-viewport {
      height: 100vh; display: flex; align-items: center; justify-content: center; padding: 0;
    }

    .container-compact { max-width: 1100px; width: 100%; }

    /* Unified Large Card - HIGH FIDELITY AERO */
    .aero-main-card {
      border-radius: 60px;
      padding: 60px;
      position: relative;
      background: rgba(15, 23, 42, 0.45);
      backdrop-filter: blur(50px) saturate(2.5);
      border: 2px solid rgba(255, 255, 255, 0.25);
      box-shadow: 
        0 60px 150px rgba(0,0,0,0.5), 
        inset 0 0 50px rgba(255,255,255,0.05);
      overflow: hidden;
    }

    /* Internal Decor */
    .card-internal-decor { position: absolute; width: 100%; height: 100%; top: 0; left: 0; pointer-events: none; }
    .inner-bubble { 
      position: absolute; border-radius: 50%; border: 1px solid rgba(255,255,255,0.25);
      background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%);
      animation: floatInternal 10s infinite ease-in-out;
    }
    .ib-1 { width: 150px; height: 150px; top: -40px; right: 5%; opacity: 0.4; }
    .ib-2 { width: 80px; height: 80px; bottom: 20px; left: 2%; opacity: 0.3; animation-delay: 3s; }
    
    /* Aero Shimmer - Softer and more liquid */
    .aero-shimmer {
      position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%);
      transform: rotate(-35deg);
      animation: shimmerMove 15s infinite linear;
    }
    @keyframes shimmerMove { 0% { transform: translate(-30%, -30%) rotate(-35deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translate(30%, 30%) rotate(-35deg); opacity: 0; } }
    
    @keyframes floatInternal { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-30px) scale(1.05); } }

    .skills-header-internal { 
      margin-bottom: 40px; display: flex; justify-content: space-between; align-items: flex-end;
      border-bottom: 2px solid rgba(255,255,255,0.05); padding-bottom: 25px;
    }
    .header-orb { font-size: 2.5rem; filter: drop-shadow(0 0 20px rgba(34,211,238,0.5)); }
    .aero-tag { font-size: 0.75rem; font-weight: 900; color: #22D3EE; letter-spacing: 3px; margin-bottom: 10px; display: block; opacity: 0.8; }
    .section-title { margin: 0; font-size: 3rem; line-height: 1; color: #fff; text-shadow: 0 4px 15px rgba(0,0,0,0.3); }

    /* Internal Grid Layout */
    .skills-internal-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    /* Nested Aero Panels */
    .skill-group.nested {
      padding: 30px; border-radius: 40px;
      background: rgba(255,255,255,0.02); border-color: rgba(255,255,255,0.1);
      box-shadow: inset 0 2px 10px rgba(255,255,255,0.05);
      transition: all 0.5s ease;
    }
    .skill-group.nested:hover { 
      background: rgba(255,255,255,0.06); transform: scale(1.02) translateY(-5px);
      border-color: rgba(255,255,255,0.3);
      box-shadow: 0 20px 40px rgba(0,0,0,0.2), inset 0 0 20px rgba(255,255,255,0.1);
    }

    .group-header { display: flex; align-items: center; gap: 18px; margin-bottom: 25px; }
    .glass-icon-container {
      width: 55px; height: 55px; background: rgba(255,255,255,0.1);
      border-radius: 15px; display: flex; align-items: center; justify-content: center;
      position: relative; border: 1px solid rgba(255,255,255,0.2);
    }
    .group-icon { font-size: 2rem; z-index: 2; }
    .icon-gloss { position: absolute; top: 0; width: 100%; height: 50%; background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent); border-radius: 15px 15px 0 0; }
    
    h3 { font-size: 1.3rem; font-weight: 900; color: #fff; margin: 0; text-shadow: 0 2px 8px rgba(0,0,0,0.3); }

    .skill-mini-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 20px; }
    .skill-mini-list li {
      font-size: 0.95rem; font-weight: 700; color: #fff; opacity: 0.85;
      display: flex; align-items: center; gap: 12px;
      transition: all 0.3s ease;
    }
    .skill-group.nested:hover li { opacity: 1; }
    
    /* Custom Aero Bullets */
    .aero-bullet {
      width: 14px; height: 14px; border-radius: 50%; background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center;
      position: relative; overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    .bullet-inner { width: 5px; height: 5px; border-radius: 50%; box-shadow: 0 0 10px currentColor; color: #fff; }
    .aero-bullet::after { content: ''; position: absolute; top: 1px; left: 3px; width: 7px; height: 5px; background: rgba(255,255,255,0.6); border-radius: 50%; transform: rotate(-30deg); }

    .aero-gloss-reflection {
      position: absolute; top: 0; width: 100%; height: 100%;
      background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 40%, rgba(255,255,255,0.05) 100%);
      pointer-events: none;
    }

    .card-footer-glow {
      position: absolute; bottom: 0; width: 100%; height: 60px;
      background: linear-gradient(to top, rgba(34,211,238,0.1), transparent);
      opacity: 0.5;
    }

    @media (max-width: 900px) {
      .aero-main-card { padding: 40px; border-radius: 40px; }
      .skills-internal-grid { grid-template-columns: 1fr; gap: 20px; }
      .skills-viewport { height: auto; padding: 80px 0; }
    }
  `]
})
export class SkillsComponent {
  categories = [
    { name: 'Desenvolvimento', icon: '💻', color: '#3B82F6', skills: ['ReactJS', 'TypeScript', 'Node.js', 'Angular'] },
    { name: 'Qualidade (QA)', icon: '💎', color: '#22D3EE', skills: ['Cypress', 'Robot Framework', 'Gherkin', 'Postman'] },
    { name: 'Agilidade & DevOps', icon: '♾️', color: '#10B981', skills: ['Scrum / Kanban', 'Git / GitHub', 'Docker', 'CI/CD'] },
    { name: 'Essenciais (Soft)', icon: '🤝', color: '#F59E0B', skills: ['Comunicação', 'UX Design', 'Mentoria', 'Liderança'] }
  ];
}
