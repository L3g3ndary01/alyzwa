// FULL MENU DATA (Extracted from Images)
const menuData = [
    // --- 1. FISH TYPES (MAIN DISHES) ---
    { name: "Safi / صافي (Fried)", price: "45 QR", desc: "مقلي", category: "fish" },
    
    { name: "Kanaad / كنعد (Fried)", price: "50 QR", desc: "مقلي", category: "fish" },
    { name: "Kanaad / كنعد (Charcoal)", price: "45 QR", desc: "مشوي عالفحم", category: "fish" },
    
    { name: "Sheri / شعري (Fried)", price: "35 QR", desc: "مقلي", category: "fish" },
    { name: "Sheri / شعري (Oven Singari)", price: "45 QR", desc: "مشوي بالفرن سنجاري", category: "fish" },
    
    { name: "Hamour / هامور (Fried)", price: "55 QR", desc: "مقلي", category: "fish" },
    { name: "Hamour / هامور (Oven Singari)", price: "70 QR", desc: "مشوي بالفرن سنجاري", category: "fish" },
    
    { name: "Sea Bass / سيباس (Oven Singari)", price: "60 QR", desc: "مشوي بالفرن سنجاري", category: "fish" },
    
    { name: "Rabeeb / ربيب (Fried)", price: "40 QR", desc: "مقلي", category: "fish" },
    { name: "Rabeeb / ربيب (Oven Singari)", price: "40 QR", desc: "مشوي بالفرن سنجاري", category: "fish" },
    
    { name: "Biyah Al-Yzwa / بياح اليزوه (Charcoal)", price: "50 QR", desc: "مشوي عالفحم", category: "fish" },
    { name: "Biyah Al-Yzwa / بياح اليزوه (Oven Singari)", price: "65 QR", desc: "مشوي بالفرن سنجاري", category: "fish" },
    
    { name: "Yanam / ينم (Charcoal)", price: "35 QR", desc: "مشوي عالفحم", category: "fish" },
    
    { name: "Dhreisi / ضريسي (Charcoal)", price: "40 QR", desc: "مشوي عالفحم", category: "fish" },
    { name: "Dhreisi / ضريسي (Oven Singari)", price: "45 QR", desc: "مشوي بالفرن سنجاري", category: "fish" },
    
    { name: "Badah / بدح (Fried)", price: "35 QR", desc: "مقلي", category: "fish" },
    
    { name: "Coffer / كوفر (Oven Singari)", price: "45 QR", desc: "مشوي بالفرن سنجاري", category: "fish" },
    
    { name: "Salmon / سلمون (Oven Singari)", price: "65 QR", desc: "مشوي بالفرن سنجاري", category: "fish" },

    // --- 2. SEAFOOD ---
    { name: "Charcoal-grilled Shrimp", price: "50 QR", desc: "with butter, garlic, and lemon mix / روبيان مشوي عالفحم خلطة الزبدة والثوم والليمون", category: "seafood" },
    { name: "Oven-grilled Shrimp Tagine", price: "60 QR", desc: "with Béchamel and Mozzarella mix / طاجن روبيان مشوي بالفرن خلطة الباشميل والموزريلا", category: "seafood" },
    { name: "Shrimp Hamsa", price: "45 QR", desc: "with Al-Yzwa authentic mix / حمسة روبيان خلطة اليزوه الاصلية", category: "seafood" },
    { name: "Lobster", price: "90 QR", desc: "with Béchamel and Mozzarella mix / ام الروبيان بخلطة الباشميل والموزريلا", category: "seafood" },
    { name: "Crabs", price: "40 QR", desc: "with water, lemon, and turmeric / قبقب مسلوق بالماي والليمون والكركم", category: "seafood" },
    { name: "Crabs with Bechamel", price: "45 QR", desc: "and Mozzarella mix / قبقب بخلطة الباشميل والموزريلا", category: "seafood" },
    { name: "Charcoal-grilled calamari", price: "40 QR", desc: "with Tikka mix / خثاق مشوي عالفحم بخلطة التيكا", category: "seafood" },
    { name: "Calamari Hamsa", price: "40 QR", desc: "with Al-Yzwa authentic mix / حمسة خثاق بخلطة اليزوه الاصلية", category: "seafood" },
    { name: "Oven-grilled Oysters", price: "40 QR", desc: "with Bechamel and Mozzarella mix / محار مشوي بالفرن خلطة الباشميل والموزريلا", category: "seafood" },

    // --- 3. SIDE DISHES ---
    { name: "Hamour Machboos / مجبوس هامور", price: "60 QR", desc: "", category: "sides" },
    { name: "Al-Yzwa Jasheed / فشيد اليزوه", price: "40 QR", desc: "", category: "sides" },
    { name: "Jasheed Samosa / سمبوسة فشيد", price: "30 QR", desc: "", category: "sides" },
    { name: "Creamy Seafood Soup / شوربة سي فود بالكريمة", price: "25 QR", desc: "", category: "sides" },
    { name: "Shrimp Sandwich / سندويتش روبيان", price: "20 QR", desc: "", category: "sides" },

    // --- 4. RICE AND APPETIZERS ---
    { name: "Shilani Rice / عيش شيلاني", price: "10 QR", desc: "with Arabic Ghee and Caramelized Onions / بالسمن العربي والبصل المكرمل", category: "appetizers" },
    { name: "Bab Al-Hind Meal / وجبة باب الهند", price: "15 QR", desc: "(for Asian workers) / للعمالة الاسيوية", category: "appetizers" },
    { name: "French Fries / بطاطس مقلية", price: "10 QR", desc: "", category: "appetizers" },
    { name: "Arugula Salad / سلطة جرجير", price: "8 QR", desc: "", category: "appetizers" },
    { name: "Bahraini Daqus / دقوس بحريني", price: "5 QR", desc: "", category: "appetizers" },
    { name: "Fish Achar / اجار سمك", price: "7 QR", desc: "", category: "appetizers" },
    { name: "Arabic Ghee / سمن عربي", price: "3 QR", desc: "", category: "appetizers" },

    // --- 5. BEVERAGES ---
    { name: "Star Cola / ستار كولا", price: "3 QR", desc: "", category: "beverages" },
    { name: "Star Lemon / ستار ليمون", price: "3 QR", desc: "", category: "beverages" },
    { name: "Star Orange / ستار برتقال", price: "3 QR", desc: "", category: "beverages" },
    { name: "Water / ماء", price: "2 QR", desc: "", category: "beverages" }
];

// Function to filter and render menu items
function filterMenu(category) {
    const container = document.getElementById('menu-container');
    const buttons = document.querySelectorAll('.tab-btn');
    
    // Update active tab styling
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });

    // Generate HTML for selected category
    const itemsHTML = menuData
        .filter(item => item.category === category)
        .map(item => `
            <div class="menu-card">
                <div class="menu-card-top">
                    <h3>${item.name}</h3>
                    <span class="price">${item.price}</span>
                </div>
                ${item.desc ? `<p class="desc">${item.desc}</p>` : ''}
            </div>
        `).join('');

    container.innerHTML = itemsHTML;
}

// Load 'Fish Types' category automatically when the page opens
document.addEventListener('DOMContentLoaded', () => {
    filterMenu('fish');
});

// Mobile Navigation Hamburger Logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon between bars and 'X'
    const icon = hamburger.querySelector('i');
    if(navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});