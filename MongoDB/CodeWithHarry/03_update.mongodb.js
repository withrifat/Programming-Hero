use("ecommerce");

// db.products.updateOne(
// { name: "Wireless Mouse" },
// { $set: { price: 899 } }
// )

// db.products.updateMany(
// { category: "Electronics" },
// {$inc: {stock: 11}})

db.products.updateOne(
{ name: "Wireless Mouse" },
{ $push: { tags: "Mouse" } }
)