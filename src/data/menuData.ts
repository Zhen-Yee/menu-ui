// Image constants
const IMAGES = {
  // Eggs
  classicEggs: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80',
  classicEggs2: 'https://images.unsplash.com/photo-1551360021-0ff7982d13dc?w=800&auto=format&fit=crop&q=80',
  classicEggs3: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&auto=format&fit=crop&q=80',
  
  mexicanEggs: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80',
  mexicanEggs2: 'https://images.unsplash.com/photo-1600718374662-0483d2b9da44?w=800&auto=format&fit=crop&q=80',
  mexicanEggs3: 'https://images.unsplash.com/photo-1640719028782-8230f1bdc42a?w=800&auto=format&fit=crop&q=80',
  
  steakEggs: 'https://images.unsplash.com/photo-1504673900247-0877df9cc836?w=800&auto=format&fit=crop&q=80',
  steakEggs2: 'https://images.unsplash.com/photo-1504973960431-1c467e159aa4?w=800&auto=format&fit=crop&q=80',
  steakEggs3: 'https://images.unsplash.com/photo-1600891964092-4359bad4c337?w=800&auto=format&fit=crop&q=80',

  // Omelettes
  omelette: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=800&auto=format&fit=crop&q=80',
  omelette2: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=800&auto=format&fit=crop&q=80',
  omelette3: 'https://images.unsplash.com/photo-1638949239927-8bde630e4e0c?w=800&auto=format&fit=crop&q=80',
  
  westernOmelette: 'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=800&auto=format&fit=crop&q=80',
  westernOmelette2: 'https://images.unsplash.com/photo-1642489069222-3b8f04e87796?w=800&auto=format&fit=crop&q=80',
  westernOmelette3: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=800&auto=format&fit=crop&q=80',
  
  salmonOmelette: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800&auto=format&fit=crop&q=80',
  salmonOmelette2: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800&auto=format&fit=crop&q=80',
  salmonOmelette3: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800&auto=format&fit=crop&q=80',

  // Benedicts
  benedict: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&auto=format&fit=crop&q=80',
  benedict2: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&auto=format&fit=crop&q=80',
  benedict3: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&auto=format&fit=crop&q=80',
  
  salmonBenedict: 'https://images.unsplash.com/photo-1608039829585-24c7ff534b05?w=800&auto=format&fit=crop&q=80',
  salmonBenedict2: 'https://images.unsplash.com/photo-1608039829585-24c7ff534b05?w=800&auto=format&fit=crop&q=80',
  salmonBenedict3: 'https://images.unsplash.com/photo-1608039829585-24c7ff534b05?w=800&auto=format&fit=crop&q=80',
  
  crabBenedict: 'https://images.unsplash.com/photo-1599749001441-8e97fcb164a5?w=800&auto=format&fit=crop&q=80',
  crabBenedict2: 'https://images.unsplash.com/photo-1599749001441-8e97fcb164a5?w=800&auto=format&fit=crop&q=80',
  crabBenedict3: 'https://images.unsplash.com/photo-1599749001441-8e97fcb164a5?w=800&auto=format&fit=crop&q=80',

  // Crepes & Waffles
  crepes: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&auto=format&fit=crop&q=80',
  crepes2: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop&q=80',
  crepes3: 'https://images.unsplash.com/photo-1635146037526-a75e6905ad78?w=800&auto=format&fit=crop&q=80',
  
  waffles: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&auto=format&fit=crop&q=80',
  waffles2: 'https://images.unsplash.com/photo-1598233847491-f16487adee2f?w=800&auto=format&fit=crop&q=80',
  waffles3: 'https://images.unsplash.com/photo-1504713215707-76349156f8dd?w=800&auto=format&fit=crop&q=80',
  
  frenchToast: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=80',
  frenchToast2: 'https://images.unsplash.com/photo-1586156938613-769b0353c8fc?w=800&auto=format&fit=crop&q=80',
  frenchToast3: 'https://images.unsplash.com/photo-1586156938613-769b0353c8fc?w=800&auto=format&fit=crop&q=80',
  
  pancakes: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=80',
  pancakes2: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&auto=format&fit=crop&q=80',
  pancakes3: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&auto=format&fit=crop&q=80',

  // Sandwiches
  blt: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=800&auto=format&fit=crop&q=80',
  blt2: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&auto=format&fit=crop&q=80',
  blt3: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&auto=format&fit=crop&q=80',
  
  grilledCheese: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop&q=80',
  grilledCheese2: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop&q=80',
  grilledCheese3: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop&q=80',
  
  smokedSalmon: 'https://images.unsplash.com/photo-1524352772715-23d6fbf98c6f?w=800&auto=format&fit=crop&q=80',
  smokedSalmon2: 'https://images.unsplash.com/photo-1524352772715-23d6fbf98c6f?w=800&auto=format&fit=crop&q=80',
  smokedSalmon3: 'https://images.unsplash.com/photo-1524352772715-23d6fbf98c6f?w=800&auto=format&fit=crop&q=80',

  // Signatures
  poutine: 'https://images.unsplash.com/photo-1586805608485-add336722759?w=800&auto=format&fit=crop&q=80',
  poutine2: 'https://images.unsplash.com/photo-1586805608485-add336722759?w=800&auto=format&fit=crop&q=80',
  poutine3: 'https://images.unsplash.com/photo-1586805608485-add336722759?w=800&auto=format&fit=crop&q=80',
  
  avocadoToast: 'https://images.unsplash.com/photo-1603046891744-1f76eb10aec3?w=800&auto=format&fit=crop&q=80',
  avocadoToast2: 'https://images.unsplash.com/photo-1603046891744-1f76eb10aec3?w=800&auto=format&fit=crop&q=80',
  avocadoToast3: 'https://images.unsplash.com/photo-1603046891744-1f76eb10aec3?w=800&auto=format&fit=crop&q=80',
  
  macAndCheese: 'https://images.unsplash.com/photo-1543352634-99548f5b1f65?w=800&auto=format&fit=crop&q=80',
  macAndCheese2: 'https://images.unsplash.com/photo-1543352634-99548f5b1f65?w=800&auto=format&fit=crop&q=80',
  macAndCheese3: 'https://images.unsplash.com/photo-1543352634-99548f5b1f65?w=800&auto=format&fit=crop&q=80',

  // Yogurt & Fruits
  parfait: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80',
  parfait2: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80',
  parfait3: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80',
  
  fruitBowl: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&auto=format&fit=crop&q=80',
  fruitBowl2: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800&auto=format&fit=crop&q=80',
  fruitBowl3: 'https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?w=800&auto=format&fit=crop&q=80'
};

export const menuData = {
  categories: [
    {
      id: 'eggs',
      title: 'LES OEUFS',
      subtitle: 'Blancs d\'oeufs +2.00$',
      items: [
        {
          name: 'LE CLASSIQUE',
          price: '13.00$',
          description: '2 oeufs avec choix de viande ou fruits (saucisse, bacon, jambon effiloché ou saucisse végé +1$)',
          ingredients: ['2 oeufs', 'Fèves au lard', 'Pommes de terre rissolées', 'Rôties de votre choix'],
          image: IMAGES.classicEggs,
          additionalImages: [IMAGES.classicEggs2, IMAGES.classicEggs3]
        },
        {
          name: 'L\'EXTRA',
          price: '17.00$',
          description: '2 oeufs avec choix de viande et choix de crêpe/pain doré',
          ingredients: ['2 oeufs', 'Choix de viande', 'Crêpe ou pain doré', 'Pommes de terre rissolées', 'Fèves au lard', 'Rôties'],
          image: IMAGES.classicEggs,
          additionalImages: [IMAGES.classicEggs2, IMAGES.classicEggs3]
        },
        {
          name: 'LE MEXICAIN',
          price: '18.00$',
          description: 'Boeuf haché aux saveurs mexicaines avec oeufs au choix',
          ingredients: ['Boeuf haché mexicain', '2 oeufs', 'Guacamole', 'Fromage de chèvre', 'Bruschetta', 'Pommes de terre rissolées', 'Rôties'],
          image: IMAGES.mexicanEggs,
          additionalImages: [IMAGES.mexicanEggs2, IMAGES.mexicanEggs3]
        },
        {
          name: 'LE GOURMAND',
          price: '21.00$',
          description: '3 oeufs avec viandes et crêpe ou pancake',
          ingredients: ['3 oeufs', '3 viandes', '1 crêpe ou pancake', 'Fèves au lard', 'Pommes de terre rissolées', 'Rôties'],
          image: IMAGES.classicEggs,
          additionalImages: [IMAGES.classicEggs2, IMAGES.classicEggs3]
        },
        {
          name: 'LE STEAK N\'EGGS',
          price: '36.00$',
          description: 'Bavette de boeuf servie avec oeufs au choix',
          ingredients: ['Bavette de boeuf', 'Oeufs au choix', 'Champignons à l\'ail', 'Fèves au lard', 'Pommes de terre rissolées', 'Rôties'],
          image: IMAGES.steakEggs,
          additionalImages: [IMAGES.steakEggs2, IMAGES.steakEggs3]
        }
      ]
    },
    {
      id: 'omelettes',
      title: 'OMELETTES',
      subtitle: 'Toutes nos omelettes sont préparées avec 3 oeufs de calibre "gros" servies avec pommes de terre rissolées, fèves au lard et choix de rôties',
      items: [
        {
          name: 'NATURE',
          price: '16.00$',
          description: 'Oeufs battus, cuits sans garniture',
          ingredients: ['3 oeufs'],
          image: IMAGES.omelette,
          additionalImages: [IMAGES.omelette2, IMAGES.omelette3]
        },
        {
          name: 'FROMAGE',
          price: '18.00$',
          description: 'Oeufs battus avec fromage cheddar',
          ingredients: ['3 oeufs', 'Fromage cheddar'],
          image: IMAGES.omelette,
          additionalImages: [IMAGES.omelette2, IMAGES.omelette3]
        },
        {
          name: 'LE VÉGÉ',
          price: '18.00$',
          description: 'Omelette végétarienne aux légumes',
          ingredients: ['Oeufs battus', 'Poivrons', 'Oignons', 'Champignons', 'Saucisse végétarienne'],
          image: IMAGES.westernOmelette,
          additionalImages: [IMAGES.westernOmelette2, IMAGES.westernOmelette3]
        },
        {
          name: 'WESTERN',
          price: '18.00$',
          description: 'Omelette western classique',
          ingredients: ['Oeufs battus', 'Poivrons', 'Oignons', 'Champignons', 'Jambon effiloché'],
          image: IMAGES.westernOmelette,
          additionalImages: [IMAGES.westernOmelette2, IMAGES.westernOmelette3]
        },
        {
          name: 'BACON ET CHEDDAR',
          price: '18.00$',
          description: 'Oeufs battus, bacon et fromage cheddar',
          ingredients: ['Oeufs battus', 'Bacon', 'Fromage cheddar'],
          image: IMAGES.omelette,
          additionalImages: [IMAGES.omelette2, IMAGES.omelette3]
        },
        {
          name: 'LE SAUMON',
          price: '21.00$',
          description: 'Oeufs battus, saumon fumé, oignons et câpres frites',
          ingredients: ['Oeufs battus', 'Saumon fumé', 'Oignons', 'Câpres frites'],
          image: IMAGES.salmonOmelette,
          additionalImages: [IMAGES.salmonOmelette2, IMAGES.salmonOmelette3]
        }
      ]
    },
    {
      id: 'benedictines',
      title: 'OEUFS BÉNÉDICTINES',
      subtitle: 'Tous les oeufs bénédictines sont servis avec pommes de terre rissolées et choix de muffin anglais ou bagel',
      items: [
        {
          name: 'LE PORCELET',
          price: '16.00$',
          description: '2 oeufs pochés avec porc effiloché ou bacon',
          ingredients: ['2 oeufs pochés', 'Porc effiloché ou bacon', 'Sauce hollandaise'],
          image: IMAGES.benedict,
          additionalImages: [IMAGES.benedict2, IMAGES.benedict3]
        },
        {
          name: 'LE RUSTIQUE',
          price: '16.00$',
          description: '2 oeufs pochés avec légumes et fromage',
          ingredients: ['2 oeufs pochés', 'Oignons', 'Poivrons', 'Champignons', 'Fromage de chèvre', 'Tomates', 'Sauce hollandaise'],
          image: IMAGES.benedict,
          additionalImages: [IMAGES.benedict2, IMAGES.benedict3]
        },
        {
          name: 'LE TACO',
          price: '18.00$',
          description: '2 oeufs pochés servis avec boeuf style mexicain, fromage tex-mex et sauce hollandaise',
          ingredients: ['2 oeufs pochés', 'Boeuf style mexicain', 'Fromage tex-mex', 'Sauce hollandaise'],
          image: IMAGES.benedict,
          additionalImages: [IMAGES.benedict2, IMAGES.benedict3]
        },
        {
          name: 'LE ROSÉ',
          price: '18.00$',
          description: '2 oeufs pochés servis avec saumon fumé, câpres frites, oignons rouges et sauce hollandaise',
          ingredients: ['2 oeufs pochés', 'Saumon fumé', 'Câpres frites', 'Oignons rouges', 'Sauce hollandaise'],
          image: IMAGES.salmonBenedict,
          additionalImages: [IMAGES.salmonBenedict2, IMAGES.salmonBenedict3]
        },
        {
          name: 'LE CRABE',
          price: '20.00$',
          description: '2 oeufs pochés servis avec viande de crabe et sauce hollandaise',
          ingredients: ['2 oeufs pochés', 'Viande de crabe', 'Sauce hollandaise'],
          image: IMAGES.crabBenedict,
          additionalImages: [IMAGES.crabBenedict2, IMAGES.crabBenedict3]
        }
      ]
    },
    {
      id: 'crepes',
      title: 'CRÊPES, PAIN DORÉ, GAUFRES ET PANCAKE',
      items: [
        {
          name: 'LE BRIOCHÉ',
          price: '18.00$',
          description: 'Pain doré brioché aux raisins, canneberges, granola et crème pâtissière au yogourt',
          ingredients: ['Pain doré brioché', 'Raisins', 'Canneberges', 'Granola', 'Crème pâtissière au yogourt'],
          image: IMAGES.frenchToast,
          additionalImages: [IMAGES.frenchToast2, IMAGES.frenchToast3]
        },
        {
          name: 'LE SALÉ',
          price: '18.00$',
          description: '2 crêpes, porc effiloché, fromage suisse, oignons caramélisés et sauce hollandaise',
          ingredients: ['2 crêpes', 'Porc effiloché', 'Fromage suisse', 'Oignons caramélisés', 'Sauce hollandaise'],
          image: IMAGES.crepes,
          additionalImages: [IMAGES.crepes2, IMAGES.crepes3]
        },
        {
          name: 'L\'ORÉO',
          price: '18.00$',
          description: 'Crêpes aux baies, brisures d\'oréo et crème pâtissière',
          ingredients: ['Crêpes', 'Baies', 'Brisures d\'oréo', 'Crème pâtissière'],
          image: IMAGES.crepes,
          additionalImages: [IMAGES.crepes2, IMAGES.crepes3]
        },
        {
          name: 'CHOCO-NOISETTE',
          price: '18.00$',
          description: 'Pancake, guimauves et brisures d\'oréo',
          ingredients: ['Pancake', 'Guimauves', 'Brisures d\'oréo'],
          image: IMAGES.pancakes,
          additionalImages: [IMAGES.pancakes2, IMAGES.pancakes3]
        },
        {
          name: 'PEACHES & CREAM',
          price: '18.00$',
          description: 'Gaufre, pêches, cerises et crème pâtissière',
          ingredients: ['Gaufre', 'Pêches', 'Cerises', 'Crème pâtissière'],
          image: IMAGES.waffles,
          additionalImages: [IMAGES.waffles2, IMAGES.waffles3]
        },
        {
          name: 'HAWAIENNE',
          price: '18.00$',
          description: 'Gaufre aux ananas, coconut grillé et crème pâtissière au yogourt',
          ingredients: ['Gaufre', 'Ananas', 'Coconut grillé', 'Crème pâtissière au yogourt'],
          image: IMAGES.waffles,
          additionalImages: [IMAGES.waffles2, IMAGES.waffles3]
        },
        {
          name: 'LA HACHÉ',
          price: '18.00$',
          description: 'Crêpe, boeuf haché, oignons espagnol et fromage suisse',
          ingredients: ['Crêpe', 'Boeuf haché', 'Oignons espagnol', 'Fromage suisse'],
          image: IMAGES.crepes,
          additionalImages: [IMAGES.crepes2, IMAGES.crepes3]
        }
      ]
    },
    {
      id: 'entres-tranches',
      title: 'LES ENTRES TRANCHES',
      subtitle: 'Tous les entrés tranches sont servis avec pommes de terre rissolées',
      items: [
        {
          name: 'LE BLT',
          price: '13.00$',
          description: 'Pain multigrain, oeufs, bacon, laitue et tomates',
          ingredients: ['Pain multigrain', 'Oeufs', 'Bacon', 'Laitue', 'Tomates'],
          image: IMAGES.blt,
          additionalImages: [IMAGES.blt2, IMAGES.blt3]
        },
        {
          name: 'LE GROS CLASSIQUE',
          price: '14.00$',
          description: '"Grilled cheese" double, pain ménage, fromage cheddar',
          ingredients: ['Pain ménage', 'Fromage cheddar'],
          image: IMAGES.grilledCheese,
          additionalImages: [IMAGES.grilledCheese2, IMAGES.grilledCheese3]
        },
        {
          name: 'LE FUMÉ',
          price: '17.00$',
          description: 'Bagel saumon fumé, tomates, oignons, câpres frites, laitue et fromage de chèvre',
          ingredients: ['Bagel', 'Saumon fumé', 'Tomates', 'Oignons', 'Câpres frites', 'Laitue', 'Fromage de chèvre'],
          image: IMAGES.smokedSalmon,
          additionalImages: [IMAGES.smokedSalmon2, IMAGES.smokedSalmon3]
        },
        {
          name: 'LA BIQUETTE',
          price: '17.00$',
          description: '"Grilled cheese" + pain ménage, fromage de chèvre, pommes et bacon',
          ingredients: ['Pain ménage', 'Fromage de chèvre', 'Pommes', 'Bacon'],
          image: IMAGES.grilledCheese,
          additionalImages: [IMAGES.grilledCheese2, IMAGES.grilledCheese3]
        },
        {
          name: 'LE SANDWICH',
          price: '17.00$',
          description: 'Pain portugais, mayonnaise chipotle, jambon effiloché, bacon, oeuf crevé et fromage cheddar',
          ingredients: ['Pain portugais', 'Mayonnaise chipotle', 'Jambon effiloché', 'Bacon', 'Oeuf crevé', 'Fromage cheddar'],
          image: IMAGES.blt,
          additionalImages: [IMAGES.blt2, IMAGES.blt3]
        },
        {
          name: 'LE DORÉ',
          price: '17.00$',
          description: '2 pains dorés, 1 oeuf tourné, bacon et jambon, fromage cheddar, oignons caramélisés, fèves au lard et patates rissolées',
          ingredients: ['Pain doré', 'Oeuf tourné', 'Bacon', 'Jambon', 'Fromage cheddar', 'Oignons caramélisés', 'Fèves au lard', 'Patates rissolées'],
          image: IMAGES.frenchToast,
          additionalImages: [IMAGES.frenchToast2, IMAGES.frenchToast3]
        }
      ]
    },
    {
      id: 'signatures',
      title: 'LES SIGNATURES',
      subtitle: 'Toutes les signatures sont servies avec pommes de terre rissolées',
      items: [
        {
          name: 'POUTINE DÉJEUNER',
          price: '16.00$',
          description: 'Pommes de terre, jambon effiloché, sauce hollandaise, fromage Kingsey, oignons caramélisés, sauce épicée et 1 oeuf miroir',
          ingredients: ['Pommes de terre', 'Jambon effiloché', 'Sauce hollandaise', 'Fromage Kingsey', 'Oignons caramélisés', 'Sauce épicée', 'Oeuf miroir'],
          image: IMAGES.poutine,
          additionalImages: [IMAGES.poutine2, IMAGES.poutine3]
        },
        {
          name: 'SUCRÉ ET SALÉ',
          price: '21.00$',
          description: 'Gaufre BLT, poulet frit, gaufre sucrée, tomates, laitue et sauce thaï',
          ingredients: ['Gaufre', 'Poulet frit', 'Tomates', 'Laitue', 'Sauce thaï'],
          image: IMAGES.waffles,
          additionalImages: [IMAGES.waffles2, IMAGES.waffles3]
        },
        {
          name: 'TOAST AVOCAT',
          price: '17.00$',
          description: 'Pain multigrain, purée d\'avocat, oeufs mollets, bruschetta et fromage de chèvre',
          ingredients: ['Pain multigrain', 'Purée d\'avocat', 'Oeufs mollets', 'Bruschetta', 'Fromage de chèvre'],
          image: IMAGES.avocadoToast,
          additionalImages: [IMAGES.avocadoToast2, IMAGES.avocadoToast3]
        },
        {
          name: 'TOAST AVOCAT - AVEC SAUMON FUMÉ',
          price: '22.00$',
          description: 'Pain multigrain, purée d\'avocat, oeufs mollets, bruschetta, fromage de chèvre et saumon fumé',
          ingredients: ['Pain multigrain', 'Purée d\'avocat', 'Oeufs mollets', 'Bruschetta', 'Fromage de chèvre', 'Saumon fumé'],
          image: IMAGES.avocadoToast,
          additionalImages: [IMAGES.avocadoToast2, IMAGES.avocadoToast3]
        },
        {
          name: 'MAC ET DEJ',
          price: '20.00$',
          description: 'Mac and cheese aux 5 fromages avec bacon, jambon effiloché, oignons et 1 oeuf miroir. Servi avec bagel',
          ingredients: ['Mac and cheese', '5 fromages', 'Bacon', 'Jambon effiloché', 'Oignons', 'Oeuf miroir', 'Bagel'],
          image: IMAGES.macAndCheese,
          additionalImages: [IMAGES.macAndCheese2, IMAGES.macAndCheese3]
        }
      ]
    },
    {
      id: 'yogourt',
      title: 'YOGOURT ET FRUITS',
      items: [
        {
          name: 'PARFAIT YOGOURT',
          price: '15.00$',
          description: 'Yogourt à la vanille, fruits frais, granola et miel',
          ingredients: ['Yogourt à la vanille', 'Fruits frais', 'Granola', 'Miel'],
          image: IMAGES.parfait,
          additionalImages: [IMAGES.parfait2, IMAGES.parfait3]
        },
        {
          name: 'BOL DE FRUITS - PETIT',
          price: '5.00$',
          description: 'Mélange de fruits du moment',
          ingredients: ['Fruits frais assortis'],
          image: IMAGES.fruitBowl,
          additionalImages: [IMAGES.fruitBowl2, IMAGES.fruitBowl3]
        },
        {
          name: 'BOL DE FRUITS - GROS',
          price: '9.00$',
          description: 'Mélange de fruits du moment',
          ingredients: ['Fruits frais assortis'],
          image: IMAGES.fruitBowl,
          additionalImages: [IMAGES.fruitBowl2, IMAGES.fruitBowl3]
        }
      ]
    }
  ]
};