document.getElementById("updateNameBtn").addEventListener("click", function () {
    let newName = prompt("Enter a new name:");
    if (newName) {
        document.getElementById("profileName").textContent = newName;
    }
});

document.getElementById("updateRoleBtn").addEventListener("click", function () {
    let newRole = prompt("Enter a new role:");
    if (newRole) {
        document.getElementById("profileRole").textContent = newRole;
    }
});

document.getElementById("toggleStatusBtn").addEventListener("click", function () {
    document.getElementById("profileCard").classList.toggle("active-status");
});

document.getElementById("changeImageBtn").addEventListener("click", function () {
    let newImageURL = prompt("Enter image URL:");
    if (newImageURL) {
        document.getElementById("profileImage").src = newImageURL;
    }
});
