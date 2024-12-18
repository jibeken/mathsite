// Список репетиторов (тестовые данные)
const tutors = [
    { name: "Вася Пупкин", subject: "Алгебра", image: "ryan.jpg", languages: "Русский(Родной), Английский(Intermediate)" },
    { name: "Игорь Смирнов", subject: "Геометрия", image: "tutor.jpg" },
    { name: "Мария Кузнецова", subject: "Математический анализ", image: "cryformath.jpg" }
  ];
  
  // Отображение списка репетиторов
  function displayTutors(tutorsList) {
    const tutorContainer = document.getElementById("tutorList");
    tutorContainer.innerHTML = ""; // Очистка списка
    tutorsList.forEach(tutor => {
      const card = `
        <div class="tutor-card">
          <img src="${tutor.image}" alt="${tutor.name}">
          <h4>${tutor.name}</h4>
          <p>${tutor.subject}</p>
        </div>
      `;
      tutorContainer.innerHTML += card;
    });
  }
  
  // Поиск репетиторов
  function searchTutor() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredTutors = tutors.filter(tutor => 
      tutor.name.toLowerCase().includes(query) || 
      tutor.subject.toLowerCase().includes(query)
    );
    displayTutors(filteredTutors);
  }
  
  // Инициализация
  document.addEventListener("DOMContentLoaded", () => {
    displayTutors(tutors);
  });
  
  