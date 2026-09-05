const drinkMenu = [
  {
    id: "shooters",
    name: "Chupitos",
    note: "Las degustaciones incluyen 5 chupitos.",
    items: [
      { name: "Chupito individual", price: 7 },
      { name: "Pepinazo", price: 30, description: "Degustación de cinco chupitos." },
      { name: "Lemon Drop", price: 30, description: "Degustación de cinco chupitos." },
      { name: "Manguito", price: 30, description: "Degustación de cinco chupitos." },
      { name: "Candy Shot", price: 30, description: "Degustación de cinco chupitos." },
      { name: "Kamikaze", price: 30, description: "Degustación de cinco chupitos." }
    ]
  },
  {
    id: "mojitos",
    name: "Mojitos",
    items: [
      { name: "Mojito clásico", price: 10 },
      { name: "Mojito de fresa", price: 12 },
      { name: "Mojito de coco", price: 12 },
      { name: "Degustación de mojitos", price: 30, description: "Tres sabores." }
    ]
  },
  {
    id: "margaritas",
    name: "Margaritas",
    items: [
      { name: "Limón", price: 12 },
      { name: "Sandía", price: 14 },
      { name: "Fresa", price: 14 },
      { name: "Mango", price: 14 },
      { name: "Pepino", price: 14 },
      { name: "Guayaba", price: 14 },
      { name: "Tamarindo", price: 14 },
      { name: "Cadillac", price: 18 },
      { name: "Degustación de margaritas", price: 40, description: "Seis sabores." }
    ]
  },
  {
    id: "vodkaritas",
    name: "Vodkaritas",
    items: [
      { name: "Pepino", price: 12, description: "Vodka de la casa, Midori, puré de pepino, jugo de limón, Tajín y escarchado de azúcar." },
      { name: "Mango", price: 12, description: "Vodka de la casa, jugo de limón, jarabe de agave, puré de mango y escarchado de Tajín." },
      { name: "Açaí", price: 12, description: "Vodka de la casa, puré de açaí, jugo de limón, jarabe de agave y escarchado de azúcar." }
    ]
  },
  {
    id: "mezcalitas",
    name: "Mezcalitas",
    items: [
      { name: "Mezcalita de maracuyá", price: 16, description: "Mezcal de la casa, jugo de limón, jarabe de agave, puré de maracuyá y escarchado de Tajín." },
      { name: "Mezcalita de tamarindo", price: 16, description: "Mezcal de la casa, jugo de limón, jarabe de agave, puré de tamarindo y escarchado de Tajín." },
      { name: "Mezcal de frutos rojos", price: 16, description: "Mezcal de la casa, jugo de limón, jarabe de agave, puré de açaí y hojas de menta." }
    ]
  },
  {
    id: "micheladas",
    name: "Micheladas",
    items: [
      { name: "Clásica de la casa", price: 13 },
      { name: "Mango", price: 14 },
      { name: "Tamarindo", price: 14 },
      { name: "La Mentirosa", price: 9, description: "Mezcla para michelada y agua mineral." },
      { name: "Degustación de micheladas", price: 35 }
    ]
  },
  {
    id: "cocktails",
    name: "Cócteles",
    items: [
      { name: "The Fire Smoky", price: 18, description: "Mezcal El Silencio, jarabe de sandía y bitters de ruibarbo." },
      { name: "Old Fashioned de la casa", price: 20, description: "Bourbon, licor Luxardo, bitters aromáticos, cáscara de naranja y cereza negra." },
      { name: "Oaxaca Old Fashioned", price: 18, description: "Mezcal El Silencio y bitters aromáticos." },
      { name: "Whiskey Smash", price: 16, description: "Maker's Mark, jarabe simple, jugo de limón y menta macerada." },
      { name: "El Guayabito", price: 16, description: "Herradura Reposado, jarabe de agave, jugo de limón y puré de guayaba." },
      { name: "Sangría de la casa", price: 12, description: "Vino tinto, agua mineral, jugo de limón y jugo de naranja." },
      { name: "The Poolside", price: 14, description: "Ron Malibu, licor de durazno, licor de melón y crema de coco." },
      { name: "Piña Colada", price: 14, description: "Ron Malibu, jugo de piña, jarabe de coco, crema batida y cereza." },
      { name: "Pink Panther", price: 18, description: "Tequila, mezcal, sandía y bitters aromáticos." },
      { name: "Paloma", price: 14, description: "Tequila de la casa, jugo de limón, jugo de toronja y jarabe de agave." },
      { name: "Cantarito picante con tequila", price: 16, description: "Tequila Herradura, jugo de naranja, jugo de toronja, Squirt y rodajas de chile serrano." },
      { name: "Tropicoqueta", price: 16, description: "Malibu, arándano rojo, piña, licor de durazno y mezcla de leche y crema." },
      { name: "Old Fashioned preparado en la mesa", price: 24 }
    ]
  },
  {
    id: "tequila",
    name: "Tequila",
    items: [
      { name: "Tequila de la casa", price: 8, subgroup: "Blanco" },
      { name: "Herradura Silver", price: 14, subgroup: "Blanco" },
      { name: "Don Julio", price: 16, subgroup: "Blanco" },
      { name: "Patrón", price: 14, subgroup: "Blanco" },
      { name: "1800", price: 20, subgroup: "Blanco" },
      { name: "Casamigos", price: 15, subgroup: "Blanco" },
      { name: "José Cuervo", price: 12, subgroup: "Blanco" },
      { name: "Cazadores", price: 12, subgroup: "Blanco" },
      { name: "Clase Azul", price: 25, subgroup: "Blanco" },
      { name: "Maestro Dobel", price: 16, subgroup: "Blanco" },
      { name: "Mandala", price: 18, subgroup: "Blanco" },
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
      { name: "Crown Royal", price: 13, subgroup: "Canadiense e irlandés" },
      { name: "Jameson", price: 12, subgroup: "Canadiense e irlandés" },
      { name: "Jameson Black Barrel", price: 14, subgroup: "Canadiense e irlandés" },
      { name: "Bulleit Rye", price: 12, subgroup: "Estadounidense" },
      { name: "Fireball", price: 12, subgroup: "Estadounidense" },
      { name: "Buchanan's 12", price: 16, subgroup: "Escocés" },
      { name: "Buchanan's 18", price: 25, subgroup: "Escocés" },
      { name: "Johnnie Walker Black Label", price: 16, subgroup: "Escocés" },
      { name: "Johnnie Walker Blue Label", price: 45, subgroup: "Escocés" },
      { name: "The Macallan", price: 22, subgroup: "Escocés" }
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
    name: "Ginebra",
    items: [
      { name: "Bombay Dry", price: 10 },
      { name: "Bombay Sapphire", price: 13 },
      { name: "Hendrick's", price: 10 }
    ]
  },
  {
    id: "beer",
    name: "Cerveza",
    items: [
      { name: "Cerveza de barril rotativa", price: 8, subgroup: "De barril" },
      { name: "Cerveza de barril grande", price: 14, subgroup: "De barril" },
      { name: "Modelo Especial", price: 7, subgroup: "En botella" },
      { name: "Negra Modelo", price: 7, subgroup: "En botella" },
      { name: "Corona", price: 7, subgroup: "En botella" },
      { name: "Pacífico", price: 7, subgroup: "En botella" },
      { name: "Bud Light", price: 7, subgroup: "En botella" },
      { name: "Michelob Ultra", price: 5, subgroup: "En botella" },
      { name: "805", price: 7, subgroup: "En botella" },
      { name: "Lagunitas IPA", price: 7, subgroup: "En botella" },
      { name: "Ballast Point Sculpin IPA", price: 7, subgroup: "En botella" },
      { name: "Mango White Claw", price: 7, subgroup: "En botella" },
      { name: "Estrella Jalisco", price: 7, subgroup: "En botella" },
      { name: "Stella Artois", price: 7, subgroup: "En botella" },
      { name: "Corona Zero", price: 7, subgroup: "En botella" },
      { name: "Heineken", price: 7, subgroup: "En botella" },
      { name: "Heineken Zero", price: 7, subgroup: "En botella" },
      { name: "Cubeta de cerveza", price: 36 }
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
    name: "Ron",
    items: [
      { name: "Malibu", price: 12 },
      { name: "Bacardi Superior", price: 10 },
      { name: "Captain Morgan", price: 12 }
    ]
  },
  {
    id: "wine-cognac",
    name: "Vino y coñac",
    items: [
      { name: "Vino tinto Cabernet", price: 10, subgroup: "Vino por copa" },
      { name: "Chardonnay", price: 8, subgroup: "Vino por copa" },
      { name: "Rémy Martin", price: 12, subgroup: "Brandy y coñac" },
      { name: "Hennessy", price: 16, subgroup: "Brandy y coñac" }
    ]
  }
];

const foodMenu = [
  {
    id: "cantina-bites",
    name: "Para compartir",
    eyebrow: "Cantina Bites",
    items: [
      {
        name: "Guacamole con totopos",
        price: 13,
        description: "Guacamole fresco con pico de gallo y queso por encima, acompañado de salsa roja y totopos."
      },
      {
        name: "Guacamole con chicharrón",
        price: 20,
        description: "Guacamole fresco con pico de gallo y queso por encima, acompañado de salsa verde, carne crujiente y chicharrón."
      },
      {
        name: "Tacos de tuétano",
        price: 24,
        description: "Hueso con tuétano rostizado, carne asada, queso derretido, mayonesa picante, alioli de cilantro, chimichurri y cebolla encurtida; servido con tortillas de harina."
      },
      {
        name: "Papas Compadres",
        price: 18,
        description: "Papas fritas con queso derretido, mayonesa picante, alioli de cilantro, cebolla encurtida y huevo frito. A elegir: asada, birria o pollo."
      },
      {
        name: "Nacho Libre",
        price: 17,
        description: "Queso para nachos, salsa cremosa de tomatillo, frijoles refritos, crema agria, pico de gallo, jalapeño y totopos. A elegir: asada, pork belly, pollo o vegetales rostizados."
      },
      {
        name: "Alitas de pollo",
        price: 18,
        description: "A elegir: Buffalo, mango habanero o BBQ. Acompañadas de papas fritas."
      },
      {
        name: "Taquitos de pollo",
        price: 17,
        description: "Taquitos fritos de pollo en tortilla de maíz con mayonesa picante, crema agria, alioli de cilantro y queso."
      },
      {
        name: "Edamame",
        price: 15,
        description: "Preparado con ajo, limón, salsa de soya y chile triturado."
      },
      {
        name: "Bocados de pork belly",
        price: 20,
        description: "Pork belly crujiente, miel con sriracha, mayonesa picante y tortilla de maíz."
      },
      {
        name: "Nachos de atún poke",
        price: 20,
        description: "Atún ahi marinado, wonton crujiente, col encurtida, aguacate, salsa de anguila, salsa de soya, alioli de cilantro y semillas de sésamo."
      },
      {
        name: "Compa Bites",
        price: 25,
        description: "Taquitos de pollo, Papas Compadres y alitas Buffalo."
      },
      {
        name: "Degustación de tacos",
        price: 24,
        description: "Taco surf & turf, taco de pork belly, taco de camarón crujiente y taco de pescado rebozado."
      }
    ]
  },
  {
    id: "tacos",
    name: "Tacos",
    items: [
      {
        name: "Taco de carne asada",
        price: 6.5,
        description: "Tortilla de harina, queso derretido, col, pico de gallo, alioli de cilantro y mayonesa picante."
      },
      {
        name: "Taco de birria",
        price: 7,
        description: "Un taco servido con cebolla y cilantro."
      },
      {
        name: "Taco de pork belly",
        price: 7,
        description: "Pork belly cocinado lentamente, tortilla de maíz, queso, guacamole y cebolla encurtida."
      },
      {
        name: "Taco de camarón crujiente",
        price: 6.5,
        description: "Tortilla de harina, camarón de roca rebozado agridulce y picante, col, mayonesa picante, miel con sriracha, semillas de sésamo y cebollín."
      },
      {
        name: "Taco de pescado",
        price: 6,
        description: "Tortilla de maíz, pescado rebozado con cerveza, col, pico de gallo y alioli de cilantro."
      },
      {
        name: "Tacos de quesabirria",
        price: 20,
        description: "Tres tacos con queso derretido, consomé, cebolla y cilantro."
      },
      {
        name: "Tacos gobernador",
        price: 25,
        description: "Tres tacos de camarón a la parrilla con col, pico de gallo, crema agria y queso derretido."
      }
    ]
  },
  {
    id: "special-tacos",
    name: "Tacos especiales",
    items: [
      {
        name: "Arrachera Surf & Turf",
        price: 9,
        description: "Carne estilo arrachera, camarón picante a la parrilla, col, pico de gallo y alioli de cilantro."
      },
      {
        name: "Taco especial de arrachera",
        price: 16,
        description: "Tortilla de maíz de 7 pulgadas, nopales, cebolla encurtida, queso derretido y alioli de cilantro."
      },
      {
        name: "Taco de ribeye",
        price: 12,
        description: "Tortilla de harina de 8 pulgadas, ribeye, queso derretido, cebolla asada, cilantro y cebolla encurtida."
      }
    ]
  },
  {
    id: "burritos-bowls",
    name: "Burritos, bowls y quesadillas",
    items: [
      {
        name: "Burrito Surf & Turf",
        price: 21,
        description: "Arrachera, camarón picante a la parrilla, tocino, queso derretido, pico de gallo, col, mayonesa picante y alioli de cilantro. Acompañado de papas fritas."
      },
      {
        name: "Burrito California",
        price: 17,
        description: "Carne asada, papas fritas por dentro, pico de gallo y queso."
      },
      {
        name: "Burrito de la casa",
        price: 17,
        description: "Arroz, frijoles refritos, col, pico de gallo y crema agria. A elegir: asada, pollo o pork belly. Acompañado de papas fritas."
      },
      {
        name: "Quesadilla de asada",
        price: 17,
        description: "Queso y carne, con pico de gallo y col aparte."
      },
      {
        name: "Bowl Compadres",
        price: 20,
        description: "Arroz, frijoles, pico de gallo, crema agria y col. A elegir: asada, pollo tinga o birria."
      }
    ]
  },
  {
    id: "sushi-rolls",
    name: "Rollos de sushi",
    items: [
      {
        name: "Rollo Compadres",
        price: 17,
        description: "Por dentro: alga, queso crema, imitación de cangrejo, camarón cocido y pepino. Por fuera: mezcla de imitación de cangrejo, aguacate, salsa de anguila, mayonesa picante, semillas de sésamo y cebollín."
      },
      {
        name: "Rollo Crunch",
        price: 17,
        description: "Por dentro: alga, queso crema, imitación de cangrejo, camarón cocido, pepino y aguacate. Por fuera: mezcla de imitación de cangrejo, migas de tempura, salsa de anguila, mayonesa picante, semillas de sésamo y cebollín."
      },
      {
        name: "Rollo Jalapeño",
        price: 17,
        description: "Por dentro: alga, queso crema, imitación de cangrejo, camarón cocido, pepino y aguacate. Por fuera: mezcla de imitación de cangrejo, rodajas de jalapeño, salsa de anguila, mayonesa picante, semillas de sésamo y cebollín."
      },
      {
        name: "Rollo Surf & Turf",
        price: 20,
        description: "Por dentro: alga, queso crema, imitación de cangrejo, carne asada, camarón cocido, pepino y aguacate. Por fuera: mezcla de imitación de cangrejo, salsa de anguila, mayonesa picante, semillas de sésamo y cebollín."
      },
      {
        name: "Rollo California",
        price: 10,
        description: "Por dentro: alga, queso crema, imitación de cangrejo, pepino y aguacate. Por fuera: salsa de anguila."
      },
      {
        name: "Hazlo empanizado",
        price: 2
      }
    ]
  },
  {
    id: "cantina-favorites",
    name: "Favoritos de la cantina",
    items: [
      {
        name: "Plato de carne asada",
        price: 28,
        description: "Corte estilo tampiqueña acompañado de arroz, frijoles refritos, pico de gallo, cebolla asada y tortilla de maíz."
      },
      {
        name: "Tampiqueña",
        price: 34,
        description: "Corte estilo tampiqueña acompañado de enchilada de queso, arroz, frijoles refritos, pico de gallo, cebolla asada y tortilla de maíz."
      },
      {
        name: "Enchiladas de pollo",
        price: 19,
        description: "Tres enchiladas en salsa cremosa de tomatillo verde, acompañadas de arroz y frijoles."
      },
      {
        name: "Pulpo a la parrilla",
        price: 28,
        description: "Preparado con salsa rostizada y acompañado de puré de papa y ensalada."
      },
      {
        name: "Hamburguesa clásica",
        price: 16,
        description: "Carne, queso, aderezo, lechuga iceberg, tomate y cebolla, con papas fritas aparte. Agrega tocino por $3."
      },
      {
        name: "Mini burritos de birria",
        price: 20,
        description: "Tres burritos de birria de res acompañados de arroz y frijoles refritos."
      },
      {
        name: "Tacos de pollo a la parrilla",
        price: 17,
        description: "Tres tacos en tortilla de maíz con queso derretido, pico de gallo, alioli de cilantro y col."
      }
    ]
  },
  {
    id: "signatures",
    name: "Especialidades",
    items: [
      {
        name: "Ribeye",
        price: 48,
        description: "Acompañado de ensalada y papa al horno."
      },
      {
        name: "Ribeye con camarones",
        price: 58,
        description: "Ribeye, camarones a la parrilla, ensalada y papa al horno."
      },
      {
        name: "New York steak",
        priceLabel: "Consultar",
        description: "Acompañado de ensalada y papa al horno."
      },
      {
        name: "Molcajete",
        price: 53,
        description: "Camarones con cáscara a la parrilla, pollo a la parrilla, carne asada, chorizo, queso, pico de gallo, arroz, frijoles refritos y tortillas de maíz y harina."
      },
      {
        name: "Parrillada",
        priceLabel: "Consultar",
        description: "Camarones con cáscara a la parrilla, pollo a la parrilla, ribeye, carne asada, chorizo, queso, pico de gallo, arroz, frijoles refritos y tortilla."
      }
    ]
  },
  {
    id: "shrimp-your-way",
    name: "Camarones a tu gusto",
    items: [
      {
        name: "Camarones al ajo y mantequilla",
        price: 24,
        description: "Camarones con cáscara, acompañados de arroz y ensalada."
      },
      {
        name: "Camarones a la diabla",
        price: 24,
        description: "Camarones con cáscara, acompañados de arroz y ensalada."
      },
      {
        name: "Camarones cucaracha",
        price: 24,
        description: "Camarones con cáscara, acompañados de arroz y ensalada."
      }
    ]
  },
  {
    id: "baja-seafood",
    name: "Mariscos estilo Baja",
    items: [
      {
        name: "Aguachile",
        price: 24,
        description: "Camarón curado en limón, salsa verde, aguacate, pepino y cebolla. Acompañado de tostadas."
      },
      {
        name: "Cóctel de camarón",
        price: 22,
        description: "Camarón cocido, pepino, cebolla, tomate, cilantro, Clamato y aguacate. Acompañado de tostadas."
      },
      {
        name: "Campechana",
        price: 23,
        description: "Camarón curado en limón, camarón cocido, pulpo, pepino, cebolla, tomate, cilantro, Clamato y aguacate. Acompañada de tostadas."
      },
      {
        name: "Bowl-plato de camarón con mango",
        price: 23,
        description: "Trozos de mango, camarón cocido, tomate, pepino, cebolla, cilantro y salsa de la casa. Acompañado de tostadas."
      },
      {
        name: "Bowl-plato de ceviche de camarón",
        price: 22,
        description: "Camarón curado en limón, pepino, tomate, cebolla, cilantro, Clamato y aguacate. Acompañado de tostadas."
      },
      {
        name: "Tostada de camarón",
        price: 10,
        description: "Una tostada con camarón curado en limón, pepino, tomate, cebolla, cilantro, Clamato y aguacate."
      },
      {
        name: "Tostada de pescado",
        price: 10,
        description: "Una tostada con pescado curado en limón, pepino, tomate, cebolla, cilantro, Clamato y aguacate."
      },
      {
        name: "Tostada mixta",
        price: 25,
        description: "Camarón cocido, camarón curado en limón, pulpo, jaiba deshebrada, salsa de la casa, Clamato, tomate, pepino, cebolla, cilantro y aguacate."
      },
      {
        name: "Tostada azul",
        price: 23,
        description: "Camarón curado en limón, camarón cocido, pulpo, cebolla, pepino, salsa de la casa y salsa extra picante de aceite de chile."
      },
      {
        name: "Mojarra",
        price: 23,
        description: "Tilapia entera frita, tortilla de maíz, ensalada, arroz y frijoles."
      }
    ]
  },
  {
    id: "salads",
    name: "Ensaladas",
    items: [
      {
        name: "Ensalada de la casa",
        price: 10,
        description: "Mezcla de hojas verdes, tomate, cebolla, aderezo ranch y crutones. Agrega proteína por un costo adicional: carne asada, pollo a la parrilla o camarón."
      }
    ]
  },
  {
    id: "kids",
    name: "Niños",
    items: [
      {
        name: "Quesadilla infantil de queso",
        price: 9,
        description: "Acompañada de papas fritas. Agrega asada o pollo tinga por un costo adicional."
      },
      {
        name: "Burrito infantil de frijol y queso",
        price: 9,
        description: "Acompañado de papas fritas."
      }
    ]
  }
];

const menus = {
  food: {
    name: "Comida",
    groups: foodMenu,
    defaultCategory: "cantina-bites",
    allLabel: "Toda la comida",
    searchLabel: "Buscar en el menú de comida",
    searchPlaceholder: "Prueba “tacos”, “birria” o “camarón”",
    emptyTitle: "No encontramos platillos.",
    emptyCopy: "Prueba con otro nombre, ingrediente o categoría."
  },
  drinks: {
    name: "Bebidas",
    groups: drinkMenu,
    defaultCategory: "cocktails",
    allLabel: "Todas las bebidas",
    searchLabel: "Buscar en el menú de bebidas",
    searchPlaceholder: "Prueba “margarita” o “mezcal”",
    emptyTitle: "No encontramos bebidas.",
    emptyCopy: "Prueba con otro nombre, destilado o sabor."
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
  menuContext.textContent = query ? `Resultados para “${menuSearch.value.trim()}”` : activeCategory === "all" ? currentMenu.allLabel : currentGroup.name;
  menuCount.textContent = `${visibleCount} ${visibleCount === 1 ? "opción" : "opciones"}`;
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
  if (count) count.textContent = `${total} opciones`;
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
