import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evolution',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="evolution" class="section bg-alt">
      <div class="container text-center">
        <h2 class="section-title center">🔄 Evolução Técnica</h2>
        <p class="subtitle">Atualmente em processo de evolução técnica com foco em Angular</p>
        
        <div class="evolution-grid">
          <div class="evo-card" *ngFor="let item of evolutionItems">
            <h3 class="evo-header">{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
        
        <div class="evo-footer">
          <p><em>Background sólido em React, facilitando adaptação e entendimento de diferentes ecossistemas.</em></p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .subtitle {
      color: #A1A1AA;
      margin-bottom: 50px;
    }
    .evolution-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
      margin-top: 40px;
    }
    .evo-card {
      background: rgba(255, 255, 255, 0.03);
      padding: 32px;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.3s ease;
      text-align: left;
    }
    .evo-card:hover {
      border-color: #22C55E;
      transform: translateY(-5px);
    }
    .evo-header {
      color: #22C55E;
      margin-bottom: 12px;
      font-size: 1.2rem;
    }
    .evo-footer {
      margin-top: 50px;
      color: #A1A1AA;
      font-size: 0.9rem;
    }
  `]
})
export class EvolutionComponent {
  evolutionItems = [
    { title: 'Componentização', description: 'Criação de interfaces modulares e reutilizáveis.' },
    { title: 'Arquitetura Modular', description: 'Estruturação de projetos escaláveis e organizados.' },
    { title: 'Integração com APIs', description: 'Comunicação eficiente entre o frontend e serviços backend.' },
    { title: 'Testes Automatizados', description: 'Garantia de qualidade desde a camada de interface.' }
  ];
}
