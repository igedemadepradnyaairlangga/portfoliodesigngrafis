document.addEventListener('DOMContentLoaded', function () {
  loadProjects();
});

function loadProjects() {
  const gallery = document.getElementById('gallery');
  const projects = getProjects();

  gallery.innerHTML = '';

  projects.forEach((project, index) => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.name}" onclick="openOverlay(${index})">
            <p>${project.name}</p>
        `;
    gallery.appendChild(projectElement);
  });
}

function openOverlay(index) {
  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlay-image');

  const projects = getProjects();
  const selectedProject = projects[index];

  overlayImage.src = selectedProject.image;
  overlay.style.display = 'block';
}

function closeOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}

function getProjects() {
  return [
    { name: 'Desain 1', image: 'img/ayo menabung BPR Sibang.jpg' },
    { name: 'Desain 9', image: 'img/logo.jpg' },
    { name: 'Desain 19', image: 'img/logo + promosi new.jpg' },
    { name: 'Desain 13', image: 'img/saffron face mist.jpg' },
    { name: 'Desain 4', image: 'img/cetak app 260 + laminasi = ukuran sesuaiin 10 r + bingkai.jpg' },
    //baris1
    { name: 'Desain 5', image: 'img/cover.jpg' },
    { name: 'Desain 6', image: 'img/kartu nama belakang.jpg' },
    { name: 'Desain 7', image: 'img/kartu nama depan.jpg' },
    { name: 'Desain 10', image: 'img/oilash 1 new.jpg' },
    { name: 'Desain 15', image: 'img/saffron serum 1 new.jpg' },
    //baris2
    { name: 'Desain 8', image: 'img/kios buk anggun new.jpg' },
    { name: 'Desain 11', image: 'img/oilash 1.jpg' },
    { name: 'Desain 12', image: 'img/oilash 2.jpg' },
    { name: 'Desain 14', image: 'img/saffron serum 1.jpg' },
    { name: 'Desain 20', image: 'img/Elegant Beige and Brown Eyelash Extension Price List.png' },
    //baris 3
    { name: 'Desain 2', image: 'img/romosi baju satuan.jpg' },
    { name: 'Desain 17', image: 'img/contoh3.png' },
    { name: 'Desain 18', image: 'img/contoh 4.png' },
    { name: 'Desain 20', image: 'img/promo 1.jpg' },
    //baris 4

    // Tambahkan proyek-proyek lain di sini
  ];
}
