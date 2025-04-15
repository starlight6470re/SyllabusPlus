window.onload = function() {
  //授業名で評価を確認するボタンを設置
  const class_name = document.getElementsByClassName('class-name')[0].textContent.trim();
  const button_c = document.createElement('button');
  button_c.textContent = '授業名で検索';
  button_c.style.position = 'fixed';
  button_c.style.top = '50px';
  button_c.style.fontSize = '30px';
  button_c.onclick = function() {
    window.open(`https://app.penmark.jp/syllabus/keio/lectures?title=${class_name}`);
    //window.open(`https://campus.nikki.ne.jp/university/search/569/?lesson_name=${class_name}`);
  };
  
  //担当者名で評価を確認するボタンを設置
  const rows = document.querySelectorAll('table tbody tr');
  rows.forEach(row => {
    const th = row.querySelector('th');
    const td = row.querySelector('td');
    if (th && th.textContent.trim() === '担当者名') {
      teacher_name = td.textContent.trim();
    }
  });
  const button_t = document.createElement('button');
  button_t.textContent = '担当者名で検索';
  button_t.style.position = 'fixed';
  button_t.style.top = '100px';
  button_t.style.fontSize = '30px';
  button_t.onclick = function() {
    window.open(`https://app.penmark.jp/syllabus/keio/lectures?teacher=${teacher_name}`);
    //window.open(`https://campus.nikki.ne.jp/university/search/569/?lfname=${teacher_name}`);
  };


  document.body.appendChild(button_t);
  document.body.appendChild(button_c);
};
