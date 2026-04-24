import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qa-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="qa" class="qa-viewport">
      
      <!-- REMOVED LOCAL ATMOSPHERE - Now Global -->

      <div class="container labs-stage">
        
        <!-- CONTENT SIDE -->
        <div class="labs-info">
          <div class="aero-tag-line">
             <span class="dot pulsing"></span>
             AUTOMATION & QUALITY LAB
          </div>
          
          <h2 class="hero-labs-title">Evolução do <span>Software</span></h2>
          
          <p class="hero-labs-desc">
            Minha base Fullstack em JS/TS tornou a transição para a automação um processo natural. 
            Hoje, uso minha fluência em código para criar testes robustos que realmente entendem a lógica por trás de cada fluxo.
          </p>
          
          <div class="labs-grid">
             <div class="lab-pill aero-panel" *ngFor="let f of features">
                <div class="pill-icon">{{ f.icon }}</div>
                <div class="pill-content">
                   <h4>{{ f.title }}</h4>
                   <p>{{ f.desc }}</p>
                </div>
                <div class="pill-shimmer"></div>
             </div>
          </div>
        </div>
        
        <!-- MONITOR SIDE -->
        <div class="labs-display">
          <div class="aero-monitor-v2 aero-panel">
            <div class="m-top-bar">
               <div class="m-status">
                  <div class="s-led"></div>
                  <span class="s-label">cypress_ts_runtime.sys</span>
               </div>
               <div class="m-actions">
                  <span></span><span></span><span class="x"></span>
               </div>
            </div>
            
            <div class="m-main-screen">
               <div class="m-code-view">
                  <div class="l"><span class="t-k">it</span>(<span class="t-v">'should pass with Dev logic'</span>, () => {{ '{' }}</div>
                  <div class="l i"><span class="t-p">cy.visit</span>(<span class="t-v">'/'</span>);</div>
                  <div class="l i"><span class="t-p">cy.check</span>(<span class="t-v">'TS_Contract'</span>);</div>
                  <div class="l i"><span class="t-p">cy.wrap</span>(<span class="t-v">'Integration'</span>).<span class="t-p">should</span>(<span class="t-v">'be.fluid'</span>);</div>
                  <div class="l">{{ '}' }});</div>
               </div>
               
               <div class="m-overlay">
                  <div class="m-scanline"></div>
                  <div class="m-noise"></div>
               </div>
            </div>
            
            <div class="m-bottom-controls">
               <div class="m-progress">
                  <div class="m-track">
                     <div class="m-fill"></div>
                  </div>
               </div>
               <div class="m-ui-btns">
                  <div class="u-btn"></div>
                  <div class="u-btn"></div>
                  <div class="u-btn main"></div>
               </div>
            </div>
            <div class="m-glass-reflect"></div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .qa-viewport { 
      min-height: 100vh; width: 100%; display: flex; align-items: center; justify-content: center; 
      position: relative; overflow: hidden; background: transparent;
      padding-top: 100px; padding-bottom: 50px;
    }

    .labs-stage { 
      display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; 
      align-items: center; max-width: 1300px; width: 90%; position: relative; z-index: 10;
    }

    /* ... rest of the component styles ... */
    .aero-tag-line { 
      display: flex; align-items: center; gap: 12px; color: #22D3EE; 
      font-size: 0.8rem; font-weight: 900; letter-spacing: 4px; margin-bottom: 20px;
      text-shadow: 0 0 10px rgba(34, 211, 238, 0.3);
    }
    .aero-tag-line .dot { width: 10px; height: 10px; background: #22D3EE; border-radius: 50%; box-shadow: 0 0 10px #22D3EE; }
    .pulsing { animation: pulseTag 2s infinite ease-in-out; }

    .hero-labs-title { font-size: 4.2rem; font-weight: 950; color: #fff; margin-bottom: 25px; letter-spacing: -3px; line-height: 0.95; }
    .hero-labs-title span { background: linear-gradient(to bottom, #fff 40%, #22D3EE); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.4)); }
    
    .hero-labs-desc { font-size: 1.15rem; color: rgba(255,255,255,0.75); line-height: 1.6; margin-bottom: 45px; max-width: 600px; }

    .labs-grid { display: flex; flex-direction: column; gap: 15px; width: 100%; max-width: 550px; }
    .lab-pill { 
      display: flex; gap: 20px; padding: 22px 28px; border-radius: 25px; 
      background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1);
      transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1); position: relative; overflow: hidden;
    }
    .lab-pill:hover { transform: translateX(20px); background: rgba(255,255,255,0.07); border-color: rgba(34, 211, 238, 0.4); }
    .pill-icon { font-size: 1.8rem; flex-shrink: 0; }
    .pill-content h4 { color: #fff; font-weight: 900; font-size: 1.15rem; margin-bottom: 4px; }
    .pill-content p { color: rgba(255,255,255,0.6); font-size: 0.9rem; margin: 0; line-height: 1.5; }
    .pill-shimmer { position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent); transition: 0.8s; }
    .lab-pill:hover .pill-shimmer { left: 100%; }

    .aero-monitor-v2 { 
      width: 100%; max-width: 520px;
      background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 100%);
      backdrop-filter: blur(30px) saturate(1.5); border-radius: 40px; border: 2px solid rgba(255,255,255,0.3);
      padding: 10px; box-shadow: 0 60px 120px rgba(0,0,0,0.5); transform: perspective(1000px) rotateY(-12deg); 
      transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    }
    .aero-monitor-v2:hover { transform: perspective(1000px) rotateY(0deg) scale(1.05); }

    .m-top-bar { padding: 15px 25px; display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.1); border-radius: 32px 32px 0 0; }
    .m-status { display: flex; align-items: center; gap: 12px; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: #fff; font-weight: 800; }
    .s-led { width: 8px; height: 8px; background: #22D3EE; border-radius: 50%; box-shadow: 0 0 10px #22D3EE; animation: pulseMonitor 1.5s infinite; }
    .m-actions { display: flex; gap: 10px; }
    .m-actions span { width: 12px; height: 12px; border-radius: 50%; background: rgba(255,255,255,0.2); }
    .m-actions span.x { background: rgba(239, 68, 68, 0.4); }

    .m-main-screen { background: #020617; margin: 10px; height: 280px; border-radius: 25px; overflow: hidden; position: relative; display: flex; align-items: center; padding: 45px; border: 1px solid rgba(255,255,255,0.1); }
    .m-code-view { font-family: 'Fira Code', monospace; font-size: 0.95rem; line-height: 1.8; z-index: 10; }
    .t-k { color: #f472b6; } .t-p { color: #22D3EE; } .t-v { color: #4ade80; }
    .l.i { padding-left: 25px; }

    .m-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }
    .m-scanline { position: absolute; width: 100%; height: 2px; background: rgba(34, 211, 238, 0.15); top: 0; animation: scanDown 5s linear infinite; }
    .m-noise { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('https://grainy-gradients.vercel.app/noise.svg'); opacity: 0.05; }

    .m-bottom-controls { padding: 30px; background: rgba(0,0,0,0.15); border-radius: 0 0 32px 32px; display: flex; align-items: center; gap: 25px; }
    .m-progress { flex-grow: 1; }
    .m-track { height: 10px; background: rgba(255,255,255,0.1); border-radius: 20px; overflow: hidden; position: relative; border: 1px solid rgba(255,255,255,0.1); }
    .m-fill { width: 70%; height: 100%; background: linear-gradient(90deg, #22D3EE, #3b82f6); box-shadow: 0 0 20px rgba(34, 211, 238, 0.6); animation: loadBar 4s infinite ease-in-out; }
    
    .m-ui-btns { display: flex; gap: 15px; }
    .u-btn { width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); transition: 0.3s; }
    .u-btn.main { background: #fff; box-shadow: 0 5px 15px rgba(255,255,255,0.3); }

    .m-glass-reflect { position: absolute; top: 0; left: 0; width: 100%; height: 60px; background: linear-gradient(to bottom, rgba(255,255,255,0.12), transparent); border-radius: 40px 40px 0 0; }

    @media (max-width: 1100px) {
      .labs-stage { grid-template-columns: 1fr; gap: 40px; text-align: center; justify-items: center; }
      .lab-pill { text-align: left; }
      .aero-monitor-v2 { transform: rotateY(0deg); }
    }
  `]
})
export class QaSectionComponent {
  features = [
    { 
      icon: '💎', 
      title: 'Performance com Cypress', 
      desc: 'Como já domino o ecossistema JS/TS, trato a automação como uma extensão natural do desenvolvimento, criando suítes rápidas e confiáveis.' 
    },
    { 
      icon: '🛡️', 
      title: 'Cobertura Multicamada', 
      desc: 'Versatilidade técnica: aplico desde testes manuais estratégicos até Robot Framework, garantindo que nenhuma camada fique desprotegida.' 
    },
    { 
      icon: '👁️', 
      title: 'Diagnóstico Fullstack', 
      desc: 'Entendo o erro no front e a falha no back. Minha visão 360º permite identificar problemas complexos que fogem do radar convencional.' 
    }
  ];
}
