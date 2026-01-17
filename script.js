document.addEventListener("DOMContentLoaded", () => {
  // Map each service key to its title and description
  const serviceContent = {
    "stratey-research": {
      title: "Product Strategy & Research",
      text: "We explore product opportunities through research, experimentation, and long-term strategy. This includes defining product direction, validating assumptions, and establishing the systems and principles that guide development over time. Our research process informs decisions around usability, architecture, and platform scalability as products evolve."
    },
    "ux-systems-design": {
      title: "UX Design & Systems Thinking",
      text: "We design user experiences and interface systems that support clarity, usability, and long-term growth. Our work emphasizes consistency, accessibility, and thoughtful interaction design across digital platforms. Design decisions are made in close alignment with engineering and product strategy to ensure durability and cohesion.lowing our creative consultation, we’ll craft a detailed project proposal tailored to your specific goals and challenges. This proposal outlines our recommended approach, deliverables, timeline, and estimated cost — giving you a clear picture of how we’ll bring your vision to life. It’s both a creative blueprint and a practical plan, designed to align expectations and ensure we start our collaboration with shared clarity and confidence."
    },
    "web-mobile-development": {
      title: "Web & Mobile App Development",
      text: "We build and maintain web and mobile applications using modern development practices and scalable architectures. Our development work focuses on performance, reliability, and maintainability across platforms. All software is developed and operated internally as part of our proprietary product initiatives."
    },
    "architecture": {
      title: "Platform Architecture & Engineering",
      text: "We design and implement the technical foundations that support complex digital platforms. This includes system architecture, data modeling, integrations, and infrastructure considerations. Engineering decisions prioritize long-term scalability, security, and adaptability as products mature."
    },
    "testing-iteration": {
      title: "Testing, Iteration & Deployment",
      text: "Our development process is iterative and research-driven. We continuously test, refine, and evolve our products through structured experimentation and deployment workflows. This approach allows us to improve product quality while responding to technical and user insights over time."
    }
  };

  // Grab relevant DOM elements
  const serviceItems = document.querySelectorAll(".service-item");
  const serviceTitle = document.getElementById("service-title");
  const serviceText = document.getElementById("service-text");

  // Function to update content
  function updateService(selectedKey) {
    const { title, text } = serviceContent[selectedKey] || {};
    serviceTitle.textContent = title || "";
    serviceText.textContent = text || "";
  }

  // Set up click event listeners for service items
  serviceItems.forEach((item) => {
    item.addEventListener("click", () => {
      serviceItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      const key = item.dataset.service;
      updateService(key);
    });

    // Optional: keyboard accessibility for service items
    item.addEventListener("keydown", (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        item.click();
      }
    });
  });

  // Initialize default state
  const firstService = document.querySelector(".service-item.active") || serviceItems[0];
  if (firstService) {
    firstService.classList.add("active");
    updateService(firstService.dataset.service);
  }

  // Smooth scroll with fixed header offset
  function scrollToSection(event, id) {
    event.preventDefault();
    const section = document.getElementById(id);
    const headerOffset = 120; // adjust for your header height
    const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  // Page navigation
  ['home', 'about', 'services'].forEach(id => {
    const btn = document.getElementById(`${id}-nav-button`);

    btn.addEventListener("click", (event) => scrollToSection(event, id));
    btn.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        scrollToSection(event, id);
      }
    });
  });
});
