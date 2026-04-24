import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero-aero">
      <!-- Atmospheric Decor Only -->
      <div class="bubbles-container">
        <div class="aero-bubble b-1"></div>
        <div class="aero-bubble b-2"></div>
        <div class="aero-bubble b-3"></div>
        <div class="aero-item fish">🐠</div>
        <div class="aero-item butterfly">🦋</div>
      </div>
      
      <div class="container hero-content">
        <div class="aero-badge fade-in-entry">
          <span></span> Disponível para oportunidades
        </div>
        
        <h1 class="hero-title fade-in-entry">
          joão<span>Murilo</span>
        </h1>
        
        <h2 class="hero-subtitle fade-in-entry">
          Analista de QA | Automação | Full-Stack 🫧
        </h2>
        
        <p class="hero-desc fade-in-entry">
          Desenvolvedor Full-Stack focado em Qualidade. Transformando linhas de código em software resiliente e confiável através de automação estratégica. 🌊
        </p>
        
        <div class="hero-actions fade-in-entry">
          <a href="#projects" class="btn-glass-aero primary">
            <span class="gloss"></span>
            Ver Projetos 💎
          </a>
          <a href="#contact" class="btn-glass-aero secondary">
            <span class="gloss"></span>
            Contato ✉️
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-aero {
      height: 100vh; width: 100%; display: flex; align-items: center; position: relative;
      background: transparent;
    }
    
    .bubbles-container { position: absolute; width: 100%; height: 100%; top: 0; left: 0; pointer-events: none; }
    .aero-bubble { position: absolute; border-radius: 50%; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 40%, rgba(34,211,238,0.2) 100%); border: 1px solid rgba(255,255,255,0.3); box-shadow: inset -5px -5px 15px rgba(0,0,0,0.1); backdrop-filter: blur(2px); }
    .b-1 { width: 180px; height: 180px; top: 15%; right: 15%; animation: floatAero 12s infinite ease-in-out; }
    .b-2 { width: 100px; height: 100px; top: 60%; left: 10%; animation: floatAero 8s infinite ease-in-out reverse; }
    .b-3 { width: 60px; height: 60px; top: 25%; left: 20%; animation: floatAero 10s infinite ease-in-out 1s; opacity: 0.7; }
    
    .aero-item { position: absolute; font-size: 2.5rem; opacity: 0.6; filter: drop-shadow(0 0 10px rgba(255,255,255,0.4)); animation: browseItem 20s infinite linear; }
    .fish { top: 40%; right: -100px; }
    .butterfly { top: 15%; left: -100px; animation-duration: 25s; }
    
    @keyframes floatAero { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(20px, -30px) scale(1.05); } 66% { transform: translate(-20px, 20px) scale(0.95); } }
    @keyframes browseItem { 0% { left: -150px; transform: scaleX(1); } 50% { left: 100%; transform: scaleX(1); } 51% { transform: scaleX(-1); } 100% { left: -150px; transform: scaleX(-1); } }
    
    .hero-content { position: relative; z-index: 10; text-align: left; }
    .aero-badge { display: inline-flex; align-items: center; gap: 10px; padding: 10px 20px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); border-radius: 50px; color: #fff; font-size: 0.85rem; font-weight: 700; margin-bottom: 40px; backdrop-filter: blur(15px); }
    .aero-badge span { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 10px #22c55e; }
    
    .hero-title { font-size: clamp(3.5rem, 12vw, 6rem); font-weight: 900; letter-spacing: -4px; margin-bottom: 15px; color: #fff; line-height: 0.9; text-shadow: 0 5px 25px rgba(0,0,0,0.15); }
    .hero-title span { color: #fff; background: linear-gradient(to bottom, #fff, #bfdbfe); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    
    .hero-subtitle { font-size: clamp(1.3rem, 3vw, 2.2rem); font-weight: 600; color: #fff; margin-bottom: 35px; text-shadow: 0 2px 10px rgba(0,0,0,0.2); }
    .hero-desc { max-width: 650px; font-size: 1.2rem; color: #fff; margin-bottom: 50px; line-height: 1.8; text-shadow: 0 1px 3px rgba(0,0,0,0.2); opacity: 0.95; }
    
    .hero-actions { display: flex; gap: 20px; }
    .btn-glass-aero { position: relative; padding: 16px 45px; border-radius: 15px; font-size: 1.1rem; font-weight: 800; text-decoration: none; display: inline-block; cursor: pointer; transition: all 0.4s ease; backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.5); overflow: hidden; text-align: center; color: #fff; }
    .btn-glass-aero.primary { background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%); box-shadow: 0 10px 30px rgba(0,0,0,0.1), inset 0 0 10px rgba(255,255,255,0.3); }
    .btn-glass-aero.secondary { background: rgba(255, 255, 255, 0.05); border-color: rgba(255,255,255,0.2); }
    .gloss { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%); pointer-events: none; }
    .btn-glass-aero:hover { transform: translateY(-5px) scale(1.05); border-color: #fff; box-shadow: 0 20px 50px rgba(255,255,255,0.2); }
  `]
})
export class HeroComponent {}
