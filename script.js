document.addEventListener('DOMContentLoaded', () => {
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    const rootPage = 'index.html'; 
    const currentPath = window.location.pathname.split('/').pop() || rootPage;

    if (sidebarPlaceholder) {
        fetch('sidebar.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status} for ${response.url}`);
                }
                return response.text();
            })
            .then(data => {
                sidebarPlaceholder.innerHTML = data;
                initializeSidebar();
            })
            .catch(error => {
                console.error("Could not load sidebar:", error);
                sidebarPlaceholder.innerHTML = "<p style='color:red;padding:20px;'>Error loading navigation. Check console.</p>";
            });
    } else {
        console.error("Sidebar placeholder not found!");
    }

    function initializeSidebar() {
        const navLinks = document.querySelectorAll('#sidebar-placeholder .nav-link');
        const submenuParentLinks = document.querySelectorAll('#sidebar-placeholder .has-submenu > .nav-parent-link');

        navLinks.forEach(link => {
            let linkPath = link.getAttribute('href').split('/').pop();
            if (linkPath === "") linkPath = rootPage;

            if (linkPath === currentPath) {
                link.classList.add('active');
                const parentLiWithSubmenu = link.closest('li.has-submenu');
                if (parentLiWithSubmenu) {
                    parentLiWithSubmenu.classList.add('open', 'active-parent');
                    const submenu = parentLiWithSubmenu.querySelector('.submenu');
                    if (submenu) {
                        submenu.style.maxHeight = submenu.scrollHeight + "px";
                    }
                }
            } else {
                link.classList.remove('active');
            }
        });

        submenuParentLinks.forEach(parentLink => {
            parentLink.addEventListener('click', function(e) {
                const parentLi = this.parentElement;
                const submenu = parentLi.querySelector('.submenu');
                let linkPath = this.getAttribute('href').split('/').pop();
                if (linkPath === "") linkPath = rootPage;

                if (submenu && linkPath !== currentPath) {
                    e.preventDefault();
                } else if (!submenu) {
                    return;
                }

                if (submenu) {
                    parentLi.classList.toggle('open');
                    if (parentLi.classList.contains('open')) {
                        submenu.style.maxHeight = submenu.scrollHeight + "px";
                    } else {
                        submenu.style.maxHeight = '0';
                    }
                }
            });
        });
    }

    document.body.addEventListener('click', e => {
        if (e.target.matches('a[href^="#"]:not(.nav-link)')) {
            const link = e.target;
            const targetId = link.getAttribute('href');
            if (targetId.length > 1) {
                const targetElement = document.getElementById(targetId.substring(1));
                if (targetElement) {
                    e.preventDefault();
                    const offsetTop = targetElement.offsetTop - 20;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }
        }
    });
});
