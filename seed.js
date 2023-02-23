const { db, User, Movie } = require("./server/db");
// const { red, green } = require("chalk");

const movies_info = [
  {
    title: "Stevie Nicks: Live at Red Rocks",
    genre: "Documentary|Musical",
    description:
      "rutrum nulla nunc purus phasellus in felis donec semper sapien a",
    imageUrl: "http://dummyimage.com/168x100.png/5fa2dd/ffffff",
    rating: 1,
  },
  {
    title: "Twilight",
    genre: "Drama|Fantasy|Romance|Thriller",
    description:
      "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum",
    imageUrl: "http://dummyimage.com/125x100.png/cc0000/ffffff",
    rating: 2,
  },
  {
    title: "Plankton",
    genre: "Horror",
    description:
      "sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
    imageUrl: "http://dummyimage.com/130x100.png/cc0000/ffffff",
    rating: 3,
  },
  {
    title: "Blind Shaft (Mang jing)",
    genre: "Drama",
    description:
      "lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio",
    imageUrl: "http://dummyimage.com/137x100.png/5fa2dd/ffffff",
    rating: 4,
  },
  {
    title: "Thirst (Pyaasa)",
    genre: "Drama|Musical|Romance",
    description:
      "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem",
    imageUrl: "http://dummyimage.com/203x100.png/dddddd/000000",
    rating: 5,
  },
  {
    title: "Small Cuts (Petites coupures)",
    genre: "Drama|Romance",
    description:
      "sapien non mi integer ac neque duis bibendum morbi non quam nec",
    imageUrl: "http://dummyimage.com/244x100.png/5fa2dd/ffffff",
    rating: 6,
  },
  {
    title: "Novena, The (La neuvaine)",
    genre: "Drama",
    description:
      "odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla",
    imageUrl: "http://dummyimage.com/125x100.png/ff4444/ffffff",
    rating: 7,
  },
  {
    title: "Simone (S1m0ne)",
    genre: "Comedy|Drama|Fantasy|Sci-Fi",
    description:
      "in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut",
    imageUrl: "http://dummyimage.com/108x100.png/cc0000/ffffff",
    rating: 8,
  },
  {
    title: "Super Mario Bros.",
    genre: "Action|Adventure|Children|Comedy|Fantasy|Sci-Fi",
    description:
      "quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
    imageUrl: "http://dummyimage.com/134x100.png/5fa2dd/ffffff",
    rating: 9,
  },
  {
    title: "The Connection",
    genre: "Crime|Drama",
    description:
      "cras in purus eu magna vulputate luctus cum sociis natoque penatibus",
    imageUrl: "http://dummyimage.com/216x100.png/5fa2dd/ffffff",
    rating: 10,
  },
  {
    title: "Revenge of the Nerds IV: Nerds in Love",
    genre: "Comedy|Romance",
    description:
      "porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem",
    imageUrl: "http://dummyimage.com/245x100.png/dddddd/000000",
    rating: 11,
  },
  {
    title: "My Amityville Horror",
    genre: "Documentary",
    description:
      "sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus",
    imageUrl: "http://dummyimage.com/203x100.png/cc0000/ffffff",
    rating: 12,
  },
  {
    title: "Hello! How Are You? (Buna! Ce faci?)",
    genre: "Comedy|Romance",
    description:
      "suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris",
    imageUrl: "http://dummyimage.com/143x100.png/dddddd/000000",
    rating: 13,
  },
  {
    title: "Inspectors, The",
    genre: "Crime|Mystery",
    description:
      "turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel",
    imageUrl: "http://dummyimage.com/245x100.png/dddddd/000000",
    rating: 14,
  },
  {
    title: "Bull Durham",
    genre: "Comedy|Drama|Romance",
    description:
      "lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh",
    imageUrl: "http://dummyimage.com/183x100.png/ff4444/ffffff",
    rating: 15,
  },
  {
    title: "Hours",
    genre: "Drama|Thriller",
    description:
      "ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam",
    imageUrl: "http://dummyimage.com/109x100.png/ff4444/ffffff",
    rating: 16,
  },
  {
    title: "Confidence",
    genre: "Crime|Thriller",
    description:
      "dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at",
    imageUrl: "http://dummyimage.com/207x100.png/dddddd/000000",
    rating: 17,
  },
  {
    title: "3 Godfathers",
    genre: "Drama|Western",
    description:
      "lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus",
    imageUrl: "http://dummyimage.com/213x100.png/cc0000/ffffff",
    rating: 18,
  },
  {
    title: "Nobody Owns Me (Mig äger ingen)",
    genre: "Drama",
    description:
      "accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae",
    imageUrl: "http://dummyimage.com/160x100.png/ff4444/ffffff",
    rating: 19,
  },
  {
    title: "The Confessions of Bernhard Goetz",
    genre: "Crime|Documentary",
    description:
      "ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu",
    imageUrl: "http://dummyimage.com/172x100.png/dddddd/000000",
    rating: 20,
  },
  {
    title:
      "It Is Written in the Stars, Inspector Palmu (Tähdet kertovat, komisario Palmu)",
    genre: "Crime|Mystery",
    description:
      "fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales",
    imageUrl: "http://dummyimage.com/109x100.png/ff4444/ffffff",
    rating: 21,
  },
  {
    title:
      "Importance of Tying Your Own Shoes, The (Hur många lingon finns det i världen?)",
    genre: "Drama",
    description:
      "volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus",
    imageUrl: "http://dummyimage.com/205x100.png/cc0000/ffffff",
    rating: 22,
  },
  {
    title: "Shipping News, The",
    genre: "Drama",
    description:
      "accumsan odio curabitur convallis duis consequat dui nec nisi volutpat",
    imageUrl: "http://dummyimage.com/155x100.png/cc0000/ffffff",
    rating: 23,
  },
  {
    title: "Tale of Two Cities, A",
    genre: "Drama|Romance",
    description:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam",
    imageUrl: "http://dummyimage.com/136x100.png/5fa2dd/ffffff",
    rating: 24,
  },
  {
    title: "Disappearance of Eleanor Rigby: Them, The",
    genre: "Drama",
    description:
      "orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat",
    imageUrl: "http://dummyimage.com/155x100.png/cc0000/ffffff",
    rating: 25,
  },
];

const users = [
  {
    first_name: "Kissie",
    last_name: "Petschelt",
    email: "kpetschelt0@gmpg.org",
    imageUrl: "http://dummyimage.com/204x100.png/cc0000/ffffff",
    rating: 1,
  },
  {
    first_name: "Manny",
    last_name: "Kynnd",
    email: "mkynnd1@who.int",
    imageUrl: "http://dummyimage.com/129x100.png/cc0000/ffffff",
    rating: 2,
  },
  {
    first_name: "Gustavo",
    last_name: "Domsalla",
    email: "gdomsalla2@fc2.com",
    imageUrl: "http://dummyimage.com/100x100.png/dddddd/000000",
    rating: 3,
  },
  {
    first_name: "Hugues",
    last_name: "Maffi",
    email: "hmaffi3@tiny.cc",
    imageUrl: "http://dummyimage.com/206x100.png/cc0000/ffffff",
    rating: 4,
  },
  {
    first_name: "Maximilianus",
    last_name: "Hartburn",
    email: "mhartburn4@prlog.org",
    imageUrl: "http://dummyimage.com/246x100.png/cc0000/ffffff",
    rating: 5,
  },
  {
    first_name: "Fran",
    last_name: "Prosh",
    email: "fprosh5@aboutads.info",
    imageUrl: "http://dummyimage.com/243x100.png/dddddd/000000",
    rating: 6,
  },
  {
    first_name: "Roselle",
    last_name: "Dent",
    email: "rdent6@ca.gov",
    imageUrl: "http://dummyimage.com/114x100.png/5fa2dd/ffffff",
    rating: 7,
  },
  {
    first_name: "Gayla",
    last_name: "Girk",
    email: "ggirk7@flavors.me",
    imageUrl: "http://dummyimage.com/158x100.png/5fa2dd/ffffff",
    rating: 8,
  },
  {
    first_name: "Towny",
    last_name: "Mattis",
    email: "tmattis8@biblegateway.com",
    imageUrl: "http://dummyimage.com/215x100.png/cc0000/ffffff",
    rating: 9,
  },
  {
    first_name: "Philis",
    last_name: "Kubach",
    email: "pkubach9@github.com",
    imageUrl: "http://dummyimage.com/180x100.png/ff4444/ffffff",
    rating: 10,
  },
  {
    first_name: "Karyl",
    last_name: "Mundle",
    email: "kmundlea@wikispaces.com",
    imageUrl: "http://dummyimage.com/232x100.png/5fa2dd/ffffff",
    rating: 11,
  },
  {
    first_name: "Emory",
    last_name: "Ferrarese",
    email: "eferrareseb@dell.com",
    imageUrl: "http://dummyimage.com/159x100.png/5fa2dd/ffffff",
    rating: 12,
  },
  {
    first_name: "Ebenezer",
    last_name: "Dalmon",
    email: "edalmonc@mediafire.com",
    imageUrl: "http://dummyimage.com/202x100.png/5fa2dd/ffffff",
    rating: 13,
  },
  {
    first_name: "Adelbert",
    last_name: "Gomar",
    email: "agomard@icq.com",
    imageUrl: "http://dummyimage.com/111x100.png/ff4444/ffffff",
    rating: 14,
  },
  {
    first_name: "Emerson",
    last_name: "Caddell",
    email: "ecaddelle@privacy.gov.au",
    imageUrl: "http://dummyimage.com/165x100.png/5fa2dd/ffffff",
    rating: 15,
  },
  {
    first_name: "Danella",
    last_name: "Nettle",
    email: "dnettlef@uiuc.edu",
    imageUrl: "http://dummyimage.com/160x100.png/cc0000/ffffff",
    rating: 16,
  },
  {
    first_name: "Abagail",
    last_name: "Adne",
    email: "aadneg@wix.com",
    imageUrl: "http://dummyimage.com/202x100.png/dddddd/000000",
    rating: 17,
  },
  {
    first_name: "Margie",
    last_name: "Richardes",
    email: "mrichardesh@soundcloud.com",
    imageUrl: "http://dummyimage.com/198x100.png/dddddd/000000",
    rating: 18,
  },
  {
    first_name: "Sabina",
    last_name: "Boseley",
    email: "sboseleyi@time.com",
    imageUrl: "http://dummyimage.com/197x100.png/dddddd/000000",
    rating: 19,
  },
  {
    first_name: "Puff",
    last_name: "Mill",
    email: "pmillj@webeden.co.uk",
    imageUrl: "http://dummyimage.com/122x100.png/5fa2dd/ffffff",
    rating: 20,
  },
  {
    first_name: "Garey",
    last_name: "Embra",
    email: "gembrak@phoca.cz",
    imageUrl: "http://dummyimage.com/118x100.png/ff4444/ffffff",
    rating: 21,
  },
  {
    first_name: "Vannie",
    last_name: "Shoutt",
    email: "vshouttl@clickbank.net",
    imageUrl: "http://dummyimage.com/183x100.png/dddddd/000000",
    rating: 22,
  },
  {
    first_name: "Joanna",
    last_name: "Ranns",
    email: "jrannsm@wikipedia.org",
    imageUrl: "http://dummyimage.com/126x100.png/dddddd/000000",
    rating: 23,
  },
  {
    first_name: "Alexina",
    last_name: "Thickett",
    email: "athickettn@boston.com",
    imageUrl: "http://dummyimage.com/155x100.png/ff4444/ffffff",
    rating: 24,
  },
  {
    first_name: "Roarke",
    last_name: "Cuff",
    email: "rcuffo@ezinearticles.com",
    imageUrl: "http://dummyimage.com/189x100.png/ff4444/ffffff",
    rating: 25,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );
    await Promise.all(
      movies_info.map((movie) => {
        return Movie.create(movie);
      })
    );
  } catch (err) {
    console.log(err);
  }
};

if (require.main === module) {
  seed()
    .then(() => {
      console.log(("Sedding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(("Oh no! Something went terribly wrong"));
      console.error(err);
    });
}
