import { socials } from "./data-json.js";

let footerSectionHTML = '';

socials.forEach((socials) => {
    footerSectionHTML += 
    `
    <a href="${socials.socialLink}" target="_blank">${socials.socialName}</a>
    `;    
});

document.querySelector(".social-links").innerHTML = footerSectionHTML;