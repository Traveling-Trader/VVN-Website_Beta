// Функція для завантаження HTML частин
async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const text = await response.text();
            document.getElementById(id).innerHTML = text;
        } else {
            console.error('File not found:', file);
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Запускаємо завантаження, коли сторінка відкрилась
document.addEventListener("DOMContentLoaded", function() {
    loadComponent("global-header", "layouts/header.html");
    loadComponent("global-footer", "layouts/footer.html");
});
