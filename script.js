document.addEventListener('DOMContentLoaded', () => {
    feather.replace();

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => observer.observe(section));

    const navLinks = document.querySelectorAll('nav .nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= section.offsetTop - 100) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    new Typed('#typed-subtitle', {
        strings: ["B.Tech Student", "FIDE Rated Chess Player", "Software Developer", "Problem Solver"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 2000,
    });

    const skillsData = [
        {
            category: 'Programming & Languages',
            skills: [
                { name: 'Java', icon: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
                { name: 'Python', icon: 'https://www.vectorlogo.zone/logos/python/python-icon.svg' },
                { name: 'C/C++', icon: 'https://www.vectorlogo.zone/logos/w3_c/w3_c-icon.svg' },
                { name: 'HTML5', icon: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg' },
                { name: 'CSS3', icon: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg' },
                { name: 'JavaScript', icon: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg' },
            ]
        },
        {
            category: 'Frameworks & Technologies',
            skills: [
                { name: 'Flutter', icon: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg' },
                { name: 'Git', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
                { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
                { name: 'Node.js', icon: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
            ]
        },
        {
            category: 'Tools & Platforms',
            skills: [
                { name: 'VS Code', icon: 'https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg' },
                { name: 'GitHub', icon: 'https://www.vectorlogo.zone/logos/github/github-icon.svg' },
                { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
                { name: 'Android Studio', icon: 'https://www.vectorlogo.zone/logos/android/android-icon.svg' },
            ]
        }
    ];

    const skillsContainer = document.getElementById('skills-container');
    skillsData.forEach(({ category, skills }) => {
        const categoryDiv = document.createElement('div');
        let skillsHTML = skills.map(skill => `
            <div class="stylish-card group p-6 rounded-lg text-center flex flex-col items-center justify-center">
                <img src="${skill.icon}" class="h-16 mb-4 transition-transform duration-300 group-hover:scale-110" alt="${skill.name} Logo">
                <h3 class="text-xl font-semibold text-white mt-auto">${skill.name}</h3>
            </div>
        `).join('');

        categoryDiv.innerHTML = `
            <h3 class="text-2xl font-bold text-center text-sky-300 mb-8">${category}</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                ${skillsHTML}
            </div>
        `;
        skillsContainer.appendChild(categoryDiv);
    });

    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
});
