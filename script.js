// header
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector("nav ul");
  toggle.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
});

// section hero
const words = ["tools", "systems", "stories"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const textElement = document.querySelector(".typed-text");

function type() {
  currentWord = words[i];
  textElement.textContent = currentWord.slice(0, j);

  if (!isDeleting && j < currentWord.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      i = (i + 1) % words.length;
    }
  }

  const speed = isDeleting ? 60 : 120;
  setTimeout(type, speed);
}

type();

// section about
const tags = document.querySelectorAll('.tag');
const description = document.querySelector('.tag-description p');

const texts = [
  "I love building elegant, efficient products—frontend, backend, and everything in between.",
  "I studied life sciences in Japan, and I’m fascinated by the logic behind how living systems work.",
  "I write my best code in quiet corners with coffee. It’s a ritual as much as a workflow.",
  "Hot yoga clears my mind and resets my energy. It’s how I stay focused and grounded.",
  "I find joy in the quiet ritual of scents—essential oils, perfumes, and the calm they bring."
];

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    tags.forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    const index = tag.getAttribute('data-index');
    description.textContent = texts[index];
  });
});

// section projects

  const carousel = document.querySelector('.project-carousel');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');

  let currentOffset = 0;
  const scrollStep = 340;
  const maxOffset = (carousel.children.length - 1) * scrollStep;

  rightBtn.addEventListener('click', () => {
    if (currentOffset < maxOffset) {
      currentOffset += scrollStep;
      carousel.style.transform = `translateX(-${currentOffset}px)`;
    }
  });

  leftBtn.addEventListener('click', () => {
    if (currentOffset > 0) {
      currentOffset -= scrollStep;
      carousel.style.transform = `translateX(-${currentOffset}px)`;
    }
  });


// section Contact
const button = document.querySelector('.contact-button');
const message = document.querySelector('.copy-message');

button.addEventListener('click', () => {
  navigator.clipboard.writeText("meme.265833@gmail.com").then(() => {
    message.classList.add("show");
    setTimeout(() => {
      message.classList.remove("show");
    }, 1500);
  });
});