
const STORAGE_KEY = "ufprMedPlanner2026_v1";

const plan = [
  {date:"2026-10-12",main:"Biologia",topics:"Genética, ecologia e fisiologia humana",second:"Matemática: funções",tasks:[["Biologia","Resolver 15–20 questões de genética, ecologia ou fisiologia."],["Matemática","Revisar funções e resolver 8 questões básicas."]]},
  {date:"2026-10-13",main:"Química",topics:"Estequiometria, soluções e concentração",second:"Português: interpretação",tasks:[["Química","Resolver 15 questões e corrigir cada erro."],["Português","Fazer 5 questões de interpretação de texto."]]},
  {date:"2026-10-14",main:"Física",topics:"Eletricidade, potência e circuitos",second:"História do Brasil",tasks:[["Física","Resolver 10–15 questões de circuitos, potência e Lei de Ohm."],["História","Resolver 8 questões de História do Brasil."]]},
  {date:"2026-10-15",main:"Biologia",topics:"Citologia, divisão celular e evolução",second:"Matemática: PA e PG",tasks:[["Biologia","Resolver 15 questões e revisar os erros."],["Matemática","Revisar PA/PG e resolver 8 questões."]]},
  {date:"2026-10-16",main:"Geografia",topics:"Clima, biomas, população e urbanização",second:"Literatura UFPR",tasks:[["Geografia","Resolver 10 questões de Geografia."],["Literatura","Revisar uma obra obrigatória: enredo, personagens, narrador e temas."]]},
  {date:"2026-10-17",main:"Prova antiga da UFPR",topics:"Caderno completo ou simulado de 80 questões",second:"Discursiva",tasks:[["Simulado","Resolver uma prova antiga ou um simulado cronometrado."],["Discursiva","Escrever uma resposta de até 15 linhas e revisar a clareza."]]},
  {date:"2026-10-18",main:"Correção estratégica",topics:"Retomar os erros do simulado",second:"Filosofia, Sociologia e Inglês",tasks:[["Correção","Classificar os erros: conteúdo, interpretação, cálculo, tempo ou chute."],["Revisão curta","Fazer questões das áreas em que o simulado mostrou mais dificuldade."]]},
  {date:"2026-10-19",main:"Química",topics:"Equilíbrio químico, pH, oxirredução e eletroquímica",second:"Matemática: porcentagem e probabilidade",tasks:[["Química","Priorizar os tópicos em que mais errou."],["Matemática","Revisar porcentagem e probabilidade básica com exercícios."]]},
  {date:"2026-10-20",main:"Biologia",topics:"Genética, biotecnologia, ecologia e evolução",second:"Português: sintaxe e interpretação",tasks:[["Biologia","Fazer questões UFPR e revisar os erros."],["Português","Resolver questões de sintaxe e interpretação."]]},
  {date:"2026-10-21",main:"Física",topics:"Óptica, mecânica básica e eletricidade",second:"Geografia",tasks:[["Física","Resolver exercícios médios e revisar as fórmulas utilizadas."],["Geografia","Fazer uma bateria de questões de provas anteriores."]]},
  {date:"2026-10-22",main:"História",topics:"Brasil República, Era Vargas, ditadura e movimentos sociais",second:"Literatura UFPR",tasks:[["História","Revisar os temas e resolver questões antigas."],["Literatura","Relacionar contexto, narrador, personagens e temas das obras."]]},
  {date:"2026-10-23",main:"Matemática",topics:"Funções, PA/PG, estatística e probabilidade",second:"Filosofia, Sociologia e Inglês",tasks:[["Matemática","Fazer questões curtas dos assuntos com melhor retorno."],["Humanas e Inglês","Revisar conceitos-chave e interpretação de texto."]]},
  {date:"2026-10-24",main:"Simulado UFPR completo",topics:"80 questões e duas discursivas, respeitando 5h30",second:"Correção inicial",tasks:[["Simulado","Fazer a prova em condições próximas às reais."],["Análise","Anotar erros de conteúdo, interpretação, cálculo e tempo."]]},
  {date:"2026-10-25",main:"Revisão dos erros",topics:"As três áreas com maior potencial de recuperação",second:"Discursiva curta",tasks:[["Revisão","Refazer questões erradas sem olhar a resolução."],["Discursiva","Treinar resposta de até 5 linhas e conferir se respondeu ao comando."]]},
  {date:"2026-10-26",main:"Biologia + Química",topics:"Erros recorrentes das duas disciplinas",second:"Matemática básica",tasks:[["Biologia e Química","Revisar os erros mais frequentes e resolver questões semelhantes."],["Matemática","Revisar fórmulas e questões curtas, sem abrir grandes conteúdos novos."]]},
  {date:"2026-10-27",main:"Português + Literatura",topics:"Interpretação, gêneros textuais e obras obrigatórias",second:"História",tasks:[["Português e Literatura","Resolver questões antigas e revisar as obras em que houver insegurança."],["História","Revisar os erros e os conceitos mais importantes."]]},
  {date:"2026-10-28",main:"Física + Matemática",topics:"Fórmulas, circuitos, óptica, funções, PA/PG e porcentagem",second:"Inglês",tasks:[["Exatas","Revisar métodos de resolução e erros de cálculo."],["Inglês","Treinar interpretação de textos e vocabulário pelo contexto."]]},
  {date:"2026-10-29",main:"Geografia + História",topics:"Temas recorrentes e erros pessoais",second:"Filosofia e Sociologia",tasks:[["História e Geografia","Fazer uma revisão ativa e questões curtas."],["Filosofia e Sociologia","Revisar conceitos e resolver questões objetivas."]]},
  {date:"2026-10-30",main:"Revisão geral leve",topics:"Caderno de erros, fórmulas e conceitos essenciais",second:"Discursivas",tasks:[["Revisão final","Ler suas próprias anotações, fórmulas e pontos de confusão."],["Discursivas","Revisar estrutura, clareza e limite de linhas."]]},
  {date:"2026-10-31",main:"Véspera da UFPR",topics:"Revisão leve de fórmulas, obras e anotações",second:"Preparação prática",tasks:[["Revisão leve","Ver apenas resumos e pontos já estudados. Não tentar aprender tudo agora."],["Organização","Separar documentos, conferir o local e horário da prova e dormir cedo."]]},
  {date:"2026-11-01",main:"DIA DA UFPR",topics:"Medicina: foco na prova",second:"Estratégia de execução",tasks:[["Preparação","Comer normalmente, sair com antecedência e levar o que for permitido."],["Durante a prova","Controlar o tempo, ler os comandos com atenção e não ficar presa em uma questão."]]}
];

const subjects = [
  ["Biologia",15],["Química",13],["Português e Literatura",15],["História e Geografia",14],
  ["Física",13],["Matemática",10],["Filosofia e Sociologia",8],["Inglês",5],["Discursivas e erros",7]
];

const $ = (selector) => document.querySelector(selector);
let state = loadState();
let selectedDate = todayISO();
let calendarMonth = new Date(2026, 9, 1);
let toastTimer;

function loadState(){
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {completed:{},errors:[]};
  } catch {
    return {completed:{},errors:[]};
  }
}

function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function todayISO(){
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`;
}

function parseISO(iso){
  const [y,m,d] = iso.split("-").map(Number);
  return new Date(y,m-1,d);
}

function isoDate(date){
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
}

function formatDate(iso, options={weekday:"long",day:"numeric",month:"long"}){
  return parseISO(iso).toLocaleDateString("pt-BR",options);
}

function escapeHTML(value){
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[char]));
}

function getDay(iso){
  return plan.find(day => day.date === iso);
}

function taskKey(dayIndex, taskIndex){
  return `${plan[dayIndex].date}-${taskIndex}`;
}

function isDone(key){
  return Boolean(state.completed[key]);
}

function dayDone(day){
  const index = plan.indexOf(day);
  return day.tasks.every((_,taskIndex) => isDone(taskKey(index,taskIndex)));
}

function totals(){
  const all = plan.reduce((sum,day) => sum + day.tasks.length,0);
  const done = Object.values(state.completed).filter(Boolean).length;
  return {all,done,percent:all ? Math.round(done/all*100) : 0};
}

function showToast(message){
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"),2300);
}

function setView(view){
  document.querySelectorAll(".view").forEach(el => el.classList.add("hidden"));
  $(`#${view}-view`).classList.remove("hidden");

  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.classList.toggle("active",btn.dataset.view === view);
  });

  const headings = {
    dashboard:"Sua reta final",
    calendar:"Calendário de revisão",
    errors:"Caderno de erros"
  };

  $("#page-heading").textContent = headings[view];

  if(view === "calendar") renderCalendar();
  if(view === "errors") renderErrors();
}

function renderStats(){
  const t = totals();

  $("#planned-count").textContent = plan.length;
  $("#completed-count").textContent = t.done;
  $("#progress-number").textContent = t.percent;
  $("#progress-bar").style.width = `${t.percent}%`;
}

function taskHTML(day,dayIndex,task,taskIndex){
  const key = taskKey(dayIndex,taskIndex);
  const done = isDone(key);

  return `<label class="task-row ${done ? "done" : ""}">
    <input class="task-check" type="checkbox" data-task-key="${key}" ${done ? "checked" : ""} aria-label="Marcar tarefa como concluída">
    <div class="task-copy">
      <strong>${escapeHTML(task[0])}</strong>
      <p>${escapeHTML(task[1])}</p>
    </div>
    <span class="task-tag">${done ? "FEITO" : "TAREFA"}</span>
  </label>`;
}

function renderTaskList(container,day){
  const index = plan.indexOf(day);

  container.innerHTML = day.tasks.map((task,i) => taskHTML(day,index,task,i)).join("");

  container.querySelectorAll("[data-task-key]").forEach(input => {
    input.addEventListener("change",() => {
      state.completed[input.dataset.taskKey] = input.checked;
      saveState();
      renderAll();
      showToast(input.checked ? "Tarefa concluída. Boa!" : "Tarefa reaberta.");
    });
  });
}

function renderDashboard(){
  const now = new Date();

  $("#today-label").textContent = now.toLocaleDateString("pt-BR",{
    weekday:"long",
    day:"numeric",
    month:"long"
  }).toUpperCase();

  let day = getDay(todayISO());

  if(!day){
    day = plan.find(d => d.date >= todayISO()) || plan[plan.length-1];
  }

  $("#focus-date-title").textContent = formatDate(day.date,{
    weekday:"long",
    day:"numeric",
    month:"long"
  });

  renderTaskList($("#today-tasks"),day);

  $("#subject-bars").innerHTML = subjects.map(([name,pct]) => `
    <div class="subject-row">
      <div class="subject-meta">
        <span>${escapeHTML(name)}</span>
        <span>${pct}%</span>
      </div>
      <div class="subject-track">
        <div class="subject-fill" style="width:${pct*100/15}%"></div>
      </div>
    </div>
  `).join("");
}

function renderCalendar(){
  const year = calendarMonth.getFullYear();
  const month = calendarMonth.getMonth();

  $("#calendar-month").textContent = calendarMonth.toLocaleDateString("pt-BR",{
    month:"long",
    year:"numeric"
  });

  const first = new Date(year,month,1);
  const offset = (first.getDay()+6)%7;
  const start = new Date(year,month,1-offset);
  const daysHTML = [];

  for(let i=0;i<42;i++){
    const date = new Date(start);
    date.setDate(start.getDate()+i);

    const iso = isoDate(date);
    const day = getDay(iso);
    const sameMonth = date.getMonth() === month;
    const classes = ["calendar-day"];

    if(!sameMonth) classes.push("outside");
    if(day) classes.push("has-plan");
    if(day && dayDone(day)) classes.push("all-done");
    if(iso === selectedDate) classes.push("selected");
    if(iso === todayISO()) classes.push("today");

    const short = day
      ? day.main.replace(" + ","/").replace("Prova antiga da UFPR","Simulado").replace("Simulado UFPR completo","Simulado").replace("DIA DA UFPR","PROVA")
      : "";

    daysHTML.push(`
      <button
        class="${classes.join(" ")}"
        data-date="${iso}"
        ${day ? "" : "aria-label"}
        ="${day ? escapeHTML(day.main) : formatDate(iso,{day:"numeric",month:"long"})}"
        ${day ? "" : "disabled"}
      >
        <span class="day-number">${date.getDate()}</span>
        ${day ? `<span class="day-subject">${escapeHTML(short)}</span>` : ""}
      </button>
    `);
  }

  $("#calendar-days").innerHTML = daysHTML.join("");

  $("#calendar-days").querySelectorAll("[data-date]").forEach(btn => {
    btn.addEventListener("click",() => {
      selectedDate = btn.dataset.date;
      renderCalendar();
    });
  });

  renderSelectedDay();
}

function renderSelectedDay(){
  const day = getDay(selectedDate);

  $("#selected-date-title").textContent = formatDate(selectedDate,{
    weekday:"long",
    day:"numeric",
    month:"long"
  });

  $("#selected-day-badge").textContent = day
    ? `${plan.indexOf(day)+1} / ${plan.length}`
    : "FORA DO PLANO";

  const container = $("#selected-day-content");

  if(!day){
    container.innerHTML = `
      <div class="empty-state">
        Este dia não tem tarefas cadastradas no cronograma.<br>
        Escolha uma data entre 12 de outubro e 1º de novembro.
      </div>`;
    return;
  }

  const doneCount = day.tasks.filter((_,i) =>
    isDone(taskKey(plan.indexOf(day),i))
  ).length;

  container.innerHTML = `
    <p class="day-summary">
      <strong>${escapeHTML(day.main)}</strong><br>
      ${escapeHTML(day.topics)}<br>
      Segundo bloco: ${escapeHTML(day.second)}<br>
      ${doneCount} de ${day.tasks.length} tarefas concluídas.
    </p>
    <div id="selected-tasks" class="task-list"></div>
  `;

  renderTaskList($("#selected-tasks"),day);
}

function renderErrors(){
  $("#error-count").textContent = `${state.errors.length} ${
    state.errors.length === 1 ? "registro" : "registros"
  }`;

  const container = $("#error-list");

  if(!state.errors.length){
    container.innerHTML = `
      <div class="empty-state">
        Seu caderno ainda está vazio.<br>
        Depois de resolver questões, registre aqui os erros que merecem uma segunda visita.
      </div>`;
    return;
  }

  container.innerHTML = state.errors.map(err => `
    <article class="error-card">
      <div>
        <h4>${escapeHTML(err.subject)} · ${escapeHTML(err.topic)}</h4>
        <p>
          <strong>Revisar:</strong> ${escapeHTML(err.review)}<br>
          <strong>Registrado:</strong> ${escapeHTML(err.date)}
        </p>
        <span class="error-type">${escapeHTML(err.type)}</span>
      </div>
      <div class="error-actions">
        <button class="small-button" data-review="${err.id}">
          ${err.reviewed ? "✓ Revisado" : "Marcar revisado"}
        </button>
        <button class="small-button" data-delete="${err.id}">Excluir</button>
      </div>
    </article>
  `).join("");

  container.querySelectorAll("[data-review]").forEach(btn => {
    btn.addEventListener("click",() => {
      const err = state.errors.find(e => e.id === btn.dataset.review);

      if(err){
        err.reviewed = !err.reviewed;
        saveState();
        renderErrors();
        showToast(err.reviewed ? "Revisão marcada como feita." : "Revisão reaberta.");
      }
    });
  });

  container.querySelectorAll("[data-delete]").forEach(btn => {
    btn.addEventListener("click",() => {
      state.errors = state.errors.filter(e => e.id !== btn.dataset.delete);
      saveState();
      renderErrors();
      showToast("Registro excluído.");
    });
  });
}

function renderAll(){
  renderStats();
  renderDashboard();

  if(!$("#calendar-view").classList.contains("hidden")){
    renderCalendar();
  }

  if(!$("#errors-view").classList.contains("hidden")){
    renderErrors();
  }
}

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click",() => setView(btn.dataset.view));
});

$("#today-button").addEventListener("click",() => {
  let day = getDay(todayISO()) || plan.find(d => d.date >= todayISO()) || plan[plan.length-1];

  selectedDate = day.date;
  calendarMonth = new Date(
    parseISO(day.date).getFullYear(),
    parseISO(day.date).getMonth(),
    1
  );

  setView("calendar");
});

$("#open-calendar").addEventListener("click",() => setView("calendar"));

$("#prev-month").addEventListener("click",() => {
  calendarMonth = new Date(
    calendarMonth.getFullYear(),
    calendarMonth.getMonth()-1,
    1
  );
  renderCalendar();
});

$("#next-month").addEventListener("click",() => {
  calendarMonth = new Date(
    calendarMonth.getFullYear(),
    calendarMonth.getMonth()+1,
    1
  );
  renderCalendar();
});

$("#error-form").addEventListener("submit",event => {
  event.preventDefault();

  state.errors.unshift({
    id:`e${Date.now()}`,
    subject:$("#error-subject").value,
    topic:$("#error-topic").value.trim(),
    type:$("#error-type").value,
    review:$("#error-review").value.trim(),
    date:new Date().toLocaleDateString("pt-BR"),
    reviewed:false
  });

  saveState();
  event.target.reset();
  renderErrors();
  showToast("Erro salvo no seu caderno.");
});

$("#reset-button").addEventListener("click",() => {
  if(confirm("Tem certeza de que deseja apagar todas as tarefas concluídas e todos os registros de erros? Essa ação não pode ser desfeita.")){
    state = {completed:{},errors:[]};
    saveState();
    renderAll();
    showToast("Progresso reiniciado.");
  }
});

renderAll();