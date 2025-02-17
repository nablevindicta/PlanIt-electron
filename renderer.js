document.addEventListener('DOMContentLoaded', () => {
    const agendaInput = document.getElementById('agendaInput');
    const addButton = document.getElementById('addButton');
    const agendaList = document.getElementById('agendaList');
  
    let agendas = [];
  
    function renderAgendas() {
      agendaList.innerHTML = '';
      agendas.forEach((agenda, index) => {
        const li = document.createElement('li');
        li.textContent = agenda;
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => {
          agendas.splice(index, 1);
          renderAgendas();
        };
  
        li.appendChild(deleteButton);
        agendaList.appendChild(li);
      });
    }
  
    addButton.addEventListener('click', () => {
      const agendaText = agendaInput.value.trim();
      if (agendaText !== '') {
        agendas.push(agendaText);
        agendaInput.value = '';
        renderAgendas();
      }
    });
  
    agendaInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addButton.click();
      }
    });
  
    renderAgendas();
  });