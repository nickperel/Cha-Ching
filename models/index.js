// import models
const Product = require('./Product');
const Category = require('./Category');
const ProductTag = require('./ProductTag');
// const Tag = require('./Tag');
// const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product'
})
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  // Tag,
  // ProductTag,
};
