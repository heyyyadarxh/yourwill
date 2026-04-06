// ===== SAFE SELECTORS (won’t break if element missing) =====
const labelInput = document.querySelector("#labelInput");
const labelPreview = document.querySelector("#labelPreview");
const colorPicker = document.querySelector("#colorPicker");
const bottleImage = document.querySelector("#bottleImage");
const form = document.querySelector("#orderForm");

// ===== LABEL TEXT UPDATE =====
if (labelInput && labelPreview) {
    labelInput.addEventListener("input", () => {
        const text = labelInput.value.trim();
        labelPreview.innerText = text || "Your Label Here";
    });
}

// ===== LABEL COLOR CHANGE =====
if (colorPicker && labelPreview) {
    colorPicker.addEventListener("input", () => {
        labelPreview.style.color = colorPicker.value;
    });
}

// ===== BOTTLE CHANGE FUNCTION =====
function changeBottle(type) {
    if (!bottleImage) return;

    if (type === "wine") {
        bottleImage.src = "images/wine.png";
    } else if (type === "whiskey") {
        bottleImage.src = "images/whiskey.png";
    } else if (type === "vodka") {
        bottleImage.src = "images/vodka.png";
    } else {
        bottleImage.src = "images/default.png";
    }
}

// ===== RESET LABEL =====
function resetLabel() {
    if (!labelInput || !labelPreview) return;

    labelInput.value = "";
    labelPreview.innerText = "Your Label Here";
    labelPreview.style.color = "#000";
}

// ===== FORM SUBMIT =====
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const label = labelInput?.value.trim();

        if (!label) {
            alert("Enter a label name first!");
            return;
        }

        alert("Order placed successfully 🍾");
        form.reset();
        resetLabel();
    });
}
