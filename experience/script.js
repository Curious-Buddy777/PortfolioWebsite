$(document).ready(function () {

    // ===== Navbar Toggle =====
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });

    // ===== EMAILJS Contact Form Submission =====
    $("#contact-form").submit(function (event) {
        emailjs.init("6khShGbIDgsbowCn7");

        emailjs.sendForm('service_so51enn', 'template_q66sxvd', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });

        event.preventDefault(); // Prevent default form submit
    });

});


// ===== Scroll Reveal Animation =====
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

// Scroll Effects for Experience Section
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

// ===== Tawk.to Live Chat Integration =====


// ===== Developer Mode Blocker =====
document.onkeydown = function (e) {
    if (e.keyCode == 123) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
};

// ===== Tab Title & Favicon Change on Visibility =====
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Experience | Portfolio Sohan Bhattacharya";
        $("#favicon").attr("href", "/assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "/assets/images/favhand.png");
    }
});
