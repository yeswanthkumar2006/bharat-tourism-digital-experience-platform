export interface State {
  id: string;
  name: string;
  type: 'state' | 'union_territory';
  capital: string;
  region: 'North' | 'South' | 'East' | 'West' | 'Central' | 'Northeast';
  tagline: string;
  description: string;
  highlights: string[];
  bestTime: string;
  language: string;
  image: string;
  gallery: string[];
  latitude: number;
  longitude: number;
  rating: number;
  popularity: 'high' | 'medium' | 'low';
}

export const states: State[] = [
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    type: 'state',
    capital: 'Amaravati',
    region: 'South',
    tagline: 'Land of Temples and Golden History',
    description: 'Andhra Pradesh is renowned for its magnificent temples, historic monuments, and vibrant cultural heritage. The state is famous for the Tirupati Temple, one of the richest temples in the world, and offers visitors a perfect blend of spirituality and scenic beauty. From ancient temples to modern cities, Andhra Pradesh showcases India\'s diverse tourism appeal.',
    highlights: ['Tirupati Venkateswara Temple', 'Charminar in nearby Hyderabad', 'Nagarjuna Sagar Dam', 'Horsley Hills'],
    bestTime: 'October to February',
    language: 'Telugu',
    image: 'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5625884/pexels-photo-5625884.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 15.9129,
    longitude: 79.7400,
    rating: 4.6,
    popularity: 'high'
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    type: 'state',
    capital: 'Itanagar',
    region: 'Northeast',
    tagline: 'Land of the Dawn - Explore Raw Beauty',
    description: 'Arunachal Pradesh, India\'s easternmost state, is known as the "Land of the Dawn" for being the first place to witness sunrise in India. This pristine destination features untouched landscapes, ancient monasteries, tribal culture, and incredible biodiversity. The state remains one of India\'s least explored and most scenic regions.',
    highlights: ['Tawang Monastery', 'Bomdila Buddhist Monastery', 'Arunachal Pradesh State Zoo', 'Ziro Valley'],
    bestTime: 'March to May, September to November',
    language: 'English',
    image: 'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/957024/forest-trees-perspective-dawn-957024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2585759/pexels-photo-2585759.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 28.2180,
    longitude: 93.6053,
    rating: 4.5,
    popularity: 'medium'
  },
  {
    id: 'assam',
    name: 'Assam',
    type: 'state',
    capital: 'Dispur',
    region: 'Northeast',
    tagline: 'Gateway to the Northeast - Tea and Wildlife',
    description: 'Assam is famous for its premium tea gardens, the majestic Brahmaputra River, and incredible wildlife including the endangered one-horned rhinoceros. The state offers a unique blend of natural beauty, tribal culture, and adventure tourism. Assam\'s lush green landscapes and rich biodiversity make it a premier destination.',
    highlights: ['Kaziranga National Park', 'Majuli Island', 'Assam Tea Gardens', 'Guwahati Kamakhya Temple'],
    bestTime: 'October to April',
    language: 'Assamese',
    image: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/957024/forest-trees-perspective-dawn-957024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 26.2006,
    longitude: 92.9376,
    rating: 4.4,
    popularity: 'high'
  },
  {
    id: 'bihar',
    name: 'Bihar',
    type: 'state',
    capital: 'Patna',
    region: 'East',
    tagline: 'Land of Buddha\'s Enlightenment',
    description: 'Bihar is one of the world\'s oldest inhabited places and a major pilgrimage destination for Buddhists. Home to Bodh Gaya where Buddha attained enlightenment and the ancient Nalanda University ruins, Bihar is a treasure trove of historical and spiritual significance. The state showcases centuries of history and religious devotion.',
    highlights: ['Bodh Gaya Temple', 'Nalanda University Ruins', 'Vaishali', 'Patna Museum'],
    bestTime: 'October to March',
    language: 'Hindi',
    image: 'https://images.pexels.com/photos/1526880/pexels-photo-1526880.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1526880/pexels-photo-1526880.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5625884/pexels-photo-5625884.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 25.0961,
    longitude: 85.3131,
    rating: 4.3,
    popularity: 'high'
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    type: 'state',
    capital: 'Raipur',
    region: 'Central',
    tagline: 'Rice Bowl of India - Land of Waterfalls',
    description: 'Chhattisgarh is known as the "Rice Bowl of India" and is blessed with abundant natural resources and waterfalls. The state features dense forests, tribal culture, and mineral-rich landscapes. Chhattisgarh offers adventure tourism, waterfall hikes, and a glimpse into authentic tribal heritage.',
    highlights: ['Chitrakoot Waterfall', 'Kanger Ghati National Park', 'Bastar Art and Handicrafts', 'Tirathgarh Waterfall'],
    bestTime: 'October to March',
    language: 'Hindi',
    image: 'https://images.pexels.com/photos/67552/gullfoss-waterfall-water-iceland-67552.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/67552/gullfoss-waterfall-water-iceland-67552.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/957024/forest-trees-perspective-dawn-957024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6915578/pexels-photo-6915578.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 21.2787,
    longitude: 81.8661,
    rating: 4.2,
    popularity: 'medium'
  },
  {
    id: 'goa',
    name: 'Goa',
    type: 'state',
    capital: 'Panaji',
    region: 'West',
    tagline: 'Land of Sun, Sand, and Spices',
    description: 'Goa is India\'s premier beach destination known for its pristine beaches, vibrant nightlife, and Portuguese colonial architecture. The state offers a perfect vacation with beachside resorts, water sports, churches, and temples. Goa\'s unique blend of Indian and Portuguese culture makes it uniquely enchanting.',
    highlights: ['Panjim Beach', 'Basilica of Bom Jesus', 'Fort Aguada', 'Dudhsagar Waterfall'],
    bestTime: 'November to February',
    language: 'Konkani',
    image: 'https://images.pexels.com/photos/1017842/pexels-photo-1017842.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1017842/pexels-photo-1017842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5625884/pexels-photo-5625884.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 15.2993,
    longitude: 73.8243,
    rating: 4.7,
    popularity: 'high'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    type: 'state',
    capital: 'Gandhinagar',
    region: 'West',
    tagline: 'Land of Mahatma Gandhi and Desert Wonders',
    description: 'Gujarat is the birthplace of Mahatma Gandhi and home to the Asiatic Lion. The state features the pristine white desert of the Rann of Kutch, ancient temples, and vibrant textile heritage. Gujarat offers a diverse mix of history, nature, and entrepreneurial spirit that defines modern India.',
    highlights: ['Rann of Kutch', 'Gir Forest Lion Sanctuary', 'Somnath Temple', 'Statue of Unity'],
    bestTime: 'October to March',
    language: 'Gujarati',
    image: 'https://images.pexels.com/photos/1591375/pexels-photo-1591375.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1591375/pexels-photo-1591375.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5625884/pexels-photo-5625884.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6915578/pexels-photo-6915578.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 22.2587,
    longitude: 71.1924,
    rating: 4.5,
    popularity: 'high'
  },
  {
    id: 'haryana',
    name: 'Haryana',
    type: 'state',
    capital: 'Chandigarh',
    region: 'North',
    tagline: 'Gateway to North India - Industrial Hub',
    description: 'Haryana is a progressive state that serves as the gateway to North India with its strategic location and well-developed infrastructure. The state features heritage sites, agricultural prosperity, and modern cities. Haryana offers visitors easy access to nearby attractions and a blend of tradition with modernity.',
    highlights: ['Pinjore Garden', 'Kurukshetra War Site', 'Surajkund Lake', 'Morni Hills'],
    bestTime: 'October to March',
    language: 'Hindi',
    image: 'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5625884/pexels-photo-5625884.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2585759/pexels-photo-2585759.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 29.0588,
    longitude: 77.0745,
    rating: 4.1,
    popularity: 'medium'
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    type: 'state',
    capital: 'Shimla',
    region: 'North',
    tagline: 'Land of Gods - Snow-Capped Mountains',
    description: 'Himachal Pradesh is a stunning mountain state famous for its snow-capped peaks, adventure tourism, and spiritual destinations. The state offers trekking, paragliding, skiing, and visits to ancient temples. Himachal Pradesh combines natural beauty with spiritual significance, making it a favorite destination for all seasons.',
    highlights: ['Shimla Hill Station', 'Manali', 'Rohtang Pass', 'Kinnaur Kailash Trek'],
    bestTime: 'March to June, September to November',
    language: 'Hindi',
    image: 'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3495032/pexels-photo-3495032.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2585759/pexels-photo-2585759.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 31.7975,
    longitude: 77.1025,
    rating: 4.8,
    popularity: 'high'
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    type: 'state',
    capital: 'Ranchi',
    region: 'East',
    tagline: 'Land of Waterfalls and Minerals',
    description: 'Jharkhand is known as the "Land of Waterfalls" with numerous scenic cascades and natural beauty. The state features mineral-rich landscapes, tribal culture, and adventure tourism. Jharkhand offers a unique combination of natural attractions and cultural experiences for visitors seeking authentic experiences.',
    highlights: ['Jamshedpur Steel City', 'Ranchi Waterfall', 'Netarhat Hill Station', 'Dassam Waterfall'],
    bestTime: 'October to March',
    language: 'Hindi',
    image: 'https://images.pexels.com/photos/67552/gullfoss-waterfall-water-iceland-67552.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/67552/gullfoss-waterfall-water-iceland-67552.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/957024/forest-trees-perspective-dawn-957024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 23.3441,
    longitude: 85.3096,
    rating: 4.2,
    popularity: 'medium'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    type: 'state',
    capital: 'Bengaluru',
    region: 'South',
    tagline: 'IT Hub with Golden Temples and Coffee Plantations',
    description: 'Karnataka is India\'s IT capital and a major tourism destination with diverse attractions ranging from coffee plantations to ancient temples. The state features hill stations, wildlife sanctuaries, and the vibrant city of Bengaluru. Karnataka offers a perfect blend of modern development and natural beauty.',
    highlights: ['Mysore Palace', 'Coorg Coffee Plantations', 'Hampi Temples', 'Jog Falls'],
    bestTime: 'September to May',
    language: 'Kannada',
    image: 'https://images.pexels.com/photos/5625885/pexels-photo-5625885.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/5625885/pexels-photo-5625885.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/67552/gullfoss-waterfall-water-iceland-67552.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 15.3173,
    longitude: 75.7139,
    rating: 4.6,
    popularity: 'high'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    type: 'state',
    capital: 'Thiruvananthapuram',
    region: 'South',
    tagline: 'God\'s Own Country - Backwaters and Beaches',
    description: 'Kerala is often called "God\'s Own Country" for its breathtaking natural beauty, backwaters, and pristine beaches. The state offers ayurvedic treatments, spice markets, and lush green landscapes. Kerala\'s unique blend of culture, nature, and hospitality makes it India\'s most visited state for domestic and international tourists.',
    highlights: ['Alleppey Backwaters', 'Kochi Fort', 'Munnar Tea Gardens', 'Varkala Cliffs'],
    bestTime: 'August to October, December to February',
    language: 'Malayalam',
    image: 'https://images.pexels.com/photos/1057538/pexels-photo-1057538.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1057538/pexels-photo-1057538.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 10.8505,
    longitude: 76.2711,
    rating: 4.9,
    popularity: 'high'
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    type: 'state',
    capital: 'Bhopal',
    region: 'Central',
    tagline: 'Heart of India - Temples and Diamonds',
    description: 'Madhya Pradesh, located in the heart of India, is famous for its diamond mines, ancient temples, and tribal culture. The state features UNESCO World Heritage Sites including Khajuraho temples and Sanchi Stupa. Madhya Pradesh offers a rich historical and cultural experience with diverse natural landscapes.',
    highlights: ['Khajuraho Temples', 'Sanchi Stupa', 'Kanha National Park', 'Indore City'],
    bestTime: 'October to March',
    language: 'Hindi',
    image: 'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5625884/pexels-photo-5625884.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/957024/forest-trees-perspective-dawn-957024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 22.9068,
    longitude: 78.6569,
    rating: 4.5,
    popularity: 'high'
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    type: 'state',
    capital: 'Mumbai',
    region: 'West',
    tagline: 'Bollywood, Beaches, and Cosmopolitan Culture',
    description: 'Maharashtra is home to Bollywood and India\'s financial capital, Mumbai. The state offers vibrant city life, historic forts, beautiful beaches, and cultural attractions. Maharashtra seamlessly blends tradition with modernity, offering visitors a diverse range of experiences from urban exploration to heritage tourism.',
    highlights: ['Gateway of India', 'Ajanta Ellora Caves', 'Lonavala Hill Station', 'Taj Hotel Mumbai'],
    bestTime: 'October to February',
    language: 'Marathi',
    image: 'https://images.pexels.com/photos/7868597/pexels-photo-7868597.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/7868597/pexels-photo-7868597.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5625884/pexels-photo-5625884.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6915578/pexels-photo-6915578.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 19.7515,
    longitude: 75.7139,
    rating: 4.6,
    popularity: 'high'
  },
  {
    id: 'manipur',
    name: 'Manipur',
    type: 'state',
    capital: 'Imphal',
    region: 'Northeast',
    tagline: 'Jewel of India - Lakes and Dance',
    description: 'Manipur, known as the "Jewel of India," is famous for its scenic Loktak Lake, classical Manipuri dance, and spiritual significance. The state features floating islands, ancient temples, and a rich tribal heritage. Manipur offers a unique and enchanting travel experience with its natural beauty and cultural richness.',
    highlights: ['Loktak Lake', 'Kangla Fort', 'Shri Govind Temple', 'Moreh Border Market'],
    bestTime: 'October to March',
    language: 'Manipuri',
    image: 'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/957024/forest-trees-perspective-dawn-957024.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 24.6637,
    longitude: 93.9063,
    rating: 4.3,
    popularity: 'medium'
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    type: 'state',
    capital: 'Shillong',
    region: 'Northeast',
    tagline: 'Abode of Clouds - Wettest Place on Earth',
    description: 'Meghalaya, the "Abode of Clouds," is one of the wettest regions on Earth with lush green landscapes and breathtaking waterfalls. The state is famous for the living root bridges and tribal culture. Meghalaya offers adventurous trekking, waterfall chasing, and an immersive experience of pristine nature.',
    highlights: ['Cherrapunji', 'Living Root Bridges', 'Shillong Peak', 'Nongkhlaw Waterfall'],
    bestTime: 'September to April',
    language: 'Khasi',
    image: 'https://images.pexels.com/photos/67552/gullfoss-waterfall-water-iceland-67552.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/67552/gullfoss-waterfall-water-iceland-67552.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/957024/forest-trees-perspective-dawn-957024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 25.5788,
    longitude: 91.8829,
    rating: 4.4,
    popularity: 'medium'
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    type: 'state',
    capital: 'Aizawl',
    region: 'Northeast',
    tagline: 'Land of Blue Hills - Bamboo and Festivals',
    description: 'Mizoram is characterized by its rolling blue hills, bamboo forests, and vibrant tribal culture. The state is known for the colorful Hornbill Festival and pristine natural beauty. Mizoram offers visitors a chance to experience authentic tribal life, adventure activities, and stunning landscapes.',
    highlights: ['Aizawl City', 'Bamboo Forest', 'Phawngpui Peak', 'Cherapunji Tea Garden'],
    bestTime: 'March to May, September to November',
    language: 'Mizo',
    image: 'https://images.pexels.com/photos/2585759/pexels-photo-2585759.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2585759/pexels-photo-2585759.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/957024/forest-trees-perspective-dawn-957024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6915578/pexels-photo-6915578.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 23.8103,
    longitude: 92.7015,
    rating: 4.2,
    popularity: 'low'
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    type: 'state',
    capital: 'Kohima',
    region: 'Northeast',
    tagline: 'Land of Festivals - Tribal Heritage and Culture',
    description: 'Nagaland is famous for its Hornbill Festival and vibrant tribal culture with unique traditions and crafts. The state features pristine landscapes, adventure tourism, and authentic tribal experiences. Nagaland offers visitors an opportunity to connect with ancient cultures and experience genuine tribal hospitality.',
    highlights: ['Hornbill Festival', 'Kohima Town', 'Dzuko Valley', 'Naga Heritage Museum'],
    bestTime: 'November to February',
    language: 'Nagamese',
    image: 'https://images.pexels.com/photos/6915578/pexels-photo-6915578.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/6915578/pexels-photo-6915578.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2585759/pexels-photo-2585759.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 25.6751,
    longitude: 94.1086,
    rating: 4.3,
    popularity: 'medium'
  },
  {
    id: 'odisha',
    name: 'Odisha',
    type: 'state',
    capital: 'Bhubaneswar',
    region: 'East',
    tagline: 'Land of Temples and Beaches',
    description: 'Odisha is famous for the ancient Jagannath Temple in Puri, pristine beaches, and tribal art forms. The state features tribal villages, wildlife sanctuaries, and colonial heritage. Odisha offers a unique blend of spirituality, natural beauty, and tribal culture for diverse travelers.',
    highlights: ['Jagannath Temple Puri', 'Konark Sun Temple', 'Chilika Lake', 'Odisha Tribal Art'],
    bestTime: 'October to March',
    language: 'Odia',
    image: 'https://images.pexels.com/photos/5625884/pexels-photo-5625884.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/5625884/pexels-photo-5625884.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 20.9517,
    longitude: 85.0985,
    rating: 4.4,
    popularity: 'high'
  },
  {
    id: 'punjab',
    name: 'Punjab',
    type: 'state',
    capital: 'Chandigarh',
    region: 'North',
    tagline: 'Land of Five Rivers - Granary of India',
    description: 'Punjab, the "Land of Five Rivers," is known for its agricultural prosperity, vibrant Punjabi culture, and the Golden Temple. The state offers Sikh pilgrimage sites, traditional folk culture, and warm hospitality. Punjab provides visitors with authentic experiences of Indian traditions and spiritual significance.',
    highlights: ['Golden Temple Amritsar', 'Jallianwala Bagh', 'Wagah Border', 'Anandpur Sahib'],
    bestTime: 'September to March',
    language: 'Punjabi',
    image: 'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6915578/pexels-photo-6915578.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1526880/pexels-photo-1526880.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 31.5497,
    longitude: 74.3436,
    rating: 4.5,
    popularity: 'high'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    type: 'state',
    capital: 'Jaipur',
    region: 'North',
    tagline: 'Land of Kings - Palaces and Desert Wonders',
    description: 'Rajasthan is the "Land of Kings" with magnificent palaces, forts, and the vast Thar Desert. The state offers colorful culture, traditional crafts, and a rich history of royal dynasties. Rajasthan is India\'s most visited state with iconic destinations like Jaipur, Jodhpur, and Udaipur.',
    highlights: ['Taj Mahal Agra', 'City Palace Jaipur', 'Mehrangarh Fort Jodhpur', 'Lake Palace Udaipur'],
    bestTime: 'September to March',
    language: 'Hindi',
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1591375/pexels-photo-1591375.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5625885/pexels-photo-5625885.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5625884/pexels-photo-5625884.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 27.0844,
    longitude: 74.6796,
    rating: 4.8,
    popularity: 'high'
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    type: 'state',
    capital: 'Gangtok',
    region: 'Northeast',
    tagline: 'Land of Mountains and Monasteries',
    description: 'Sikkim is a picturesque mountain state with stunning Himalayan peaks, beautiful monasteries, and pristine landscapes. The state is known for Kanyakumari, biodiversity, and adventure tourism. Sikkim offers trekking, mountain views, spiritual experiences, and unique cultural encounters.',
    highlights: ['Kanyakumari Peak', 'Tsomgo Lake', 'Gangtok Monastery', 'Pelling Monastery'],
    bestTime: 'March to May, September to November',
    language: 'Sikkimese',
    image: 'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3495032/pexels-photo-3495032.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2585759/pexels-photo-2585759.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 27.5330,
    longitude: 88.5122,
    rating: 4.7,
    popularity: 'high'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    type: 'state',
    capital: 'Chennai',
    region: 'South',
    tagline: 'Land of Eternal Temples and Classical Arts',
    description: 'Tamil Nadu is home to ancient Dravidian temples, classical arts, and beautiful backwaters. The state features temple towns, tea plantations, and vibrant cultural traditions. Tamil Nadu offers visitors a deep dive into South Indian culture, spirituality, and artistic heritage.',
    highlights: ['Meenakshi Temple Madurai', 'Brihadeeswarar Temple Thanjavur', 'Ooty Hill Station', 'Marina Beach Chennai'],
    bestTime: 'October to February',
    language: 'Tamil',
    image: 'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 11.1271,
    longitude: 79.2787,
    rating: 4.6,
    popularity: 'high'
  },
  {
    id: 'telangana',
    name: 'Telangana',
    type: 'state',
    capital: 'Hyderabad',
    region: 'South',
    tagline: 'Modern City Meets Ancient History',
    description: 'Telangana is a vibrant state known for its modern IT industry hub Hyderabad and ancient monuments. The state features Nizami architecture, beautiful lakes, and innovative culture. Telangana seamlessly blends ancient heritage with contemporary development and modernity.',
    highlights: ['Charminar Hyderabad', 'Hussain Sagar Lake', 'Golconda Fort', 'Biryani Capital'],
    bestTime: 'October to February',
    language: 'Telugu',
    image: 'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5625884/pexels-photo-5625884.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6915578/pexels-photo-6915578.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 17.3850,
    longitude: 78.4867,
    rating: 4.5,
    popularity: 'high'
  },
  {
    id: 'tripura',
    name: 'Tripura',
    type: 'state',
    capital: 'Agartala',
    region: 'Northeast',
    tagline: 'Land of Palaces and Heritage',
    description: 'Tripura is known for its historic palaces, temples, and serene landscapes. The state features Ujjayanta Palace, tribal culture, and beautiful natural scenery. Tripura offers visitors a peaceful retreat with cultural richness and architectural marvels.',
    highlights: ['Ujjayanta Palace', 'Jampui Hills', 'Unakoti Rock Carvings', 'Neermahal Palace Lake'],
    bestTime: 'October to March',
    language: 'Bengali',
    image: 'https://images.pexels.com/photos/5625885/pexels-photo-5625885.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/5625885/pexels-photo-5625885.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2585759/pexels-photo-2585759.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 23.8401,
    longitude: 91.2868,
    rating: 4.2,
    popularity: 'low'
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    type: 'state',
    capital: 'Lucknow',
    region: 'North',
    tagline: 'Home of Taj Mahal and Spiritual Rivers',
    description: 'Uttar Pradesh is home to the world-famous Taj Mahal and the sacred Ganges River. The state features Varanasi, temples, forts, and rich Mughal architecture. Uttar Pradesh offers pilgrims and travelers spiritual experiences, historical exploration, and architectural wonders.',
    highlights: ['Taj Mahal', 'Varanasi Ghats', 'Lucknow Imambara', 'Ayodhya Ram Temple'],
    bestTime: 'October to March',
    language: 'Hindi',
    image: 'https://images.pexels.com/photos/784951/pexels-photo-784951.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/784951/pexels-photo-784951.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5470878/pexels-photo-5470878.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 26.8467,
    longitude: 80.9462,
    rating: 4.8,
    popularity: 'high'
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    type: 'state',
    capital: 'Dehradun',
    region: 'North',
    tagline: 'Land of Gods - Adventure in Mountains',
    description: 'Uttarakhand is called the "Land of Gods" with its sacred pilgrimage sites and stunning mountain scenery. The state features adventure tourism, trekking, yoga capital Rishikesh, and temple towns. Uttarakhand offers a perfect combination of spirituality, nature, and adventure activities.',
    highlights: ['Rishikesh Yoga Capital', 'Kedarnath Temple', 'Auli Skiing', 'Nainital Lake'],
    bestTime: 'March to May, September to November',
    language: 'Hindi',
    image: 'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2585759/pexels-photo-2585759.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 30.0668,
    longitude: 78.6158,
    rating: 4.7,
    popularity: 'high'
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    type: 'state',
    capital: 'Kolkata',
    region: 'East',
    tagline: 'Land of Literature and Tea Gardens',
    description: 'West Bengal is home to Kolkata, the cultural capital of India, and famous for Darjeeling tea. The state features literary heritage, temples, tea gardens, and the Sundarbans mangrove forests. West Bengal offers cultural richness, natural beauty, and historical significance.',
    highlights: ['Darjeeling Tea Gardens', 'Sundarbans Tiger Reserve', 'Kali Temple Kolkata', 'Himalayan Heritage Toy Train'],
    bestTime: 'September to April',
    language: 'Bengali',
    image: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/957024/forest-trees-perspective-dawn-957024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1526880/pexels-photo-1526880.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 24.4072,
    longitude: 88.7669,
    rating: 4.4,
    popularity: 'high'
  },
  {
    id: 'andaman-and-nicobar-islands',
    name: 'Andaman and Nicobar Islands',
    type: 'union_territory',
    capital: 'Port Blair',
    region: 'South',
    tagline: 'Tropical Paradise - Islands and Waters',
    description: 'Andaman and Nicobar Islands is a tropical paradise with pristine beaches, coral reefs, and turquoise waters. The union territory offers snorkeling, diving, water sports, and historic Cellular Jail. The islands provide visitors with island adventures and extraordinary natural beauty.',
    highlights: ['Cellular Jail', 'Radhanagar Beach', 'Havelock Island', 'Neil Island Diving'],
    bestTime: 'November to May',
    language: 'English',
    image: 'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1017842/pexels-photo-1017842.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 11.7401,
    longitude: 92.6586,
    rating: 4.7,
    popularity: 'high'
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    type: 'union_territory',
    capital: 'Chandigarh',
    region: 'North',
    tagline: 'Planned City - Modern Architecture and Gardens',
    description: 'Chandigarh is a perfectly planned modern city designed by Le Corbusier, known for its beautiful gardens and urban design. The union territory features Rock Garden, shopping malls, and cultural events. Chandigarh offers a unique blend of modern planning, culture, and entertainment.',
    highlights: ['Rock Garden', 'Sukhna Lake', 'Capitol Complex', 'Rose Garden'],
    bestTime: 'September to March',
    language: 'English',
    image: 'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5625884/pexels-photo-5625884.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6915578/pexels-photo-6915578.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 30.7333,
    longitude: 76.7794,
    rating: 4.3,
    popularity: 'medium'
  },
  {
    id: 'dadra-and-nagar-haveli-and-daman-and-diu',
    name: 'Dadra and Nagar Haveli and Daman and Diu',
    type: 'union_territory',
    capital: 'Silvassa',
    region: 'West',
    tagline: 'Tribal Heritage Meets Portuguese History',
    description: 'This union territory combines tribal culture of Dadra and Nagar Haveli with Portuguese colonial heritage of Daman and Diu. The region features beaches, forts, temples, and tribal villages. It offers visitors a unique blend of tribal experiences and Portuguese architecture.',
    highlights: ['Daman Fort', 'Silvassa Tribal Museum', 'Diu Fort', 'Nagoa Beach'],
    bestTime: 'October to March',
    language: 'Hindi',
    image: 'https://images.pexels.com/photos/1017842/pexels-photo-1017842.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1017842/pexels-photo-1017842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5625884/pexels-photo-5625884.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6915578/pexels-photo-6915578.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 20.1809,
    longitude: 73.0235,
    rating: 4.1,
    popularity: 'low'
  },
  {
    id: 'delhi',
    name: 'Delhi',
    type: 'union_territory',
    capital: 'New Delhi',
    region: 'North',
    tagline: 'Capital City - Ancient and Modern Wonders',
    description: 'Delhi is the capital of India with a rich tapestry of history spanning centuries. The union territory features Red Fort, ancient monuments, bustling markets, and modern infrastructure. Delhi offers visitors everything from spiritual sites to vibrant street life and world-class amenities.',
    highlights: ['Red Fort', 'Humayun\'s Tomb', 'Jama Masjid', 'India Gate'],
    bestTime: 'October to February',
    language: 'Hindi',
    image: 'https://images.pexels.com/photos/7868597/pexels-photo-7868597.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/7868597/pexels-photo-7868597.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5625884/pexels-photo-5625884.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6915578/pexels-photo-6915578.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1526880/pexels-photo-1526880.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 28.6139,
    longitude: 77.2090,
    rating: 4.4,
    popularity: 'high'
  },
  {
    id: 'jammu-and-kashmir',
    name: 'Jammu and Kashmir',
    type: 'union_territory',
    capital: 'Srinagar',
    region: 'North',
    tagline: 'Paradise on Earth - Valleys and Mountains',
    description: 'Jammu and Kashmir is often called "Paradise on Earth" with its breathtaking valleys, mountains, and lakes. The union territory features Dal Lake, snow-capped Himalayas, and spiritual significance. Jammu and Kashmir offers trekking, water activities, and experiences in some of Earth\'s most beautiful landscapes.',
    highlights: ['Dal Lake Srinagar', 'Gulmarg Skiing', 'Vaishno Devi Temple', 'Hemis Monastery'],
    bestTime: 'April to October',
    language: 'Kashmiri',
    image: 'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3495032/pexels-photo-3495032.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 34.0837,
    longitude: 74.7973,
    rating: 4.8,
    popularity: 'high'
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    type: 'union_territory',
    capital: 'Leh',
    region: 'North',
    tagline: 'Land of Lamas - High Altitude Adventure',
    description: 'Ladakh is a high-altitude union territory known for its stunning mountain landscapes, Buddhist monasteries, and adventure activities. The region features Leh Ladakh trekking routes, crystal lakes, and pristine scenery. Ladakh offers unforgettable experiences for adventure seekers and spiritual travelers.',
    highlights: ['Panang Tso Lake', 'Hemis Monastery', 'Pangong Tso', 'Chang La Pass'],
    bestTime: 'June to September',
    language: 'Ladakhi',
    image: 'https://images.pexels.com/photos/2585759/pexels-photo-2585759.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2585759/pexels-photo-2585759.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3495032/pexels-photo-3495032.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2901307/pexels-photo-2901307.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2372725/pexels-photo-2372725.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 34.1526,
    longitude: 77.5770,
    rating: 4.8,
    popularity: 'high'
  },
  {
    id: 'lakshadweep',
    name: 'Lakshadweep',
    type: 'union_territory',
    capital: 'Kavaratti',
    region: 'South',
    tagline: 'Atoll Islands - Water Sports and Coral Reefs',
    description: 'Lakshadweep is a group of stunning atoll islands known for coral reefs, water sports, and pristine beaches. The union territory offers snorkeling, diving, and island-hopping experiences. Lakshadweep provides paradise-like beauty with crystal-clear waters and vibrant marine life.',
    highlights: ['Agatti Beach', 'Minicoy Island', 'Coral Reef Snorkeling', 'Kavaratti Mosque'],
    bestTime: 'October to May',
    language: 'Mahal',
    image: 'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1017842/pexels-photo-1017842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 10.5667,
    longitude: 72.7417,
    rating: 4.6,
    popularity: 'medium'
  },
  {
    id: 'puducherry',
    name: 'Puducherry',
    type: 'union_territory',
    capital: 'Puducherry',
    region: 'South',
    tagline: 'French Quarter Charm - Beaches and Culture',
    description: 'Puducherry is a charming union territory with French colonial architecture, beaches, and spiritual centers. The region features colorful streets, temples, ashrams, and vibrant culture. Puducherry offers a unique blend of French culture, Indian traditions, and coastal beauty.',
    highlights: ['French Quarter Streets', 'Auroville Ashram', 'Paradise Beach', 'Sri Aurobindo Ashram'],
    bestTime: 'October to March',
    language: 'Tamil',
    image: 'https://images.pexels.com/photos/1017842/pexels-photo-1017842.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1017842/pexels-photo-1017842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7717191/pexels-photo-7717191.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    latitude: 12.9716,
    longitude: 79.8270,
    rating: 4.4,
    popularity: 'medium'
  }
];

export const regions = ['All', 'North', 'South', 'East', 'West', 'Central', 'Northeast'];

export const stateTypes = ['All', 'State', 'Union Territory'];
