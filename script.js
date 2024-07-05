document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in effect for the About section
    const aboutSection = document.querySelector('.about-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(aboutSection);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in effect for the Education section
    const educationSection = document.querySelector('.education-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                educationSection.classList.add('fade-out');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(educationSection);
});


document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in effect for the Services section
    const servicesSection = document.querySelector('.services-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                servicesSection.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(servicesSection);
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in effect for the Skills section
    const skillsSection = document.querySelector('.skills-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsSection.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(skillsSection);
});

// JavaScript to toggle visibility of Quotes section
document.addEventListener("DOMContentLoaded", function() {
    const quotesSection = document.getElementById("quotes");
    
    // Hide the quotes section initially
    quotesSection.style.display = "none";
    
    // Function to toggle visibility when navbar link is clicked
    const quotesNavLink = document.querySelector('a[href="#quotes"]');
    quotesNavLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        quotesSection.style.display = "block";
        funFactsSection.style.display = "none";
        // Scroll to the quotes section if needed
        quotesSection.scrollIntoView({ behavior: "smooth" });
    });
});


// JavaScript to toggle visibility of Fun Facts section
document.addEventListener("DOMContentLoaded", function() {
    const funFactsSection = document.getElementById("fun-facts");
    
    // Hide the fun facts section initially
    funFactsSection.style.display = "none";
    
    // Function to toggle visibility when navbar link is clicked
    const funFactsNavLink = document.querySelector('a[href="#fun-facts"]');
    funFactsNavLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        funFactsSection.style.display = "block";
        quotesSection.style.display = "none";
        // Scroll to the fun facts section if needed
        funFactsSection.scrollIntoView({ behavior: "smooth" });
    });
});


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

document.getElementById('back-to-top').addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});




document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
    // Here I wll add AJAX call to handle form submission
});






