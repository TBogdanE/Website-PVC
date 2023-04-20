function animateValue(obj, start, end, duration, txt) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = `${Math.floor(progress * (end - start) + start)} ${txt}`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const app = document.getElementById("numsctprjnum");
  const exp = document.getElementById("numsctexpnum");
  const cli = document.getElementById("numscthappynum");

  window.addEventListener("scroll", animateValue(app, 0, 200, 3000, 'de proiecte'));
  window.addEventListener("scroll", animateValue(exp, 0, 10, 3000, 'ani'));
  window.addEventListener("cli", animateValue(cli, 0, 100, 3000, 'de clienti fericiti'));