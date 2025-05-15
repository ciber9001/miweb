document.addEventListener('DOMContentLoaded', function () {
    const skillItems = document.querySelectorAll('.skill-item');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');
    const closeButton = document.querySelector('.close-button');

    // Datos del popup para cada skill
    const skillTexts = {
        "Ciberseguridad / Hacking Ético": "- Detección y mitigación de vulnerabilidades en redes corporativas \n- Implementación de medidas defensivas fente a ciberataques\n- Simulación de ataques para evaluar la resilencia del sistema",
        "Certificaciones": " - Formación continua en ciberseguridad ofensiva y defensiva\n - Certificaciones reconocidas internacionalmente en seguridad informática\n - Preparación y superación de exámenes como ComPTIA Security+ y eJPT Junior Pentester",
        "Programación": " - Automatización de tareas de análisis y pentesting con Python\n - Desarrollo de scripts para scaneo de vulnerabilidades\n - Integración de Python en entornos de hacking ético y pruebas de intrusión"
    };
    
    

    skillItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const skillTitle = this.getAttribute('data-skill');
            popupTitle.textContent = skillTitle;
            popupText.textContent = skillTexts[skillTitle] || "No hay información adicional disponible.";
            popup.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
