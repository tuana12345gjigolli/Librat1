const booksData = {
  children: [
    {
      title: "Libri i Magjishëm",
      img: "https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg",
      quote: "Imagjinata është fillimi i gjithçkaje!"
    },
    {
      title: "Aventurat e Fëmijëve",
      img: "Aventurat e femijeve.jfif",
      quote: "Çdo fëmijë meriton një aventurë."
    },
    {
      title: "Përralla për Natën",
      img: "Perralla per naten.jpg",
      quote: "Nata sjell ëndrra të bukura."
    },
    {
      title: "Magjia e Shkollës",
      img: "https://m.media-amazon.com/images/I/81VStYnDGrL.jpg",
      quote: "Mësimi është një magji më vete!"
    }
  ],
  teens: [
    {
      title: "Hapat e Ëndrrave",
      img: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
      quote: "Mos ndalo së ëndërruari."
    },
    {
      title: "Sekretet e Miqësisë",
      img: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
      quote: "Miqtë janë thesari më i çmuar."
    },
    {
      title: "Rrugët e Parë",
      img: "https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg",
      quote: "Çdo hap na çon më afër qëllimeve tona."
    },
    {
      title: "Liria e Adoleshencës",
      img: "https://m.media-amazon.com/images/I/71xLmdLOQ0L.jpg",
      quote: "Liria fillon me të vërtetën tënde."
    }
  ],
  adults: [
    {
      title: "Filozofia e Jetës",
      img: "https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg",
      quote: "Jeta është ajo që bëjmë prej saj."
    },
    {
      title: "Rrugët e Suksesit",
      img: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg",
      quote: "Suksesi është një udhëtim, jo një destinacion."
    },
    {
      title: "Forca e Mendjes",
      img: "https://m.media-amazon.com/images/I/71KilybDOoL.jpg",
      quote: "Mendja e fortë ndryshon botën."
    },
    {
      title: "Kujtimet",
      img: "https://m.media-amazon.com/images/I/81eB+7+CkUL.jpg",
      quote: "Kujtimet janë pasuria jonë më e madhe."
    }
  ]
};

function showHome() {
  document.getElementById('booksGrid').innerHTML = '';
  document.getElementById('quote').innerText = '';
}

function showCategory(category) {
  const booksGrid = document.getElementById('booksGrid');
  const quote = document.getElementById('quote');
  booksGrid.innerHTML = '';
  quote.innerText = '';

  booksData[category].forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `<img src="${book.img}" alt="${book.title}"><h3>${book.title}</h3>`;
    card.addEventListener('click', () => {
      quote.innerText = `"${book.quote}"`;
    });
    booksGrid.appendChild(card);
  });
}

showHome();
