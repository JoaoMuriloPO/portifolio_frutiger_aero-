import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects-viewport">
      <div class="container container-wide">
        
        <!-- Main Stage Card -->
        <div class="aero-stage-card aero-panel">
          
          <!-- HIGH-FIDELITY AERO HEADER -->
          <div class="stage-header">
            <div class="aero-title-container">
              <div class="title-decor">
                 <div class="t-bubble b1"></div>
                 <div class="t-bubble b2"></div>
              </div>
              <span class="aero-tag">SHOWCASE DIGITAL</span>
              <h2 class="aero-liquid-title">
                Portfólio de <span>Projetos</span>
                <div class="title-shimmer-subtle"></div>
              </h2>
            </div>
            
            <div class="stage-filters aero-panel nested">
              <button *ngFor="let f of filters" 
                      [class.active]="currentFilter === f.id"
                      (click)="setFilter(f.id)">
                {{ f.label }}
              </button>
            </div>
          </div>

          <!-- The Carousel Stage -->
          <div class="stage-body">
            <button class="nav-globe prev" (click)="prev()"><span>‹</span></button>
            
            <div class="projects-display">
               <div class="project-slide aero-panel shadow-soft" 
                    *ngFor="let p of filteredProjects(); let i = index"
                    [class.active]="i === currentIndex"
                    [class.hidden]="i !== currentIndex"
                    [class.slide-next-inv]="i === currentIndex && animationDirection === 'next'"
                    [class.slide-prev-inv]="i === currentIndex && animationDirection === 'prev'">
                 
                 <div class="slide-grid">
                    <div class="project-image-side">
                       <div class="img-frame">
                          <img [src]="p.image" [alt]="p.title" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'">
                          <div class="img-gloss"></div>
                       </div>
                    </div>
                    
                    <div class="project-info-side">
                       <!-- CENTERED CONTENT BLOCK -->
                       <div class="info-content centered-block">
                          <span class="p-badge">{{ p.tag }}</span>
                          <h3>{{ p.title }}</h3>
                          <p class="p-desc">{{ p.desc }}</p>
                          
                          <div class="tech-stack">
                             <span *ngFor="let t of p.tech" class="tech-tag">{{ t }}</span>
                          </div>
                       </div>
                       
                       <!-- Action Buttons - Kept low but integrated into centered flow -->
                       <div class="action-row-final">
                          <a [href]="p.github" class="aero-crystal-btn" target="_blank">
                             <span class="icon">🌐</span>
                             <span class="label">Código</span>
                             <div class="btn-reflect"></div>
                          </a>
                          
                          <a *ngIf="p.demo" [href]="p.demo" class="aero-crystal-btn highlight" target="_blank">
                             <span class="icon">🫧</span>
                             <span class="label">Demo Ao Vivo</span>
                             <div class="btn-reflect"></div>
                          </a>
                       </div>
                    </div>
                 </div>
               </div>
            </div>

            <button class="nav-globe next" (click)="next()"><span>›</span></button>
          </div>

          <div class="card-gloss-fixed"></div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .projects-viewport {
      height: 100vh; display: flex; align-items: center; justify-content: center; padding: 0;
    }

    .container-wide { max-width: 1200px; width: 95%; }

    .aero-stage-card {
      border-radius: 60px; padding: 50px; position: relative;
      background: rgba(15, 23, 42, 0.4); backdrop-filter: blur(50px) saturate(2);
      border: 2px solid rgba(255, 255, 255, 0.2); box-shadow: 0 50px 150px rgba(0,0,0,0.5);
      overflow: hidden;
    }

    .stage-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 45px; }
    .aero-tag { font-size: 0.75rem; font-weight: 900; color: #22D3EE; letter-spacing: 4px; display: block; margin-bottom: 5px; opacity: 0.8; }
    .aero-liquid-title { margin: 0; font-size: 2.8rem; color: #fff; line-height: 1; font-weight: 900; position: relative; letter-spacing: -1px; }
    .aero-liquid-title span { background: linear-gradient(to bottom, #fff 40%, #22D3EE); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

    .stage-filters { display: flex; gap: 5px; padding: 6px; border-radius: 20px; background: rgba(255,255,255,0.05); }
    .stage-filters button { background: transparent; border: none; color: #fff; padding: 10px 20px; border-radius: 12px; cursor: pointer; font-size: 0.85rem; font-weight: 800; transition: all 0.3s; opacity: 0.6; }
    .stage-filters button.active { background: #fff; color: #3b82f6; opacity: 1; }

    .stage-body { display: flex; align-items: center; gap: 20px; min-height: 480px; position: relative; }
    .nav-globe {
      width: 60px; height: 60px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.3);
      background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent);
      color: #fff; font-size: 2rem; cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: all 0.3s; z-index: 100; backdrop-filter: blur(10px);
    }
    .nav-globe:hover { transform: scale(1.1); background: rgba(255,255,255,0.2); }

    .projects-display { flex-grow: 1; position: relative; height: 480px; }
    .project-slide {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      padding: 40px; border-radius: 40px; background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center;
      transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .project-slide.hidden { opacity: 0; pointer-events: none; }
    .project-slide.active { opacity: 1; z-index: 10; }

    .slide-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; width: 100%; align-items: center; }

    .img-frame {
      width: 100%; aspect-ratio: 16 / 10; border-radius: 30px; overflow: hidden;
      position: relative; box-shadow: 0 30px 60px rgba(0,0,0,0.3); border: 2px solid rgba(255,255,255,0.2);
    }
    .img-frame img { width: 100%; height: 100%; object-fit: cover; }

    /* CENTRALIZAÇÃO DO CONTEÚDO INFO */
    .project-info-side { 
      display: flex; flex-direction: column; height: 100%; 
      justify-content: center; /* Centraliza o bloco todo verticalmente */
      gap: 50px; /* Mantém a distância entre texto e botões */
    }
    
    .centered-block {
      display: flex; flex-direction: column; 
      gap: 15px; 
      /* Removendo alinhamento ao topo para permitir a centralização do parent */
    }
    
    .p-badge { font-size: 0.75rem; font-weight: 900; color: #22D3EE; text-transform: uppercase; letter-spacing: 2px; }
    .project-info-side h3 { font-size: 2.6rem; color: #fff; margin: 0; font-weight: 900; line-height: 1.1; }
    .p-desc { font-size: 1.05rem; color: rgba(255,255,255,0.8); line-height: 1.6; margin: 5px 0; }

    .tech-stack { display: flex; gap: 10px; flex-wrap: wrap; }
    .tech-tag { font-size: 0.7rem; font-weight: 800; color: #22D3EE; background: rgba(34, 211, 238, 0.1); padding: 5px 14px; border-radius: 8px; border: 1px solid rgba(34, 211, 238, 0.2); }

    .action-row-final { display: flex; gap: 15px; }
    
    .aero-crystal-btn {
      flex: 1; position: relative; text-decoration: none; padding: 16px 20px;
      border-radius: 18px; border: 1px solid rgba(255,255,255,0.3);
      background: rgba(255,255,255,0.08); backdrop-filter: blur(15px);
      display: flex; align-items: center; justify-content: center; gap: 10px;
      transition: all 0.4s; overflow: hidden;
    }
    .aero-crystal-btn .label { color: #fff; font-weight: 900; font-size: 0.95rem; }
    .aero-crystal-btn .icon { font-size: 1.2rem; }
    .aero-crystal-btn.highlight { background: linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(59, 130, 246, 0.2)); border-color: rgba(34, 211, 238, 0.5); }
    .btn-reflect { position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent); transition: left 0.6s; }
    .aero-crystal-btn:hover { transform: translateY(-5px); border-color: #fff; background: rgba(255,255,255,0.2); }
    .aero-crystal-btn:hover .btn-reflect { left: 100%; }

    @keyframes slideInNextInv { from { transform: translateX(-120px) scale(0.9); opacity: 0; } to { transform: translateX(0) scale(1); opacity: 1; } }
    @keyframes slideInPrevInv { from { transform: translateX(120px) scale(0.9); opacity: 0; } to { transform: translateX(0) scale(1); opacity: 1; } }
    .slide-next-inv { animation: slideInNextInv 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
    .slide-prev-inv { animation: slideInPrevInv 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

    .card-gloss-fixed { position: absolute; top: 0; left: 0; width: 100%; height: 100px; background: linear-gradient(to bottom, rgba(255,255,255,0.1), transparent); pointer-events: none; border-radius: 60px 60px 0 0; }

    @media (max-width: 1100px) {
      .slide-grid { grid-template-columns: 1fr; gap: 30px; }
      .projects-display { height: auto; }
      .project-slide { position: relative; height: auto; padding: 20px; }
      .stage-body { flex-direction: column; }
    }
  `]
})
export class ProjectsComponent {
  currentIndex = 0;
  currentFilter = 'all';
  animationDirection: 'next' | 'prev' = 'next';
  filters = [
    { id: 'all', label: 'Todos' },
    { id: 'dev', label: 'Desenvolvimento' },
    { id: 'qa', label: 'QA / Automação' }
  ];

  projects = [
    { id: 1, category: 'dev', tag: 'React', title: 'Calculadora Aero', desc: 'Interface de cálculo fluída com efeitos de refletividade e profundidade visual.', tech: ['React', 'CSS Modules'], github: 'https://github.com/JoaoMuriloPO', demo: '#', image: 'images/projects/react-calculadora.png' },
    { id: 2, category: 'dev', tag: 'Next.js', title: 'NoReels Platform', desc: 'Experiência de streaming otimizada com foco em performance extrema.', tech: ['Next.js', 'Tailwind'], github: 'https://github.com/JoaoMuriloPO', demo: '#', image: 'images/projects/NoReels.png' },
    { id: 3, category: 'dev', tag: 'Angular', title: 'Aero Portfólio', desc: 'Sua marca digital com estética Frutiger Aero (este site!).', tech: ['Angular', 'TypeScript'], github: 'https://github.com/JoaoMuriloPO', demo: 'https://portfolio-pessoal-joao-murilo.vercel.app/', image: 'images/projects/portfolio-pessoal-joao-murilo.png' },
    { id: 4, category: 'qa', tag: 'Cypress', title: 'Cypress Specialist', desc: 'Automação de testes robusta para aplicações Web modernas utilizando Cypress.', tech: ['Cypress', 'JavaScript', 'E2E'], github: 'https://github.com/JoaoMuriloPO/cypress', image: 'images/projects/cypress.png' },
    { id: 5, category: 'dev', tag: 'React', title: 'TODO App', desc: 'Simplicidade e organização com foco em UX moderna.', tech: ['React', 'Context API'], github: 'https://github.com/JoaoMuriloPO', demo: 'https://react-todo-rocketseat-gzr8.vercel.app/', image: 'images/projects/react-TODO.png' }
  ];

  setFilter(id: string) { 
    this.currentFilter = id; 
    this.currentIndex = 0; 
  }

  filteredProjects() {
    if (this.currentFilter === 'all') return this.projects;
    return this.projects.filter(p => p.category === this.currentFilter);
  }

  next() {
    this.animationDirection = 'next';
    const total = this.filteredProjects().length;
    this.currentIndex = (this.currentIndex + 1) % total;
  }

  prev() {
    this.animationDirection = 'prev';
    const total = this.filteredProjects().length;
    this.currentIndex = (this.currentIndex - 1 + total) % total;
  }
}
