const modal =
document.querySelector(".modal");
const closeBtn =
document.querySelector(".close");

closeBtn.addEventListener("click", () => 
{
    modal.style.display = "none";
});

const openBtn =
document.querySelector(".hero button");

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});
 window.addEventListener("click", (e) =>
{
    if (e.target === modal) {
        modal.style.display = "none";
    }
})

const titleInput =
document.getElementById("title");
const letterInput =
document.getElementById("letter");
const dateInput =
document.getElementById("unlockDate");
const saveBtn =
document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => 
{
   const capsule = {
    title: titleInput.value,
    letter: letterInput.value,
    unlockDate: dateInput.value

   };

   localStorage.setItem("capsule", 
JSON.stringify(capsule));

modal.style.display = "none";

displayCapsules();
 
   alert("Capsule saved successfully!");


   });

function displayCapsules() {

    const saved = JSON.parse(localStorage.getItem("capsule"));

    if (!saved) {
        document.getElementById("capsuleList").innerHTML = "<p>No capsules yet.</p>";
        return;
    }

    document.getElementById("capsuleList").innerHTML = `
        <div class="capsule-card">
            <h3>${saved.title}</h3>
            <p>${saved.letter}</p>
            <p>Unlock Date: ${saved.unlockDate}</p>
        </div>
    `;
}

displayCapsules();
