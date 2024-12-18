// Data for projects
const projects = [
    {
        name: "Project 1",
        description: "An innovative app for managing personal finances with stunning UI/UX.",
        image: "Webstie Image - 3.png",
        link: "https://ashishroy1724.github.io/finance-manager.github.io/"
    },
    {
        name: "Project 2",
        description: "A cutting-edge e-commerce website featuring seamless shopping experiences.",
        image: "Website Image 1.png",
        link: "https://fragranceofperfume.com/"
    },
    {
        name: "Project 3",
        description: "A to-do list website made with the help HTML, CSS, Javascript.",
        image: "Website Image - 6.png",
        link: "https://ashishroy1724.github.io/to-do-list.github.io/"
    },
    {
        name: "Project 4",
        description: "A mortgage broker platform made using Wix Studio.",
        image: "Website Image - 7.png",
        link: "https://ashishproject78782.wixsite.com/mortgage-broker"
    },
    {
        name: "Project 5",
        description: "A food delivery app designed with Figma to enhance user experience.",
        image: "Website Image - 8.png",
        link: "https://www.figma.com/design/zssyr9XmKmsraEsLCOFcv2/Food-Delivery-App?node-id=0-1&t=FihDTXcHy9CfDA4v-1"
    },
    // Add more projects as needed
];

// Generate project cards dynamically in sequential order
function generateProjects() {
    const projectContainer = document.querySelector('.explore-projects');

    // Loop through each project in the array (in sequential order)
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.name}">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Visit Project</a>
        `;
        
        projectContainer.appendChild(projectCard);
    });
}

// Call the function to generate the projects on page load
document.addEventListener('DOMContentLoaded', generateProjects);
