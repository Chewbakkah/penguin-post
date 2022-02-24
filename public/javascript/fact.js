const factData = [
  {
      id: 1,
      fact: "Penguins are carnivores. They eat shrimp, krill, squid and fish."
  },
  {
      id: 2,
      fact: "Penguins communicate with each other by making sounds and gesturing with their heads and flippers."
  },
  {
      id: 3,
      fact: "Natural predators of penguins are orcas, seals, sharks and snakes."
  },
  {
      id: 4,
      fact: "Penguins see better underwater than on land."
  },
  {
      id: 5,
      fact: "If a penguin loses a chick, it may steal a chick from another family."
  },
  {
      id: 6,
      fact: "The fairy penguin is the smallest penguin.  It weighs only 2 pounds."
  },
  {
      id: 7,
      fact: "Emperor and king penguins don't form nests for their eggs.  Instead, future fathers will cover the egg with a flap of skin, called the brood pouch, for eight to ten weeks."
  },
  {
      id: 8,
      fact: "All 17 species of penguins are found exclusively in the Southern Hemisphere."
  },
  {
      id: 9,
      fact: "Emperor Penguins are the tallest species, standing nearly 4 feet tall."
  },
  {
      id: 10,
      fact: "The smallest is the Little Blue Penguin, which is only about 16 inches."
  },
  {
      id: 11,
      fact: "The fastest species is the Gentoo Penguin, which can reach swimming speeds up to 22 mph."
  },
  {
      id: 12,
      fact: "A penguin's striking coloring is a matter of camouflage; from above, its black back blends into the murky depths of the ocean. From below, its white belly is hidden against the bright surface."
  },
  {
      id: 13,
      fact: "Fossils place the earliest penguin relative at some 60 million years ago, meaning an ancestor of the birds we see today survived the mass extinction of the dinosaurs."
  },
  {
      id: 14,
      fact: "Penguins ingest a lot of seawater while hunting for fish. A special gland behind their eyes,the supraorbital gland, filters out the salt water from their blood stream. Penguins excrete it through their beaks, or by sneezing."
  },
  {
      id: 15,
      fact: "Unlike most birds, which lose and replace a few feathers at a time, penguins molt all at once, spending two to three weeks land-bound as they undergo what is called the catastrophic molt."
  },
  {
      id: 16,
      fact: "All but two species of penguin’s breed in large colonies of up to one thousand birds."
  },
  {
      id: 17,
      fact: "It varies by species, but many penguins will mate with the same member of the opposite sex season after season."
  },
  {
      id: 18,
      fact: "Most species are loyal to their exact nesting site, often returning to the same rookery in which they were born."
  },
  {
      id: 19,
      fact: "Some species create nests for their eggs out of pebbles and loose feathers."
  },
  {
      id: 20,
      fact: "Emperor Penguins incubate a single egg each breeding season on the top of their feet. Under a loose fold of skin is a featherless area with a concentration of blood vessels that keeps the egg warm."
  },
  {
      id: 21,
      fact: "In some species, it is the male penguin which incubates the eggs while females leave to hunt for weeks at a time. Because of this, pudgy males, with enough fat storage to survive weeks without eating, are most desirable."
  },
  {
      id: 22,
      fact: "Penguin parents, both male and female, care for their young for several months until the chicks are strong enough to hunt for food on their own."
  },
  {
      id: 23,
      fact: "If a female Emperor Penguin's baby dies, she will often kidnap an unrelated chick."
  },
  {
      id: 24,
      fact: "Despite their lack of visible ears, penguins have excellent hearing and rely on distinct calls to identify their mates when returning to the crowded breeding grounds."
  },
  {
      id: 25,
      fact: "The first published account of penguins comes from Antonio Pigafetta, who was aboard Ferdinand Magellan's first circumnavigation of the globe in 1520. They spotted the animals near what was probably Punta Tombo in Argentina. He called them strange geese."
  },
  {
      id: 26,
      fact: "An earlier, anonymous diary entry from Vasco da Gama's 1497 voyage around the Cape of Good Hope makes mention of flightless birds as large as ducks."
  },
  {
      id: 27,
      fact: "Because they aren't used to danger from animals on solid ground, wild penguins exhibit no fear of human tourists."
  },
  {
      id: 28,
      fact: "Unlike most sea mammals, which rely on blubber to stay warm, penguins survive because their feathers trap a layer of warm air next to the skin that serves as insulation. This is especially effective when they start generating muscular heat by swimming around."
  },
  {
      id: 29,
      fact: "In the 16th century, the word penguin actually referred to great auks, who’s scientific name was Pinguinus impennis. Great auks, now-extinct, were a species that inhabited the seas around eastern Canada. When explorers traveled to the Southern Hemisphere, they saw black and white birds that resembled auks, and called them penguins."
  },
  {
      id: 30,
      fact: "The black and white “tuxedo” look donned by most penguin species is a clever camouflage called countershading."
  },
  {
      id: 31,
      fact: "When penguins swim, the black on their backs helps them blend in with the darkness of the ocean from predators viewing from above."
  },
  {
      id: 32,
      fact: "Their white bellies help them blend in with the bright surface of the ocean when viewed by predators and prey from below."
  },
  {
      id: 33,
      fact: "Penguins evolved to fly underwater."
  },
  {
      id: 34,
      fact: "Most birds have hollow, air-filled bones to help them stay light for flight. Penguins adapted with solid bones and cannot fly."
  },
  {
      id: 35,
      fact: "Penguins adapted with solid bones which help them swim because solid bones reduce buoyancy, the tendency to float."
  },
  {
      id: 36,
      fact: "A penguin’s thick feathers are not the only way this bird stays warm. A gland near the base of its tail provides waterproof oil. Penguins spend several hours each day covering their feathers with this oil and give extra attention to the task before swimming."
  },
  {
      id: 37,
      fact: "Penguins live in many locations and habitats. You can find them in Antarctica and Antarctic islands, the Galapagos Islands off the coast of Ecuador, South Africa, New Zealand, Australia, Peru and Chile."
  },
  {
      id: 38,
      fact: "Contrary to many popular holiday cartoons, you’ll never see penguins and polar bears together in the wild. That’s because penguins live south of the equator while polar bears north of the equator in Arctic."
  },
  {
      id: 39,
      fact: "Penguin feet are adapted to walk long distances."
  },
  {
      id: 40,
      fact: "Some species of penguins can march up to about 60 miles across sea ice to get to their breeding grounds."
  },
  {
      id: 41,
      fact: "Penguin feet are adapted to help the birds steer while swimming."
  },
  {
      id: 42,
      fact: "Penguins use their feet like rudders, angling them to help control direction."
  },
  {
      id: 43,
      fact: "Many male penguins gift female penguins with rocks in order to woo them. The ladies use these rocks to build a nest."
  },
  {
      id: 44,
      fact: " The penguins’ streamlined design helps them swim fast."
  },
  {
      id: 45,
      fact: "According to some animal experts, the penguin is one of the most streamlined animals in the world."
  },
  {
      id: 46,
      fact: "A penguin’s body is tapered at both ends and it has a large head, short neck and elongated body."
  },
  {
      id: 47,
      fact: "Gentoo Penguins are the fastest of all penguin species. These penguins can swim at speeds of up to 36km/h. That's 4 times faster than any Olympic swimmer."
  },
  {
      id: 48,
      fact: "The oldest penguin fossils are 62 million years old. That is only 3 million years after the dinosaurs disappeared."
  },
  {
      id: 49,
      fact: "Penguins poop every 20 minutes. Penguins have a very fast metabolism this means they need to poop, a lot."
  },
  {
      id: 50,
      fact: "A penguins black and white coloring is called counter-shading."
  },
  {
      id: 51,
      fact: "All penguin species share counter-shading camouflage. This means they have a lighter belly and a darker back, and helps them camouflage from predators above and below them."
  },
  {
      id: 52,
      fact: "Penguins are expert divers! Penguins dive to catch their food. The Emperor penguin can dive down to 530m, Gentoo penguins can dive 200m and King penguins can dive around 350m deep."
  },
  {
      id: 53,
      fact: "The smallest species is the Little Blue Penguin. Also called little penguins or fairy penguins, these 13- to 15-inch cuties would look teeny-tiny next to 4-feet-tall emperor penguins. They also weigh no more than 3 pounds."
  },
  {
      id: 54,
      fact: "Scientists still don't know for sure how many kinds of penguins there are but, estimates usually fall in the range of 17 to 20."
  },
  {
      id: 55,
      fact: "Penguins jump into the air before diving to swim faster."
  },
  {
      id: 56,
      fact: "When Penguins jump into the air, the move releases air bubbles from their feathers, cutting down on drag and doubling or tripling their speed underwater, according to the Smithsonian."
  },
  {
      id: 57,
      fact: "To make the leap back ashore, some smaller penguins can launch themselves 6 or 9 feet into the air by speedily swimming to the surface and bursting up over the ice shelf."
  },
  {
      id: 58,
      fact: "Explorers first called them strange geese."
  },
  {
      id: 59,
      fact: "They can swim at speeds over 10 miles per hour."
  },
  {
      id: 60,
      fact: "Gentoos, the speediest penguins, can top 20 mph, but most species dart around at a more modest 4 to 7 mph."
  },
  {
      id: 61,
      fact: "Gentoos can dive down over 800 feet."
  },
  {
      id: 62,
      fact: "In the deepest dive ever recorded by the Australian Antarctic Division, an emperor penguin reached an amazing 1,850 feet. Those huge depths require a great lung capacity; the longest-known dives have lasted 22 minutes."
  },
  {
      id: 63,
      fact: "Penguins' suits act as camouflage."
  },
  {
      id: 64,
      fact: "Penguins' black backs blend with the ocean water when seen from above, and the white bellies match the bright surface when viewed from below. This disguises them from predators like leopard seals and helps them catch prey like fish, squid, crabs, and krill."
  },
  {
      id: 65,
      fact: "While penguins sip meltwater from pools and streams when they're thirsty, their hunting style and diet necessitates a cool adaptation."
  },
  {
      id: 66,
      fact: "Penguins can drink seawater. A supraorbital gland located above their eye removes salt from the bloodstream. The excess sodium then comes out through the bill or by sneezing."
  },
  {
      id: 67,
      fact: "Some extinct penguins grew more than 5 feet tall."
  },
  {
      id: 68,
      fact: "Recently discovered fossils indicate that an ancient breed of penguins once stood taller than the average adult man today at 5-foot-10."
  },
  {
      id: 69,
      fact: "Penguins don't have teeth. Fleshy spines inside their mouths help them swallow fish. The protrusions face backward to help guide the catch down their throats."
  },
  {
      id: 70,
      fact: "Couples locate each other with distinct calls. The unique sounds help  them reunite on the breeding ground, a not so easy task when there are thousands of identical birds around."
  },
  {
      id: 71,
      fact: "Emperor penguins incubate eggs on their feet. The male penguins keep them warm under a loose fold of skin. They stay that way for months until the eggs hatch, not leaving even to eat."
  },
  {
      id: 72,
      fact: "Because of the intense fasting involved, the females often seek out chubbier guys who can go weeks without food as the ladies take a turn to hunt for fish."
  },
  {
      id: 73,
      fact: "They're waterproof. Penguins spread an oil produced by the preen gland that insulates their bodies and improves their hydrodynamics."
  },
  {
      id: 74,
      fact: "The largest penguin colonies, called rookeries or waddles when assembled on land, include hundreds of thousands of birds."
  },
  {
      id: 75,
      fact: "These avid swimmers spend up to 80% of their lives out at sea."
  },
  {
      id: 76,
      fact: "A group of penguins in the water is called a raft."
  },
  {
      id: 77,
      fact: "Scientists can find penguins using poop. The abundance of dark excrement, called guano, produced by large colonies allows researchers to see the groups from space."
  },
  {
      id: 78,
      fact: "In 2018, the smelly giveaway of penguin poop revealed a 1.5 million member super-colony of Adelie penguins in the Danger Islands."
  },
  {
      id: 79,
      fact: "Penguins are specially adapted to sink. While most birds have hollow bones to facilitate flight, penguins have dense skeletons for easier diving."
  },
  {
      id: 80,
      fact: "They're super friendly with people. Penguins' main predators (seals, sea lions, whales, and sharks) all reside in the water, so these birds feel much safer on land around researchers and tourists."
  },
  {
      id: 81,
      fact: "Some penguins build pebble nests, others dig out cozy burrows."
  },
  {
      id: 82,
      fact: "Little penguins tunnel holes in the sand dunes. The males and females take turns incubating the eggs and feeding the chicks until they reach about 8 or 9 weeks old."
  },
  {
      id: 83,
      fact: "Penguins get their name from a Canadian bird. The now-extinct giant auk looked like the funny black-and-white creatures explorers encountered in the Southern Hemisphere, so they used the scientific name Pinguinus impennis as inspiration."
  },
  {
      id: 84,
      fact: "Not all penguins live in the Antarctic. The Galápagos penguin stays nice and warm living near the equator. In fact, they're the only penguin species found outside of the Southern Hemisphere."
  },
  {
      id: 85,
      fact: "Penguins huddle for warmth."
  },
  {
      id: 86,
      fact: "Macaroni penguins were named for their fashion sense. In 18th-century England, a macaroni referred to an extremely stylish fellow."
  },
  {
      id: 87,
      fact: "They love tobogganing. Instead of shuffling across the ice, many penguins like to lay on their stomachs and propel themselves with their feet."
  },
  {
      id: 88,
      fact: "Their first coat of feathers consists of a light down. The weatherproof layer grows in later."
  },
  {
      id: 89,
      fact: "Penguin chicks start out as little fluffballs."
  },
  {
      id: 90,
      fact: "Penguins eat snow as a source of freshwater."
  },
  {
      id: 91,
      fact: "A penguin is an unofficial symbol of the United States Libertarian Party."
  },
  {
      id: 92,
      fact: "In cold places, male penguins balance eggs on their feet and cover with belly flap to keep them warm."
  },
  {
      id: 93,
      fact: "When the chick hatches, it immediately starts calling so that its parents will learn to recognize its voice."
  },
  {
      id: 94,
      fact: "Penguins can’t fly, they swim."
  },
  {
      id: 95,
      fact: "The Linux mascot, Tux, is a penguin."
  },
  {
      id: 96,
      fact: "Penguin chicks have fluffy feathers."
  },
  {
      id: 97,
      fact: "The collective name for a group of penguins is called colonies or rookery."
  },
  {
      id: 98,
      fact: "Penguins usually move in large groups to keep warm."
  },
  {
      id: 99,
      fact: "Penguins can jump 6 feet out of water."
  },
  {
      id: 100,
      fact: "Penguins live in the Southern Hemisphere."
  },
  {
      id: 101,
      fact: "Most penguins can swim about 15 miles per hour."
  },
  {
      id: 102,
      fact: "enguins have insulating layers of air, skin, and blubber."
  },
  {
      id: 103,
      fact: "They are ancient species that first appeared around 40 million years ago."
  },
  {
      id: 104,
      fact: "There are 17 different species of penguins in the world, the most commonly recognized being the Emperor penguin."
  },
  {
      id: 105,
      fact: "The first penguin fossil to be discovered was found in rocks that were around 25 million years old."
  },
  {
      id: 106,
      fact: "A prehistoric skeleton of a penguin was found and is bigger than any living penguin that exists, it is believed they were up to 5ft tall (1.5 meters)."
  },
  {
      id: 107,
      fact: "The four penguins in the film Madagascar are named Skipper, Kowalski, Rico, and Private."
  },
  {
      id: 108,
      fact: "Their white bellies blend with the snow and sunlight making it difficult for an underwater predator to see them."
  },
  {
      id: 109,
      fact: "About 75% of a penguin’s life is spent in water, where they do all their hunting."
  },
  {
      id: 110,
      fact: "Penguins use their wings for swimming."
  },
  {
      id: 111,
      fact: "In general, a penguin’s lifespan ranges from 15 to 20 years."
  },
  {
      id: 112,
      fact: "The first bird actually called a penguin was the now-extinct Great Auk found in the North Atlantic. Tragically, early explorers and their contemporaries found Great Auks a little too tasty, and the birds were all killed off."
  },
  {
      id: 113,
      fact: "Fossil evidence shows that penguins evolved before the dinosaurs died out, and there are remains of giant, people-sized, prehistoric penguins."
  },
  {
      id: 114,
      fact: "The world’s smallest penguins are the Little Blue penguins. They are just over 30cm high on their flippers."
  },
  {
      id: 115,
      fact: "All wild penguins live in the Southern Hemisphere, and although they are synonymous with the ice, only two species live on the continent of Antarctica."
  },
  {
      id: 116,
      fact: "The Galapagos penguin is the only penguin that ever naturally ventures into the Northern Hemisphere on especially long feeding trips."
  },
  {
      id: 117,
      fact: "Most penguins have black backs and a white belly. This makes them harder to see from above because they blend in with the dark ocean beneath them. Below, their white underside matches the bright sky overhead."
  },
  {
      id: 118,
      fact: "Penguins’ black and white ‘tuxedo’ helps them avoid predators."
  },
  {
      id: 119,
      fact: "You’ll only find wild penguins in the Southern Hemisphere."
  },
  {
      id: 120,
      fact: "To move fast through the water, penguins use a technique called porpoising. They swim underwater about 12 km/hour and then thrust out of the water about every 30 to 50 meters and fly a half of a second through the air."
  },
  {
      id: 121,
      fact: "Penguins lay on their stomach and propelling themselves horizontally, sliding across the ice and snow using its flippers and feet for propulsion, steering, and braking."
  }
  
];
let factHolder = document.querySelector("#fact-holder");

async function getFact() {
    console.log('fact called');
    let i = Math.ceil(Math.random() * 121);
    let fact = factData[i].fact;
    factHolder.innerHTML = fact;
  }


