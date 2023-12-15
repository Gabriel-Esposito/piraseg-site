document.addEventListener("DOMContentLoaded", function() {
    const messages = document.querySelectorAll(".ballon");
    const smart = document.querySelector(".smartphone");
    const explanation = document.querySelector(".Explanation");    
        setTimeout(() => {
            explanation.style.opacity = 1;
            explanation.style.transform = "translateX(0)"
            smartphone();
        }, 500)
        function smartphone()
        {
            setTimeout(() => {
                smart.style.opacity = 1;
                smart.style.transform = "translateX(0)";
                ballons()
            }, 800)
        }
        function ballons()
        {
            messages.forEach((message, index) => {
            //adiciona uma classe para iniciar a anim
            setTimeout(() => {
                message.style.opacity = 1;
                message.style.transform = "translateX(0)";
            }, index * 900)
        });
        }
});