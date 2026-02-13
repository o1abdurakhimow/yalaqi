const movies = [
  {
    Title: "The Dark Knight",
    movie_year: 2008,
    Categories: "Action",
    summary:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy.",
    ImageURL: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    imdb_rating: 9.0,
  },
  {
    Title: "Inception",
    movie_year: 2010,
    Categories: "Action",
    summary:
      "A thief who enters people's dreams takes on the task of planting an idea into someone's mind.",
    ImageURL: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    imdb_rating: 8.8,
  },
  {
    Title: "Interstellar",
    movie_year: 2014,
    Categories: "Drama",
    summary:
      "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
    ImageURL: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    imdb_rating: 8.6,
  },
  {
    Title: "The Shawshank Redemption",
    movie_year: 1994,
    Categories: "Drama",
    summary:
      "Two imprisoned men bond over years, finding solace and redemption through acts of common decency.",
    ImageURL: "https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
    imdb_rating: 9.3,
  },
  {
    Title: "Pulp Fiction",
    movie_year: 1994,
    Categories: "Drama",
    summary:
      "The lives of two mob hitmen, a boxer, and a pair of bandits intertwine in four tales of violence.",
    ImageURL: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    imdb_rating: 8.9,
  },
  {
    Title: "The Godfather",
    movie_year: 1972,
    Categories: "Drama",
    summary:
      "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    ImageURL: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsLegHnDmni6.jpg",
    imdb_rating: 9.2,
  },
  {
    Title: "Fight Club",
    movie_year: 1999,
    Categories: "Drama",
    summary:
      "An insomniac office worker forms an underground fight club with a soap salesman.",
    ImageURL: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    imdb_rating: 8.8,
  },
  {
    Title: "Forrest Gump",
    movie_year: 1994,
    Categories: "Drama",
    summary:
      "The story of a man with a low IQ who achieves great things through decades of American history.",
    ImageURL: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    imdb_rating: 8.8,
  },
  {
    Title: "The Matrix",
    movie_year: 1999,
    Categories: "Action",
    summary:
      "A computer hacker learns reality as he knows it is a simulation controlled by machines.",
    ImageURL: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    imdb_rating: 8.7,
  },
  {
    Title: "Goodfellas",
    movie_year: 1990,
    Categories: "Drama",
    summary:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife.",
    ImageURL: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    imdb_rating: 8.7,
  },
  {
    Title: "Avengers: Endgame",
    movie_year: 2019,
    Categories: "Action",
    summary:
      "The Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    ImageURL: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    imdb_rating: 8.4,
  },
  {
    Title: "The Silence of the Lambs",
    movie_year: 1991,
    Categories: "Drama",
    summary:
      "A young FBI cadet must receive the help of an imprisoned cannibal killer to catch another.",
    ImageURL: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    imdb_rating: 8.6,
  },
  {
    Title: "Gladiator",
    movie_year: 2000,
    Categories: "Action",
    summary:
      "A former Roman General seeks revenge against the corrupt emperor who murdered his family.",
    ImageURL: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    imdb_rating: 8.5,
  },
  {
    Title: "The Lion King",
    movie_year: 1994,
    Categories: "Comedy",
    summary:
      "A young lion prince flees his kingdom after the murder of his father, blamed on him by his uncle.",
    ImageURL: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    imdb_rating: 8.5,
  },
  {
    Title: "Schindler's List",
    movie_year: 1993,
    Categories: "Drama",
    summary:
      "In German-occupied Poland during WWII, a businessman saves the lives of over a thousand Jews.",
    ImageURL: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    imdb_rating: 9.0,
  },
  {
    Title: "Joker",
    movie_year: 2019,
    Categories: "Drama",
    summary:
      "A failed comedian's descent into madness and chaos transforms him into the criminal mastermind Joker.",
    ImageURL: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    imdb_rating: 8.4,
  },
  {
    Title: "Mad Max: Fury Road",
    movie_year: 2015,
    Categories: "Action",
    summary:
      "A woman rebels against a tyrannical ruler in a post-apocalyptic desert and escapes with a group of female prisoners.",
    ImageURL: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
    imdb_rating: 8.1,
  },
  {
    Title: "Parasite",
    movie_year: 2019,
    Categories: "Drama",
    summary:
      "Greed and class discrimination threaten the symbiotic relationship between the wealthy Park family and the poor Kim clan.",
    ImageURL: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    imdb_rating: 8.5,
  },
  {
    Title: "Whiplash",
    movie_year: 2014,
    Categories: "Drama",
    summary:
      "A young drummer enrolls at a cut-throat music conservatory where his teacher will stop at nothing to realize a student's potential.",
    ImageURL: "https://image.tmdb.org/t/p/w500/oPMbZeck9DLwBA4JCBeLbeSVHBl.jpg",
    imdb_rating: 8.5,
  },
  {
    Title: "John Wick",
    movie_year: 2014,
    Categories: "Action",
    summary:
      "An ex-hitman comes out of retirement to track down the gangsters who killed his dog.",
    ImageURL: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    imdb_rating: 7.4,
  },
  {
    Title: "The Social Network",
    movie_year: 2010,
    Categories: "Drama",
    summary:
      "As Harvard student Mark Zuckerberg creates the social networking site that becomes Facebook, he is sued by co-founders.",
    ImageURL: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHso.jpg",
    imdb_rating: 7.7,
  },
  {
    Title: "La La Land",
    movie_year: 2016,
    Categories: "Drama",
    summary:
      "A jazz musician and an aspiring actress fall in love while struggling to pursue their dreams in Los Angeles.",
    ImageURL: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    imdb_rating: 8.0,
  },
  {
    Title: "Get Out",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "A young Black man visits his white girlfriend's parents and uncovers a disturbing secret.",
    ImageURL: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    imdb_rating: 7.7,
  },
  {
    Title: "Coco",
    movie_year: 2017,
    Categories: "Comedy",
    summary:
      "Aspiring musician Miguel, confronted with his family's ban on music, enters the Land of the Dead.",
    ImageURL: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    imdb_rating: 8.4,
  },
  {
    Title: "Spider-Man: Into the Spider-Verse",
    movie_year: 2018,
    Categories: "Action",
    summary:
      "Teen Miles Morales becomes the Spider-Man of his universe and crosses paths with his counterparts.",
    ImageURL: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    imdb_rating: 8.4,
  },
  {
    Title: "The Grand Budapest Hotel",
    movie_year: 2014,
    Categories: "Comedy",
    summary:
      "A writer encounters the owner of an aging European hotel between the wars, who has a surprisingly adventurous past.",
    ImageURL: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    imdb_rating: 8.1,
  },
  {
    Title: "1917",
    movie_year: 2019,
    Categories: "Action",
    summary:
      "Two British soldiers in WWI are given a seemingly impossible mission: deliver a message deep in enemy territory.",
    ImageURL: "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
    imdb_rating: 8.3,
  },
  {
    Title: "Dune",
    movie_year: 2021,
    Categories: "Action",
    summary:
      "A mythic and emotionally charged hero's journey as young Paul Atreides arrives on the desert planet Arrakis.",
    ImageURL:
      "https://image.tmdb.org/t/p/w500/d5NXSklpcvwE3HP2SmWeQGZHDkMu.jpg",
    imdb_rating: 8.0,
  },
  {
    Title: "No Time to Die",
    movie_year: 2021,
    Categories: "Action",
    summary:
      "James Bond has left active service, but his peace is short-lived when a mysterious villain armed with dangerous technology appears.",
    ImageURL: "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    imdb_rating: 7.3,
  },
  {
    Title: "The Revenant",
    movie_year: 2015,
    Categories: "Action",
    summary:
      "A frontiersman on a fur trading expedition fights for survival after being mauled by a bear.",
    ImageURL: "https://image.tmdb.org/t/p/w500/tNR0gBKIGBkiJk0njVhqsG8X7sT.jpg",
    imdb_rating: 8.0,
  },
  {
    Title: "Blade Runner 2049",
    movie_year: 2017,
    Categories: "Action",
    summary:
      "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard.",
    ImageURL: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    imdb_rating: 8.0,
  },
  {
    Title: "Arrival",
    movie_year: 2016,
    Categories: "Drama",
    summary:
      "A linguist works with the military to communicate with alien lifeforms after spacecraft land across the world.",
    ImageURL: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    imdb_rating: 7.9,
  },
  {
    Title: "Gone Girl",
    movie_year: 2014,
    Categories: "Drama",
    summary:
      "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him.",
    ImageURL: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
    imdb_rating: 8.1,
  },
  {
    Title: "The Wolf of Wall Street",
    movie_year: 2013,
    Categories: "Comedy",
    summary:
      "Based on the true story of Jordan Belfort's rise to a wealthy stockbroker living the high life and his fall.",
    ImageURL:
      "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzGbefore.jpg",
    imdb_rating: 8.2,
  },
  {
    Title: "Gravity",
    movie_year: 2013,
    Categories: "Action",
    summary:
      "Two astronauts work together to survive after an accident leaves them alone in space.",
    ImageURL: "https://image.tmdb.org/t/p/w500/44tcRqh1oM6BzMcMxAGUkQ3hqnp.jpg",
    imdb_rating: 7.7,
  },
  {
    Title: "Prisoners",
    movie_year: 2013,
    Categories: "Drama",
    summary:
      "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands.",
    ImageURL: "https://image.tmdb.org/t/p/w500/aInBEfZCedFnWqkFKNKVVxUGPD7.jpg",
    imdb_rating: 8.1,
  },
  {
    Title: "Django Unchained",
    movie_year: 2012,
    Categories: "Action",
    summary:
      "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a plantation.",
    ImageURL: "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWcKhb.jpg",
    imdb_rating: 8.4,
  },
  {
    Title: "The Martian",
    movie_year: 2015,
    Categories: "Comedy",
    summary:
      "An astronaut becomes stranded on Mars after his team assumes he is dead and must rely on his ingenuity to survive.",
    ImageURL: "https://image.tmdb.org/t/p/w500/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg",
    imdb_rating: 8.0,
  },
  {
    Title: "Her",
    movie_year: 2013,
    Categories: "Drama",
    summary:
      "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    ImageURL: "https://image.tmdb.org/t/p/w500/lEIaL12hSkqqe83y5tHBDRpJ70a.jpg",
    imdb_rating: 8.0,
  },
  {
    Title: "12 Years a Slave",
    movie_year: 2013,
    Categories: "Drama",
    summary:
      "In the antebellum United States, Solomon Northup, a free Black man from New York, is abducted and sold into slavery.",
    ImageURL: "https://image.tmdb.org/t/p/w500/xdHDdTBjgnguiCEyNHfjUBiWKaR.jpg",
    imdb_rating: 8.1,
  },
  {
    Title: "Dunkirk",
    movie_year: 2017,
    Categories: "Action",
    summary:
      "Allied soldiers from Belgium, the British Commonwealth, and France are surrounded by the German Army during WWII.",
    ImageURL: "https://image.tmdb.org/t/p/w500/cUqEgoP6kj8ykfNjJx3Tl5zHCcN.jpg",
    imdb_rating: 7.9,
  },
  {
    Title: "Black Panther",
    movie_year: 2018,
    Categories: "Action",
    summary:
      "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future.",
    ImageURL: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    imdb_rating: 7.3,
  },
  {
    Title: "Knives Out",
    movie_year: 2019,
    Categories: "Comedy",
    summary:
      "A detective investigates the death of a patriarch of an eccentric, combative family.",
    ImageURL: "https://image.tmdb.org/t/p/w500/pThyQovXQrws2hmLinTd2EU0Gg0.jpg",
    imdb_rating: 7.9,
  },
  {
    Title: "Oppenheimer",
    movie_year: 2023,
    Categories: "Drama",
    summary:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    ImageURL: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    imdb_rating: 8.4,
  },
  {
    Title: "Barbie",
    movie_year: 2023,
    Categories: "Comedy",
    summary:
      "Barbie and Ken are having the time of their lives in Barbieland — until Barbie starts having thoughts about death.",
    ImageURL: "https://image.tmdb.org/t/p/w500/iuFNMS8vlbZxOkIGy3p8YD6TGIp.jpg",
    imdb_rating: 6.9,
  },
  {
    Title: "Everything Everywhere All at Once",
    movie_year: 2022,
    Categories: "Action",
    summary:
      "A middle-aged Chinese immigrant is swept up in an insane adventure to save the multiverse.",
    ImageURL: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    imdb_rating: 7.8,
  },
  {
    Title: "Top Gun: Maverick",
    movie_year: 2022,
    Categories: "Action",
    summary:
      "After more than thirty years of service as a top naval aviator, Pete Mitchell is where he belongs, pushing the envelope.",
    ImageURL: "https://image.tmdb.org/t/p/w500/62HCnUTHjWFDZPzMkiPdnFHNSkM.jpg",
    imdb_rating: 8.3,
  },
  {
    Title: "Avatar: The Way of Water",
    movie_year: 2022,
    Categories: "Action",
    summary:
      "Jake Sully and Ney'tiri have formed a family and must leave their home, exploring the regions of Pandora.",
    ImageURL: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    imdb_rating: 7.6,
  },
  {
    Title: "The Batman",
    movie_year: 2022,
    Categories: "Action",
    summary:
      "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
    ImageURL: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    imdb_rating: 7.9,
  },
  {
    Title: "Drive",
    movie_year: 2011,
    Categories: "Action",
    summary:
      "A mysterious Hollywood stuntman moonlighting as a getaway driver goes too far to protect a neighbor and her child.",
    ImageURL: "https://image.tmdb.org/t/p/w500/602vevIURmpzkKWJk7OAiHpNWS5.jpg",
    imdb_rating: 7.8,
  },
  {
    Title: "The Prestige",
    movie_year: 2006,
    Categories: "Drama",
    summary:
      "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion.",
    ImageURL: "https://image.tmdb.org/t/p/w500/bdN3gXuIZYaJP6ptSplFZBSAhBc.jpg",
    imdb_rating: 8.5,
  },
  {
    Title: "Memento",
    movie_year: 2000,
    Categories: "Drama",
    summary:
      "A man with short-term memory loss attempts to track down his wife's murderer using polaroid photos and tattoos.",
    ImageURL: "https://image.tmdb.org/t/p/w500/yuNs09hvpHVU1cggriK04CGfwpy.jpg",
    imdb_rating: 8.4,
  },
  {
    Title: "Heat",
    movie_year: 1995,
    Categories: "Action",
    summary:
      "A group of professional bank robbers starts to feel the heat from police when they unknowingly leave evidence during a job.",
    ImageURL: "https://image.tmdb.org/t/p/w500/umC04Cozevu8nn3ZTIU9rx8iT9m.jpg",
    imdb_rating: 8.2,
  },
  {
    Title: "Catch Me If You Can",
    movie_year: 2002,
    Categories: "Comedy",
    summary:
      "A young con man and master of deception is relentlessly pursued by FBI agent Carl Hanratty.",
    ImageURL: "https://image.tmdb.org/t/p/w500/bc5bEFU6nHhQVNAtaP8TKqKJ72.jpg",
    imdb_rating: 8.1,
  },
  {
    Title: "The Truman Show",
    movie_year: 1998,
    Categories: "Comedy",
    summary:
      "An insurance salesman discovers his whole life is actually a reality TV show.",
    ImageURL: "https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJsZJFE.jpg",
    imdb_rating: 8.2,
  },
  {
    Title: "American History X",
    movie_year: 1998,
    Categories: "Drama",
    summary:
      "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path.",
    ImageURL: "https://image.tmdb.org/t/p/w500/2A8YHFhY36FInuELLJ5DPDP3hj0.jpg",
    imdb_rating: 8.5,
  },
  {
    Title: "V for Vendetta",
    movie_year: 2005,
    Categories: "Action",
    summary:
      "In a fascist future Britain, a mysterious freedom fighter known as V uses terrorist tactics to fight the government.",
    ImageURL: "https://image.tmdb.org/t/p/w500/9YRFUucqHOHyZBBkLcf0fQ6r8tF.jpg",
    imdb_rating: 8.1,
  },
  {
    Title: "Ratatouille",
    movie_year: 2007,
    Categories: "Comedy",
    summary:
      "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.",
    ImageURL: "https://image.tmdb.org/t/p/w500/npHNjldbeTHdKKw28bJKs7lzqzj.jpg",
    imdb_rating: 8.1,
  },
  {
    Title: "WALL·E",
    movie_year: 2008,
    Categories: "Comedy",
    summary:
      "In the far future, a small waste-collecting robot inadvertently embarks on a space journey that will decide the fate of mankind.",
    ImageURL: "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    imdb_rating: 8.4,
  },
  {
    Title: "Up",
    movie_year: 2009,
    Categories: "Comedy",
    summary:
      "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young wilderness explorer named Russell.",
    ImageURL: "https://image.tmdb.org/t/p/w500/fAkSbBiIVhk3oLMoirgGCFQhXZR.jpg",
    imdb_rating: 8.3,
  },
  {
    Title: "Toy Story",
    movie_year: 1995,
    Categories: "Comedy",
    summary:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy.",
    ImageURL:
      "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPl9KcertA.jpg",
    imdb_rating: 8.3,
  },
  {
    Title: "Finding Nemo",
    movie_year: 2003,
    Categories: "Comedy",
    summary:
      "After his son is captured by divers, a timid clownfish sets out on a journey to bring him home.",
    ImageURL: "https://image.tmdb.org/t/p/w500/2zIZP9HFuaWEzNhFXgAEpqUuNPq.jpg",
    imdb_rating: 8.2,
  },
  {
    Title: "The Incredibles",
    movie_year: 2004,
    Categories: "Action",
    summary:
      "A family of undercover superheroes tries to live the normal suburban life, but finds it impossible when a new villain emerges.",
    ImageURL: "https://image.tmdb.org/t/p/w500/9lOloREsAhBu0pEtU0BgeR1rHyo.jpg",
    imdb_rating: 8.0,
  },
  {
    Title: "Inside Out",
    movie_year: 2015,
    Categories: "Comedy",
    summary:
      "After young Riley is uprooted from her Midwest life, her emotions conflict on how best to navigate a new city.",
    ImageURL: "https://image.tmdb.org/t/p/w500/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg",
    imdb_rating: 8.1,
  },
  {
    Title: "Moana",
    movie_year: 2016,
    Categories: "Comedy",
    summary:
      "In Ancient Polynesia, when a terrible curse incurred by the demigod Maui reaches Moana's island, she answers the ocean's call.",
    ImageURL: "https://image.tmdb.org/t/p/w500/v2aygSGIy5ekxGMzlolmfWcJqH0.jpg",
    imdb_rating: 7.6,
  },
  {
    Title: "Frozen",
    movie_year: 2013,
    Categories: "Comedy",
    summary:
      "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with others to change the weather.",
    ImageURL: "https://image.tmdb.org/t/p/w500/iG0sGUzAlAhMRlFHqXPFELVs9ii.jpg",
    imdb_rating: 7.4,
  },
  {
    Title: "Zootopia",
    movie_year: 2016,
    Categories: "Comedy",
    summary:
      "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together.",
    ImageURL: "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
    imdb_rating: 8.0,
  },
  {
    Title: "Soul",
    movie_year: 2020,
    Categories: "Comedy",
    summary:
      "A musician who has long believed that his purpose was music now must think about what it means to have soul.",
    ImageURL: "https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
    imdb_rating: 8.1,
  },
  {
    Title: "Turning Red",
    movie_year: 2022,
    Categories: "Comedy",
    summary:
      "A 13-year-old girl in Toronto transforms into a giant red panda whenever she gets too excited.",
    ImageURL: "https://image.tmdb.org/t/p/w500/qSdjXBkPrTRo0CWWU6fJdmTGiL9.jpg",
    imdb_rating: 7.0,
  },
  {
    Title: "Luca",
    movie_year: 2021,
    Categories: "Comedy",
    summary:
      "On the Italian Riviera, two sea monsters experience an unforgettable summer of adventure with a local kid.",
    ImageURL: "https://image.tmdb.org/t/p/w500/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
    imdb_rating: 7.4,
  },
  {
    Title: "Once Upon a Time in Hollywood",
    movie_year: 2019,
    Categories: "Drama",
    summary:
      "A faded TV actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age.",
    ImageURL: "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
    imdb_rating: 7.6,
  },
  {
    Title: "Inglourious Basterds",
    movie_year: 2009,
    Categories: "Action",
    summary:
      "In Nazi-occupied France, young Jewish refugee Shosanna Dreyfus witnesses the slaughter of her family by Colonel Hans Landa.",
    ImageURL: "https://image.tmdb.org/t/p/w500/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg",
    imdb_rating: 8.3,
  },
  {
    Title: "The Hateful Eight",
    movie_year: 2015,
    Categories: "Drama",
    summary:
      "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a stagecoach waystation.",
    ImageURL: "https://image.tmdb.org/t/p/w500/tNLACROFG4Wk0qnWlFNOAZtdsBq.jpg",
    imdb_rating: 7.8,
  },
  {
    Title: "Reservoir Dogs",
    movie_year: 1992,
    Categories: "Action",
    summary:
      "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    ImageURL: "https://image.tmdb.org/t/p/w500/xi8Iu6qyTfyZVDVy60raIOe4G0L.jpg",
    imdb_rating: 8.3,
  },
  {
    Title: "Kill Bill: Vol. 1",
    movie_year: 2003,
    Categories: "Action",
    summary:
      "After awakening from a coma, a woman seeks revenge on her former boss and his associates who tried to kill her.",
    ImageURL: "https://image.tmdb.org/t/p/w500/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
    imdb_rating: 8.1,
  },
  {
    Title: "American Beauty",
    movie_year: 1999,
    Categories: "Drama",
    summary:
      "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
    ImageURL: "https://image.tmdb.org/t/p/w500/wby9315QzCliJCB3CLMDKoAOTeR.jpg",
    imdb_rating: 8.3,
  },
  {
    Title: "No Country for Old Men",
    movie_year: 2007,
    Categories: "Drama",
    summary:
      "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and finds two million dollars in cash.",
    ImageURL: "https://image.tmdb.org/t/p/w500/nkFNFTEVeGBnFqnvK5NKGB9SWqc.jpg",
    imdb_rating: 8.2,
  },
  {
    Title: "There Will Be Blood",
    movie_year: 2007,
    Categories: "Drama",
    summary:
      "A story of family, religion, hatred, and oil told through the transformation of Daniel Plainview into a ruthless oilman.",
    ImageURL: "https://image.tmdb.org/t/p/w500/tEREkOdLAyBBXv4JIjZHcRlCZQC.jpg",
    imdb_rating: 8.2,
  },
  {
    Title: "The Big Lebowski",
    movie_year: 1998,
    Categories: "Comedy",
    summary:
      "Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug.",
    ImageURL: "https://image.tmdb.org/t/p/w500/vyRCYoMWp5gm4Cd8wCdOaXQJhU7.jpg",
    imdb_rating: 8.1,
  },
  {
    Title: "Fargo",
    movie_year: 1996,
    Categories: "Drama",
    summary:
      "Jerry Lundegaard's inept crime falls apart due to a police officer who is uncommonly shrewd and pregnant.",
    ImageURL: "https://image.tmdb.org/t/p/w500/pMBqBcXJ6pHkBKEf3xMoJlWMWt.jpg",
    imdb_rating: 8.1,
  },
  {
    Title: "O Brother, Where Art Thou?",
    movie_year: 2000,
    Categories: "Comedy",
    summary:
      "In 1930s Mississippi, three escaped convicts search for hidden treasure while a bounty hunter tracks them down.",
    ImageURL: "https://image.tmdb.org/t/p/w500/zNJRjpxMeqH5HYqfNnFhfgm2XnB.jpg",
    imdb_rating: 7.7,
  },
  {
    Title: "Burn After Reading",
    movie_year: 2008,
    Categories: "Comedy",
    summary:
      "A disc containing the memoirs of a CIA agent ends up in the hands of two gym employees who attempt to sell it.",
    ImageURL: "https://image.tmdb.org/t/p/w500/gkzGiMifpWVEV9VobrDFMFDWGFe.jpg",
    imdb_rating: 7.0,
  },
  {
    Title: "Eternal Sunshine of the Spotless Mind",
    movie_year: 2004,
    Categories: "Drama",
    summary:
      "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    ImageURL: "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
    imdb_rating: 8.3,
  },
  {
    Title: "Lost in Translation",
    movie_year: 2003,
    Categories: "Drama",
    summary:
      "A fading movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.",
    ImageURL: "https://image.tmdb.org/t/p/w500/dynrMNWFT6Q4gNlD8WFKXB2V8V4.jpg",
    imdb_rating: 7.8,
  },
  {
    Title: "Mulholland Drive",
    movie_year: 2001,
    Categories: "Drama",
    summary:
      "After a car wreck on the winding Mulholland Drive renders a woman amnesiac, she and a perky Hollywood hopeful uncover a dark conspiracy.",
    ImageURL: "https://image.tmdb.org/t/p/w500/pClDLbfMHALuSe5EzR0zcnVzZHH.jpg",
    imdb_rating: 7.9,
  },
  {
    Title: "Pan's Labyrinth",
    movie_year: 2006,
    Categories: "Drama",
    summary:
      "In post-civil war Spain, a young girl retreats into an eerie but captivating fantasy world.",
    ImageURL: "https://image.tmdb.org/t/p/w500/htRc4OH3HMK7JevPZMKjRq7ZQNL.jpg",
    imdb_rating: 8.2,
  },
  {
    Title: "Oldboy",
    movie_year: 2003,
    Categories: "Action",
    summary:
      "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released but has five days to find his captor.",
    ImageURL: "https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBRC5iswHX.jpg",
    imdb_rating: 8.4,
  },
  {
    Title: "Spirited Away",
    movie_year: 2001,
    Categories: "Comedy",
    summary:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods and spirits.",
    ImageURL: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    imdb_rating: 8.6,
  },
  {
    Title: "Princess Mononoke",
    movie_year: 1997,
    Categories: "Action",
    summary:
      "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and the humans.",
    ImageURL: "https://image.tmdb.org/t/p/w500/vt0h5usqpQ5gBbykETmmJPxnLHF.jpg",
    imdb_rating: 8.4,
  },
  {
    Title: "My Neighbor Totoro",
    movie_year: 1988,
    Categories: "Comedy",
    summary:
      "Two young girls discover that they're living next door to mystical creatures in rural Japan.",
    ImageURL: "https://image.tmdb.org/t/p/w500/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    imdb_rating: 8.2,
  },
  {
    Title: "Howl's Moving Castle",
    movie_year: 2004,
    Categories: "Comedy",
    summary:
      "When an unconfident young woman is cursed by a witch, she transforms into an old lady. Her only chance is a mysterious wizard.",
    ImageURL: "https://image.tmdb.org/t/p/w500/TkFD7Y6L7GS4K0O7dAbHVGnxSm.jpg",
    imdb_rating: 8.6,
  },
  {
    Title: "Akira",
    movie_year: 1988,
    Categories: "Action",
    summary:
      "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath.",
    ImageURL: "https://image.tmdb.org/t/p/w500/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
    imdb_rating: 8.0,
  },
  {
    Title: "Neon Genesis Evangelion: End of Evangelion",
    movie_year: 1997,
    Categories: "Action",
    summary:
      "Shinji Ikari must decide the fate of humanity as NERV faces an all-out assault from the mysterious organization SEELE.",
    ImageURL: "https://image.tmdb.org/t/p/w500/7l5OiCMeRPMHsFaOXdB7pDuKxg6.jpg",
    imdb_rating: 8.2,
  },
  {
    Title: "Your Name",
    movie_year: 2016,
    Categories: "Drama",
    summary:
      "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    ImageURL: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    imdb_rating: 8.4,
  },
  {
    Title: "Weathering With You",
    movie_year: 2019,
    Categories: "Drama",
    summary:
      "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",
    ImageURL: "https://image.tmdb.org/t/p/w500/kUVzxiOSVqYbjwAJFGovGF30Dv7.jpg",
    imdb_rating: 7.5,
  },
  {
    Title: "A Beautiful Mind",
    movie_year: 2001,
    Categories: "Drama",
    summary:
      "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life descends into chaos.",
    ImageURL: "https://image.tmdb.org/t/p/w500/txNQbpGMhH1nv7jJe7oGzFhCBMY.jpg",
    imdb_rating: 8.2,
  },
  {
    Title: "The Green Mile",
    movie_year: 1999,
    Categories: "Drama",
    summary:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape.",
    ImageURL: "https://image.tmdb.org/t/p/w500/velWPhVovZqEMRRBGZzBCFNHh3L.jpg",
    imdb_rating: 8.6,
  },
  {
    Title: "Cast Away",
    movie_year: 2000,
    Categories: "Drama",
    summary:
      "A FedEx employee must transform himself physically and emotionally to survive a crash landing on a deserted island.",
    ImageURL: "https://image.tmdb.org/t/p/w500/m0VkqMh6cqBqRynBxNiNEsPaDD.jpg",
    imdb_rating: 7.8,
  },
  {
    Title: "A.I. Artificial Intelligence",
    movie_year: 2001,
    Categories: "Drama",
    summary:
      "A highly advanced robotic boy longs to become 'real' so that he can regain the love of his human mother.",
    ImageURL: "https://image.tmdb.org/t/p/w500/who6J3rVmgElqBVfcPEZ0XpMKnC.jpg",
    imdb_rating: 7.1,
  },
  {
    Title: "Minority Report",
    movie_year: 2002,
    Categories: "Action",
    summary:
      "In a future where a special police unit can arrest murderers before they commit their crimes, an officer is accused of a future murder.",
    ImageURL: "https://image.tmdb.org/t/p/w500/c7q6bBxItsTuq5PtBDhPBFMsH0i.jpg",
    imdb_rating: 7.6,
  },
  {
    Title: "Saving Private Ryan",
    movie_year: 1998,
    Categories: "Action",
    summary:
      "Following the Normandy Landings, a group of US soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed.",
    ImageURL: "https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
    imdb_rating: 8.6,
  },
  {
    Title: "Full Metal Jacket",
    movie_year: 1987,
    Categories: "Drama",
    summary:
      "A pragmatic U.S. Marine observes the dehumanizing effects of the Vietnam War on his fellow recruits.",
    ImageURL: "https://image.tmdb.org/t/p/w500/wRhOFCBDVHFG7VGNKF1SXdFNkGr.jpg",
    imdb_rating: 8.3,
  },
  {
    Title: "Apocalypse Now",
    movie_year: 1979,
    Categories: "Action",
    summary:
      "A U.S. Army officer is sent into Cambodia to assassinate a renegade colonel who has set himself up as a god.",
    ImageURL: "https://image.tmdb.org/t/p/w500/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg",
    imdb_rating: 8.4,
  },
  {
    Title: "Aliens",
    movie_year: 1986,
    Categories: "Action",
    summary:
      "Ellen Ripley must lead a mission back to the planet from her nightmare to rescue colonists there along with a team of marines.",
    ImageURL: "https://image.tmdb.org/t/p/w500/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg",
    imdb_rating: 8.4,
  },
  {
    Title: "The Terminator",
    movie_year: 1984,
    Categories: "Action",
    summary:
      "A soldier from the future is sent back in time to protect a young woman whose unborn son is destined to lead humanity in a war.",
    ImageURL: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpAiMN9l9CqNvJ2E.jpg",
    imdb_rating: 8.1,
  },
];

export default movies;
