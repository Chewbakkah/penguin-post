const { User } = require('../models');

const userData = [
    {
<<<<<<< HEAD
      id: 1,
      username: 'cheyne',
      email: 'cheyne@mail.com',
      password: 'pass',
      icon: '1',
      hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg', 
      friends: 'who dis'
    },
    {
        id: 2,
        username: 'mario',
        email: 'mario@mail.com',
        password: 'pass',
        icon: '1',
        hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg',
        friends: 'who dis'
    },
    {
        id: 3,
        username: 'cory',
        email: 'cory@mail.com',
        password: 'pass',
        icon: '1',
        hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg',
        friends: 'who dis'
    },
    {
        id: 4,
        username: 'jeff',
        email: 'jeff@mail.com',
        password: 'pass',
        icon: '1',
        hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg',
        friends: 'who dis'
    },
    {
        id: 5,
        username: 'court',
        email: 'court@mail.com',
        password: 'pass',
        icon: '1',
        hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg',
        friends: 'who dis'
    },
    {
        id: 6,
        username: 'hamilton',
        email: 'hamilton@mail.com',
        password: 'pass',
        icon: '1',
        hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg',
        friends: 'who dis'
    }
  ];
=======
        id: 1,
        username: 'cheyne',
        email: 'cheyne@mail.com',
        password: 'pass',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILhhXThYT2otEtbmWWX9tdfybFEnh_SCY8A&usqp=CAU',
        hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg', 
        friends: {id: 2, username: 'mario'}
      },
      {
          id: 2,
          username: 'mario',
          email: 'mario@mail.com',
          password: 'pass',
          icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILhhXThYT2otEtbmWWX9tdfybFEnh_SCY8A&usqp=CAU',
          hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg',
          friends: {id: 1, username: 'cheyne'}
      },
      {
          id: 3,
          username: 'cory',
          email: 'cory@mail.com',
          password: 'pass',
          icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILhhXThYT2otEtbmWWX9tdfybFEnh_SCY8A&usqp=CAU',
          hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg',
          friends: {id: 2, username: 'mario'}
      },
      {
          id: 4,
          username: 'jeff',
          email: 'jeff@mail.com',
          password: 'pass',
          icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILhhXThYT2otEtbmWWX9tdfybFEnh_SCY8A&usqp=CAU',
          hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg',
          friends: {id: 2, username: 'mario'}
      },
      {
          id: 5,
          username: 'court',
          email: 'court@mail.com',
          password: 'pass',
          icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILhhXThYT2otEtbmWWX9tdfybFEnh_SCY8A&usqp=CAU',
          hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg',
          friends: {id: 2, username: 'mario'}
      },
      {
          id: 6,
          username: 'hamilton',
          email: 'hamilton@mail.com',
          password: 'pass',
          icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILhhXThYT2otEtbmWWX9tdfybFEnh_SCY8A&usqp=CAU',
          hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg',
          friends: {id: 2, username: 'mario'}
      }
    ];
>>>>>>> dev

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;