// Testimonial data
const testimonials = [
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This platform is an absolute game-changer for competitive programmers. The extensive range of problems and challenges offered here truly hones your skills and prepares you for any coding competition. With detailed solutions and an active community, it's the perfect environment to sharpen your coding prowess.",
  },
  {
    name: "Iida Niskanen",
    position: "Data Engineer",
    photo: "https://randomuser.me/api/portraits/women/67.jpg",
    text: "I can't express enough how valuable this platform has been for me. As someone deeply passionate about algorithms and data structures, I've found the diverse set of problems here both stimulating and enriching. The intuitive interface and seamless experience make it my go-to destination for honing my problem-solving skills.",
  },
  {
    name: "Renee Sims",
    position: "Cloud Engineer",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    text: "If you're serious about excelling in competitive coding, look no further. This platform not only provides a comprehensive set of problems but also fosters a supportive community where you can exchange ideas and strategies. It's been instrumental in my journey towards becoming a better competitive coder.",
  },
  {
    name: "Sasha Ho",
    position: "PhD Student",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "I've tried numerous competitive programming platforms, but none come close to the quality and depth offered here. From beginner-friendly challenges to advanced algorithmic puzzles, there's something for everyone. The platform's commitment to excellence is evident in every aspect, making it my preferred choice for honing my coding skills.",
  },
  {
    name: "Veeti Seppanen",
    position: "Frontend Developer",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "As a seasoned programmer, I'm always on the lookout for platforms that challenge and inspire me. This platform exceeds all expectations with its vast array of problems and unparalleled learning resources. Whether you're a novice or a seasoned coder, you'll find endless opportunities to push your boundaries and elevate your skills.",
  },
];

let currentIndex = 0;

// Function to display a testimonial
function displayTestimonial(index) {
  const testimonial = testimonials[index];
  document.getElementById("testimonial-photo").src = testimonial.photo;
  document.getElementById("testimonial-name").textContent = testimonial.name;
  document.getElementById("testimonial-position").textContent =
    testimonial.position;
  document.getElementById("testimonial-quote").textContent = testimonial.text;
}

// Initial display
displayTestimonial(currentIndex);

// Next and Previous button functionality
document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  displayTestimonial(currentIndex);
});

document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; // Cycle through
  displayTestimonial(currentIndex);
});

// Automatic cycling every 3 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  displayTestimonial(currentIndex);
}, 3000);

// Dynamic Copyright Year
document.getElementById("year").textContent = new Date().getFullYear();
console.log(new Date().getFullYear());

//Contact Form Validation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    // Validate each field
    this.querySelectorAll("input, textarea").forEach((field) => {
      const errorMessage = field.nextElementSibling;
      if (!field.value) {
        errorMessage.textContent = "This field is required";
        valid = false;
      } else {
        errorMessage.textContent = "";
      }
    });

    if (valid) {
      Swal.fire({
        title: "Thank you for reaching out!",
        text: "Form submitted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      // Reset the form fields after submission
      this.reset();
    }
  });

// Clear error on focus
document
  .querySelectorAll("#contact-form input, #contact-form textarea")
  .forEach((field) => {
    field.addEventListener("focus", function () {
      this.nextElementSibling.textContent = "";
    });
  });
