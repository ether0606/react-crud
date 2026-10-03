const imagePath = '/furni/images/'

export const products = [
  {
    name: 'Nordic Chair',
    price: '$50.00',
    image: 'product-1.png',
    description: 'A calm, sculptural silhouette with an inviting seat. The Nordic Chair brings considered comfort to a dining room, reading corner, or anywhere you like to linger.',
    material: 'Natural wood and softly upholstered seat',
    care: 'Wipe clean with a soft, dry cloth.',
    colors: [
      { name: 'Moss', value: '#627b64' },
      { name: 'Oat', value: '#d5c9b5' },
      { name: 'Ink', value: '#343b38' },
    ],
  },
  {
    name: 'Kruzo Aero Chair',
    price: '$78.00',
    image: 'product-2.png',
    description: 'An expressive modern chair designed to feel light in a room and supportive in use. Its distinctive profile makes a statement without asking for attention.',
    material: 'Formed frame with a smooth, durable finish',
    care: 'Wipe clean with a soft, dry cloth.',
    colors: [
      { name: 'Forest', value: '#3b5d50' },
      { name: 'Stone', value: '#a9aaa0' },
      { name: 'Ochre', value: '#c99a3b' },
    ],
  },
  {
    name: 'Ergonomic Chair',
    price: '$43.00',
    image: 'product-3.png',
    description: 'A supportive everyday seat with clean lines and a comfortable shape. Made to work just as well around the table as it does in a quiet corner.',
    material: 'Textured upholstery with a sturdy frame',
    care: 'Spot clean gently and allow to air dry.',
    colors: [
      { name: 'Sage', value: '#849481' },
      { name: 'Cloud', value: '#dedbd2' },
      { name: 'Terracotta', value: '#bd7657' },
    ],
  },
].map((product) => ({ ...product, image: `${imagePath}${product.image}` }))

export const shopProducts = [...products, ...products, ...products.slice(0, 2)].map((product, index) => ({
  ...product,
  id: index + 1,
}))

export const features = [
  { title: 'Fast & Free Shipping', image: 'truck.svg' },
  { title: 'Easy to Shop', image: 'bag.svg' },
  { title: '24/7 Support', image: 'support.svg' },
  { title: 'Hassle Free Returns', image: 'return.svg' },
].map((feature) => ({ ...feature, image: `${imagePath}${feature.image}` }))

export const testimonials = [
  {
    quote: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    name: 'Maria Jones',
    role: 'CEO, Co-Founder, XYZ Inc.',
    image: `${imagePath}person-1.png`,
  },
  {
    quote: 'A thoughtful collection, beautifully made. The chair feels at home in every corner, and the entire experience from browsing to delivery was effortless.',
    name: 'James Wilson',
    role: 'Interior Designer',
    image: `${imagePath}person_2.jpg`,
  },
  {
    quote: 'The quality is exceptional and the design is timeless. Furni helped us make our new home feel considered, comfortable, and truly ours.',
    name: 'Olivia Martin',
    role: 'Homeowner',
    image: `${imagePath}person_3.jpg`,
  },
]

export const journalPosts = [
  { title: 'First Time Home Owner Ideas', author: 'Kristin Watson', date: 'Dec 19, 2021', image: 'post-1.jpg' },
  { title: 'How To Keep Your Furniture Clean', author: 'Robert Fox', date: 'Dec 15, 2021', image: 'post-2.jpg' },
  { title: 'Small Space Furniture Apartment Ideas', author: 'Kristin Watson', date: 'Dec 12, 2021', image: 'post-3.jpg' },
].map((post) => ({ ...post, image: `${imagePath}${post.image}` }))

export const imageGrid = ['img-grid-1.jpg', 'img-grid-2.jpg', 'img-grid-3.jpg']
  .map((image) => `${imagePath}${image}`)