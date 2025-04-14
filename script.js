window.onload = function() {
  const class_name = document.getElementsByClassName('class-name')[0].textContent.trim();
  window.open(`https://app.penmark.jp/syllabus/keio/lectures?title=${class_name}`);
  window.open(`https://campus.nikki.ne.jp/university/search/569/?lesson_name=${class_name}`);
};