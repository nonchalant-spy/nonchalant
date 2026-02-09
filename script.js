const text = [
  "🌸 Dear Akku,",
  "You were born on a beautiful Tuesday,",
  "2nd August 2011 ✨",
  "And since then, you’ve made my life brighter 💖",
  "You are not just my best friend,",
  "you are the sister my heart chose 💕",
  "Thank you for every laugh 😂",
  "every late talk 🤍",
  "and every memory we share ✨",
  "I promise I’ll always stand by you 💝",
  "Happy Birthday, Akku 🎂🎀"
];

let index = 0;

function startSurprise() {
  document.getElementById("message").classList.remove("hidden");
  document.getElementById("music").play();
  typeText();
  confetti();
}

function typeText() {
  if (index < text.length) {
    const p = document.createElement("p");
    p.innerText = text[index];
    document.getElementById("message").appendChild(p);
    index++;

    // auto-scroll as each line appears
    p.scrollIntoView({ behavior: "smooth", block: "end" });

    setTimeout(typeText, 700);
  }
}

/* 🎂 Countdown Timer */
function updateCountdown() {
  const birthday = new Date("August 2, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff <= 0) {
    document.getElementById("timer").innerHTML = "🎉 IT’S AKKU’S BIRTHDAY TODAY 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${days} days ${hours}h ${minutes}m ${seconds}s 💕`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* 🎊 Confetti */
function confetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 160 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 3,
    d: Math.random() * 10,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff4d88";
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    update();
  }

  function update() {
    pieces.forEach(p => {
      p.y += Math.cos(p.d) + 2;
      if (p.y > canvas.height) p.y = 0;
    });
  }

  setInterval(draw, 20);
}
function calculateAge() {
  const birthDate = new Date("August 2, 2011");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById("age").innerText = age;
}

calculateAge();
