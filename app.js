document.documentElement.classList.add('js');

const projects = {
  edge: {
    category: '01 / EDGE AI — RUNTIME ORCHESTRATION', title: '장비는 달라도, 하나의 AI 워크플로우.',
    summary: '실행 중인 시스템의 상태를 읽고, 병목이 생긴 처리 단계의 위치를 다시 결정하는 구조를 연구했습니다.',
    period: '2026 · ISET2026 연구', role: '엣지 실행 환경 구축 · 워크플로우와 관측 체계',
    problem: 'x86 서버, Jetson Orin, Raspberry Pi 5는 연산 성능과 가용 자원이 다릅니다. AI 서비스를 한 노드에 고정하면 부하가 달라져도 병목을 해소하기 어렵습니다.',
    actions: ['AI 서비스를 Capture → Preprocess → Inference 단계로 분해했습니다.', 'State Aggregator에서 런타임 노드 상태를 모으고, Placement Engine이 경험적 비용과 함께 재배치를 판단하도록 구성했습니다.', 'Workflow Executor / Reporter와 KubeEdge를 연결해 결정과 실행 결과가 이어지는 테스트베드를 구축했습니다.'],
    result: '네 가지 부하 시나리오와 다섯 가지 실행 방식을 비교했습니다. Runtime replanning은 Static placement 대비 평균 E2E 지연 12.7% 감소, 처리량 13.4% 향상을 보였습니다.',
    insight: '모든 상황에서 재배치가 유리한 것은 아닙니다. 저부하에서는 불필요한 이동을 줄여야 하고, 시나리오별 최적 정책도 달랐습니다. 결과와 함께 적용 조건을 남겼습니다.',
    source: '이기종 엣지 AI 환경에서의 Stage-level Runtime Replanning, 초록 및 실험 결과. 수치는 해당 테스트베드 조건의 결과입니다.',
    repo: 'https://github.com/dsa04156/workflow-edge-orch'
  },
  kernel: {
    category: '02 / KERNEL & NETWORK — MASTER’S RESEARCH', title: '평균 뒤에 숨은 지연을 줄이다.',
    summary: '애플리케이션 위에서 보이지 않던 원인을 커널 신호와 연결했습니다.',
    period: '석사 졸업 연구', role: '커널 계측 · 강화학습 기반 전송 제어',
    problem: 'MQTT 혼잡 환경에서는 일부 요청의 지연이 수십 초까지 커졌습니다. 평균 처리량만으로는 느린 요청의 원인과 소켓 버퍼의 적체를 설명하기 어려웠습니다.',
    actions: ['eBPF로 RTT, 재전송, 소켓 버퍼 상태를 수집해 커널 수준의 혼잡 신호를 관측했습니다.', '강화학습 기반 제어로 Publisher의 전송 간격과 배치 크기를 동적으로 조절했습니다.', '애플리케이션 코드를 수정하지 않고 전송을 제어하는 구조를 연구했습니다.'],
    result: '실험의 혼잡 조건에서 p99 지연을 93초에서 2.2초로 줄였습니다. 버퍼 상태 지표 snd_ratio도 2.335에서 0.197로 감소했습니다.',
    insight: '최적화의 목표는 평균값 하나를 낮추는 데 있지 않습니다. 처리량과 꼬리 지연을 함께 보고, 커널에서 관측한 신호를 실제 제어로 연결하는 것이 핵심이었습니다.',
    source: '전공기술면접 발표자료, 커널 신호 기반 시스템 최적화 부분. 수치는 해당 연구의 혼잡 실험 조건이며 일반 환경의 성능 보장이 아닙니다.',
    repo: 'https://github.com/dsa04156/RL-eBPF-MQQT'
  },
  robot: {
    category: '03 / DATA & BACKEND — INDUSTRIAL PROJECT', title: '3천만 건의 데이터, 7초 안에 한눈에.',
    summary: '기업이 필요로 한 것은 더 많은 데이터가 아니라, 필요한 데이터를 제때 확인할 수 있는 시스템이었습니다.',
    period: '2023.04 — 2023.05 · SSAFY 기업 연계', role: '팀장 · 백엔드와 인프라 개발',
    problem: '1년 치 로봇 상태 데이터를 10초 안에 그래프로 확인해야 했습니다. 약 3,000만 건의 데이터에서 초기 조회는 40초 이상 걸리거나 서버가 중단됐습니다.',
    actions: ['기업 담당자와 공정 용어, 조회 조건, 화면 요구사항을 정리하고 팀의 구현 기준으로 연결했습니다.', '트리 형태의 저장 구조를 노드 단위로 바꾸고, MongoDB 인덱싱·GZIP 압축·샤딩을 적용했습니다.', 'S3와 MongoDB로 데이터 수집·저장을 구성하고, SSE로 새로운 데이터를 화면에 전달했습니다.', 'Docker와 Jenkins를 활용해 개발 결과를 배포하는 흐름을 만들었습니다.'],
    result: '평균 조회 시간을 약 7초로 줄여 기업의 10초 이내 요구사항을 충족했습니다.',
    insight: '쿼리 한 줄을 고치기 전에 데이터가 저장되는 방식과 사용자가 실제로 조회하는 단위를 함께 살폈습니다. 기술적 판단과 고객의 요구를 같은 기준으로 맞춘 경험입니다.',
    source: '기업 연계 프로젝트 경력기술서 및 지원서의 수행 과정·결과. 약 3,000만 건은 프로젝트 데이터 규모입니다.',
    repo: 'https://github.com/dsa04156/Semiconductor-Manufacturing-Robot-Status-Management-System'
  },
  cloud: {
    category: '04 / CLOUD — SERVICE INFRASTRUCTURE', title: '서비스가 계속 살아있도록.',
    summary: '모두의 튜터 플랫폼의 백엔드와 AWS 인프라를 구성했습니다. 배포 이후의 운영까지 설계 범위에 포함했습니다.',
    period: '2024 · SW 마에스트로', role: '인프라 설계 · 백엔드 개발',
    problem: '튜터 매칭 서비스가 동작하려면 API 구현뿐 아니라 네트워크, 컨테이너 배포, 데이터 저장, 장애 관측이 연결되어야 했습니다.',
    actions: ['VPC의 Public / Private Subnet을 분리하고 AWS ECS, RDS, ALB, Auto Scaling을 구성했습니다.', 'GitHub Actions와 ECR을 사용해 컨테이너 배포 파이프라인을 구축했습니다.', 'Prometheus, Grafana, Scouter로 관측 환경을 구성하고 nGrinder 부하 테스트로 서비스 중단 원인을 분석했습니다.', 'Spring Boot와 Spring Data JPA로 백엔드와 데이터 관리 기능을 구현했습니다.'],
    result: '서비스 인프라, 배포 자동화, 모니터링과 부하 테스트를 연결해 운영 문제를 확인하고 개선할 수 있는 환경을 만들었습니다.',
    insight: '인프라는 리소스를 띄우는 작업의 합이 아니었습니다. 장애를 어떻게 발견할지, 어떻게 다시 배포할지까지 함께 설계하는 일에 가까웠습니다.',
    source: 'SW 마에스트로 모두의 튜터 프로젝트 경력기술서와 kt cloud 지원서.', repo: null
  },
  quake: {
    category: '05 / OBSERVABILITY — REAL-TIME DATA', title: '데이터를 넘어, 상황을 읽는 관제.',
    summary: '지진 센서 데이터의 처리 흐름과 운영자가 보는 상태 화면을 연결했습니다.',
    period: '2025 · 경북대학교 기상청 협력 과제', role: '데이터 연계 · 대시보드와 모니터링',
    problem: '센서의 위치와 상태, 들어오는 데이터, 처리 지연을 함께 볼 수 있어야 운영자가 시스템 상황을 판단할 수 있었습니다.',
    actions: ['Kafka 기반 데이터 처리 흐름과 검증·필터링을 위한 Spring Boot 프록시 서버를 개발했습니다.', 'Next.js로 센서 위치 지도, 목록, 상태 변화 그래프를 구현했습니다.', 'Kafka Consumer Lag, 메시지 처리량, 서버 상태를 Prometheus와 Grafana로 관측했습니다.', 'Jenkins로 배포 자동화 환경을 구성했습니다.'],
    result: '센서 데이터 처리와 위치·상태 시각화, 운영 모니터링을 하나의 흐름으로 구성했습니다.',
    insight: '운영 화면은 그래프를 많이 보여주는 공간이 아니라, 지금 어떤 문제가 생겼고 어디를 확인해야 하는지 판단할 수 있는 도구여야 했습니다.',
    source: '지진 감지 및 경보 시스템 경력기술서와 연구과제 수행 내역.', repo: null
  }
};

const dialog = document.querySelector('#project-dialog');
const projectImages = {
  edge: [{src:'assets/edge-dashboard.png',title:'디바이스 운영 대시보드',caption:'전공기술면접 발표자료 7쪽 · 발표 당시의 노드, 디바이스, 센서 상태를 담은 실제 구현 화면.'}],
  kernel: [{src:'assets/kernel-results.png',title:'커널 신호 기반 제어 실험',caption:'전공기술면접 발표자료 9쪽 · p99 지연, TCP 송신 버퍼, RTT, 처리량의 원본 비교 그래프. 지표별 축과 범례를 함께 확인할 수 있습니다.'}],
  robot: [{src:'assets/robot-dashboard.png',title:'로봇 상태 데이터 시각화',caption:'전공기술면접 발표자료 11쪽 · 컴포넌트 상태와 시계열 데이터를 확인하는 실제 구현 화면.'},{src:'assets/robot-architecture.png',title:'로봇 관리 시스템 구성도',caption:'전공기술면접 발표자료 11쪽 · React, NGINX, Spring Boot, MongoDB 기반 시스템 구조.'}],
  cloud: [{src:'assets/cloud-architecture.png',title:'AWS 서비스 인프라 구성도',caption:'전공기술면접 발표자료 11쪽 · VPC, ECS, RDS, 모니터링과 GitHub Actions 배포 흐름.'}],
  quake: [{src:'assets/earthquake-dashboard.png',title:'지진 센서 관제 대시보드',caption:'전공기술면접 발표자료 11쪽 · 발표 당시 전국 센서의 위치와 상태를 담은 구현 화면.'}]
};
let activeProject = 'edge';
let opener;
function renderProject(key) {
  activeProject = key;
  const p = projects[key];
  document.querySelector('#dialog-category').textContent = p.category;
  const body = document.querySelector('#dialog-body');
  body.replaceChildren();
  const add = (tag, text, className, parent = body) => {
    const el = document.createElement(tag); el.textContent = text;
    if (className) el.className = className;
    parent.append(el); return el;
  };
  add('h2', p.title).id = 'dialog-title';
  add('p', p.summary, 'dialog-summary');
  const meta = add('div', '', 'dialog-meta');
  add('span', p.period, '', meta); add('span', p.role, '', meta);
  const gallery = add('div', '', 'project-gallery');
  for (const asset of projectImages[key] || []) {
    const figure = add('figure', '', '', gallery);
    const button = add('button', '', 'gallery-image-button', figure);
    button.setAttribute('aria-label', `이미지 확대: ${asset.title}`);
    const img = document.createElement('img'); img.src = asset.src; img.alt = asset.title; img.decoding = 'async';
    button.append(img); add('span', '크게 보기 ↗', 'image-expand-hint', button);
    add('figcaption', asset.caption, '', figure);
    button.addEventListener('click', () => openImage(asset, button));
  }
  for (const [label, content] of [['문제', p.problem], ['접근', p.actions], ['결과', p.result]]) {
    const block = add('section', '', 'dialog-block'); add('h3', label, '', block);
    if (Array.isArray(content)) { const ul = add('ul', '', '', block); content.forEach(t => add('li', t, '', ul)); }
    else add('p', content, '', block);
  }
  add('p', p.insight, 'dialog-insight');
  add('p', `근거 · ${p.source}`, 'dialog-source');
  if (p.repo) { const link = add('a', '관련 GitHub 저장소 ↗', 'dialog-repo'); link.href = p.repo; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  dialog.scrollTop = 0;
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  opener = button; renderProject(button.dataset.project); dialog.showModal(); document.body.classList.add('modal-open');
  document.querySelector('#dialog-close').focus({preventScroll:true});
}));
document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => {
  const r = dialog.getBoundingClientRect();
  if (e.target === dialog && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) dialog.close();
});
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); opener?.focus({preventScroll:true}); });
document.querySelector('#next-project').addEventListener('click', () => {
  const keys = Object.keys(projects); renderProject(keys[(keys.indexOf(activeProject) + 1) % keys.length]);
  document.querySelector('#dialog-close').focus({preventScroll:true});
});

const imageDialog = document.querySelector('#image-dialog');
let imageOpener;
function openImage(asset, button) {
  imageOpener = button;
  document.querySelector('#image-title').textContent = asset.title;
  const image = document.querySelector('#expanded-image'); image.src = asset.src; image.alt = asset.title;
  document.querySelector('#image-caption').textContent = asset.caption;
  imageDialog.classList.remove('actual-size');
  const zoom = document.querySelector('#image-zoom'); zoom.setAttribute('aria-pressed', 'false'); zoom.textContent = '원본 크기';
  imageDialog.showModal(); document.querySelector('#image-close').focus({preventScroll:true});
}
document.querySelector('#image-close').addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('close', () => imageOpener?.focus({preventScroll:true}));
document.querySelector('#image-zoom').addEventListener('click', e => {
  const actual = imageDialog.classList.toggle('actual-size');
  e.currentTarget.setAttribute('aria-pressed', String(actual));
  e.currentTarget.textContent = actual ? '화면에 맞추기' : '원본 크기';
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), {threshold: .08});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const progress = document.querySelector('.reading-progress');
let progressQueued = false;
function updateProgress() { const range = document.documentElement.scrollHeight - innerHeight; progress.style.width = `${range > 0 ? scrollY / range * 100 : 0}%`; progressQueued = false; }
addEventListener('scroll', () => { if (!progressQueued) { requestAnimationFrame(updateProgress); progressQueued = true; } }, {passive:true});
updateProgress();
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try { await navigator.clipboard.writeText('dsa04156@naver.com'); status.textContent = '복사했습니다.'; }
  catch { status.textContent = 'dsa04156@naver.com을 직접 복사해 주세요.'; }
  setTimeout(() => { status.textContent = ''; }, 6000);
});

// A conceptual, interactive three-layer system diagram, not production telemetry.
const canvas = document.querySelector('#system-canvas');
const ctx = canvas.getContext('2d');
const descriptions = [
  '서비스가 안정적으로 동작하는\n클라우드 인프라를 설계합니다.',
  '서로 다른 장비를 연결해\n하나의 AI 실행 환경을 만듭니다.',
  '커널 신호를 관측하고\n네트워크의 병목을 제어합니다.'
];
const layerButtons = [...document.querySelectorAll('[data-layer]')];
let layer = 0, w = 0, h = 0, pointerX = 0, pointerY = 0, smoothX = 0, smoothY = 0;
let visibleCanvas = true, frameId = null;
function resizeCanvas() {
  const r = canvas.getBoundingClientRect(); w = r.width; h = r.height;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  canvas.width = w * dpr; canvas.height = h * dpr; ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
  if (reducedMotion.matches) draw(0);
}
layerButtons.forEach(button => button.addEventListener('click', () => {
  layer = Number(button.dataset.layer);
  layerButtons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  document.querySelector('#layer-number').textContent = `0${layer+1} / 03`;
  document.querySelector('#layer-description').textContent = descriptions[layer];
  document.querySelector('#layer-description').style.whiteSpace = 'pre-line';
  if (reducedMotion.matches) draw(0);
}));
canvas.addEventListener('pointermove', e => {
  if (e.pointerType === 'touch') return;
  const r = canvas.getBoundingClientRect(); pointerX = (e.clientX-r.left)/w-.5; pointerY = (e.clientY-r.top)/h-.5;
});
canvas.addEventListener('pointerleave', () => { pointerX = 0; pointerY = 0; });
function draw(ms) {
  if (!ctx || !w) return;
  const time = reducedMotion.matches ? 0 : ms * .00035;
  smoothX += (pointerX-smoothX)*.04; smoothY += (pointerY-smoothY)*.04;
  ctx.clearRect(0,0,w,h);
  const scale = w / 520, centerX = w*.49, centerY = h*.38;
  const rotation = -.35 + smoothX*.25 + Math.sin(time*.3)*.07;
  function project(x,y,z) {
    const rx=x*Math.cos(rotation)-z*Math.sin(rotation), rz=x*Math.sin(rotation)+z*Math.cos(rotation);
    return [centerX+(rx-rz*.3)*scale, centerY+(y+rz*.37+smoothY*rx*.1)*scale];
  }
  // Ordered wireframe sheets show application, infrastructure, and kernel layers.
  for(let sheet=2;sheet>=0;sheet--) {
    const highlighted = sheet===layer, count=16, points=[];
    for(let row=0;row<count;row++) {
      const line=[];
      for(let col=0;col<count;col++) {
        const x=(col/(count-1)-.5)*335, z=(row/(count-1)-.5)*245;
        const ripple=Math.sin(col*.42+row*.32-time*2+sheet)*10 + Math.cos(row*.6-time)*5;
        line.push(project(x,(sheet-1)*83+ripple,z));
      }
      points.push(line);
    }
    ctx.lineWidth=highlighted?.8:.55;
    ctx.strokeStyle=highlighted?'rgba(199,248,108,.65)':'rgba(115,139,94,.25)';
    for(let row=0;row<count;row++) {
      ctx.beginPath();points[row].forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.stroke();
    }
    for(let col=0;col<count;col++) {
      ctx.beginPath();points.forEach((row,i)=>i?ctx.lineTo(...row[col]):ctx.moveTo(...row[col]));ctx.stroke();
    }
    if(highlighted) {
      for(let n=0;n<7;n++) {
        const row=(n*3+2)%count, col=(n*5+3)%count, [x,y]=points[row][col];
        const pulse=2+Math.sin(time*3+n)*.6;
        ctx.shadowBlur=12;ctx.shadowColor='#c7f86c';ctx.fillStyle='#d7ff99';
        ctx.beginPath();ctx.arc(x,y,pulse,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
      }
      const [x,y]=points[0][15]; ctx.fillStyle='#bdd79e';ctx.font=`${Math.max(9,11*scale)}px monospace`;
      ctx.fillText(['CLOUD','EDGE AI','KERNEL'][sheet],x+12,y+4);
    }
  }
}
function frame(t) { frameId=null; draw(t); if(visibleCanvas && !document.hidden && !reducedMotion.matches) frameId=requestAnimationFrame(frame); }
function resume() { if(frameId===null && visibleCanvas && !document.hidden && !reducedMotion.matches) frameId=requestAnimationFrame(frame); else if(reducedMotion.matches) draw(0); }
new ResizeObserver(resizeCanvas).observe(canvas);
new IntersectionObserver(([entry]) => { visibleCanvas=entry.isIntersecting; resume(); }).observe(canvas);
document.addEventListener('visibilitychange', resume);
reducedMotion.addEventListener('change', resume);
resizeCanvas();resume();
