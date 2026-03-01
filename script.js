/**
 * THINKSTRA '26 - Main JavaScript
 * Features: Mobile Menu, Scroll Reveal, Event Filtering, Particles
 */

(function() {
  'use strict';

  // ========================================
  // Configuration
  // ========================================
  const CONFIG = {
    particles: {
      count: 50,
      maxCount: 80,
      connectionDistance: 100,
      mouseRadius: 120
    },
    reveal: {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  };

  // ========================================
  // Event Data (FIXED & STANDARDIZED)
  // ========================================
  const EVENTS_DATA = [
      { 
    id: 1,
    title: "Prompt Engineering",
    category: "technical",
    description: `<p><strong>Event Description:</strong> Prompt Engineering is an individual technical event conducted in a computer laboratory. This competition challenges participants to design precise and effective prompts to generate accurate, relevant, and high-quality outputs using AI tools. The event emphasizes clarity of instruction, logical structuring, creativity, and the ability to communicate effectively with AI systems. Participants must demonstrate their skill in crafting prompts that produce meaningful and optimized results.</p>
    
           <p><strong>Rules & Structure:</strong></p>
           <ul>
             <li>This is an individual participation event.</li>
             <li>Each participant will be allotted one system.</li>
             <li>Internet access will be permitted only for authorized AI tools such as ChatGPT, Gemini, or Microsoft Copilot.</li>
             <li>Access to external websites, study materials, or communication with others is strictly prohibited.</li>
             <li>The number of rounds and the competition theme will be announced on the spot by the organizers.</li>
             <li>A fixed time limit will be strictly followed.</li>
             <li>Participants will be evaluated based on:
               <ul>
                 <li>Clarity and structure of the prompt</li>
                 <li>Creativity and originality</li>
                 <li>Logical framing of instructions</li>
                 <li>Relevance and quality of AI-generated output</li>
               </ul>
             </li>
             <li>The decision of the judges will be final and binding.</li>
           </ul>
           
           <p><strong>Certification And Prizes:</strong> Certificates will be provided to all participants. Winners will receive certificates and prizes.</p>`,
        
    teamSize: "1",
    img: "pe.png",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
  },
      { 
    id: 2,
    title: "Reverse Coding",
    category: "technical",
    description: `<p><strong>Event Description:</strong> Reverse Coding is an individual technical event conducted in the computer laboratory. Each participant will be provided with a system and a question paper containing program codes. Participants are required to carefully analyze the given code, identify logical and/or syntax errors, and correct them within the specified time limit. In certain rounds, participants may also be asked to predict the output or reconstruct missing parts of the code.</p>
    
           <p><strong>Rules & Structure:</strong></p>
           <ul>
             <li>This is an individual event (team participation is not allowed).</li>
             <li>Each participant will be allotted one system.</li>
             <li>Internet access and external materials are strictly prohibited.</li>
             <li>The event will be conducted within a fixed time limit.</li>
             <li>Evaluation will be based on accuracy, logical reasoning, and completion time.</li>
             <li>The decision of the judges will be final.</li>
           </ul>

           <p><strong>Certification And Prizes:</strong> Certificates will be provided to all participants. Winners will receive certificates and prizes.</p>`,
        
    teamSize: "1",
    img: "rc.png",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
  },
    {
      id: 3,
      title: "Paper Presentation",
      category: "technical",
      description: `<p><strong>Event Description:</strong> Paper Presentation is a technical event that provides students with a platform to showcase their innovative ideas, research insights, and technical expertise in emerging domains.</p>
         
         <p><strong>Abstract Submission Guidelines:</strong></p>
         <ul>
           <li>Teams must submit an abstract before the specified deadline.</li>
           <li>The abstract should clearly include the title, objective, methodology, and expected outcome of the proposed work.</li>
           <li>Only abstracts that satisfy the selection criteria will be shortlisted.</li>
           <li>Shortlisted teams will be invited to present before a panel of judges on the event day.</li>
         </ul>
         
         <p><strong>Presentation Guidelines:</strong></p>
         <ul>
           <li>Each team will be allotted 10 minutes for presentation.</li>
           <li>An additional 2–3 minutes will be provided for the Q&A session.</li>
           <li>The presentation must contain 15–20 slides.</li>
           <li>Participants must bring a soft copy of the PPT on the day of the event (via pen drive or email).</li>
           <li>Slides should be clear, well-structured, and professionally formatted.</li>
         </ul>
         
         <p><strong>Rules & Evaluation Criteria:</strong></p>
         <ul>
           <li>Each team may consist of one or two members.</li>
           <li>The presented work must be original. Plagiarism will result in immediate disqualification.</li>
           <li>The time limit must be strictly adhered to.</li>
           <li>Evaluation will be based on:
             <ul>
               <li>Technical content</li>
               <li>Innovation and originality</li>
               <li>Clarity of explanation</li>
               <li>Presentation skills</li>
               <li>Ability to respond to judges’ questions</li>
             </ul>
           </li>
           <li>The decision of the judges will be final.</li>
         </ul>
         
         <p><strong>Suggested Domains:</strong></p>
         <ul>
           <li>Artificial Intelligence</li>
           <li>Data Science</li>
           <li>Machine Learning</li>
           <li>Cyber Security</li>
           <li>Internet of Things (IoT)</li>
           <li>Cloud Computing</li>
           <li>Emerging Technologies</li>
         </ul>
         
         <p><strong>Certification And Prizes:</strong> Certificates will be provided to all participants. Winners will receive certificates and prizes.</p>`,
      
      teamSize: "1-2",
      img: "pp.png",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`
    },
    {
      id: 4,
      title: "AI Quiz",
      category: "technical",
      description: "will be updated.",
      teamSize: "2",
      img: "aq.png",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
    },
  { 
    id: 5,
    title: "Act It Out",
    category: "nontechnical",
    description: `<p><strong>Event Description:</strong> Act It Out is a fun and engaging team-based on-stage event designed to test coordination, creativity, and quick thinking. Each team will consist of two participants. One participant will perform through actions, while the other participant must guess the correct answer within the given time limit. The performing participant will be given a topic such as a song title, movie name, famous dialogue, or personality. The participant must express the given topic using only actions and body language. Speaking, lip-syncing, mouthing words, spelling, or giving direct verbal clues is strictly prohibited. The guessing participant must correctly identify the answer within the allotted time.</p>
    
           <p><strong>Rules & Evaluation:</strong></p>
           <ul>
             <li>Each team must consist of exactly two members.</li>
             <li>One participant will act, and the other will guess.</li>
             <li>Verbal hints, lip movements, spelling, gestures indicating letters, or any form of direct clues are not allowed.</li>
             <li>Each round will have a fixed time limit.</li>
             <li>Teams will be awarded points for each correct answer.</li>
             <li>Winners will be determined based on the highest number of correct answers within the shortest time.</li>
             <li>The judges’ decision will be final.</li>
           </ul>

           <p><strong>Certification And Prizes:</strong> Certificates will be provided to all participants. Winners will receive certificates and prizes.</p>`,
    
    teamSize: "2",
    img: "aio.png",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`
  },
      { 
    id: 6,
    title: "Chess",
    category: "nontechnical",
    description: `<p><strong>Event Description:</strong> The Chess Tournament is a competitive and intellectually engaging event designed for strategic thinkers and chess enthusiasts. This tournament provides participants with an opportunity to showcase their analytical skills, concentration, and tactical expertise in a structured and fair competitive environment. Players will compete in scheduled rounds, demonstrating strategic planning, quick decision-making, and sportsmanship.</p>
    
           <p><strong>Rules & Structure:</strong></p>
           <ul>
             <li>♟️ The tournament will be conducted on Lichess.org.</li>
             <li>Open to registered participants only.</li>
             <li>Participants must have a valid Lichess account to compete.</li>
             <li>Each participant will be allotted one system for the duration of the tournament.</li>
             <li>The tournament may follow a Swiss / Arena / Knockout format, as decided by the organizers.</li>
             <li>The time control (e.g., 5+3, 10+0, 3+2) will be announced by the organizers.</li>
             <li>Fair play is mandatory; any violation of Lichess fair play policies may result in disqualification.</li>
             <li>The decision of the organizers will be final and binding.</li>
           </ul>
           
           <p><strong>Winning Criteria:</strong></p>
           <ul>
             <li>Final rankings will be determined based on the Lichess scoring system.</li>
             <li>Players will be ranked according to their overall performance.</li>
             <li>Top performer will be awarded prizes and certificates.</li>
           </ul>

           <p><strong>Certification And Prizes:</strong> Certificates will be provided to all participants. Winners will receive certificates and prizes.</p>`,
      
    teamSize: "1",
    img: "c.png",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382"/><path d="M8.5 14h7"/><path d="M9 10h6"/><path d="M12 4v2"/></svg>`
  },
    {
      id: 7,
      title: "Chase The Clues",
      category: "nontechnical",
      description: "will be updated.",
      teamSize: "2",
      img: "ctc.png",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`
    },
  { 
    id: 8,
    title: "Link-It",
    category: "nontechnical",
    description: `<p><strong>Event Description:</strong> Link It is an exciting and interactive visual puzzle game that tests participants' observation skills, logical thinking, and creativity. In this event, participants will be shown two or more images on a single slide. The challenge is to identify the one common word that connects all the given images. This is a non-technical, fun-filled activity designed to encourage quick thinking and sharp visual interpretation skills. Participants must carefully analyze the images and respond within the given time limit.</p>
    
           <p><strong>Event Format:</strong></p>
           <ul>
             <li>The competition consists of two rounds.</li>
             <li><strong>Round 1: Rapid Connect</strong>
               <ul>
                 <li>A series of image-based questions will be displayed.</li>
                 <li>Participants must raise their hands to answer.</li>
                 <li>The first participant will be given a chance to respond.</li>
                 <li>Each correct answer earns points.</li>
                 <li>Based on the scores, selected participants will advance to Round 2.</li>
               </ul>
             </li>
             <li><strong>Round 2: Challenge Connect</strong>
               <ul>
                 <li>Each shortlisted participant will be asked questions individually.</li>
                 <li>If a participant gives the correct answer, points will be awarded.</li>
                 <li>If they do not know the answer, they may pass.</li>
                 <li>If they attempt and give a wrong answer, -1 mark will be deducted.</li>
                 <li>Other participants may challenge the question:
                   <ul>
                     <li>If the challenger answers correctly, they earn points.</li>
                     <li>If the challenger answers incorrectly, -2 marks will be deducted.</li>
                   </ul>
                 </li>
               </ul>
             </li>
           </ul>
           
           <p><strong>Rules & Evaluation:</strong></p>
           <ul>
             <li>The event must be played individually.</li>
             <li>Participants must identify the correct linking word between the images.</li>
             <li>Negative marking will be applied for incorrect answers.</li>
             <li>No electronic devices or external assistance are allowed.</li>
             <li>Winners will be decided based on the highest total score.</li>
             <li>The judges' decision will be final.</li>
           </ul>

           <p><strong>Certification And Prizes:</strong> Certificates will be provided to all participants. Winners will receive certificates and prizes.</p>`,
    
    teamSize: "1",
    img: "li.png",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`
  }
  ];

  // ========================================
  // DOM Elements
  // ========================================
  const elements = {
    menuToggle: document.getElementById('menuToggle'),
    mainNav: document.getElementById('mainNav'),
    mobileOverlay: document.getElementById('mobileOverlay'),
    eventsGrid: document.getElementById('eventsGrid'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    particleCanvas: document.getElementById('particle-canvas'),
    navLinks: document.querySelectorAll('.nav-link'),
    revealElements: document.querySelectorAll('.animate-reveal')
  };

  // ========================================
  // Mobile Navigation
  // ========================================
  function initMobileNav() {
    const { menuToggle, mainNav, mobileOverlay } = elements;
    if (!menuToggle || !mainNav) return;

    function toggleMenu() {
      const isOpen = menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
      mobileOverlay?.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    function closeMenu() {
      menuToggle.classList.remove('active');
      mainNav.classList.remove('active');
      mobileOverlay?.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    menuToggle.addEventListener('click', toggleMenu);
    mobileOverlay?.addEventListener('click', closeMenu);

    // Close on link click
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // ========================================
  // Event Rendering & Filtering
  // ========================================
  function initEvents() {
    renderEvents('all');

    elements.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active state
        elements.filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Filter events
        renderEvents(btn.dataset.filter);
      });
    });
  }

  function renderEvents(filter) {
    const filtered = filter === 'all' 
      ? EVENTS_DATA 
      : EVENTS_DATA.filter(e => e.category === filter);

    // UPDATED: HTML structure matches the CSS with Image Box
    elements.eventsGrid.innerHTML = filtered.map((event, index) => `
      <article class="event-card animate-reveal delay-${(index % 4) + 1}" data-category="${event.category}">
        
        <div class="event-img-box">
           <img src="${event.img}" alt="${event.title}">
        </div>
        
        <div class="event-content">
            <h3 class="event-title">${event.title}</h3>
            <div class="event-desc">${event.description}</div>
            
            <div class="event-meta">
              <span class="event-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                </svg>
                ${event.teamSize} Member${event.teamSize !== '1' ? 's' : ''}
              </span>
              <span class="event-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                ${event.category === 'technical' ? 'Technical' : 'Non-Technical'}
              </span>
            </div>
        </div>
        
      </article>
    `).join('');

    // Re-init reveal for new elements
    initScrollReveal();
  }

  // ========================================
  // Scroll Reveal Animation
  // ========================================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.animate-reveal:not(.revealed)');
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, CONFIG.reveal);

      revealElements.forEach(el => observer.observe(el));
    } else {
      // Fallback for older browsers
      revealElements.forEach(el => el.classList.add('revealed'));
    }
  }

  // ========================================
  // Active Nav Link
  // ========================================
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          elements.navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-70px 0px 0px 0px' });

    sections.forEach(section => observer.observe(section));
  }

  // ========================================
  // Particle System
  // ========================================
  function initParticles() {
    const canvas = elements.particleCanvas;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Disable particles on mobile or reduced motion
    if (prefersReducedMotion || isMobile) {
      canvas.style.display = 'none';
      return;
    }

    let particles = [];
    let mouse = { x: null, y: null };
    let animationId = null;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticleArray();
    }

    function initParticleArray() {
      particles = [];
      const count = Math.min(
        CONFIG.particles.maxCount,
        Math.floor((canvas.width * canvas.height) / 20000)
      );

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.2
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < CONFIG.particles.mouseRadius) {
            const force = (CONFIG.particles.mouseRadius - dist) / CONFIG.particles.mouseRadius;
            p.x -= dx * force * 0.02;
            p.y -= dy * force * 0.02;
          }
        }

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 199, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.particles.connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 229, 199, ${0.08 * (1 - dist / CONFIG.particles.connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    }

    // Event listeners
    window.addEventListener('resize', () => {
      resize();
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Initialize
    resize();
    animate();

    // Cleanup on page hide
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && animationId) {
        cancelAnimationFrame(animationId);
      } else if (!document.hidden) {
        animate();
      }
    });
  }

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ========================================
  // Initialize Everything
  // ========================================
  function init() {
    initMobileNav();
    initEvents();
    initScrollReveal();
    initActiveNav();
    initParticles();
    initSmoothScroll();

    // Remove loading state if any
    document.body.classList.add('loaded');
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
