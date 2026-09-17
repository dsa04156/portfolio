// Original project evidence shared by the preview and existing case-study dialogs.
const workPreviews = {
  edge: {
    category: 'EDGE AI / RESEARCH & ENGINEERING',
    title: ['장비는 달라도,', '하나의 AI 워크플로우.'],
    imageLabel: '직접 구현한 운영 대시보드',
    metric: '12.7', unit: '%', outcome: '평균 E2E 지연 감소',
    condition: '정적 배치 대비 · 테스트베드 실험 기준',
    description: 'x86, Jetson, Raspberry Pi가 협력하는 실행 환경. 병목을 관측하고 실행 중인 워크플로우의 처리 단계를 재배치했습니다.',
    role: '엣지 실행 환경 · 워크플로우와 관측 체계',
    stack: 'KubeEdge · Kubernetes · Prometheus'
  },
  kernel: {
    category: 'KERNEL & NETWORK / MASTER’S RESEARCH',
    title: ['평균 뒤에 숨은', '지연을 줄이다.'],
    imageLabel: '발표자료 원본 · 성능 비교 그래프',
    metric: '2.2', unit: 's', outcome: '혼잡 환경의 p99 지연',
    condition: '기준 실험 93초 → 제어 적용 2.2초',
    description: '느린 요청의 원인을 커널에서 찾았습니다. eBPF 계측과 강화학습을 연결해 MQTT 혼잡 환경의 전송 간격과 배치 크기를 제어했습니다.',
    role: '커널 계측 · 강화학습 기반 전송 제어',
    stack: 'eBPF · Reinforcement Learning · MQTT'
  },
  robot: {
    category: 'DATA & BACKEND / INDUSTRIAL PROJECT',
    title: ['3천만 건의 데이터,', '7초 안에 한눈에.'],
    imageLabel: '직접 구현한 데이터 시각화 화면',
    metric: '7', unit: 's', outcome: '평균 데이터 조회 시간',
    condition: '약 3,000만 건 · 프로젝트 측정 기준',
    description: '반도체 제조 로봇의 1년 치 상태 데이터를 조회하는 시스템. 저장 구조부터 쿼리, 압축, 샤딩까지 병목을 단계적으로 개선했습니다.',
    role: '팀장 · 백엔드와 인프라 개발',
    stack: 'Spring Boot · MongoDB · SSE'
  },
  cloud: {
    category: 'CLOUD / SERVICE INFRASTRUCTURE',
    title: ['서비스가 계속', '살아있도록.'],
    imageLabel: '직접 설계한 AWS 서비스 구성도',
    metric: 'CI/CD', unit: '', outcome: '배포부터 운영까지',
    condition: '모두의 튜터 · SW 마에스트로 프로젝트',
    description: '튜터 매칭 플랫폼의 백엔드와 AWS 인프라를 구성했습니다. 네트워크 설계, 컨테이너 배포, 장애 관측을 하나의 운영 흐름으로 연결했습니다.',
    role: '인프라 설계 · 백엔드 개발',
    stack: 'AWS ECS · VPC · RDS · GitHub Actions'
  },
  quake: {
    category: 'OBSERVABILITY / REAL-TIME DATA',
    title: ['데이터를 넘어,', '상황을 읽는 관제.'],
    imageLabel: '직접 구현한 지진 센서 관제 화면',
    metric: '실시간', unit: '', outcome: '센서 위치·상태 관측',
    condition: '경북대학교 기상청 협력 과제',
    description: '전국 센서의 위치와 상태, 데이터 처리 흐름을 한 화면에 연결했습니다. 운영자가 이상 징후를 찾을 수 있도록 관제와 모니터링을 구현했습니다.',
    role: '데이터 연계 · 대시보드와 모니터링',
    stack: 'Kafka · Next.js · Prometheus · Grafana'
  }
};
const workTabs = [...document.querySelectorAll('[data-work]')];
const workPanel = document.querySelector('#work-panel');
const workImageButton = document.querySelector('#showcase-image');
const workKeys = Object.keys(workPreviews);
const smallWorkScreen = matchMedia('(max-width: 760px)');
let selectedWork = 'edge';

function selectWork(key, {focusTab = false} = {}) {
  const preview = workPreviews[key];
  if (!preview) return;
  selectedWork = key;
  workTabs.forEach(button => {
    const selected = button.dataset.work === key;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
    if (selected) {
      if (focusTab) button.focus({preventScroll: true});
      if (smallWorkScreen.matches) {
        const rail = button.parentElement;
        // Scroll only the tab rail; keep the reader's page position stable.
        rail.scrollTo({left: button.offsetLeft - rail.offsetLeft - 4, behavior: 'instant'});
      }
    }
  });
  workPanel.dataset.current = key;
  workPanel.setAttribute('aria-labelledby', `tab-${key}`);
  document.querySelector('#showcase-category').textContent = preview.category;
  document.querySelector('#showcase-count').textContent = `0${workKeys.indexOf(key) + 1} — 05`;
  const title = document.querySelector('#showcase-title');
  title.replaceChildren(document.createTextNode(preview.title[0]), document.createElement('br'), document.createTextNode(preview.title[1]));
  const asset = projectImages[key][0];
  const img = document.querySelector('#showcase-img');
  img.src = asset.src; img.alt = asset.title;
  workImageButton.setAttribute('aria-label', `${asset.title} 이미지 확대`);
  document.querySelector('#showcase-image-caption').textContent = preview.imageLabel;
  const metric = document.querySelector('#showcase-metric');
  const value = document.createElement('strong'); value.textContent = preview.metric;
  if (preview.unit) { const unit = document.createElement('small'); unit.textContent = preview.unit; value.append(unit); }
  const label = document.createElement('span'); label.textContent = preview.outcome;
  metric.replaceChildren(value, label);
  for (const field of ['condition', 'description', 'role', 'stack']) document.querySelector(`#showcase-${field}`).textContent = preview[field];
  document.querySelector('#showcase-case').dataset.project = key;
  document.querySelector('#work-status').textContent = `${workKeys.indexOf(key) + 1} / 5. ${preview.title.join(' ')} ${preview.outcome}.`;
  if (!reducedMotion.matches) workPanel.animate([{opacity: .35, transform: 'translateY(8px)'}, {opacity: 1, transform: 'translateY(0)'}], {duration: 300, easing: 'ease-out'});
  updateProgress();
}

workTabs.forEach((button, index) => {
  button.addEventListener('click', () => selectWork(button.dataset.work));
  button.addEventListener('keydown', event => {
    const previous = smallWorkScreen.matches ? 'ArrowLeft' : 'ArrowUp';
    const next = smallWorkScreen.matches ? 'ArrowRight' : 'ArrowDown';
    let target;
    if (event.key === previous) target = (index - 1 + workTabs.length) % workTabs.length;
    else if (event.key === next) target = (index + 1) % workTabs.length;
    else if (event.key === 'Home') target = 0;
    else if (event.key === 'End') target = workTabs.length - 1;
    else return;
    event.preventDefault();
    selectWork(workTabs[target].dataset.work, {focusTab: true});
  });
});
workImageButton.addEventListener('click', () => {
  openImage(projectImages[selectedWork][0], workImageButton);
  document.body.classList.add('modal-open');
});
// Image viewing can now be opened directly from the page, outside a project dialog.
imageDialog.addEventListener('close', () => {
  if (!dialog.open) document.body.classList.remove('modal-open');
});
document.querySelector('#showcase-next').addEventListener('click', () => {
  selectWork(workKeys[(workKeys.indexOf(selectedWork) + 1) % workKeys.length]);
});
function setTabOrientation() {
  document.querySelector('.work-tabs').setAttribute('aria-orientation', smallWorkScreen.matches ? 'horizontal' : 'vertical');
}
smallWorkScreen.addEventListener('change', setTabOrientation);
setTabOrientation();
