document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.setAttribute('aria-expanded', 'false');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
            mobileMenuButton.setAttribute('aria-expanded', isExpanded);
        });

        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.setAttribute('aria-expanded', 'false');
        
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
           
            accordionButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.setAttribute('aria-expanded', 'false');
                    otherButton.nextElementSibling.classList.add('hidden');
                }
            });

            button.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('hidden');
        });
    });

    const modal = document.getElementById('application-modal');
    const openModalButtons = document.querySelectorAll('#open-modal-button, #open-modal-button-mobile, .apply-now-button');
    const closeModalButton = document.getElementById('close-modal-button');

    if (modal && openModalButtons.length > 0 && closeModalButton) {
        
        const openModal = () => {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.classList.add('modal-open'); 
        };
       
        const closeModal = () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.classList.remove('modal-open'); 
        };
     
        openModalButtons.forEach(button => {
            button.addEventListener('click', openModal);
        });

        closeModalButton.addEventListener('click', closeModal);

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
});
