// ===============================
// 🌟 EmailJS Initialization
// ===============================
(function(){
  emailjs.init("1KsS3HAh7ZDByWSCU"); // 🔴 Replace with your Public Key
})();


// ===============================
// 🌟 AOS Animation Initialization
// ===============================
AOS.init();


// ===============================
// ✨ Typing Effect (Hero Section)
// ===============================
const text = "Web Developer | Java | Python";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}

// Reset before typing (prevents duplicate text)
document.getElementById("typing").innerHTML = "";
typing();


// ===============================
// 📩 EmailJS Contact Form
// ===============================
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("mounikatummala15", "template_olooy8f", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      this.reset();
    })
    .catch((error) => {
      alert("❌ Failed to send message.");
      console.error(error);
    });
});


// ===============================
// 🚀 Smooth Scroll Navigation
// ===============================
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ===============================
// 🌙 Dark Mode Toggle
// ===============================
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";

document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});