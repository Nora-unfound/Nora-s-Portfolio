// header
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector("nav ul");

    toggle.addEventListener("click", () => {
      navList.classList.toggle("open");
    });
  });



// section hero 动态文字效果
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
  "Hot yoga clears my mind and resets my energy. It’s how I stay focused and grounded."
];

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    tags.forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    const index = tag.getAttribute('data-index');
    description.textContent = texts[index];
  });
});