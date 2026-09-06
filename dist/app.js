const drinkMenu = [
  {
    id: "shooters",
    name: "Shots",
    note: "Flights include 5 shots.",
    items: [
      { name: "Single Shot", price: 7 },
      { name: "Pepinazo", price: 30, description: "Flight of five shots." },
      { name: "Lemon Drop", price: 30, description: "Flight of five shots." },
      { name: "Manguito", price: 30, description: "Flight of five shots." },
      { name: "Candy Shot", price: 30, description: "Flight of five shots." },
      { name: "Kamikaze", price: 30, description: "Flight of five shots." }
    ]
  },
  {
    id: "mojitos",
    name: "Mojitos",
    items: [
      { name: "Classic Mojito", price: 10 },
      { name: "Strawberry Mojito", price: 12 },
      { name: "Coconut Mojito", price: 12 },
      { name: "Mojito Flight", price: 30, description: "Three flavors." }
    ]
  },
  {
    id: "margaritas",
    name: "Margaritas",
    items: [
      { name: "Lime", price: 12 },
      { name: "Watermelon", price: 14 },
      { name: "Strawberry", price: 14 },
      { name: "Mango", price: 14 },
      { name: "Cucumber", price: 14 },
      { name: "Guava", price: 14 },
      { name: "Tamarind", price: 14 },
      { name: "Cadillac", price: 18 },
      { name: "Margarita Flight", price: 40, description: "Six flavors." }
    ]
  },
  {
    id: "vodkaritas",
    name: "Vodkaritas",
    items: [
      { name: "Cucumber", price: 12, description: "House vodka, Midori, cucumber purée, lime juice, Tajín and a sugar rim." },
      { name: "Mango", price: 12, description: "House vodka, lime juice, agave syrup, mango purée and a Tajín rim." },
      { name: "Açaí", price: 12, description: "House vodka, açaí purée, lime juice, agave syrup and a sugar rim." }
    ]
  },
  {
    id: "mezcalitas",
    name: "Mezcalitas",
    items: [
      { name: "Passion Fruit Mezcalita", price: 16, description: "House mezcal, lime juice, agave syrup, passion fruit purée and a Tajín rim." },
      { name: "Tamarind Mezcalita", price: 16, description: "House mezcal, lime juice, agave syrup, tamarind purée and a Tajín rim." },
      { name: "Berry Mezcal", price: 16, description: "House mezcal, lime juice, agave syrup, açaí purée and mint leaves." }
    ]
  },
  {
    id: "micheladas",
    name: "Micheladas",
    items: [
      { name: "House Classic", price: 13 },
      { name: "Mango", price: 14 },
      { name: "Tamarind", price: 14 },
      { name: "La Mentirosa", price: 9, description: "Michelada mix and sparkling water." },
      { name: "Michelada Flight", price: 35 }
    ]
  },
  {
    id: "cocktails",
    name: "Cocktails",
    items: [
      { name: "The Fire Smoky", price: 18, description: "El Silencio mezcal, watermelon syrup and rhubarb bitters." },
      { name: "House Old Fashioned", price: 20, description: "Bourbon, Luxardo liqueur, aromatic bitters, orange peel and black cherry." },
      { name: "Oaxaca Old Fashioned", price: 18, description: "El Silencio mezcal and aromatic bitters." },
      { name: "Whiskey Smash", price: 16, description: "Maker's Mark, simple syrup, lime juice and muddled mint." },
      { name: "El Guayabito", price: 16, description: "Herradura Reposado, agave syrup, lime juice and guava purée." },
      { name: "House Sangria", price: 12, description: "Red wine, sparkling water, lime juice and orange juice." },
      { name: "The Poolside", price: 14, description: "Malibu rum, peach schnapps, melon liqueur and coconut cream." },
      { name: "Piña Colada", price: 14, description: "Malibu rum, pineapple juice, coconut syrup, whipped cream and a cherry." },
      { name: "Pink Panther", price: 18, description: "Tequila, mezcal, watermelon and aromatic bitters." },
      { name: "Paloma", price: 14, description: "House tequila, lime juice, grapefruit juice and agave syrup." },
      { name: "Spicy Tequila Cantarito", price: 16, description: "Herradura tequila, orange juice, grapefruit juice, Squirt and sliced serrano pepper." },
      { name: "Tropicoqueta", price: 16, description: "Malibu, cranberry, pineapple, peach schnapps and half-and-half." },
      { name: "Tableside Old Fashioned", price: 24 }
    ]
  },
  {
    id: "tequila",
    name: "Tequila",
    items: [
      { name: "House tequila", price: 8, subgroup: "Silver" },
      { name: "Herradura Silver", price: 14, subgroup: "Silver" },
      { name: "Don Julio", price: 16, subgroup: "Silver" },
      { name: "Patrón", price: 14, subgroup: "Silver" },
      { name: "1800", price: 20, subgroup: "Silver" },
      { name: "Casamigos", price: 15, subgroup: "Silver" },
      { name: "José Cuervo", price: 12, subgroup: "Silver" },
      { name: "Cazadores", price: 12, subgroup: "Silver" },
      { name: "Clase Azul", price: 25, subgroup: "Silver" },
      { name: "Maestro Dobel", price: 16, subgroup: "Silver" },
      { name: "Mandala", price: 18, subgroup: "Silver" },
      { name: "Don Julio", price: 20, subgroup: "Añejo" },
      { name: "Don Julio 70 Cristalino", price: 26, subgroup: "Añejo" },
      { name: "Don Julio 1942", price: 40, subgroup: "Añejo" },
      { name: "Patrón", price: 18, subgroup: "Añejo" },
      { name: "Herradura", price: 20, subgroup: "Añejo" },
      { name: "Clase Azul", price: 45, subgroup: "Añejo" },
      { name: "Mandala", price: 35, subgroup: "Añejo" },
      { name: "Patrón", price: 28, subgroup: "Extra Añejo" },
      { name: "Mandala", price: 40, subgroup: "Extra Añejo" },
      { name: "1800", price: 22, subgroup: "Reposado" },
      { name: "José Cuervo", price: 14, subgroup: "Reposado" },
      { name: "Herradura", price: 15, subgroup: "Reposado" },
      { name: "Casamigos", price: 16, subgroup: "Reposado" },
      { name: "Don Julio", price: 17, subgroup: "Reposado" },
      { name: "Clase Azul", price: 40, subgroup: "Reposado" },
      { name: "Patrón", price: 15, subgroup: "Reposado" },
      { name: "Cazadores", price: 12, subgroup: "Reposado" },
      { name: "Mandala", price: 20, subgroup: "Reposado" }
    ]
  },
  {
    id: "whiskey",
    name: "Whisky",
    items: [
      { name: "Jim Beam", price: 12, subgroup: "Bourbon" },
      { name: "Maker's Mark", price: 13, subgroup: "Bourbon" },
      { name: "Bulleit", price: 15, subgroup: "Bourbon" },
      { name: "Old Forester", price: 12, subgroup: "Bourbon" },
      { name: "Jack Daniel's", price: 12, subgroup: "Bourbon" },
      { name: "Woodford Reserve", price: 16, subgroup: "Bourbon" },
      { name: "Crown Royal", price: 13, subgroup: "Canadian & Irish" },
      { name: "Jameson", price: 12, subgroup: "Canadian & Irish" },
      { name: "Jameson Black Barrel", price: 14, subgroup: "Canadian & Irish" },
      { name: "Bulleit Rye", price: 12, subgroup: "American" },
      { name: "Fireball", price: 12, subgroup: "American" },
      { name: "Buchanan's 12", price: 16, subgroup: "Scotch" },
      { name: "Buchanan's 18", price: 25, subgroup: "Scotch" },
      { name: "Johnnie Walker Black Label", price: 16, subgroup: "Scotch" },
      { name: "Johnnie Walker Blue Label", price: 45, subgroup: "Scotch" },
      { name: "The Macallan", price: 22, subgroup: "Scotch" }
    ]
  },
  {
    id: "mezcal",
    name: "Mezcal",
    items: [
      { name: "Los Javis Espadín", price: 16 },
      { name: "Los Javis Espadín Reposado", price: 18 },
      { name: "Ilegal Joven Espadín", price: 16 },
      { name: "El Silencio", price: 14 },
      { name: "Los Vecinos Espadín", price: 14 }
    ]
  },
  {
    id: "gin",
    name: "Gin",
    items: [
      { name: "Bombay Dry", price: 10 },
      { name: "Bombay Sapphire", price: 13 },
      { name: "Hendrick's", price: 10 }
    ]
  },
  {
    id: "beer",
    name: "Beer",
    items: [
      { name: "Rotating Draft Beer", price: 8, subgroup: "Draft" },
      { name: "Large Draft Beer", price: 14, subgroup: "Draft" },
      { name: "Modelo Especial", price: 7, subgroup: "Bottled" },
      { name: "Negra Modelo", price: 7, subgroup: "Bottled" },
      { name: "Corona", price: 7, subgroup: "Bottled" },
      { name: "Pacífico", price: 7, subgroup: "Bottled" },
      { name: "Bud Light", price: 7, subgroup: "Bottled" },
      { name: "Michelob Ultra", price: 5, subgroup: "Bottled" },
      { name: "805", price: 7, subgroup: "Bottled" },
      { name: "Lagunitas IPA", price: 7, subgroup: "Bottled" },
      { name: "Ballast Point Sculpin IPA", price: 7, subgroup: "Bottled" },
      { name: "Mango White Claw", price: 7, subgroup: "Bottled" },
      { name: "Estrella Jalisco", price: 7, subgroup: "Bottled" },
      { name: "Stella Artois", price: 7, subgroup: "Bottled" },
      { name: "Corona Zero", price: 7, subgroup: "Bottled" },
      { name: "Heineken", price: 7, subgroup: "Bottled" },
      { name: "Heineken Zero", price: 7, subgroup: "Bottled" },
      { name: "Beer Bucket", price: 36 }
    ]
  },
  {
    id: "vodka",
    name: "Vodka",
    items: [
      { name: "Ketel One", price: 10 },
      { name: "Grey Goose", price: 12 },
      { name: "Belvedere", price: 12 },
      { name: "Tito's", price: 12 },
      { name: "Absolut", price: 12 },
      { name: "Cîroc", price: 12 }
    ]
  },
  {
    id: "rum",
    name: "Rum",
    items: [
      { name: "Malibu", price: 12 },
      { name: "Bacardi Superior", price: 10 },
      { name: "Captain Morgan", price: 12 }
    ]
  },
  {
    id: "wine-cognac",
    name: "Wine & Cognac",
    items: [
      { name: "Red wine Cabernet", price: 10, subgroup: "Wine by the Glass" },
      { name: "Chardonnay", price: 8, subgroup: "Wine by the Glass" },
      { name: "Rémy Martin", price: 12, subgroup: "Brandy & Cognac" },
      { name: "Hennessy", price: 16, subgroup: "Brandy & Cognac" }
    ]
  }
];

const foodMenu = [
  {
    id: "cantina-bites",
    name: "To Share",
    eyebrow: "Cantina Bites",
    items: [
      {
        name: "Guacamole & Chips",
        price: 13,
        description: "Fresh guacamole topped with pico de gallo and cheese, served with red salsa and tortilla chips."
      },
      {
        name: "Guacamole & Chicharrón",
        price: 20,
        description: "Fresh guacamole topped with pico de gallo and cheese, served with green salsa, crispy meat and chicharrón."
      },
      {
        name: "Bone Marrow Tacos",
        price: 24,
        description: "Roasted bone marrow, carne asada, melted cheese, spicy mayo, cilantro aioli, chimichurri and pickled onion; served with flour tortillas."
      },
      {
        name: "Compadres Fries",
        price: 18,
        description: "French fries with melted cheese, spicy mayo, cilantro aioli, pickled onion and a fried egg. Choice of carne asada, birria or chicken."
      },
      {
        name: "Nacho Libre",
        price: 17,
        description: "Nacho cheese, creamy tomatillo salsa, refried beans, sour cream, pico de gallo, jalapeño and tortilla chips. Choice of carne asada, pork belly, chicken or roasted vegetables."
      },
      {
        name: "Chicken Wings",
        price: 18,
        description: "Choice of Buffalo, mango habanero or BBQ. Served with French fries."
      },
      {
        name: "Chicken Taquitos",
        price: 17,
        description: "Fried chicken taquitos in corn tortillas with spicy mayo, sour cream, cilantro aioli and cheese."
      },
      {
        name: "Edamame",
        price: 15,
        description: "Prepared with garlic, lime, soy sauce and crushed chile."
      },
      {
        name: "Pork Belly Bites",
        price: 20,
        description: "Crispy pork belly, sriracha honey, spicy mayo and corn tortillas."
      },
      {
        name: "Ahi Poke Nachos",
        price: 20,
        description: "Marinated ahi tuna, crispy wontons, pickled cabbage, avocado, eel sauce, soy sauce, cilantro aioli and sesame seeds."
      },
      {
        name: "Compa Bites",
        price: 25,
        description: "Chicken taquitos, Compadres Fries and Buffalo wings."
      },
      {
        name: "Taco Sampler",
        price: 24,
        description: "Surf & turf taco, pork belly taco, crispy shrimp taco and battered fish taco."
      }
    ]
  },
  {
    id: "tacos",
    name: "Tacos",
    items: [
      {
        name: "Carne Asada Taco",
        price: 6.5,
        description: "Flour tortilla, melted cheese, cabbage, pico de gallo, cilantro aioli and spicy mayo."
      },
      {
        name: "Birria Taco",
        price: 7,
        description: "One taco served with onion and cilantro."
      },
      {
        name: "Pork Belly Taco",
        price: 7,
        description: "Slow-cooked pork belly, corn tortilla, cheese, guacamole and pickled onion."
      },
      {
        name: "Crispy Shrimp Taco",
        price: 6.5,
        description: "Flour tortilla, sweet-and-spicy battered rock shrimp, cabbage, spicy mayo, sriracha honey, sesame seeds and green onion."
      },
      {
        name: "Fish Taco",
        price: 6,
        description: "Corn tortilla, beer-battered fish, cabbage, pico de gallo and cilantro aioli."
      },
      {
        name: "Quesabirria Tacos",
        price: 20,
        description: "Three tacos with melted cheese, consommé, onion and cilantro."
      },
      {
        name: "Gobernador Tacos",
        price: 25,
        description: "Three grilled shrimp tacos with cabbage, pico de gallo, sour cream and melted cheese."
      }
    ]
  },
  {
    id: "special-tacos",
    name: "Specialty Tacos",
    items: [
      {
        name: "Arrachera Surf & Turf",
        price: 9,
        description: "Arrachera-style steak, spicy grilled shrimp, cabbage, pico de gallo and cilantro aioli."
      },
      {
        name: "Arrachera Specialty Taco",
        price: 16,
        description: "Seven-inch corn tortilla, nopales, pickled onion, melted cheese and cilantro aioli."
      },
      {
        name: "Ribeye Taco",
        price: 12,
        description: "Eight-inch flour tortilla, ribeye, melted cheese, grilled onion, cilantro and pickled onion."
      }
    ]
  },
  {
    id: "burritos-bowls",
    name: "Burritos, Bowls & Quesadillas",
    items: [
      {
        name: "Burrito Surf & Turf",
        price: 21,
        description: "Arrachera, spicy grilled shrimp, bacon, melted cheese, pico de gallo, cabbage, spicy mayo and cilantro aioli. Served with French fries."
      },
      {
        name: "Burrito California",
        price: 17,
        description: "Carne asada, French fries inside, pico de gallo and cheese."
      },
      {
        name: "House Burrito",
        price: 17,
        description: "Rice, refried beans, cabbage, pico de gallo and sour cream. Choice of carne asada, chicken or pork belly. Served with French fries."
      },
      {
        name: "Carne Asada Quesadilla",
        price: 17,
        description: "Cheese and steak, with pico de gallo and cabbage on the side."
      },
      {
        name: "Bowl Compadres",
        price: 20,
        description: "Rice, beans, pico de gallo, sour cream and cabbage. Choice of carne asada, chicken tinga or birria."
      }
    ]
  },
  {
    id: "sushi-rolls",
    name: "Sushi Rolls",
    items: [
      {
        name: "Compadres Roll",
        price: 17,
        description: "Inside: seaweed, cream cheese, imitation crab, cooked shrimp and cucumber. Outside: imitation crab mix, avocado, eel sauce, spicy mayo, sesame seeds and green onion."
      },
      {
        name: "Crunch Roll",
        price: 17,
        description: "Inside: seaweed, cream cheese, imitation crab, cooked shrimp, cucumber and avocado. Outside: imitation crab mix, tempura crumbs, eel sauce, spicy mayo, sesame seeds and green onion."
      },
      {
        name: "Jalapeño Roll",
        price: 17,
        description: "Inside: seaweed, cream cheese, imitation crab, cooked shrimp, cucumber and avocado. Outside: imitation crab mix, sliced jalapeño, eel sauce, spicy mayo, sesame seeds and green onion."
      },
      {
        name: "Surf & Turf Roll",
        price: 20,
        description: "Inside: seaweed, cream cheese, imitation crab, carne asada, cooked shrimp, cucumber and avocado. Outside: imitation crab mix, eel sauce, spicy mayo, sesame seeds and green onion."
      },
      {
        name: "California Roll",
        price: 10,
        description: "Inside: seaweed, cream cheese, imitation crab, cucumber and avocado. Outside: eel sauce."
      },
      {
        name: "Make It Deep-Fried",
        price: 2
      }
    ]
  },
  {
    id: "cantina-favorites",
    name: "Cantina Favorites",
    items: [
      {
        name: "Carne Asada Plate",
        price: 28,
        description: "Tampiqueña-style steak served with rice, refried beans, pico de gallo, grilled onion and corn tortillas."
      },
      {
        name: "Tampiqueña",
        price: 34,
        description: "Tampiqueña-style steak served with a cheese enchilada, rice, refried beans, pico de gallo, grilled onion and corn tortillas."
      },
      {
        name: "Chicken Enchiladas",
        price: 19,
        description: "Three enchiladas in creamy green tomatillo sauce, served with rice and beans."
      },
      {
        name: "Grilled Octopus",
        price: 28,
        description: "Prepared with roasted salsa and served with mashed potatoes and salad."
      },
      {
        name: "Classic Burger",
        price: 16,
        description: "Beef, cheese, dressing, iceberg lettuce, tomato and onion, with French fries on the side. Add bacon for $3."
      },
      {
        name: "Mini Birria Burritos",
        price: 20,
        description: "Three beef birria burritos served with rice and refried beans."
      },
      {
        name: "Grilled Chicken Tacos",
        price: 17,
        description: "Three corn tortilla tacos with melted cheese, pico de gallo, cilantro aioli and cabbage."
      }
    ]
  },
  {
    id: "signatures",
    name: "Specialties",
    items: [
      {
        name: "Ribeye",
        price: 48,
        description: "Served with salad and a baked potato."
      },
      {
        name: "Ribeye & Shrimp",
        price: 58,
        description: "Ribeye, grilled shrimp, salad and a baked potato."
      },
      {
        name: "New York steak",
        priceLabel: "Market Price",
        description: "Served with salad and a baked potato."
      },
      {
        name: "Molcajete",
        price: 53,
        description: "Grilled shell-on shrimp, grilled chicken, carne asada, chorizo, cheese, pico de gallo, rice, refried beans, and corn and flour tortillas."
      },
      {
        name: "Parrillada",
        priceLabel: "Market Price",
        description: "Grilled shell-on shrimp, grilled chicken, ribeye, carne asada, chorizo, cheese, pico de gallo, rice, refried beans and tortillas."
      }
    ]
  },
  {
    id: "shrimp-your-way",
    name: "Shrimp Your Way",
    items: [
      {
        name: "Garlic Butter Shrimp",
        price: 24,
        description: "Shell-on shrimp served with rice and salad."
      },
      {
        name: "Shrimp a la Diabla",
        price: 24,
        description: "Shell-on shrimp served with rice and salad."
      },
      {
        name: "Cucaracha Shrimp",
        price: 24,
        description: "Shell-on shrimp served with rice and salad."
      }
    ]
  },
  {
    id: "baja-seafood",
    name: "Baja-Style Seafood",
    items: [
      {
        name: "Aguachile",
        price: 24,
        description: "Lime-cured shrimp, green salsa, avocado, cucumber and onion. Served with tostadas."
      },
      {
        name: "Shrimp Cocktail",
        price: 22,
        description: "Cooked shrimp, cucumber, onion, tomato, cilantro, Clamato and avocado. Served with tostadas."
      },
      {
        name: "Campechana",
        price: 23,
        description: "Lime-cured shrimp, cooked shrimp, octopus, cucumber, onion, tomato, cilantro, Clamato and avocado. Served with tostadas."
      },
      {
        name: "Mango Shrimp Bowl",
        price: 23,
        description: "Mango pieces, cooked shrimp, tomato, cucumber, onion, cilantro and house sauce. Served with tostadas."
      },
      {
        name: "Shrimp Ceviche Bowl",
        price: 22,
        description: "Lime-cured shrimp, cucumber, tomato, onion, cilantro, Clamato and avocado. Served with tostadas."
      },
      {
        name: "Shrimp Tostada",
        price: 10,
        description: "One tostada with lime-cured shrimp, cucumber, tomato, onion, cilantro, Clamato and avocado."
      },
      {
        name: "Fish Tostada",
        price: 10,
        description: "One tostada with lime-cured fish, cucumber, tomato, onion, cilantro, Clamato and avocado."
      },
      {
        name: "Mixed Tostada",
        price: 25,
        description: "Cooked shrimp, lime-cured shrimp, octopus, shredded crab, house sauce, Clamato, tomato, cucumber, onion, cilantro and avocado."
      },
      {
        name: "Blue Tostada",
        price: 23,
        description: "Lime-cured shrimp, cooked shrimp, octopus, onion, cucumber, house sauce and extra-spicy chile oil sauce."
      },
      {
        name: "Mojarra",
        price: 23,
        description: "Whole fried tilapia, corn tortillas, salad, rice and beans."
      }
    ]
  },
  {
    id: "salads",
    name: "Salads",
    items: [
      {
        name: "House Salad",
        price: 10,
        description: "Mixed greens, tomato, onion, ranch dressing and croutons. Add protein for an additional charge: carne asada, grilled chicken or shrimp."
      }
    ]
  },
  {
    id: "kids",
    name: "Kids",
    items: [
      {
        name: "Kid’s Cheese Quesadilla",
        price: 9,
        description: "Served with French fries. Add carne asada or chicken tinga for an additional charge."
      },
      {
        name: "Kid’s Bean & Cheese Burrito",
        price: 9,
        description: "Served with French fries."
      }
    ]
  }
];

const menus = {
  food: {
    name: "Food",
    groups: foodMenu,
    defaultCategory: "cantina-bites",
    allLabel: "All Food",
    searchLabel: "Search the food menu",
    searchPlaceholder: "Try “tacos,” “birria” or “shrimp”",
    emptyTitle: "No dishes found.",
    emptyCopy: "Try another name, ingredient or category."
  },
  drinks: {
    name: "Drinks",
    groups: drinkMenu,
    defaultCategory: "cocktails",
    allLabel: "All Drinks",
    searchLabel: "Search the drink menu",
    searchPlaceholder: "Try “margarita” or “mezcal”",
    emptyTitle: "No drinks found.",
    emptyCopy: "Try another name, spirit or flavor."
  }
};

const categoryButtons = document.querySelector("#category-buttons");
const menuGroups = document.querySelector("#menu-groups");
const menuSearch = document.querySelector("#menu-search");
const menuSearchLabel = document.querySelector("#menu-search-label");
const menuCount = document.querySelector("#menu-count");
const menuContext = document.querySelector("#menu-context");
const menuEmpty = document.querySelector("#menu-empty");
const menuEmptyTitle = document.querySelector("#menu-empty-title");
const menuEmptyCopy = document.querySelector("#menu-empty-copy");
const menuTypeButtons = Array.from(document.querySelectorAll("[data-menu-type]"));
const clearSearch = document.querySelector("#clear-search");
const fullMenuBrowser = document.querySelector("#full-menu-browser");
const openFullMenuButton = document.querySelector("#open-full-menu");
const openDrinkMenuButtons = Array.from(document.querySelectorAll("[data-open-full-menu]"));
const openCategoryButtons = Array.from(document.querySelectorAll("[data-open-category]"));
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const header = document.querySelector("[data-header]");
let activeMenuType = "food";
let activeCategory = menus[activeMenuType].defaultCategory;

function normalize(value) {
  return value
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function totalItems(groups) {
  return groups.reduce((total, group) => total + group.items.length, 0);
}

function formatPrice(item) {
  if (item.priceLabel) return item.priceLabel;
  if (!Number.isFinite(item.price)) return "";
  return `$${Number.isInteger(item.price) ? item.price : item.price.toFixed(2)}`;
}

function createCategoryButton(id, name, count) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "category-button";
  button.dataset.category = id;
  button.append(document.createTextNode(name));

  const quantity = document.createElement("span");
  quantity.textContent = String(count).padStart(2, "0");
  button.append(quantity);
  button.addEventListener("click", () => {
    activeCategory = id;
    menuSearch.value = "";
    render();
  });
  return button;
}

function buildCategoryButtons() {
  const currentMenu = menus[activeMenuType];
  categoryButtons.replaceChildren();
  categoryButtons.append(createCategoryButton("all", currentMenu.allLabel, totalItems(currentMenu.groups)));
  currentMenu.groups.forEach((group) => {
    categoryButtons.append(createCategoryButton(group.id, group.name, group.items.length));
  });
}

function createMenuItem(item) {
  const article = document.createElement("article");
  article.className = `menu-item${item.subgroup ? " has-subgroup" : ""}`;

  if (item.subgroup) {
    const subgroup = document.createElement("span");
    subgroup.className = "subgroup";
    subgroup.textContent = item.subgroup;
    article.append(subgroup);
  }

  const title = document.createElement("h4");
  title.textContent = item.name;
  article.append(title);

  const formattedPrice = formatPrice(item);
  if (formattedPrice) {
    const price = document.createElement("span");
    price.className = `price${item.priceLabel ? " price-on-request" : ""}`;
    price.textContent = formattedPrice;
    article.append(price);
  }

  if (item.description) {
    const description = document.createElement("p");
    description.className = "description";
    description.textContent = item.description;
    article.append(description);
  }

  return article;
}

function createMenuGroup(group, items) {
  const section = document.createElement("section");
  section.className = "menu-group";

  const heading = document.createElement("div");
  heading.className = "menu-group-heading";
  const title = document.createElement("h3");
  title.textContent = group.name;
  heading.append(title, document.createElement("span"));

  const itemGrid = document.createElement("div");
  itemGrid.className = "menu-items";
  items.forEach((item) => itemGrid.append(createMenuItem(item)));

  section.append(heading);

  if (group.note) {
    const note = document.createElement("p");
    note.className = "group-note";
    note.textContent = group.note;
    section.append(note);
  }

  section.append(itemGrid);
  return section;
}

function render() {
  const currentMenu = menus[activeMenuType];
  const query = normalize(menuSearch.value.trim());
  const filteredGroups = [];

  currentMenu.groups.forEach((group) => {
    if (!query && activeCategory !== "all" && activeCategory !== group.id) return;

    const items = group.items.filter((item) => {
      if (!query) return true;
      const haystack = normalize([group.name, group.eyebrow, item.name, item.subgroup, item.description].filter(Boolean).join(" "));
      return haystack.includes(query);
    });

    if (items.length) filteredGroups.push({ group, items });
  });

  menuGroups.replaceChildren();
  let visibleCount = 0;
  filteredGroups.forEach(({ group, items }) => {
    visibleCount += items.length;
    menuGroups.append(createMenuGroup(group, items));
  });

  document.querySelectorAll(".category-button").forEach((button) => {
    const isActive = !query && button.dataset.category === activeCategory;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const currentGroup = currentMenu.groups.find((group) => group.id === activeCategory);
  menuContext.textContent = query ? `Results for “${menuSearch.value.trim()}”` : activeCategory === "all" ? currentMenu.allLabel : currentGroup.name;
  menuCount.textContent = `${visibleCount} ${visibleCount === 1 ? "option" : "options"}`;
  menuEmpty.hidden = visibleCount !== 0;
}

function selectMenuType(type) {
  if (!menus[type]) return;

  activeMenuType = type;
  activeCategory = menus[type].defaultCategory;
  menuSearch.value = "";
  menuSearchLabel.textContent = menus[type].searchLabel;
  menuSearch.placeholder = menus[type].searchPlaceholder;
  menuEmptyTitle.textContent = menus[type].emptyTitle;
  menuEmptyCopy.textContent = menus[type].emptyCopy;

  menuTypeButtons.forEach((button) => {
    const isActive = button.dataset.menuType === type;
    button.setAttribute("aria-pressed", String(isActive));
  });

  buildCategoryButtons();
  render();
}

function revealFullMenu(type = "food", category = "all") {
  fullMenuBrowser.hidden = false;
  openFullMenuButton.setAttribute("aria-expanded", "true");
  selectMenuType(type);

  if (category === "all" || menus[type].groups.some((group) => group.id === category)) {
    activeCategory = category;
    render();
  }

  requestAnimationFrame(() => {
    fullMenuBrowser.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function closeNavigation() {
  siteNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

menuTypeButtons.forEach((button) => {
  const type = button.dataset.menuType;
  const total = totalItems(menus[type].groups);
  const count = button.querySelector("[data-menu-total]");
  if (count) count.textContent = `${total} options`;
  button.addEventListener("click", () => selectMenuType(type));
});

document.querySelectorAll("[data-menu-jump]").forEach((link) => {
  link.addEventListener("click", () => {
    selectMenuType(link.dataset.menuJump);
  });
});

selectMenuType(activeMenuType);

openFullMenuButton.addEventListener("click", () => revealFullMenu("food"));
openDrinkMenuButtons.forEach((button) => {
  button.addEventListener("click", () => revealFullMenu(button.dataset.openFullMenu || "drinks"));
});
openCategoryButtons.forEach((button) => {
  button.addEventListener("click", () => revealFullMenu("food", button.dataset.openCategory));
});

menuSearch.addEventListener("input", render);
clearSearch.addEventListener("click", () => {
  menuSearch.value = "";
  activeCategory = "all";
  render();
  menuSearch.focus();
});

navToggle.addEventListener("click", () => {
  const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
  navToggle.setAttribute("aria-expanded", String(willOpen));
  siteNav.classList.toggle("is-open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
});

siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}, { passive: true });

document.querySelector("#year").textContent = new Date().getFullYear();
