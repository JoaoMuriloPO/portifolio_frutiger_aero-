import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact-aero-viewport">
      
      <div class="container contact-stage">
        
        <!-- MASTER GLASS BOX (DNA das Habilidades) -->
        <div class="master-glass-box aero-panel shadow-deep">
           
           <!-- HEADER DECORATION -->
           <div class="master-header">
              <div class="h-text">
                 <span class="h-label">HUB DE CONEXÃO</span>
                 <h2 class="h-title">Vamos Conversar?</h2>
              </div>
              <div class="h-icon-diamond">💎</div>
           </div>

           <div class="master-content-grid">
              
              <!-- ESQUERDA: PERFIL E REDES -->
              <div class="master-left">
                 
                 <!-- Perfil Simplificado -->
                 <div class="nested-glass-card profile-card-clean">
                    <div class="u-photo-circle">
                       <img src="images/profile.png" alt="João Murilo" onerror="this.src='https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=800'">
                    </div>
                    <div class="u-meta">
                       <h3>João Murilo</h3>
                       <div class="u-badge">QA ANALYST & DEV</div>
                       <p class="u-status">🟢 Online • Disponível</p>
                    </div>
                 </div>

                 <!-- Conexões em Retângulos -->
                 <div class="nested-glass-card connections-column">
                    <span class="c-label">CONEXÃO DIRETA</span>
                    <div class="social-list">
                       <a href="https://linkedin.com/in/joaomurilopoo" target="_blank" class="s-rect-link">
                          <span class="s-emoji">📘</span>
                          <span class="s-text">Meu LinkedIn</span>
                       </a>
                       <a href="https://github.com/JoaoMuriloPO" target="_blank" class="s-rect-link">
                          <span class="s-emoji">💎</span>
                          <span class="s-text">Github Repo</span>
                       </a>
                       <a (click)="openWhatsApp()" class="s-rect-link wa-link">
                          <span class="s-emoji">📱</span>
                          <span class="s-text">WhatsApp</span>
                       </a>
                    </div>
                 </div>

              </div>

              <!-- DIREITA: TERMINAL DE E-MAIL (Alinhado Verticalmente) -->
              <div class="master-right">
                 <div class="nested-glass-card terminal-card-stretched">
                    <div class="t-inner-layout">
                       <div class="t-header-area">
                          <div class="t-header">
                             <span class="t-pill">PROPOSTA PROFISSIONAL</span>
                             <div class="t-controls"><span></span><span></span><span></span></div>
                          </div>
                          
                          <div class="t-form-inputs">
                             <div class="f-input-group">
                                <label>Nome:</label>
                                <input type="text" [(ngModel)]="senderName" placeholder="digite seu nome" class="f-field">
                             </div>
                             <div class="f-input-group">
                                <label>Assunto:</label>
                                <input type="text" [(ngModel)]="subject" placeholder="digite o assunto" class="f-field">
                             </div>
                          </div>
                       </div>

                       <div class="f-textarea-expand">
                          <textarea [(ngModel)]="message" placeholder="Olá João, gostaria de conversar sobre uma oportunidade..."></textarea>
                       </div>

                       <div class="t-action-footer">
                          <button class="aero-send-btn-crystal" (click)="sendEmail()">
                             <span>ENVIAR PROPOSTA</span>
                             <div class="btn-glint"></div>
                          </button>
                       </div>
                    </div>
                 </div>
              </div>

           </div>

           <!-- REFLEXOS DE VIDRO -->
           <div class="master-gloss-layer"></div>
           <div class="corner-glow-br"></div>
        </div>

      </div>

    </section>
  `,
  styles: [`
    .contact-aero-viewport { 
      min-height: 100vh; width: 100%; display: flex; align-items: center; justify-content: center;
      position: relative; padding: 100px 0; background: transparent;
    }

    .contact-stage { width: 95%; max-width: 1200px; z-index: 10; }

    /* MASTER BOX */
    .master-glass-box {
      width: 100%; border-radius: 60px;
      background: rgba(15, 23, 42, 0.45);
      backdrop-filter: blur(45px) saturate(2);
      border: 2px solid rgba(255, 255, 255, 0.2);
      padding: 50px 60px; position: relative; overflow: hidden;
      box-shadow: 0 40px 100px rgba(0,0,0,0.5);
    }

    .master-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; }
    .h-label { color: #22D3EE; font-size: 0.7rem; font-weight: 900; letter-spacing: 3px; }
    .h-title { color: #fff; font-size: 3.5rem; font-weight: 950; letter-spacing: -2px; margin-top: 5px; }
    .h-icon-diamond { font-size: 2.5rem; filter: drop-shadow(0 0 15px rgba(34, 211, 238, 0.4)); }

    /* GRID COM ALINHAMENTO STRETCH */
    .master-content-grid { 
      display: grid; 
      grid-template-columns: 380px 1fr; 
      gap: 30px;
      align-items: stretch; /* Essencial para alinhar as alturas */
    }

    /* CARDS ANINHADOS */
    .nested-glass-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(15px);
      border-radius: 35px; border: 1px solid rgba(255, 255, 255, 0.12);
      padding: 30px; transition: 0.4s;
    }

    .master-left { display: flex; flex-direction: column; gap: 25px; }

    /* ESQUERDA CARD PROFILE */
    .profile-card-clean { display: flex; align-items: center; gap: 20px; }
    .u-photo-circle { 
       width: 100px; height: 100px; border-radius: 50%; overflow: hidden;
       border: 3px solid #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.3);
       background: #fff; flex-shrink: 0;
    }
    .u-photo-circle img { width: 100%; height: 100%; object-fit: cover; }
    .u-meta h3 { color: #fff; font-size: 1.5rem; font-weight: 900; margin-bottom: 5px; }
    .u-badge { display: inline-block; padding: 4px 12px; background: rgba(34, 211, 238, 0.15); color: #22D3EE; font-size: 0.65rem; font-weight: 900; border-radius: 50px; margin-bottom: 5px; }
    .u-status { color: rgba(255,255,255,0.5); font-size: 0.75rem; font-weight: 800; }

    /* ESQUERDA CARD CONNECTIONS */
    .connections-column { flex-grow: 1; display: flex; flex-direction: column; justify-content: center; gap: 15px; }
    .c-label { color: #22D3EE; font-size: 0.7rem; font-weight: 900; letter-spacing: 2px; text-align: center; margin-bottom: 10px; }
    .social-list { display: flex; flex-direction: column; gap: 10px; }
    .s-rect-link { 
       display: flex; align-items: center; gap: 15px; padding: 14px 20px; border-radius: 18px;
       background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
       text-decoration: none; transition: 0.3s; cursor: pointer;
    }
    .s-rect-link:hover { transform: translateX(10px); background: rgba(255,255,255,0.12); border-color: #22D3EE; }
    .s-emoji { font-size: 1.2rem; }
    .s-text { color: #fff; font-weight: 800; font-size: 0.9rem; }

    /* DIREITA TERMINAL CARD (STRETCHED) */
    .terminal-card-stretched { 
       height: 100%; /* Garante que o card ocupe a altura toda do grid */
       background: rgba(0,0,0,0.3); 
       display: flex;
       flex-direction: column;
       padding: 0; /* Padding será gerenciado internamente */
       overflow: hidden;
    }

    .t-inner-layout { 
       display: flex; 
       flex-direction: column; 
       height: 100%; 
       padding: 35px;
    }

    .t-header-area { margin-bottom: 20px; }
    .t-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
    .t-pill { padding: 6px 15px; background: rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 0.7rem; font-weight: 800; border-left: 3px solid #22D3EE; }
    .t-controls { display: flex; gap: 8px; }
    .t-controls span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.2); }

    .t-form-inputs { display: flex; flex-direction: column; gap: 15px; }
    .f-input-group { display: flex; align-items: center; gap: 15px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px; }
    .f-input-group label { width: 70px; color: #22D3EE; font-size: 0.8rem; font-weight: 900; }
    .f-field { background: transparent; border: none; color: #fff; font-size: 1.05rem; width: 100%; outline: none; }

    /* ESTE É O SEGREDO DO ALINHAMENTO: expansão vertical */
    .f-textarea-expand { flex-grow: 1; min-height: 200px; margin: 15px 0; }
    .f-textarea-expand textarea { 
       width: 100%; height: 100%; background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.05);
       border-radius: 20px; padding: 25px; color: #fff; font-size: 1.1rem; outline: none; resize: none;
    }

    .t-action-footer { margin-top: 10px; display: flex; justify-content: center; }

    /* BOTÃO CRYSTAL */
    .aero-send-btn-crystal {
      padding: 18px 80px; border-radius: 50px; border: 1px solid rgba(255,255,255,0.4);
      background: linear-gradient(135deg, rgba(34, 211, 238, 0.25), rgba(59, 130, 246, 0.35));
      backdrop-filter: blur(20px); color: #fff; font-weight: 950; font-size: 1rem; letter-spacing: 2px;
      cursor: pointer; position: relative; overflow: hidden; transition: 0.4s;
      width: 90%; max-width: 550px; box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    }
    .aero-send-btn-crystal:hover { transform: scale(1.02) translateY(-5px); border-color: #fff; box-shadow: 0 25px 60px rgba(34, 211, 238, 0.4); }
    .btn-glint { position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: 0.8s; }
    .aero-send-btn-crystal:hover .btn-glint { left: 100%; }

    .master-gloss-layer { position: absolute; top: 0; left: 0; width: 100%; height: 160px; background: linear-gradient(to bottom, rgba(255,255,255,0.15), transparent); pointer-events: none; }
    .corner-glow-br { position: absolute; bottom: -60px; right: -60px; width: 220px; height: 220px; background: radial-gradient(circle, rgba(34, 211, 238, 0.25), transparent); border-radius: 50%; filter: blur(40px); }

    @media (max-width: 1100px) {
       .master-content-grid { grid-template-columns: 1fr; }
       .f-textarea-expand { min-height: 300px; }
    }
  `]
})
export class ContactComponent {
  senderName = '';
  subject = '';
  message = '';

  sendEmail() {
    const email = 'j.murilo.mobile@gmail.com';
    const mailSubject = encodeURIComponent(this.subject || 'Contato via Portfólio');
    const mailBody = encodeURIComponent(
      `Olá João,\n\nMeu nome é ${this.senderName}.\n\n${this.message}\n\nAtenciosamente.`
    );
    
    window.location.href = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;
  }

  openWhatsApp() {
    const phone = '5521985405690'; 
    const text = encodeURIComponent('Olá João Murilo! Vi seu portfólio e gostaria de conversar sobre uma oportunidade profissional.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  }
}
