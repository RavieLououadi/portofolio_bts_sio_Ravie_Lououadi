document.addEventListener("DOMContentLoaded",()=>{const cur=location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".nav-link").forEach(a=>{if(a.getAttribute("href")===cur)a.classList.add("active")});const f=document.getElementById("contactForm");if(f)f.addEventListener("submit",e=>{e.preventDefault();const n=document.getElementById("name").value,e1=document.getElementById("email").value,s=document.getElementById("subject").value,m=document.getElementById("message").value;location.href=`mailto:ravie.lououadi.fr@gmail.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(`Bonjour Ravie,\n\nNom : ${n}\nEmail : ${e1}\n\n${m}`)}`;document.getElementById("status").textContent="Votre messagerie va s’ouvrir avec le message préparé."})});

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