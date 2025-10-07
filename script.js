document.addEventListener("DOMContentLoaded", () => {
  // Map each service key to its title and description
  const serviceContent = {
    "creative-consultation": {
      title: "Creative Consultation",
      text: "Our complimentary creative consultation is the first step in turning your vision into reality. During this collaborative call, we’ll discuss your goals, challenges, and ideas in depth to better understand your needs. By asking the right questions, we uncover opportunities and define the scope, strategy, and direction needed to bring your project to life. This conversation lays the foundation for a tailored project proposal designed around your objectives, timeline, and budget."
    },
    "project-proposal": {
      title: "Project Proposal",
      text: "Following our creative consultation, we’ll craft a detailed project proposal tailored to your specific goals and challenges. This proposal outlines our recommended approach, deliverables, timeline, and estimated cost — giving you a clear picture of how we’ll bring your vision to life. It’s both a creative blueprint and a practical plan, designed to align expectations and ensure we start our collaboration with shared clarity and confidence."
    },
    "ux-research-design": {
      title: "UX Research & Design",
      text: "Every successful project begins with great research. Through user research, journey mapping, and iterative design, we uncover what your audience truly needs — and build products that feel effortless to use. From wireframes to high-fidelity prototypes, every decision is guided by strategy, empathy, and craft, ensuring that form and function work seamlessly together to bring your vision to life."
    },
    "web-mobile-development": {
      title: "Web & Mobile Development",
      text: "Great design deserves equally thoughtful execution. We bring concepts to life through full-stack development that’s as strategic as it is technical — selecting the most efficient and cost-effective technologies for your goals. Whether it’s a responsive website, scalable web platform, or custom mobile app, we build with usability, performance, and long-term maintainability in mind — turning design vision into seamless, high-performing digital experiences."
    },
    "project-management": {
      title: "Project Management",
      text: "Successful projects require structure, clarity, and seamless coordination. We manage timelines, resources, and communication from kickoff to launch, ensuring every milestone is met and every detail is accounted for. By combining agile practices with transparent collaboration, we keep your project on track, on budget, and aligned with your vision — so you can focus on what matters most: bringing your ideas to life."
    },
    "launch-distribution": {
      title: "Launch & Distribution",
      text: "A great product deserves a smart distribution strategy. We help you select and execute the distribution approach that makes the most sense for your audience and goals — whether that’s viral marketing campaigns for consumer products, direct sales to individual customers, or targeted enterprise deployments. From launch planning to post-release optimization, we ensure your product reaches the right people at the right time, maximizing engagement, adoption, and long-term impact."
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

  // Set up click event listeners
  serviceItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active state from all
      serviceItems.forEach((i) => i.classList.remove("active"));
      // Add active to clicked one
      item.classList.add("active");
      // Update content
      const key = item.dataset.service;
      updateService(key);
    });
  });

  // Initialize default state (first service active)
  const firstService = document.querySelector(".service-item.active") || serviceItems[0];
  if (firstService) {
    firstService.classList.add("active");
    updateService(firstService.dataset.service);
  }
});