function toggleContent(id) {
    const content = document.getElementById(id);
 
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; 
    } else {
        content.style.display = "none";
    }
}

function copyLink() {
    const link = document.getElementById('invite-link');
    link.select();
    document.execCommand('copy');
    alert('Link copiato negli appunti!');
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
