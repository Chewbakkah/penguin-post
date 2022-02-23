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
    }
    
];

const seedFact = () => Fact.bulkCreate(factData);

module.exports = seedFact;
