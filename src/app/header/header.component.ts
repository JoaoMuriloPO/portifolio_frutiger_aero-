import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class.scrolled]="isScrolled">
      <nav class="container">
        <a href="#hero" class="logo">
          <div class="aero-orb"></div>
          codingBy<span>Joao</span> <span class="emoji">🫧</span>
        </a>
        <ul class="nav-links">
          <li><a href="#about">Sobre 🍃</a></li>
          <li><a href="#skills">Habilidades 🌐</a></li>
          <li><a href="#projects">Projetos 💎</a></li>
          <li><a href="#qa">QA 🌊</a></li>
          <li><a href="#contact">Contato ✉️</a></li>
        </ul>
      </nav>
      <div class="header-gloss"></div>
    </header>
  `,
  styles: [`
    header {
      position: fixed; top: 0; width: 100%; z-index: 1000;
      padding: 30px 0; transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(8px);
    }
    header.scrolled {
      padding: 12px 0;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(25px) saturate(1.8);
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 10px 40px rgba(0,0,0,0.15), inset 0 0 20px rgba(255,255,255,0.2);
    }
    .header-gloss {
      position: absolute; top: 0; width: 100%; height: 100%;
      background: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent 50%);
      pointer-events: none;
    }
    nav { display: flex; justify-content: space-between; align-items: center; }
    .logo {
      font-size: 1.45rem; font-weight: 900; color: #fff;
      display: flex; align-items: center; gap: 10px;
      letter-spacing: -1.5px; text-decoration: none;
      transition: all 0.3s ease;
      text-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
    .logo span { color: #fff; opacity: 0.8; }
    .logo:hover { transform: scale(1.05); filter: brightness(1.1); }
    .emoji { font-size: 1.3rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.5)); }
    .aero-orb {
      width: 24px; height: 24px;
      background: radial-gradient(circle at 30% 30%, #fff, #3b82f6);
      border-radius: 50%; border: 1px solid rgba(255,255,255,0.6);
      box-shadow: 0 0 25px rgba(59, 130, 246, 0.5);
    }
    .nav-links { display: flex; gap: 35px; }
    .nav-links a {
      font-size: 0.9rem; font-weight: 800; color: #fff;
      text-decoration: none; transition: all 0.3s ease;
      text-shadow: 0 2px 10px rgba(0,0,0,0.2);
      display: flex; align-items: center; gap: 6px;
      opacity: 0.85;
    }
    .nav-links li { position: relative; }
    .nav-links a:hover {
      opacity: 1; transform: translateY(-3px);
      text-shadow: 0 0 20px rgba(255,255,255,0.6);
    }
    ul { list-style: none; }
    @media (max-width: 992px) { .nav-links { display: none; } }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() { this.isScrolled = window.scrollY > 50; }
}
