const games = [
    {
        year: 2008,
        title: "Grand Theft Auto IV",
        description: "A gritty, open-world game set in Liberty City, known for its deep storytelling and immersive world.",
        funFact: "The game introduced a more realistic and mature storyline, winning over 30 Game of the Year awards."
      },
      {
        year: 2009,
        title: "Uncharted 2: Among Thieves",
        description: "An action-adventure game where treasure hunter Nathan Drake explores ancient ruins and uncovers secrets.",
        funFact: "The game raised the bar for cinematic action in games, with motion capture and voice acting that rivaled Hollywood productions."
      },

    {
      year: 2010,
      title: "Red Dead Redemption",
      description: "A Western-themed action-adventure that redefined open-world gaming.",
      funFact: "John Marston became one of the most iconic characters in gaming history."
    },
    {
      year: 2011,
      title: "The Elder Scrolls V: Skyrim",
      description: "An open-world fantasy RPG with dragons, epic quests, and modding galore.",
      funFact: "Skyrim is one of the most modded games ever, with over 60,000 mods available."
    },
    {
      year: 2012,
      title: "The Walking Dead",
      description: "A narrative-driven, episodic adventure game where your choices matter.",
      funFact: "This game popularized episodic storytelling in gaming and won over 90 GOTY awards."
    },
    {
      year: 2013,
      title: "The Last of Us",
      description: "A gripping tale of survival and human connection in a post-apocalyptic world.",
      funFact: "The game's story was inspired by the Cordyceps fungus."
    },
    {
      year: 2014,
      title: "Dragon Age: Inquisition",
      description: "A fantasy RPG where players lead an Inquisition to save the world from chaos.",
      funFact: "The game's world is massive, featuring over 100 hours of content."
    },
    {
      year: 2015,
      title: "The Witcher 3: Wild Hunt",
      description: "A sprawling open-world RPG filled with quests, complex characters, and breathtaking landscapes.",
      funFact: "It took over three years and 1,500 developers to complete this masterpiece."
    }
  ];
  const getRandomGame = () => {
    const randomIndex = Math.floor(Math.random() * games.length);
    return games[randomIndex];
  };    
  const game = getRandomGame();

console.log(`Game of the Year (${game.year}):`);
console.log(`"${game.title}"`);
console.log(`> Description: ${game.description}`);
console.log(`> Fun Fact: ${game.funFact}`);