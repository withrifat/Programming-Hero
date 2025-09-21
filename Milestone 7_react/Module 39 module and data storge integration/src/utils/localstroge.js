

// লোকাল স্টোরেজ থেকে কার্ট বের করার ফাংশন
// যদি কার্ট না থাকে তাহলে খালি অ্যারে [] রিটার্ন করবে
const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        // JSON string কে আবার array/object এ কনভার্ট করা
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return []; // ডিফল্ট ফাঁকা অ্যারে
};

// কার্টকে লোকাল স্টোরেজে সেভ করার ফাংশন
const saveCartToLocalStorage = (cart) => {
    // array/object কে JSON string এ কনভার্ট করা
    const cartStringified = JSON.stringify(cart);
    // লোকাল স্টোরেজে "cart" নামে সেট করা
    localStorage.setItem('cart', cartStringified);
};

// নতুন আইটেম কার্টে যোগ করার ফাংশন
const addItemToCartLocalStorage = (id) => {  // id তে রাখার কারণ হল যেন stroge কম লাগে 
    // আগের কার্ট লোকাল স্টোরেজ থেকে আনো
    const cart = getCartFromLocalStorage();

    // নতুন আইডি কার্টে যোগ করো
    cart.push(...cart, id);

    // আপডেটেড কার্ট আবার লোকাল স্টোরেজে সেভ করো
    saveCartToLocalStorage(cart);
};
