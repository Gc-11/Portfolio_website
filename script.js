window.addEventListener("load", () => {
    const video = document.getElementById("intro-video");
    const mainContent = document.getElementById("main-content");
    const videoContainer = document.getElementById("video-container");

    // Ensure video is not looping
    video.loop = false;

    // Hide the video container once the video ends
    video.onended = function () {
      videoContainer.style.display = "none";  // Hide the video container
      mainContent.classList.remove("hidden");  // Show the main content
      document.body.style.backgroundColor = "#f1f5f9";  // Change background color
    };
  });

      // Scramble animation
      document.addEventListener("DOMContentLoaded", function () {
      const scrambleEl = document.getElementById("scramble-name");
      const chars = "AZSWQWEDCFTGBHUJMKOLK<LPLKJNHBVFCXDSZ!@#$%^&*()(*&^%$#@!@#12345678908765432:>:{:>L{:><";
      const target = "Gabriel Crasta";
      let frame = 0;
      const maxFrames = target.length * 10;

      const scrambleInterval = setInterval(() => {
        let output = "";
        for (let i = 0; i < target.length; i++) {
          if (i < frame / 10) {
            output += target[i];
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        scrambleEl.innerText = output;
        frame++;
        if (frame > maxFrames) clearInterval(scrambleInterval);
      }, 60);
    });


  // Framer Animation: Triggered on Scroll
  function animateOnScroll(selector, delay = 0.2) {
    const targets = document.querySelectorAll(selector);
    targets.forEach((el, i) => {
      framerMotion.motion.animate(el, { opacity: [0, 1], y: [20, 0] }, {
        duration: 0.8,
        delay: i * delay,
        ease: 'easeOut',
      });
    });
  }
  const techSkills = [
  { name: "HTML & CSS", percent: 90, color: "bg-blue-600" },
  { name: "JavaScript", percent: 75, color: "bg-yellow-500" },
  { name: "C Programming", percent: 80, color: "bg-green-500" },
  { name: "C++", percent: 85, color: "bg-indigo-500" },
  { name: "Python", percent: 80, color: "bg-purple-600" },
];

const techContainer = document.getElementById("technicalSkills");

techSkills.forEach((skill, index) => {
  const div = document.createElement("div");
  div.className = "skill mb-4";
  const progressId = `progress-${index}`;
  div.innerHTML = `
    <span class="block font-medium mb-1" style="color: #FFEE58" >${skill.name}</span>
    <div class="progress-bar bg-gray-300 h-4 rounded-full overflow-hidden">
      <div id="${progressId}" class="progress ${skill.color} h-full transition-all duration-1000 ease-out" style="width: 0%;"></div>
    </div>
    <span class="percentage text-sm text-white">${skill.percent}%</span>
  `;
  techContainer.appendChild(div);
});

// Animate on scroll into view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progress = entry.target;
        const percent = progress.getAttribute("data-percent");
        progress.style.width = percent + "%";
        observer.unobserve(progress); // Optional: only animate once
      }
    });
  },
  { threshold: 0.6 }
);

// Attach observer after bars are in DOM
document.querySelectorAll(".progress").forEach((bar, index) => {
  bar.setAttribute("data-percent", techSkills[index].percent);
  observer.observe(bar);
});


  // Soft Skills
  const softSkills = [
    { name: "Teamwork", tip: "Collaborating effectively and supporting teammates." },
    { name: "Problem Solving", tip: "Analyzing and finding creative solutions." },
    { name: "Adaptability", tip: "Adjusting quickly with a flexible mindset." },
    { name: "Creativity", tip: "Thinking outside the box to innovate." },
    { name: "Critical Thinking", tip: "Evaluating information to make informed decisions." },
    { name: "Leadership", tip: "Leading with empathy and motivation." },
  ];

  const softContainer = document.getElementById("softSkills");
  softSkills.forEach(skill => {
    const btn = document.createElement("button");
    btn.className = "soft-btn px-4 py-2 bg-opacity-70 bg-blue-200 rounded-full hover:bg-blue-300 transition relative group";
    btn.innerText = skill.name;

    const tooltip = document.createElement("span");
    tooltip.className = "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition";
    tooltip.innerText = skill.tip;

    btn.appendChild(tooltip);
    softContainer.appendChild(btn);
  });

  // Animate when in view
  window.addEventListener("scroll", () => {
    const skillsSection = document.getElementById("skills");
    animateOnScroll("#technicalSkills .skill");
    animateOnScroll("#softSkills .soft-btn");
  });
  const infoItems = [
  {
    title: "Hobbies",
    items: ["Drawing", "Coding", "Gaming"],
    icon: `
      <svg class="w-6 h-6" fill="none" stroke="#00008B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    `
  },
  {
    title: "Interests",
    items: ["UI/UX Design", "Reading mangas", "Bodybuilding"," Travelling"],
    icon: `
      <svg class="w-6 h-6" fill="none" stroke="#00008B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
      </svg>
    `
  }
];


const container = document.querySelector(".grid");

// Create one card to hold everything
const card = document.createElement("div");
card.classList.add(
  "p-6",
  "rounded-lg",
  "shadow-sm",
  "hover:shadow-md",
  "transition-shadow",
  "bg-gradient-to-br", 
  "from-yellow-500",    // lighter blue
  "to-yellow-300",      // medium light blue
  "text-white"     // deep blue

);

// Combine all infoItems content into one HTML string
let content = infoItems.map(item => `
  <div class="mb-6">
    <div class="flex items-center gap-3 mb-2">
      <div class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white">
        ${item.icon}
      </div>
      <h3 class="text-xl font-semibold">${item.title}</h3>
    </div>
    <ul class="space-y-2 ml-4">
      ${item.items.map(i => `
        <li class="flex items-center">
          <span class="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>${i}
        </li>
      `).join('')}
    </ul>
  </div>
`).join('');

// Set the innerHTML to the combined content
card.innerHTML = content;

// Append the one card to the container
container.appendChild(card);


  document.addEventListener("DOMContentLoaded", function() {
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'animate-slide-in' class when the element is in the viewport
          entry.target.classList.add('animate-slide-in');
          observer.unobserve(entry.target); // Stop observing the element after it has animated
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    // Target all elements with the class 'slide-in-element'
    const elements = document.querySelectorAll('.slide-in-element');
    elements.forEach(element => {
      observer.observe(element); // Start observing each element
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1});

    const fadeElements = document.querySelectorAll('.fade-in-element');
    fadeElements.forEach(el => observer.observe(el));
  });

