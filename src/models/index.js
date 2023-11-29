const category = require('./Category');
const products = require('./Product');
const image = require('./Image');
const cart = require('./Cart');
const user = require('./User');
const Purchase = require('./Purchase');


category.hasMany(products);
products.belongsTo(category);

products.hasMany(image);
image.belongsTo(products);

products.hasMany(cart);
cart.belongsTo(products);

user.hasMany(cart);
cart.belongsTo(user);

products.hasMany(Purchase);
Purchase.belongsTo(products);

user.hasMany(Purchase);
Purchase.belongsTo(user)