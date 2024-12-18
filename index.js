(function(){
    emailjs.init("d0fxZTUTFfDUM2_kF");
})();

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const serviceID = 'ashishroy'; 
    const templateID = 'template_h18vg4b'; 

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
            form.reset();
        }, (err) => {
            alert('Failed to send the message. Please try again later.');
            console.error('EmailJS Error:', err);
        });
});

document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
});

// List of project data
const projects = [
    { img: "Webstie Image - 3.png", title: "Money Tracker", description: "An innovative app for managing personal finances with stunning UI/UX.", link: "https://ashishroy1724.github.io/finance-manager.github.io/" },
    { img: "Website Image 1.png", title: "E-commerce Website", description: "A cutting-edge e-commerce website featuring seamless shopping experiences.", link: "https://fragranceofperfume.com/" },
    { img: "Website Image - 8.png", title: "Figma Design", description: "A food delivery app designed with Figma to enhance user experience.", link: "https://www.figma.com/design/zssyr9XmKmsraEsLCOFcv2/Food-Delivery-App?node-id=0-1&t=FihDTXcHy9CfDA4v-1" },
    { img: "Website Image - 6.png", title: "To-do-List", description: "A to-do list website made with the help HTML, CSS, Javascript.", link: "https://ashishroy1724.github.io/to-do-list.github.io/" },
    { img: "Website Image - 7.png", title: "Mortgage Broker", description: "A mortgage broker platform made using Wix Studio.", link: "https://ashishproject78782.wixsite.com/mortgage-broker" },
    // Add more projects here
];

let currentPage = 1;
const projectsPerPage = 3;

// Function to display projects based on the current page
function displayProjects() {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = projects.slice(startIndex, endIndex);

    const projectGrid = document.getElementById('project-grid');
    projectGrid.innerHTML = ''; // Clear the current project grid

    currentProjects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        card.innerHTML = `
            <img src="${project.img}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Visit Website</a>
        `;

        projectGrid.appendChild(card);
    });

    // Update the page number display
    document.getElementById('page-number').textContent = `Page ${currentPage}`;

    // Enable/disable buttons based on the current page
    document.querySelector('.prev').disabled = currentPage === 1;
    document.querySelector('.next').disabled = currentPage * projectsPerPage >= projects.length;
}

// Function to change pages with smooth transition
function changePage(direction) {
    // Disable the buttons during the transition to prevent multiple clicks
    document.querySelector('.prev').disabled = true;
    document.querySelector('.next').disabled = true;

    // Apply the transition by shifting the grid
    const projectGrid = document.getElementById('project-grid');
    projectGrid.style.transform = `translateX(-100%)`;

    // Wait for the transition to complete before changing the page
    setTimeout(() => {
        currentPage += direction;
        displayProjects();

        // Reset the grid position for the next transition
        projectGrid.style.transform = `translateX(0)`;

        // Enable the buttons after the transition
        document.querySelector('.prev').disabled = currentPage === 1;
        document.querySelector('.next').disabled = currentPage * projectsPerPage >= projects.length;
    }, 500); // This matches the duration of the transition
}

// Initial display of projects
displayProjects();
