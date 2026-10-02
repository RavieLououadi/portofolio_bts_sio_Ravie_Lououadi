document.addEventListener("DOMContentLoaded", () => {
    const cur = location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-link").forEach(a => {
        if (a.getAttribute("href") === cur) {
            a.classList.add("active");
        }
    });

    const f = document.getElementById("contactForm");

    if (f) {
        f.addEventListener("submit", e => {
            e.preventDefault();

            const captcha = grecaptcha.getResponse();

            if (captcha.length === 0) {
                document.getElementById("status").textContent =
                    "Veuillez confirmer que vous n'êtes pas un robot.";
                return;
            }

            const n = document.getElementById("name").value;
            const e1 = document.getElementById("email").value;
            const s = document.getElementById("subject").value;
            const m = document.getElementById("message").value;

            location.href = `mailto:ravie.lououadi.fr@gmail.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(`Bonjour Ravie,\n\nNom : ${n}\nEmail : ${e1}\n\n${m}`)}`;

            document.getElementById("status").textContent =
                "Votre messagerie va s’ouvrir avec le message préparé.";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {

    

    const skills = document.querySelectorAll(".skill-chip");

    skills.forEach((skill) => {

        skill.addEventListener("click", () => {

            
            const alreadyOpen = skill.classList.contains("active");

            
            skills.forEach((item) => {
                item.classList.remove("active");
            });

            
            if (!alreadyOpen) {

                skill.classList.add("active");

                
                const level = skill.dataset.level;

                
                skill.style.setProperty(
                    "--skill-level",
                    `${level}%`
                );
            }

        });

    });

});


// Flèches de navigation sur toutes les pages
document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.createElement("div");
    navigation.className = "scroll-buttons";

    navigation.innerHTML = `
        <button type="button" class="scroll-btn" id="scrollTop"
                aria-label="Remonter en haut">
            <i class="bi bi-arrow-up"></i>
        </button>

        <button type="button" class="scroll-btn" id="scrollBottom"
                aria-label="Descendre en bas">
            <i class="bi bi-arrow-down"></i>
        </button>
    `;

    document.body.appendChild(navigation);

    document.getElementById("scrollTop").addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    document.getElementById("scrollBottom").addEventListener("click", () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    });
});