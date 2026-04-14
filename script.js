const text = document.querySelector(".text");
const txt = ["Full Stack Developer","Problem-Solving"];
        
        let i = 0;
        let timer;

        function typingEffect() {
            let word = txt[i].split("");
            var loopTyping = function() {
                if (word.length > 0) {
                    text.innerHTML += word.shift();
                } else {
                    setTimeout(deletingEffect, 2000);
                    return false;
                }
                timer = setTimeout(loopTyping, 100);
            };
            loopTyping();
        }

        function deletingEffect() {
            let word = txt[i].split("");
            var loopDeleting = function() {
                if (word.length > 0) {
                    word.pop();
                    text.innerHTML = word.join("");
                } else {
                    if (txt.length > (i + 1)) {
                        i++;
                    } else {
                        i = 0;
                    }
                    typingEffect();
                    return false;
                }
                timer = setTimeout(loopDeleting, 50);
            };
            loopDeleting();
        }

        typingEffect();

        function hamburg(){
            const navbar = document.querySelector(".dropdown");
            navbar.style.transform = "translateY(0px)";
        }
        function cancel(){
            const navbar = document.querySelector(".dropdown");
            navbar.style.transform = "translateY(-100%)";
        }
        const menuBtn = document.querySelector(".hamburg");
const dropdown = document.querySelector(".dropdown");

menuBtn.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

/* OPTIONAL: click outside to close */
document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
    }
});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
    } else {
        alert("Error sending message!");
    }
});
