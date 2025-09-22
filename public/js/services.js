import { servicesSection } from "./data-json.js";

let servicesSectionHTML = '';

servicesSection.forEach((servicesCard) => {
    servicesSectionHTML += 
    `
    <div class="service-card">
    <img src="/images/${servicesCard.serviceImage}" alt="service-image/icon" class="service-photo">
        <h3>${servicesCard.h3Heading}</h3>
            <p>${servicesCard.pContent}</p>
    </div>
    `;
    
});

document.querySelector(".services-grid").innerHTML = servicesSectionHTML;