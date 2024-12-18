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
        description: "A to-do list website.",
        image: "Website Image - 6.png",
        link: "https://ashishroy1724.github.io/to-do-list.github.io/"
    },
    {
        name: "Project 4",
        description: "A social media platform to connect with friends and share updates.",
        image: "project4.png",
        link: "https://example.com/project4"
    },
    {
        name: "Project 5",
        description: "A task management app for teams to collaborate efficiently.",
        image: "project5.png",
        link: "https://example.com/project5"
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
            <a href="${project.link}" target="_blank">Visit Website</a>
        `;
        
        projectContainer.appendChild(projectCard);
    });
}

// Call the function to generate the projects on page load
document.addEventListener('DOMContentLoaded', generateProjects);
