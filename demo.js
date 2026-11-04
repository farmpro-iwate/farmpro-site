'use strict';
(() => {
  // Demo state lives only in memory. No app API, browser storage, or analytics.
  const today = new Date();
  const dateLabel = (offset = 0) => {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + offset);
    return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
  };
  const cowData = {
    hanako: { name: 'はなこ（耳標 0123）', birth: '2020/04/12', parity: '4産', state: '妊娠鑑定待ち', events: [[-90, '分娩を記録'], [-30, '発情・人工授精を記録'], [0, '妊娠鑑定の予定']] },
    sakura: { name: 'さくら（耳標 0456）', birth: '2019/06/08', parity: '5産', state: '分娩予定', events: [[-285, '発情・人工授精を記録'], [-245, '妊娠鑑定：受胎を確認'], [0, '分娩予定日']] }
  };
  const feedback = document.getElementById('feedback');
  const showScreen = (name, focus = true) => {
    ['today', 'cows', 'sales'].forEach(id => { document.getElementById(id).hidden = id !== name; });
    document.querySelectorAll('.steps button').forEach(button => {
      if (button.dataset.screen === name) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    feedback.textContent = '';
    if (focus) document.getElementById(`${name}-heading`).focus();
  };
  const renderCow = () => {
    const cow = cowData[document.getElementById('cow-select').value];
    document.getElementById('cow-name').textContent = cow.name;
    const facts = document.getElementById('cow-facts');
    facts.replaceChildren();
    [['生年月日', cow.birth], ['産次', cow.parity], ['現在の状態', cow.state]].forEach(([label, value]) => {
      const row = document.createElement('div');
      const dt = document.createElement('dt'); dt.textContent = label;
      const dd = document.createElement('dd'); dd.textContent = value;
      row.append(dt, dd); facts.append(row);
    });
    const history = document.getElementById('cow-history');
    history.replaceChildren();
    cow.events.forEach(([offset, text]) => {
      const li = document.createElement('li');
      const time = document.createElement('time'); time.textContent = dateLabel(offset);
      const description = document.createElement('span'); description.textContent = text;
      li.append(time, description); history.append(li);
    });
  };
  const updateTasks = () => {
    const remaining = document.querySelectorAll('.task-toggle[aria-pressed="false"]').length;
    document.getElementById('remaining').textContent = `未確認 ${remaining}件`;
  };
  const yen = value => `${value.toLocaleString('ja-JP')}円`;
  const form = document.getElementById('sales-form');
  const calculate = (initial = false) => {
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const [sale, fee, transport] = ['sale', 'fee', 'transport'].map(id => document.getElementById(id).valueAsNumber);
    document.getElementById('net').textContent = yen(sale - fee - transport);
    document.getElementById('calculation').textContent = `${yen(sale)} − ${yen(fee)} − ${yen(transport)}`;
    document.getElementById('result-label').textContent = initial ? '見本の差引金額' : '入力した金額での差引金額';
  };
  document.getElementById('today-date').textContent = `${dateLabel()} ／ 見本の予定`;
  document.querySelectorAll('[data-screen]').forEach(button => button.addEventListener('click', () => showScreen(button.dataset.screen)));
  document.querySelectorAll('.task-toggle').forEach(button => button.addEventListener('click', () => {
    const done = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(done));
    button.textContent = done ? '確認済み（戻す）' : '確認済みにする';
    button.closest('.task').classList.toggle('done', done);
    updateTasks();
    feedback.textContent = done ? '体験画面で確認済みにしました。' : '未確認に戻しました。';
  }));
  document.getElementById('cow-select').addEventListener('change', renderCow);
  form.addEventListener('submit', event => { event.preventDefault(); calculate(); });
  form.addEventListener('input', () => {
    document.getElementById('result-label').textContent = '金額が変更されています';
    document.getElementById('net').textContent = '未計算';
    document.getElementById('calculation').textContent = '「差引金額を確認」を押してください。';
  });
  document.getElementById('reset').addEventListener('click', () => {
    form.reset(); calculate(true);
    document.getElementById('cow-select').value = 'hanako'; renderCow();
    document.querySelectorAll('.task-toggle').forEach(button => {
      button.setAttribute('aria-pressed', 'false'); button.textContent = '確認済みにする'; button.closest('.task').classList.remove('done');
    });
    updateTasks(); showScreen('today'); feedback.textContent = '見本データを最初の状態に戻しました。';
  });
  renderCow(); updateTasks(); calculate(true);
})();
