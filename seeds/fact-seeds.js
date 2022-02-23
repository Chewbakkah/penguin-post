const { Fact } = require('../models');

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
        fact: "If a female Emperor Penguin's baby dies, she will often "kidnap" an unrelated chick."
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
        fact: "A penguin’s thick feathers aren’t the only way this bird stays warm. A gland near the base of its tail provides waterproof oil. Penguins spend several hours each day covering their feathers with this oil and give extra attention to the task before swimming."
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
        fact: " ."
    },
    {
        id: 55,
        fact: " ."
    },
    {
        id: 56,
        fact: " ."
    },
    {
        id: 57,
        fact: " ."
    },
    {
        id: 58,
        fact: " ."
    },
    {
        id: 59,
        fact: " ."
    },
    {
        id: 60,
        fact: " ."
    },
    {
        id: 61,
        fact: " ."
    },
    {
        id: 62,
        fact: " ."
    },
    {
        id: 63,
        fact: " ."
    },
    {
        id: 64,
        fact: " ."
    },
    {
        id: 65,
        fact: " ."
    },
    {
        id: 66,
        fact: " ."
    },
    {
        id: 67,
        fact: " ."
    },
    {
        id: 68,
        fact: " ."
    },
    {
        id: 69,
        fact: " ."
    },
    {
        id: 70,
        fact: " ."
    },
    {
        id: 71,
        fact: " ."
    },
    {
        id: 72,
        fact: " ."
    },
    {
        id: 73,
        fact: " ."
    },
    {
        id: 74,
        fact: " ."
    },
    {
        id: 75,
        fact: " ."
    },
    {
        id: 76,
        fact: " ."
    },
    {
        id: 77,
        fact: " ."
    },
    {
        id: 78,
        fact: " ."
    },
    {
        id: 79,
        fact: " ."
    },
    {
        id: 80,
        fact: " ."
    },
    {
        id: 81,
        fact: " ."
    },
    {
        id: 82,
        fact: " ."
    },
    {
        id: 83,
        fact: " ."
    },
    {
        id: 84,
        fact: " ."
    },
    {
        id: 85,
        fact: " ."
    },
    {
        id: 86,
        fact: " ."
    },
    {
        id: 87,
        fact: " ."
    },
    {
        id: 88,
        fact: " ."
    },
    {
        id: 89,
        fact: " ."
    },
    {
        id: 90,
        fact: " ."
    },
    {
        id: 91,
        fact: " ."
    },
    {
        id: 92,
        fact: " ."
    },
    {
        id: 93,
        fact: " ."
    },
    {
        id: 94,
        fact: " ."
    },
    {
        id: 95,
        fact: " ."
    },
    {
        id: 96,
        fact: " ."
    },
    {
        id: 97,
        fact: " ."
    },
    {
        id: 98,
        fact: " ."
    },
    {
        id: 99,
        fact: " ."
    },
    {
        id: 100,
        fact: " ."
    },
    {
        id: 101,
        fact: " ."
    },
    {
        id: 102,
        fact: " ."
    },
    {
        id: 103,
        fact: " ."
    },
    {
        id: 104,
        fact: " ."
    },
    {
        id: 105,
        fact: " ."
    },
    {
        id: 106,
        fact: " ."
    },
    {
        id: 107,
        fact: " ."
    },
    {
        id: 108,
        fact: " ."
    },
    {
        id: 109,
        fact: " ."
    },
    {
        id: 110,
        fact: " ."
    },
    {
        id: 111,
        fact: " ."
    },
    {
        id: 112,
        fact: " ."
    },
    {
        id: 113,
        fact: " ."
    },
    {
        id: 114,
        fact: " ."
    },
    {
        id: 115,
        fact: " ."
    },
    {
        id: 116,
        fact: " ."
    },
    {
        id: 117,
        fact: " ."
    },
    {
        id: 118,
        fact: " ."
    },
    {
        id: 119,
        fact: " ."
    },
    {
        id: 110,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },
    {
        id: ,
        fact: " ."
    },

    //Remove the last comma from the last fact on },
];

const seedFact = () => Fact.bulkCreate(factData);

module.exports = seedFact;

