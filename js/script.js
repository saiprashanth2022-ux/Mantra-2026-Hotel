document.addEventListener('DOMContentLoaded', () => {
    
    // ===================================================
    // MODULE 1: THREE DOTS & SLIDE-BAR COMPONENT INTERACTION
    // ===================================================
    const sidebarToggle = document.getElementById('sidebarToggle');
    const slideBar = document.getElementById('slideBar');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    if (sidebarToggle && slideBar && sidebarClose && sidebarOverlay) {
        sidebarToggle.addEventListener('click', () => {
            slideBar.classList.add('active');
            sidebarOverlay.classList.add('active');
        });

        const closeMenuArray = [sidebarClose, sidebarOverlay];
        closeMenuArray.forEach(element => {
            element.addEventListener('click', () => {
                slideBar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
            });
        });
    }

    // ===================================================
    // MODULE 2: HOMEPAGE CAROUSEL INTERACTION SLIDER
    // ===================================================
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-image');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    if (track && slides.length && prevButton && nextButton) {
        let currentIndex = 0;
        const maxSlides = slides.length;

        function updateSlidePosition() {
            const slideOffset = currentIndex * 100;
            track.style.transform = `translateX(-${slideOffset / maxSlides}%)`;
        }

        nextButton.addEventListener('click', () => {
            if (currentIndex < maxSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; 
            }
            updateSlidePosition();
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = maxSlides - 1; 
            }
            updateSlidePosition();
        });
    }

    // ===================================================
    // MODULE 3: INTERACTIVE LUXURY RESERVATION FORM VALIDATION
    // ===================================================
    const bookingForm = document.getElementById('hotelBookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const guestName = document.getElementById('fullName').value;
            const selectedAccommodations = document.getElementById('roomType').options[document.getElementById('roomType').selectedIndex].text;

            alert(`Thank you, ${guestName}.\n\nYour luxury booking request for the "${selectedAccommodations}" has been successfully processed into our systems.\n\nOur concierge desk will email validation instructions shortly.`);
            bookingForm.reset();
        });
    }

    // ===================================================
    // MODULE 4: WEBSITE LOGIN & REGISTRATION CONTROLLER TRACKS
    // ===================================================
    const tabLoginBtn = document.getElementById('tabLoginBtn');
    const tabRegisterBtn = document.getElementById('tabRegisterBtn');
    const loginFormContainer = document.getElementById('loginFormContainer');
    const registerFormContainer = document.getElementById('registerFormContainer');

    if (tabLoginBtn && tabRegisterBtn && loginFormContainer && registerFormContainer) {
        tabLoginBtn.addEventListener('click', () => {
            tabLoginBtn.classList.add('active');
            tabRegisterBtn.classList.remove('active');
            loginFormContainer.classList.add('active');
            registerFormContainer.classList.remove('active');
        });

        tabRegisterBtn.addEventListener('click', () => {
            tabRegisterBtn.classList.add('active');
            tabLoginBtn.classList.remove('active');
            registerFormContainer.classList.add('active');
            loginFormContainer.classList.remove('active');
        });
    }

    if (loginFormContainer) {
        loginFormContainer.addEventListener('submit', (e) => {
            e.preventDefault();
            const identityCredential = document.getElementById('loginUserField').value;
            alert(`Welcome back to Grand Horizon.\n\nAuthentication via (${identityCredential}) was successful. Launching your private concierge member dashboard panel...`);
            loginFormContainer.reset();
        });
    }

    if (registerFormContainer) {
        registerFormContainer.addEventListener('submit', (e) => {
            e.preventDefault();
            const firstName = document.getElementById('regFirstName').value;
            const surname = document.getElementById('regSurname').value;
            const chosenEmail = document.getElementById('regEmail').value;

            alert(`Membership Registered successfully, ${firstName} ${surname}!\n\nYour account file profile has been indexed under email reference: ${chosenEmail}.\n\nYou can now immediately log in using either your Phone Number or Email address.`);
            tabLoginBtn.click();
            registerFormContainer.reset();
        });
    }

    // ===================================================
    // MODULE 5: NEW GALLERY LIGHTBOX MODAL TRIGGER TRACK
    // ===================================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    if (galleryItems.length && lightboxModal && lightboxImg && lightboxCaption && lightboxClose) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const innerImg = item.querySelector('img');
                const innerTitle = item.querySelector('.overlay-text h3');
                
                if (innerImg) {
                    lightboxImg.src = innerImg.src;
                    lightboxImg.alt = innerImg.alt;
                    lightboxCaption.textContent = innerTitle ? innerTitle.textContent : '';
                    lightboxModal.classList.add('active');
                }
            });
        });

        // Click close "X" to turn off modal overlay view cleanly
        lightboxClose.addEventListener('click', () => {
            lightboxModal.classList.remove('active');
        });

        // Close when clicking outside on the dark translucent container
        lightboxModal.addEventListener('click', (event) => {
            if (event.target === lightboxModal) {
                lightboxModal.classList.remove('active');
            }
        });
    }
});