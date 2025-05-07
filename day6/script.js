document.getElementById("projectForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("projectName").value;
    const start = document.getElementById("startDate").value;
    const end = document.getElementById("endDate").value;
    const desc = document.getElementById("description").value;
    const techs = Array.from(document.querySelectorAll(".tech:checked")).map(cb => cb.value);
    const imgFile = document.getElementById("image").files[0];
    const reader = new FileReader();
  
    reader.onload = function () {
      const imgURL = reader.result;
      addProjectCard(name, start, end, desc, techs, imgURL);
    };
  
    if (imgFile) reader.readAsDataURL(imgFile);
  
    this.reset();
  });
  
  function addProjectCard(name, start, end, desc, techs, imgURL) {
    const container = document.getElementById("projectList");
    const col = document.createElement("div");
    col.className = "col-md-4";
  
    const techList = techs.map(t => `<span class="badge bg-secondary me-1">${t}</span>`).join("");
  
    col.innerHTML = `
      <div class="card shadow-sm">
        <img src="${imgURL}" class="card-img-top" alt="Project Image" />
        <div class="card-body">
          <h5 class="card-title">${name} - ${start} to ${end}</h5>
          <p class="card-text">${desc}</p>
          <div class="mb-2">${techList}</div>
          <button class="btn btn-sm btn-dark me-2">Edit</button>
          <button class="btn btn-sm btn-outline-danger" onclick="this.closest('.col-md-4').remove()">Delete</button>
        </div>
      </div>
    `;
    container.appendChild(col);
  }

  document.getElementById("projectForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const form = e.target;
    const projectName = form.projectName.value;
    const description = form.description.value;
    const startDate = form.startDate.value;
    const endDate = form.endDate.value;
    const image = form.projectImage.files[0];
    const techs = Array.from(form.querySelectorAll("input[type='checkbox']:checked")).map(cb => cb.value);
  
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageURL = event.target.result;
  
      let techIcons = "";
      techs.forEach(tech => {
        let icon;
        switch (tech) {
          case "Node Js": icon = "🟢"; break;
          case "React Js": icon = "⚛️"; break;
          case "Next Js": icon = "⬛"; break;
          case "TypeScript": icon = "🔵"; break;
          default: icon = "🛠️";
        }
        techIcons += `<span class="me-2">${icon} ${tech}</span>`;
      });
  
      const projectHTML = `
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img src="${imageURL}" class="card-img-top" alt="Project Image" style="height: 200px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${projectName}</h5>
              <p class="card-text">${description}</p>
              <p class="text-muted"><strong>${startDate}</strong> - <strong>${endDate}</strong></p>
              <div>${techIcons}</div>
            </div>
          </div>
        </div>
      `;
  
      // Insert new project card into the project list
      document.getElementById("projectList").innerHTML += projectHTML;
      form.reset(); // Reset form after submit
    };
  
    if (image) {
      reader.readAsDataURL(image);
    }
  });
  