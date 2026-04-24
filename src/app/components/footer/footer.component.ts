import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-grass-blur"></div>
      <div class="container footer-flex">
        <div class="logo">codingBy<span>Joao</span> <span class="emoji">🫧</span></div>
        <div class="copyright">
          <p>&copy; 2026. Desenvolvido com Estética <span class="aero-heart">Aero Glass</span>.</p>
          <div class="footer-stats">Aero 2.0 Interface • High Fidelity UX</div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { 
      padding: 100px 0; 
      position: relative; 
      background: linear-gradient(to bottom, transparent, rgba(74, 222, 128, 0.1));
      overflow: hidden;
    }
    .footer-grass-blur {
      position: absolute; bottom: -50px; width: 100%; height: 100px;
      background: #4ade80; filter: blur(80px); opacity: 0.3;
    }
    .footer-flex { 
      display: flex; justify-content: space-between; align-items: center; 
      position: relative; z-index: 10;
    }
    .logo { 
      font-size: 1.4rem; font-weight: 900; color: #fff; 
      letter-spacing: -1px;
    }
    .logo span { color: #fff; opacity: 0.7; }
    .emoji { font-size: 1.2rem; filter: drop-shadow(0 0 5px #fff); }
    
    .copyright { text-align: right; }
    p { color: #fff; font-size: 0.95rem; font-weight: 700; margin-bottom: 5px; opacity: 0.9; }
    .footer-stats { font-size: 0.75rem; color: #fff; opacity: 0.6; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
    
    .aero-heart { color: #fff; text-shadow: 0 0 10px rgba(255,255,255,0.8); font-weight: 900; }
    
    @media (max-width: 768px) { .footer-flex { flex-direction: column; gap: 40px; text-align: center; } .copyright { text-align: center; } }
  `]
})
export class FooterComponent {}
