const modal =
document.querySelector(".modal");
const closeBtn =
document.querySelector(".close");

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        titleInput.value = "";
        letterInput.value = "";
        dateInput.value = "";
        modal.style.display = "none";
    }
});

const openBtn =
document.querySelector(".hero button");

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

const titleInput =
document.getElementById("title");
const letterInput =
document.getElementById("letter");
const dateInput =
document.getElementById("unlockDate");
const saveBtn =
document.getElementById("saveBtn");

const toast = document.getElementById("toast");

closeBtn.addEventListener("click", () => {
    titleInput.value = "";
    letterInput.value = "";
    dateInput.value = "";
    modal.style.display = "none";
});

saveBtn.addEventListener("click", () => {

    const title = titleInput.value.trim();
    const letter = letterInput.value.trim();
    const unlockDate = dateInput.value;

    if (!title || !letter || !unlockDate) {
        alert("Please fill in all the required fields.");
        return;
    }

    const capsule = {
        title: title,
        letter: letter,
        unlockDate: unlockDate
    };

   let capsules = JSON.parse(localStorage.getItem("capsules")) || [];
   capsules.push(capsule);
   localStorage.setItem("capsules", JSON.stringify(capsules));

   titleInput.value = "";
   letterInput.value = "";
   dateInput.value = "";

modal.style.display = "none";

displayCapsules();

toast.classList.add("show");
setTimeout(() => {
    toast.classList.remove("show");
}, 3000);

});

function displayCapsules() {

    const saved = JSON.parse(localStorage.getItem("capsules")) || [];

    if (saved.length === 0) {
        document.getElementById("capsuleList").innerHTML =
        "<p>No capsules yet.</p>";
        return;
    }

    let html = "";

    saved.forEach(capsule => {

        const today = new Date();
        const unlockDate = new
        Date(capsule.unlockDate);

        let message;

        if (today >= unlockDate) {
            message = `  
               <p class="capsule-letter">
                   ${capsule.letter}
               </p>
            `;
        } else {
            message = `
            <p class="locked">
                 Locked until $
        {capsule.unlockDate}
            </p>
            
          `;
        }

        html += `
        <div class="capsule-card">
            
            <div class="capsule-header">
                <h3>${capsule.title}</h3>
            </div> 

            <p class="capsule-date">
                 Unlocks on ${capsule.unlockDate}
    
            </p>
            ${message}

            <p class="capsule-letter">
               ${capsule.letter}
            </p>

        </div>
        `;

    });

    document.getElementById("capsuleList").innerHTML = html;
}

displayCapsules();
