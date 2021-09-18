const createCard = (data) => {
  const card = document.getElementById('cardConteiner');
  const cardHeader = document.createElement('h3');
  const cardFooter= document.createElement('footer');
  const cardContent = document.createElement('p');
  cardHeader.innerText = data.name;
  cardContent.innerText = `Versão: ${data.version};
  Trabalha em: ${data.worksAt};
  Estudando: ${data.studying};
  Procurando: ${data.lookingFor}`
  cardFooter.appendChild(cardContent);
  card.appendChild(cardHeader);
  card.appendChild(cardFooter);
}

const setUpCards = async () => {
  const cardData = await (await fetch('http://localhost:3000/data')).json();
  cardData.map((data) => createCard(data));
}

window.onload = () => setUpCards();