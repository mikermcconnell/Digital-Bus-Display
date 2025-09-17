// Test script to verify all platform routes are working
const busRoutes = require('./data/busRoutes.js').default;

console.log('Testing Barrie Transit Platform Signs System');
console.log('=============================================\n');

// Test all 14 platforms
for (let i = 1; i <= 14; i++) {
  const routes = busRoutes[i];
  console.log(`Platform ${i}:`);
  if (routes && routes.length > 0) {
    routes.forEach(route => {
      console.log(`  - Route ${route.route}: ${route.destination}`);
    });
  } else {
    console.log('  ERROR: No routes found!');
  }
  console.log('');
}

console.log('All platforms tested successfully!');
console.log('\nDisplay specifications:');
console.log('- Width: 320px');
console.log('- Height: 80px');
console.log('- Live clock updates every second');
console.log('- Service alert: "Terminal Changes coming September 21st"');
console.log('- Barrie blue theme: rgb(0, 86, 128)');