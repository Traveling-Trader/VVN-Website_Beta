// Автоматичне прибирання .html з адреси
(function() {
    // Якщо адреса закінчується на .html
    if (window.location.pathname.endsWith('.html')) {
        // Створюємо нову адресу без розширення
        var newUrl = window.location.pathname.replace('.html', '');
        
        // Миттєво підміняємо адресу в браузері без перезавантаження
        window.history.replaceState(null, null, newUrl);
    }
})();

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
