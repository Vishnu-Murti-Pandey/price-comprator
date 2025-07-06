export const dummyProducts = Array.from({ length: 100 }, (_, index) => {
  const products = [
    'iPhone 16 Pro 128GB',
    'Samsung Galaxy S24 Ultra 256GB',
    'MacBook Air M3 13"',
    'Sony WH-1000XM5 Headphones',
    'PlayStation 5 Console',
    'Xbox Series X',
    'Bose QuietComfort Ultra',
    'Google Pixel 9 Pro',
    'OnePlus 13 Pro',
    'iPhone 16 Pro, 128GB',
    'iPhone 15 Pro, 128GB',
    'iPhone 16 Pro, 256GB',
    'Dell XPS 15 OLED',
    'ASUS ROG Zephyrus G14',
    'Nikon Z8 Camera',
    'Canon EOS R6 Mark II',
    'iPad Pro M4',
    'Apple Watch Series 10',
    'Garmin Forerunner 965',
    'DJI Mini 4 Pro Drone',
    'GoPro Hero 13 Black',
    'Nothing Phone 3',
    'Lenovo Legion 7i',
    'Samsung Galaxy S24'
  ];

  const stores = [
    'Apple Store',
    'Amazon',
    'eBay',
    'Walmart',
    'BestBuy',
    'B&H',
    'Flipkart',
    'Croma'
  ];

  const countries = ['US', 'IN']; // United States, India

  const randomProduct = products[Math.floor(Math.random() * products.length)];
  const randomStore = stores[Math.floor(Math.random() * stores.length)];
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];
  const randomPrice = (Math.floor(Math.random() * 1000) + 400).toString();

  const slug = randomProduct.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return {
    productName: `${randomProduct} (${randomStore})`,
    price: randomPrice,
    currency: randomCountry === 'US' ? 'USD' : 'INR',
    country: randomCountry,
    link: `https://${randomStore.toLowerCase().replace(/\s/g, '')}.com/product/${slug}`
  };
});
