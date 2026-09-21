/* =========================================================
   LUXESTORE - COMPLETE JAVASCRIPT
   ========================================================= */


/* =========================================================
   PRODUCT DATABASE
   ========================================================= */

const products = [

    {
        id: "iphone18",
        name: "iPhone 18 Pro",
        price: 1299,
        image: "iphone18promax.jpg",
        category: "Smart Tech",
        description:
            "Premium smartphone with advanced performance, stunning display and a refined modern design."
    },

    {
        id: "iphone",
        name: "iPhone",
        price: 999,
        image: "iphone.jpg",
        category: "Smart Tech",
        description:
            "Elegant smartphone with powerful performance and an immersive display."
    },

    {
        id: "laptop",
        name: "Premium Laptop",
        price: 1299,
        image: "premiumlaptop.jpg",
        category: "Laptops",
        description:
            "High-performance laptop designed for work, creativity and everyday productivity."
    },

    {
        id: "laptop2",
        name: "Laptop",
        price: 899,
        image: "laptop.jpg",
        category: "Laptops",
        description:
            "Reliable laptop with a clean design and smooth everyday performance."
    },

    {
        id: "premiumheadphones",
        name: "Premium Headphones",
        price: 299,
        image: "premiumheadphones.jpg",
        category: "Audio",
        description:
            "Premium headphones delivering immersive sound, comfort and modern style."
    },

    {
        id: "headphones",
        name: "Headphones",
        price: 199,
        image: "headphones.jpg",
        category: "Audio",
        description:
            "Comfortable headphones designed for music, entertainment and everyday listening."
    },

    {
        id: "watch",
        name: "Smart Watch",
        price: 249,
        image: "watch.jpg",
        category: "Watches",
        description:
            "Smart wearable combining useful features, modern style and everyday convenience."
    },

    {
        id: "premiumwatch",
        name: "Premium Smart Watch",
        price: 399,
        image: "premiumwatch.jpg",
        category: "Watches",
        description:
            "Premium smartwatch with an elegant design and advanced everyday features."
    },

    {
        id: "speaker",
        name: "Premium Speaker",
        price: 179,
        image: "speaker.jpg",
        category: "Audio",
        description:
            "Compact premium speaker with rich sound and a stylish modern design."
    },

    {
        id: "backpack",
        name: "Premium Backpack",
        price: 129,
        image: "backpack.jpg",
        category: "Lifestyle",
        description:
            "Stylish and practical backpack designed for modern everyday travel."
    },

    {
        id: "camera",
        name: "Digital Camera",
        price: 749,
        image: "camera.jpg",
        category: "Smart Tech",
        description:
            "Modern digital camera for capturing high-quality photos and memorable moments."
    },

    {
        id: "tablet",
        name: "Premium Tablet",
        price: 599,
        image: "tablet.jpg",
        category: "Smart Tech",
        description:
            "Slim and powerful tablet for entertainment, productivity and creativity."
    },


    /* =====================================================
       NEW PRODUCTS
       ===================================================== */

    {
        id: "earbuds",
        name: "Wireless Earbuds",
        price: 149,
        image: "wireless_earbuds.jpg",
        category: "Audio",
        description:
            "Compact wireless earbuds with clear sound and comfortable everyday listening."
    },

    {
        id: "smartring",
        name: "Smart Ring",
        price: 199,
        image: "smart_ring.jpg",
        category: "Smart Tech",
        description:
            "Elegant smart ring designed for modern everyday technology and convenience."
    },

    {
        id: "gamingkeyboard",
        name: "Gaming Keyboard",
        price: 119,
        image: "gaming_keyboard.jpg",
        category: "Gaming",
        description:
            "Responsive gaming keyboard designed for fast controls and comfortable gaming."
    },

    {
        id: "gamingmouse",
        name: "Gaming Mouse",
        price: 79,
        image: "gaming_mouse.jpg",
        category: "Gaming",
        description:
            "Precision gaming mouse with responsive controls and an ergonomic design."
    },

    {
        id: "sunglasses",
        name: "Premium Sunglasses",
        price: 159,
        image: "sunglasses.jpg",
        category: "Lifestyle",
        description:
            "Modern sunglasses with a premium look designed for everyday style."
    },

    {
        id: "travelbag",
        name: "Luxury Travel Bag",
        price: 189,
        image: "travel_bag.jpg",
        category: "Lifestyle",
        description:
            "Spacious travel bag combining practical storage with a premium appearance."
    },

    {
        id: "smartled",
        name: "Smart LED Light",
        price: 69,
        image: "smart_led_light.jpg",
        category: "Smart Tech",
        description:
            "Modern smart lighting solution for creating a comfortable home atmosphere."
    },

    {
        id: "projector",
        name: "Mini Projector",
        price: 229,
        image: "mini_projector.jpg",
        category: "Entertainment",
        description:
            "Compact projector for enjoying movies and entertainment almost anywhere."
    },

    {
        id: "airpurifier",
        name: "Smart Air Purifier",
        price: 279,
        image: "air_purifier.jpg",
        category: "Smart Tech",
        description:
            "Modern air purifier designed for cleaner and more comfortable indoor spaces."
    },

    {
        id: "coffeemaker",
        name: "Premium Coffee Maker",
        price: 249,
        image: "coffee_maker.jpg",
        category: "Lifestyle",
        description:
            "Stylish coffee maker designed for a premium coffee experience at home."
    },

    {
        id: "gamingconsole",
        name: "Gaming Console",
        price: 499,
        image: "gaming_console.jpg",
        category: "Gaming",
        description:
            "Powerful gaming console built for immersive entertainment and smooth gameplay."
    },

    {
        id: "gamingcontroller",
        name: "Gaming Controller",
        price: 89,
        image: "gaming_controller.jpg",
        category: "Gaming",
        description:
            "Comfortable wireless controller designed for precise and responsive gaming."
    }

];


/* =========================================================
   CART
   ========================================================= */

let cart = JSON.parse(
    localStorage.getItem("luxeCart")
) || [];


/* =========================================================
   SAVE CART
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        "luxeCart",
        JSON.stringify(cart)
    );

    updateCartCount();
}


/* =========================================================
   CART COUNT
   ========================================================= */

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");

    if (!cartCount) {
        return;
    }

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = totalItems;
}


/* =========================================================
   FORMAT PRICE
   ========================================================= */

function formatPrice(price) {

    return "$" + price.toLocaleString(
        "en-US",
        {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }
    );
}


/* =========================================================
   FIND PRODUCT
   ========================================================= */

function getProduct(productId) {

    return products.find(
        product => product.id === productId
    );
}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(productId) {

    const product =
        getProduct(productId);

    if (!product) {
        return;
    }

    const existing =
        cart.find(
            item => item.id === productId
        );

    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({
            id: productId,
            quantity: 1
        });

    }

    saveCart();

    showMessage(
        product.name + " added to cart."
    );
}


/* =========================================================
   REMOVE FROM CART
   ========================================================= */

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();

    renderCart();
}


/* =========================================================
   CHANGE QUANTITY
   ========================================================= */

function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            item => item.id === productId
        );

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {

        cart = cart.filter(
            cartItem =>
                cartItem.id !== productId
        );
    }

    saveCart();

    renderCart();
}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function createProductCard(product) {

    return `
        <article class="product-card">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='logo.png'"
                >

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>


                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>


                <div class="product-actions">

                    <button
                        class="add-cart-btn"
                        type="button"
                        onclick="addToCart('${product.id}')"
                    >
                        Add to Cart
                    </button>


                    <button
                        class="details-btn"
                        type="button"
                        onclick="openProductDetails('${product.id}')"
                    >
                        View Details
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts(
    container,
    productList
) {

    if (!container) {
        return;
    }

    if (productList.length === 0) {

        container.innerHTML = `
            <div class="empty-state">

                <h2>
                    No products found
                </h2>

                <p>
                    Try another search or category.
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML =
        productList
            .map(createProductCard)
            .join("");
}


/* =========================================================
   OPEN PRODUCT DETAILS
   ========================================================= */

function openProductDetails(productId) {

    window.location.href =
        "product.html?id=" +
        encodeURIComponent(productId);
}


/* =========================================================
   LOAD FEATURED PRODUCTS
   ========================================================= */

function loadFeaturedProducts() {

    const container =
        document.getElementById(
            "featuredProducts"
        );

    if (!container) {
        return;
    }

    const featured =
        products.slice(0, 8);

    renderProducts(
        container,
        featured
    );
}


/* =========================================================
   SHOP PAGE
   ========================================================= */

function initializeShop() {

    const container =
        document.getElementById(
            "shopProducts"
        );

    if (!container) {
        return;
    }


    const searchInput =
        document.getElementById(
            "shopSearch"
        );

    const categoryButtons =
        document.querySelectorAll(
            ".category-filter"
        );

    const resultsCount =
        document.getElementById(
            "resultsCount"
        );


    const params =
        new URLSearchParams(
            window.location.search
        );

    let selectedCategory =
        params.get("category") || "All";


    function updateShop() {

        const searchTerm =
            searchInput
                ? searchInput.value
                    .trim()
                    .toLowerCase()
                : "";


        let filtered =
            products.filter(
                product => {

                    const matchesSearch =
                        product.name
                            .toLowerCase()
                            .includes(searchTerm)
                        ||
                        product.description
                            .toLowerCase()
                            .includes(searchTerm);


                    const matchesCategory =
                        selectedCategory === "All"
                        ||
                        product.category ===
                            selectedCategory;


                    return (
                        matchesSearch &&
                        matchesCategory
                    );
                }
            );


        renderProducts(
            container,
            filtered
        );


        if (resultsCount) {

            resultsCount.textContent =
                filtered.length +
                " product" +
                (
                    filtered.length === 1
                        ? ""
                        : "s"
                ) +
                " found";
        }


        categoryButtons.forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.category ===
                        selectedCategory
                );

            }
        );
    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            updateShop
        );

    }


    categoryButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    selectedCategory =
                        button.dataset.category;

                    updateShop();

                }
            );

        }
    );


    updateShop();
}


/* =========================================================
   PRODUCT DETAILS PAGE
   ========================================================= */

function loadProductDetails() {

    const container =
        document.getElementById(
            "product-details"
        );

    if (!container) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const productId =
        params.get("id");


    const product =
        getProduct(productId);


    if (!product) {

        container.innerHTML = `
            <div class="empty-state">

                <h2>
                    Product Not Found
                </h2>

                <p>
                    The product you are looking for
                    does not exist.
                </p>

                <a
                    href="shop.html"
                    class="btn btn-gold"
                >
                    Back to Shop
                </a>

            </div>
        `;

        return;
    }


    document.title =
        product.name +
        " | LuxeStore";


    container.innerHTML = `

        <a
            href="shop.html"
            class="back-link"
        >
            ← Back to Shop
        </a>


        <div class="details-container">


            <div class="details-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.src='logo.png'"
                >

            </div>


            <div class="details-content">

                <p class="eyebrow">
                    LUXESTORE COLLECTION
                </p>


                <h1>
                    ${product.name}
                </h1>


                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>


                <p class="details-description">
                    ${product.description}
                </p>


                <ul class="details-features">

                    <li>
                        Premium quality design
                    </li>

                    <li>
                        Modern and practical
                    </li>

                    <li>
                        Designed for everyday use
                    </li>

                    <li>
                        Secure shopping experience
                    </li>

                </ul>


                <button
                    class="btn btn-gold"
                    type="button"
                    onclick="addToCart('${product.id}')"
                >
                    Add to Cart
                </button>

            </div>

        </div>
    `;
}


/* =========================================================
   RENDER CART
   ========================================================= */

function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );

    if (!container) {
        return;
    }


    if (cart.length === 0) {

        container.innerHTML = `
            <div class="empty-state">

                <h2>
                    Your cart is empty
                </h2>

                <p>
                    Add some premium products
                    to continue shopping.
                </p>

                <a
                    href="shop.html"
                    class="btn btn-gold"
                >
                    Start Shopping
                </a>

            </div>
        `;

        updateCartSummary(0);

        return;
    }


    container.innerHTML =
        cart.map(item => {

            const product =
                getProduct(item.id);

            if (!product) {
                return "";
            }


            const itemTotal =
                product.price *
                item.quantity;


            return `
                <div class="cart-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        onerror="this.src='logo.png'"
                    >


                    <div>

                        <h3>
                            ${product.name}
                        </h3>

                        <p>
                            ${formatPrice(itemTotal)}
                        </p>

                        <button
                            class="remove-btn"
                            type="button"
                            onclick="removeFromCart('${product.id}')"
                        >
                            Remove
                        </button>

                    </div>


                    <div class="cart-controls">

                        <button
                            class="quantity-btn"
                            type="button"
                            onclick="changeQuantity('${product.id}', -1)"
                        >
                            −
                        </button>

                        <span class="quantity">
                            ${item.quantity}
                        </span>

                        <button
                            class="quantity-btn"
                            type="button"
                            onclick="changeQuantity('${product.id}', 1)"
                        >
                            +
                        </button>

                    </div>

                </div>
            `;

        }).join("");


    let subtotal = 0;


    cart.forEach(item => {

        const product =
            getProduct(item.id);

        if (product) {

            subtotal +=
                product.price *
                item.quantity;

        }

    });


    updateCartSummary(subtotal);
}


/* =========================================================
   CART SUMMARY
   ========================================================= */

function updateCartSummary(
    subtotal
) {

    const subtotalElement =
        document.getElementById(
            "cartSubtotal"
        );

    const shippingElement =
        document.getElementById(
            "cartShipping"
        );

    const totalElement =
        document.getElementById(
            "cartTotal"
        );


    const shipping =
        subtotal === 0
            ? 0
            : subtotal >= 500
                ? 0
                : 25;


    const total =
        subtotal + shipping;


    if (subtotalElement) {

        subtotalElement.textContent =
            formatPrice(subtotal);

    }


    if (shippingElement) {

        shippingElement.textContent =
            shipping === 0
                ? "FREE"
                : formatPrice(shipping);

    }


    if (totalElement) {

        totalElement.textContent =
            formatPrice(total);

    }
}


/* =========================================================
   CHECKOUT
   ========================================================= */

function renderCheckout() {

    const container =
        document.getElementById(
            "checkoutItems"
        );

    if (!container) {
        return;
    }


    if (cart.length === 0) {

        container.innerHTML = `
            <div class="empty-state">

                <h2>
                    Your cart is empty
                </h2>

                <p>
                    Add products before checkout.
                </p>

                <a
                    href="shop.html"
                    class="btn btn-gold"
                >
                    Go to Shop
                </a>

            </div>
        `;

        updateCheckoutSummary(0);

        return;
    }


    container.innerHTML =
        cart.map(item => {

            const product =
                getProduct(item.id);

            if (!product) {
                return "";
            }


            return `
                <div
                    class="summary-row"
                >

                    <span>
                        ${product.name}
                        × ${item.quantity}
                    </span>

                    <span>
                        ${formatPrice(
                            product.price *
                            item.quantity
                        )}
                    </span>

                </div>
            `;

        }).join("");


    let subtotal = 0;


    cart.forEach(item => {

        const product =
            getProduct(item.id);

        if (product) {

            subtotal +=
                product.price *
                item.quantity;

        }

    });


    updateCheckoutSummary(
        subtotal
    );
}


/* =========================================================
   CHECKOUT SUMMARY
   ========================================================= */

function updateCheckoutSummary(
    subtotal
) {

    const subtotalElement =
        document.getElementById(
            "checkoutSubtotal"
        );

    const shippingElement =
        document.getElementById(
            "checkoutShipping"
        );

    const totalElement =
        document.getElementById(
            "checkoutTotal"
        );


    const shipping =
        subtotal === 0
            ? 0
            : subtotal >= 500
                ? 0
                : 25;


    const total =
        subtotal + shipping;


    if (subtotalElement) {

        subtotalElement.textContent =
            formatPrice(subtotal);

    }


    if (shippingElement) {

        shippingElement.textContent =
            shipping === 0
                ? "FREE"
                : formatPrice(shipping);

    }


    if (totalElement) {

        totalElement.textContent =
            formatPrice(total);

    }
}


/* =========================================================
   CHECKOUT FORM
   ========================================================= */

function initializeCheckout() {

    const form =
        document.getElementById(
            "checkoutForm"
        );

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (cart.length === 0) {

                showMessage(
                    "Your cart is empty."
                );

                return;
            }


            const customerName =
                document.getElementById(
                    "customerName"
                )?.value.trim();


            if (!customerName) {

                showMessage(
                    "Please enter your name."
                );

                return;
            }


            cart = [];

            saveCart();


            form.reset();


            alert(
                "Thank you, " +
                customerName +
                "! Your order has been placed successfully."
            );


            window.location.href =
                "index.html";

        }
    );
}


/* =========================================================
   CONTACT FORM
   ========================================================= */

function initializeContact() {

    const form =
        document.getElementById(
            "contactForm"
        );

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "contactName"
                )?.value.trim();


            if (!name) {

                showMessage(
                    "Please enter your name."
                );

                return;
            }


            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );


            form.reset();

        }
    );
}


/* =========================================================
   MESSAGE
   ========================================================= */

function showMessage(message) {

    const oldMessage =
        document.querySelector(
            ".site-message"
        );


    if (oldMessage) {
        oldMessage.remove();
    }


    const messageBox =
        document.createElement(
            "div"
        );


    messageBox.className =
        "site-message";


    messageBox.textContent =
        message;


    messageBox.style.position =
        "fixed";

    messageBox.style.bottom =
        "25px";

    messageBox.style.right =
        "25px";

    messageBox.style.zIndex =
        "9999";

    messageBox.style.padding =
        "14px 20px";

    messageBox.style.background =
        "#c9a227";

    messageBox.style.color =
        "#080808";

    messageBox.style.borderRadius =
        "6px";

    messageBox.style.fontWeight =
        "700";

    messageBox.style.fontSize =
        "13px";

    messageBox.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.35)";


    document.body.appendChild(
        messageBox
    );


    setTimeout(
        () => {

            messageBox.remove();

        },
        2500
    );
}


/* =========================================================
   SEARCH TOGGLE
   ========================================================= */

function initializeSearch() {

    const toggle =
        document.getElementById(
            "searchToggle"
        );

    const panel =
        document.getElementById(
            "searchPanel"
        );

    const searchInput =
        document.getElementById(
            "homeSearch"
        );

    const searchButton =
        document.getElementById(
            "homeSearchBtn"
        );


    if (
        !toggle ||
        !panel
    ) {
        return;
    }


    toggle.addEventListener(
        "click",
        () => {

            panel.classList.toggle(
                "show"
            );

            if (
                panel.classList.contains(
                    "show"
                ) &&
                searchInput
            ) {

                searchInput.focus();

            }

        }
    );


    function performSearch() {

        const value =
            searchInput
                ? searchInput.value.trim()
                : "";


        if (!value) {
            return;
        }


        window.location.href =
            "shop.html?search=" +
            encodeURIComponent(value);
    }


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            performSearch
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    performSearch();

                }

            }
        );

    }
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function initializeMobileMenu() {

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );

    const navLinks =
        document.getElementById(
            "navLinks"
        );


    if (
        !menuToggle ||
        !navLinks
    ) {
        return;
    }


    menuToggle.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "show"
            );

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "show"
                    );

                }
            );

        });
}


/* =========================================================
   SHOP URL SEARCH
   ========================================================= */

function applyUrlSearch() {

    const input =
        document.getElementById(
            "shopSearch"
        );

    if (!input) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const search =
        params.get("search");


    if (search) {

        input.value =
            search;

        input.dispatchEvent(
            new Event("input")
        );

    }
}


/* =========================================================
   START WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCartCount();

        loadFeaturedProducts();

        initializeShop();

        applyUrlSearch();

        loadProductDetails();

        renderCart();

        renderCheckout();

        initializeCheckout();

        initializeContact();

        initializeSearch();

        initializeMobileMenu();

    }
);