import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import accessLogo from "../assets/access logo.png";
import andreaneKaniaru from "../assets/andreane-kaniaru.png";
import darrenFadhili from "../assets/fadhili-darren.png";
import flashlightLogo from "../assets/flashlight-logo.png";
import isaacMaloba from "../assets/isaac-maloba.png";
import jacksonKagema from "../assets/jackson-kagema.jpeg";
import jamesGichaga from "../assets/james-gichaga.png";
import mwanacheckLogo from "../assets/mwanacheck logo.png";
import nextechLogo from "../assets/nextech logo.png";
import victorManee from "../assets/victor-manee.jpeg";
import victorManeeProfile from "../assets/victor-manee-profile.png";
import victorManeeMobileProfile from "../assets/victormanee-profile-mobile.png";
import andreaneKaniaruProfile from "../assets/andreane-kaniaru-profile.png";
import andreaneKaniaruMobileProfile from "../assets/andreanekaniaru-profile-mobile.png";
import darrenFadhiliProfile from "../assets/darren-fadhili-profile.png";
import darrenFadhiliMobileProfile from "../assets/darrenfadhili-profile-mobile.png";
import isaacMalobaProfile from "../assets/isaac-maloba-profile.png";
import isaacMalobaMobileProfile from "../assets/isaacmaloba-profile-mobile.png";
import jacksonKagemaProfile from "../assets/jackson-kagema-profile.png";
import jacksonKagemaMobileProfile from "../assets/jacksonkagema-profile-mobile.png";
import jamesGichagaProfile from "../assets/james-gichaga-profile.png";
import jamesGichagaMobileProfile from "../assets/jamesgichaga-profile-mobile.png";
import {
  ArrowUpRight, ChevronDown, Code2, Cpu, Globe2, Layers3,
  Menu, Network, Play, Sparkles, X, Zap
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const whatsappUrl = "https://wa.me/254716802450?text=hi%20NexTech%20founder%2C%20I%27m%20interested%20in%20joining%20you";

const projects = [
  {
    id: "access",
    number: "01",
    name: "ACCESS",
    logo: accessLogo,
    url: "https://access-career.vercel.app",
    type: "Education / Career",
    description:
      "A student-built career platform designed around the Kenyan education journey — with career discovery, KUCCPS-style cluster-point calculation, ACCESS AI and access to mentors.",
    tags: ["Career discovery", "ACCESS AI", "Mentors"],
    accent: "violet"
  },
  {
    id: "mwanacheck",
    number: "02",
    name: "MwanaCheck",
    logo: mwanacheckLogo,
    url: "https://mwanacheck.lovable.app",
    type: "EdTech / School Intelligence",
    description:
      "A school ecosystem concept built around one problem: disconnection. It brings academics, co-curricular activity, behaviour, finances and parent-school communication into one experience.",
    tags: ["Schools", "Parent alerts", "Student life"],
    accent: "cyan"
  },
  {
    id: "sauti",
    number: "03",
    name: "Sauti Kenya",
    type: "Civic / Community",
    description:
      "A NexTech venture focused on giving a voice to Kenyan communities and turning lived experiences into useful digital interaction.",
    tags: ["Community", "Civic tech", "Voice"],
    accent: "orange"
  },
  {
    id: "egold",
    number: "04",
    name: "eGold",
    type: "Digital venture",
    description:
      "A NexTech venture associated with Isaac Maloba and the wider ecosystem of builders experimenting with technology, products and digital opportunity.",
    tags: ["Venture", "Digital", "Product"],
    accent: "gold"
  },
  {
    id: "flashlight",
    number: "05",
    name: "Flashlight Live Events",
    logo: flashlightLogo,
    url: "https://flashlight-services.vercel.app",
    type: "Events / Business Tech",
    description:
      "A real-world business being pushed forward with better digital presence, branding and customer experience — from ceremonies and equipment hire to media coverage.",
    tags: ["Branding", "Events", "Business"],
    accent: "green"
  }
];

const people = [
  ["DF", "Darren Fadhili", "Core / ACCESS", darrenFadhili, "https://darrenfadhili.bolt.host", darrenFadhiliProfile],
  ["VM", "Victor Manee", "Core / MwanaCheck", victorManee, "https://victormanee.vercel.app", victorManeeProfile],
  ["IM", "Isaac Maloba", "Founder / eGold", isaacMaloba, null, isaacMalobaProfile],
  ["AK", "Andreane Kaniaru", "Core", andreaneKaniaru, null, andreaneKaniaruProfile],
  ["JG", "James Gichaga", "Core", jamesGichaga, null, jamesGichagaProfile],
  ["JK", "Jackson Kagema", "Core / Sauti Kenya", jacksonKagema, null, jacksonKagemaProfile]
];

const founderDetails = {
  "Darren Fadhili": "A core NexTech builder helping shape ACCESS and turn education and career ideas into useful digital products.",
  "Victor Manee": "A core NexTech builder focused on MwanaCheck and the systems that help schools, students and families stay connected.",
  "Isaac Maloba": "The founder behind eGold, exploring digital ventures and new opportunities across the NexTech ecosystem.",
  "Andreane Kaniaru": "A core NexTech contributor bringing thoughtful execution and collaboration to the team and its ventures.",
  "James Gichaga": "A core NexTech builder contributing skills, energy and practical thinking across the collective.",
  "Jackson Kagema": "A core NexTech builder helping develop Sauti Kenya and the collective's community-focused work."
};

function SectionTitle({ eyebrow, title, body }) {
  return (
    <div className="section-title reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

function App() {
  const root = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [mobileCubeIndex, setMobileCubeIndex] = useState(0);
  const [projectRotation, setProjectRotation] = useState(0);
  const [activePerson, setActivePerson] = useState(null);
  const [personClosing, setPersonClosing] = useState(false);
  const [projectDragStart, setProjectDragStart] = useState(null);
  const projectRotationRef = useRef({ current: 0 });
  const projectTween = useRef(null);
  const lastProjectInput = useRef(0);
  const mobileCubeDrag = useRef(null);
  const suppressMobileCubeClick = useRef(false);

  const mobileCubeFaces = [
    { key: "front", project: projects[0] },
    { key: "right", project: projects[1] },
    { key: "left", project: projects[2] },
    { key: "top", project: projects[3] },
    { key: "back", project: projects[4] },
    { key: "bottom", project: null }
  ];

  useGSAP(() => {
    const q = gsap.utils.selector(root);

    gsap.set(q(".hero-line"), { y: 90, opacity: 0 });
    gsap.set(q(".hero-kicker, .hero-copy, .hero-actions"), { y: 30, opacity: 0 });
    gsap.set(q(".hero-orb"), { scale: 0.6, opacity: 0 });

    const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
    intro
      .to(q(".hero-orb"), { scale: 1, opacity: 1, duration: 1.5 })
      .to(q(".hero-kicker"), { y: 0, opacity: 1, duration: .7 }, "-=1")
      .to(q(".hero-line"), { y: 0, opacity: 1, duration: 1.0, stagger: .12 }, "-=.45")
      .to(q(".hero-copy"), { y: 0, opacity: 1, duration: .8 }, "-=.55")
      .to(q(".hero-actions"), { y: 0, opacity: 1, duration: .7 }, "-=.5");

    gsap.to(q(".hero-orb"), {
      y: 45, x: 18, rotation: 8, duration: 5, ease: "sine.inOut", repeat: -1, yoyo: true
    });

    gsap.to(q(".marquee-track"), {
      xPercent: -50, duration: 22, ease: "none", repeat: -1
    });

    q(".reveal").forEach((el) => {
      gsap.fromTo(el, { y: 55, opacity: 0 }, {
        y: 0, opacity: 1, duration: .9, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 84%" }
      });
    });

    gsap.to(q(".signal-dot"), {
      scale: 1.8, opacity: .15, duration: 1.5, stagger: .25,
      repeat: -1, yoyo: true, ease: "sine.inOut"
    });

    gsap.to(q(".brand-logo"), {
      rotationZ: 360,
      transformOrigin: "50% 50%",
      ease: "none",
      scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 1 }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, { scope: root });

  useEffect(() => () => projectTween.current?.kill(), []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openPerson = (person) => {
    setPersonClosing(false);
    setActivePerson(person);
  };

  const closePerson = () => {
    if (!activePerson || personClosing) return;
    setPersonClosing(true);
  };

  const rotateProjects = (direction) => {
    const now = performance.now();
    if (now - lastProjectInput.current < 720) return;
    lastProjectInput.current = now;

    const target = projectRotationRef.current.current + direction;
    projectTween.current?.kill();
    projectTween.current = gsap.to(projectRotationRef.current, {
      current: target,
      duration: 1.9,
      ease: "power3.inOut",
      overwrite: true,
      onUpdate: () => {
        const position = projectRotationRef.current.current;
        setProjectRotation(position);
        setActiveProjectIndex(((Math.round(position) % projects.length) + projects.length) % projects.length);
      }
    });
  };

  const getProjectPosition = (index) => {
    const directPosition = index - projectRotation;
    const halfway = projects.length / 2;
    return ((((directPosition + halfway) % projects.length) + projects.length) % projects.length) - halfway;
  };

  const selectProject = (projectId) => {
    const projectIndex = projects.findIndex(({ id }) => id === projectId);
    if (projectIndex < 0) return;
    const project = projects[projectIndex];
    const currentIndex = ((Math.round(projectRotationRef.current.current) % projects.length) + projects.length) % projects.length;
    let distance = projectIndex - currentIndex;
    if (distance > projects.length / 2) distance -= projects.length;
    if (distance < -projects.length / 2) distance += projects.length;
    lastProjectInput.current = performance.now();
    projectTween.current?.kill();
    projectTween.current = gsap.to(projectRotationRef.current, {
      current: projectRotationRef.current.current + distance,
      duration: 1.9,
      ease: "power3.inOut",
      onUpdate: () => {
        const position = projectRotationRef.current.current;
        setProjectRotation(position);
        setActiveProjectIndex(((Math.round(position) % projects.length) + projects.length) % projects.length);
      }
    });
    setActiveProject(project);
  };

  const rotateMobileCube = (direction) => {
    setMobileCubeIndex((current) => (current + direction + projects.length) % projects.length);
  };

  const mobileCubeTransform = [
    "rotateX(-15deg) rotateY(-25deg)",
    "rotateX(-15deg) rotateY(-115deg)",
    "rotateX(-15deg) rotateY(65deg)",
    "rotateX(-105deg) rotateY(-25deg)",
    "rotateX(-15deg) rotateY(155deg)"
  ][mobileCubeIndex];

  return (
    <main ref={root}>
      <header className="nav">
        <button className="brand" onClick={() => scrollTo("top")} aria-label="NexTech home">
          <img className="brand-logo" src={nextechLogo} alt="NexTech" />
          <span className="brand-name">Nex<span>Tech</span></span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["about", "About"],
            ["ventures", "Ventures"],
            ["people", "People"],
            ["collab", "Collaboration"]
          ].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
          <button className="nav-cta" onClick={() => window.location.href = whatsappUrl}>Start a conversation <ArrowUpRight size={16}/></button>
        </nav>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X/> : <Menu/>}
        </button>
      </header>

      <section id="top" className="hero">
        <div className="hero-grid"></div>
        <div className="hero-orb"></div>
        <div className="signal signal-1"><i className="signal-dot"></i></div>
        <div className="signal signal-2"><i className="signal-dot"></i></div>

        <div className="hero-content">
          <div className="hero-kicker"><span></span> Independent builders · Kenya · 2026</div>
          <h1>
            <span className="hero-line">WE DON'T JUST</span>
            <span className="hero-line outline">HAVE <em>IDEAS.</em></span>
            <span className="hero-line">WE BUILD THEM.</span>
          </h1>
          <p className="hero-copy">
            NexTech is a collective of young builders turning ambitious ideas into
            working digital products, ventures and real-world impact.
          </p>
          <div className="hero-actions">
            <button className="button primary" onClick={() => scrollTo("ventures")}>Explore the ecosystem <ArrowUpRight size={18}/></button>
            <button className="button ghost" onClick={() => scrollTo("about")}><Play size={15}/> Discover NexTech</button>
          </div>
        </div>

        <div className="hero-footer">
          <span>01 — 06</span>
          <span className="hero-scroll">Scroll to explore <ChevronDown size={15}/></span>
          <span>Turning visions into versions.</span>
        </div>
      </section>

      <section className="manifesto" id="about">
        <div className="manifesto-big reveal">
          <span className="eyebrow">THE NEXTECH IDEA</span>
          <h2>Technology is the <i>medium.</i><br/>Building is the <strong>mission.</strong></h2>
        </div>
        <div className="manifesto-body reveal">
          <p>
            NexTech started as a group of students with a simple instinct:
            stop talking about what could exist and start making it exist.
          </p>
          <p>
            It has evolved into a small consortium of people, ideas and ventures.
            The model is deliberately flexible — an idea originator can lead a
            venture, co-founders can shape it, associates can contribute expertise,
            and the wider crew can execute.
          </p>
          <div className="principles">
            <div><b>01</b><span>People first</span></div>
            <div><b>02</b><span>Ideas into versions</span></div>
            <div><b>03</b><span>Build with purpose</span></div>
          </div>
        </div>
      </section>

      <section className="marquee">
        <div className="marquee-track">
          <span>PEOPLE</span><i>✦</i><span>EXPERTISE</span><i>✦</i><span>COLLABORATION</span><i>✦</i><span>VENTURES</span><i>✦</i><span>IMPACT</span><i>✦</i>
          <span>PEOPLE</span><i>✦</i><span>EXPERTISE</span><i>✦</i><span>COLLABORATION</span><i>✦</i><span>VENTURES</span><i>✦</i><span>IMPACT</span><i>✦</i>
        </div>
      </section>

      <section className="ventures" id="ventures">
        <SectionTitle
          eyebrow="02 — Ventures"
          title="Ideas in motion."
          body="NexTech is bigger than a portfolio grid. Each venture is an experiment, a problem, a team and a version that can keep evolving."
        />
        <div
          className="project-stage"
          onWheel={(event) => {
            if (Math.abs(event.deltaY) < 4 && Math.abs(event.deltaX) < 4) return;
            event.preventDefault();
            rotateProjects(event.deltaY > 0 || event.deltaX > 0 ? 1 : -1);
          }}
          onPointerDown={(event) => setProjectDragStart(event.clientX)}
          onPointerUp={(event) => {
            if (projectDragStart === null) return;
            const distance = event.clientX - projectDragStart;
            if (Math.abs(distance) > 35) rotateProjects(distance < 0 ? 1 : -1);
            setProjectDragStart(null);
          }}
          onPointerCancel={() => setProjectDragStart(null)}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight" || event.key === "ArrowDown") rotateProjects(1);
            if (event.key === "ArrowLeft" || event.key === "ArrowUp") rotateProjects(-1);
          }}
          tabIndex="0"
          aria-label="Rotate through NexTech ventures"
        >
          <div className="project-stage-glow" />
          <div className="project-floor" />
          <div className="project-arc-label">Drag or scroll to rotate</div>
          <div className="project-list" style={{ "--active-project": activeProjectIndex }}>
          {projects.map((project, index) => {
            const projectPosition = getProjectPosition(index);
            const distance = Math.abs(projectPosition);
            const projectScale = 1 - Math.min(0.38, distance * 0.14);
            const projectOpacity = 1 - Math.min(0.65, distance * 0.14);

            return <article
              className={`project-card ${project.accent} ${index === activeProjectIndex ? "is-active" : ""}`}
              key={project.id}
              onClick={() => setActiveProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") setActiveProject(project);
              }}
              tabIndex="0"
              style={{
                "--project-position": projectPosition,
                "--project-depth": `${Math.min(700, distance * 220)}px`,
                "--project-angle": `${projectPosition * -55}deg`,
                "--project-scale": projectScale,
                "--project-opacity": projectOpacity,
                "--project-saturation": 1 - Math.min(0.5, distance * 0.12),
                zIndex: Math.round((projects.length - distance) * 100)
              }}
            >
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <div className="project-heading">
                  <span className="project-type">{project.type}</span>
                  {project.logo && <img className="project-logo" src={project.logo} alt={`${project.name} logo`} />}
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
              </div>
              <div className="project-arrow"><ArrowUpRight/></div>
            </article>;
          })}
          </div>
          <div className="project-stage-footer">
            <span>{String(activeProjectIndex + 1).padStart(2, "0")} / 05</span>
            <div className="project-progress">
              {projects.map((project, index) => <i className={index === activeProjectIndex ? "is-active" : ""} key={project.id} />)}
            </div>
            <span>NEXTECH PROJECTS</span>
          </div>
        </div>
        <div
          className="mobile-cube-stage"
          onPointerDown={(event) => {
            mobileCubeDrag.current = { x: event.clientX, y: event.clientY };
          }}
          onPointerUp={(event) => {
            const start = mobileCubeDrag.current;
            mobileCubeDrag.current = null;
            if (!start) return;
            const distanceX = event.clientX - start.x;
            const distanceY = event.clientY - start.y;
            if (Math.abs(distanceX) < 46 || Math.abs(distanceX) <= Math.abs(distanceY)) return;
            suppressMobileCubeClick.current = true;
            rotateMobileCube(distanceX < 0 ? 1 : -1);
          }}
          onPointerCancel={() => { mobileCubeDrag.current = null; }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") rotateMobileCube(1);
            if (event.key === "ArrowLeft") rotateMobileCube(-1);
          }}
          tabIndex="0"
          aria-label="Swipe or use arrow keys to rotate through NexTech ventures"
        >
          <div className="mobile-cube-glow" />
          <div className="mobile-cube-shadow" />
          <div className="mobile-cube" style={{ transform: mobileCubeTransform }}>
            {mobileCubeFaces.map(({ key, project }) => project ? (
              <button
                className={`mobile-cube-face mobile-cube-face-${key} ${project.accent}`}
                key={key}
                onClick={() => {
                  if (suppressMobileCubeClick.current) {
                    suppressMobileCubeClick.current = false;
                    return;
                  }
                  setActiveProject(project);
                }}
                aria-label={`Open ${project.name} project details`}
              >
                <span className="mobile-cube-number">{project.number}</span>
                {project.logo && <img src={project.logo} alt={`${project.name} logo`} />}
                <strong>{project.name}</strong>
                <small>{project.type}</small>
                <span className="mobile-cube-tagline">{project.tags[0]}</span>
              </button>
            ) : <div className="mobile-cube-face mobile-cube-face-bottom" key={key} aria-hidden="true" />)}
          </div>
          <div className="mobile-cube-indicator" aria-live="polite">
            <div className="mobile-cube-dots">
              {projects.map((project, index) => <i className={index === mobileCubeIndex ? "is-active" : ""} key={project.id} />)}
            </div>
            <span>{projects[mobileCubeIndex].name}</span>
          </div>
        </div>
      </section>

      <section className="people" id="people">
        <SectionTitle
          eyebrow="03 — People"
          title="The crew behind the versions."
          body="NexTech is intentionally people-led. Roles can change by venture, but the common thread is a willingness to learn, build and ship."
        />
        <p>Tap the profiles to view more.</p>
        <div className="people-grid">
          {people.map(([initials, name, role, image, url, profileImage], i) => (
            <button className="person reveal" key={name} onClick={() => openPerson({ initials, name, role, image, url, profileImage })}>
              <div className={`person-avatar person-avatar-${initials.toLowerCase()}`}>
                {image ? <img src={image} alt={name} /> : <span>{initials}</span>}
                <div className="avatar-ring"></div>
              </div>
              <div className="person-meta">
                <small>0{i + 1}</small>
                <h3>{name}</h3>
                <p>{role}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="role-model reveal">
          <div><Sparkles/><span>THE MODEL</span></div>
          <p><strong>Brainchild / CEO</strong> → <strong>Co-founders</strong> → <strong>Associates</strong> → <strong>Crew</strong></p>
          <small>A flexible structure built around the idea, not the hierarchy.</small>
        </div>
      </section>

      <section className="expertise" id="collab">
        <div className="expertise-copy reveal">
          <span className="eyebrow">04 — Collaboration</span>
          <h2>Bring the problem.<br/><i>We'll build the version.</i></h2>
          <p>
            From student problems to businesses that need a digital edge, NexTech
            is interested in the space between a strong idea and something people
            can actually use.
          </p>
          <button className="button primary" onClick={() => window.location.href = whatsappUrl}>
            Talk to NexTech <ArrowUpRight size={18}/>
          </button>
        </div>

        <div className="expertise-visual reveal">
          <div className="orbit orbit-a"></div>
          <div className="orbit orbit-b"></div>
          <div className="core-node"><Zap/><span>BUILD</span></div>
          <div className="float-card c1"><Code2/><span>PRODUCT</span></div>
          <div className="float-card c2"><Cpu/><span>AI</span></div>
          <div className="float-card c3"><Globe2/><span>IMPACT</span></div>
          <div className="float-card c4"><Network/><span>PEOPLE</span></div>
        </div>
      </section>

      <section className="impact">
        <div className="impact-top reveal">
          <span className="eyebrow">05 — Impact</span>
          <span className="impact-note">Small team. Big surface area.</span>
        </div>
        <div className="impact-statement reveal">
          <h2>From <span>school corridors</span> to <span>real businesses</span> — we build where technology meets everyday life.</h2>
        </div>
        <div className="impact-grid">
          <div><b>05</b><span>Known venture directions</span></div>
          <div><b>∞</b><span>Problems worth exploring</span></div>
          <div><b>01</b><span>Shared philosophy</span></div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <img className="brand-logo" src={nextechLogo} alt="NexTech" />
          <div><strong>NEXTECH</strong><small>Turning visions into versions.</small></div>
        </div>
        <div className="footer-links">
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("ventures")}>Ventures</button>
          <button onClick={() => scrollTo("people")}>People</button>
          <button onClick={() => window.location.href = whatsappUrl}>Collaborate</button>
        </div>
        <div className="footer-bottom">
          <span>© 2026 NexTech</span>
          <span>Built in Kenya.</span>
        </div>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className={`project-modal ${activeProject.accent}`} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)}><X/></button>
            <div className="modal-project-heading">
              <span className="project-type">{activeProject.number} / {activeProject.type}</span>
              {activeProject.logo && <img className="modal-project-logo" src={activeProject.logo} alt={`${activeProject.name} logo`} />}
            </div>
            <h2>{activeProject.name}</h2>
            <p>{activeProject.description}</p>
            <div className="tags">{activeProject.tags.map(t => <span key={t}>{t}</span>)}</div>
            <div className="modal-note"><Layers3/> Venture profile — ready for the next version.</div>
            {activeProject.url && <a className="modal-link" href={activeProject.url} target="_blank" rel="noreferrer">Visit {activeProject.name} <ArrowUpRight size={16}/></a>}
          </div>
        </div>
      )}

      {activePerson && (
        <div
          className={`modal-backdrop ${personClosing ? "modal-closing" : ""}`}
          onClick={closePerson}
          onAnimationEnd={() => personClosing && setActivePerson(null)}
        >
          <div className="project-modal person-modal" onClick={e => e.stopPropagation()}>
            {activePerson.profileImage && (
              <div className={`founder-profile-${activePerson.initials.toLowerCase()}`} aria-hidden="true">
                <picture>
                  {activePerson.name === "Victor Manee" && (
                    <source media="(max-width: 1024px)" srcSet={victorManeeMobileProfile} />
                  )}
                  {activePerson.name === "Darren Fadhili" && (
                    <source media="(max-width: 1024px)" srcSet={darrenFadhiliMobileProfile} />
                  )}
                  {activePerson.name === "Isaac Maloba" && (
                    <source media="(max-width: 1024px)" srcSet={isaacMalobaMobileProfile} />
                  )}
                  {activePerson.name === "Andreane Kaniaru" && (
                    <source media="(max-width: 1024px)" srcSet={andreaneKaniaruMobileProfile} />
                  )}
                  {activePerson.name === "James Gichaga" && (
                    <source media="(max-width: 1024px)" srcSet={jamesGichagaMobileProfile} />
                  )}
                  {activePerson.name === "Jackson Kagema" && (
                    <source media="(max-width: 1024px)" srcSet={jacksonKagemaMobileProfile} />
                  )}
                  <img src={activePerson.profileImage} alt="" />
                </picture>
              </div>
            )}
            <button className="modal-close" onClick={closePerson}><X/></button>
            <div className="person-modal-header">
              <div className="person-avatar person-modal-avatar">
                <img src={activePerson.image} alt={activePerson.name} />
                <div className="avatar-ring"></div>
              </div>
              <div>
                <span className="project-type">NexTech founder profile</span>
                <h2>{activePerson.name}</h2>
                <p className="person-modal-role">{activePerson.role}</p>
              </div>
            </div>
            <p>{founderDetails[activePerson.name]}</p>
            {activePerson.url && <a className="modal-link" href={activePerson.url} target="_blank" rel="noreferrer">Visit {activePerson.name}'s portfolio <ArrowUpRight size={16}/></a>}
          </div>
        </div>
      )}
    </main>
  );
}

export { App };
