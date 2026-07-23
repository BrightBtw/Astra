document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("constellations");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = [];
  const maxDistant = 120;

  const isMobile = window.innerWidth < 768;

  const starsCount = isMobile ? 20 : 50;

  for (let i = 0; i < starsCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,

      alpha: Math.random() * 0.4 + 0.4,
      twinkleSpeed: Math.random() * 0.003 + 0.001,
    });
  }

  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star) => {
      star.x += star.vx;
      star.y += star.vy;

      if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
      if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

      star.alpha += star.twinkleSpeed;
      if (star.alpha > 0.9 || star.alpha < 0.2) {
        star.twinkleSpeed *= -1;
      }

      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      context.fill();
    });

    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistant) {
          let value = distance / maxDistant;
          const alpha = 1 - value;
          context.beginPath();
          context.moveTo(stars[i].x, stars[i].y);
          context.lineTo(stars[j].x, stars[j].y);
          context.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.15})`;
          context.lineWidth = 1;
          context.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
});
