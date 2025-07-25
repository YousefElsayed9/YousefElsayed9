const counters = document.querySelectorAll(".stat-number");
let counted = false;

const animateCounter = (el) => {
    const target = +el.getAttribute("data-target");
    const duration = 2000;
    const stepTime = 10;
    let current = 0;
    const step = Math.ceil(target / (duration / stepTime));

    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target.toLocaleString();
            clearInterval(interval);
        } else {
            el.textContent = current.toLocaleString();
        }
    }, stepTime);
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
            counters.forEach(counter => animateCounter(counter));
            counted = true;
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));



const filterLinks = document.querySelectorAll('.filter-link');
const workCards = document.querySelectorAll('.work-card');

filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();


        filterLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const filter = link.getAttribute('data-filter');

        workCards.forEach(card => {
            const category = card.getAttribute('data-category');


            if (filter === 'all' || category.includes(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});



document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // جلب القيم
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // عناصر الخطأ
    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const errorSubject = document.getElementById("error-subject");
    const errorMessage = document.getElementById("error-message");

    let isValid = true;

    // التحقق من الاسم
    if (!name) {
        errorName.textContent = "The field is required.";
        isValid = false;
    } else {
        errorName.textContent = "";
    }

    // التحقق من الإيميل
    if (!email) {
        errorEmail.textContent = "The field is required.";
        isValid = false;
    } else {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
        if (!email.match(emailPattern)) {
            errorEmail.textContent = "The e-mail address entered is invalid.";
            isValid = false;
        } else {
            errorEmail.textContent = "";
        }
    }

    // التحقق من العنوان
    if (!subject) {
        errorSubject.textContent = "The field is required.";
        isValid = false;
    } else {
        errorSubject.textContent = "";
    }

    // التحقق من الرسالة
    if (!message) {
        errorMessage.textContent = "The field is required.";
        isValid = false;
    } else {
        errorMessage.textContent = "";
    }

    // إذا كل شيء تمام
    if (isValid) {
        this.reset();
    }
});