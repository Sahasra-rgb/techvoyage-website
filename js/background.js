let angle = 135;

setInterval(() => {
  angle += 0.2;

  document.body.style.background = `
    radial-gradient(circle at 20% 30%, rgba(0, 240, 255, 0.06), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(56, 189, 248, 0.06), transparent 40%),
    linear-gradient(${angle}deg, #0a0f1f, #0f172a)
  `;
}, 50);