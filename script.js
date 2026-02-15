
document.addEventListener('DOMContentLoaded', () => {
    // ১. Staggered Table Animation
    const animateRows = () => {
        const rows = document.querySelectorAll('tr');
        rows.forEach((row, index) => {
            row.classList.add('stagger-row');
            setTimeout(() => {
                row.classList.add('show');
            }, index * 100); // প্রতি রো ১০০ মিলিসেকেন্ড পর পর আসবে
        });
    };

    // ২. Search Filtering with Animation Re-trigger
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('tbody tr');

            rows.forEach(row => {
                const text = row.innerText.toLowerCase();
                if (text.includes(term)) {
                    row.style.display = '';
                    row.classList.add('show');
                } else {
                    row.style.display = 'none';
                    row.classList.remove('show');
                }
            });
        });
    }

    // ৩. অটোমেটিক ক্যালকুলেশন এবং ইন্টারেকশন (উদাহরণ)
    const qtyInputs = document.querySelectorAll('input[type="number"]');
    qtyInputs.forEach(input => {
        input.addEventListener('change', () => {
            // এখানে আপনি আপনার টোটাল ক্যালকুলেশন লজিক রাখতে পারেন
            console.log("Quantity Updated: ", input.value);
            
            // ছোট একটি এনিমেশন যখন ভ্যালু চেঞ্জ হবে
            input.style.borderColor = 'var(--neon-orange)';
            setTimeout(() => { input.style.borderColor = 'rgba(255, 107, 0, 0.3)'; }, 500);
        });
    });

    // পেজ লোড হলে অ্যানিমেশন শুরু হবে
    animateRows();
});



// Search Logic
function searchProducts() {
    let input = document.getElementById('productSearch').value.toLowerCase();
    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {
        let productName = row.cells[0].textContent.toLowerCase();
        if (productName.includes(input)) {
            row.style.display = ""; // দেখাবে
        } else {
            row.style.display = "none"; // লুকিয়ে ফেলবে
        }
    });
}

// Update showName function for the new input style
document.getElementById("memberName").addEventListener("input", (e) => {
    document.getElementById("showName").textContent = e.target.value || "Guest";
});
const officialProducts = [{name:"Lingzhi Coffee 3 in 1",pv:475,dp:2050,sv:813},
{name:"Lingzhi Coffee 2 in 1",pv:350,dp:990,sv:424},
{name:"DXN Lemonzhi",pv:175,dp:745,sv:286},
{name:"DXN Zhi Mocha ",pv:290,dp:1260,sv:482},
{name:"Cordyceps Coffee",pv:450,dp:1940,sv:745},
{name:"Lion's Mane Powder",pv:390,dp:1400,sv:614},
{name:"Cordyceps Powder",pv:760,dp:2730,sv:1197},
{name:"RG Powder-50 g",pv:1070,dp:3455,sv:1450},
{name:"GL Powder-80 g",pv:770,dp:2550,sv:1071},
{name:"Spirulina Cereal",pv:540,dp:2650,sv:1112},
{name:"Cordyceps Cereal",pv:825,dp:3545,sv:1490},
{name:"Reishi Gano Tea",pv:90,dp:380,sv:145},
{name:"Masala Tea",pv:60,dp:250,sv:96},
{name:"DXN Cocozhi",pv:525,dp:2245,sv:857},
{name:"Neem Facewash",pv:45,dp:190,sv:73},
{name:"Papaya Scrub",pv:55,dp:235,sv:90},
{name:"Apricot Scrub",pv:55,dp:235,sv:90},
{name:"DXN Hair Oil",pv:135,dp:590,sv:228},
{name:"Aloe Facial Scrub",pv:190,dp:1165,sv:446}
];

const unofficialProducts = [
        {name:"RG-90", pv:669.5, dp:4032, sv:93.2},
        {name:"RG-30", pv:240.5, dp:1491, sv:33.8},
        {name:"GL-90", pv:474.5, dp:2867, sv:66.2},
        {name:"GL-30", pv:162.5, dp:1024, sv:22.9},
        {name:"RG Powder", pv:325.0, dp:2278, sv:47.8},
        {name:"GL Powder", pv:221.0, dp:1546, sv:33.4},
        {name:"Andro-G 90", pv:364.0, dp:2829, sv:53.5},
        {name:"Andro-G 30", pv:130.0, dp:1024, sv:19.4},
        {name:"Reshilium Powder (3 Bottles)", pv:1144.0, dp:6976, sv:158.2},
        {name:"Reshilium Powder (30 Bottles)", pv:10530.0, dp:63040, sv:1466.0},
        {name:"DXN Bee Pollen 120's", pv:273.0, dp:2006, sv:38.7},
        {name:"DXN Cordyceps Capsule", pv:845.0, dp:5344, sv:114.2},
        {name:"DXN Roselle Tablet 120's", pv:182.0, dp:1533, sv:29.5},
        {name:"DXN Lion's Mane Tablet 120's", pv:429.0, dp:3360, sv:63.1},
        {name:"DXN Cordyceps Tablet 120's", pv:1105.0, dp:7040, sv:152.4},
        {name:"DXN Spirulina Tablet 120's", pv:260.0, dp:1987, sv:38.2},
        {name:"RG-360", pv:2535.0, dp:15360, sv:353.0},
        {name:"GL-360", pv:1820.0, dp:10944, sv:254.3},
        {name:"DXN Spirulina Capsule (30's)", pv:104.0, dp:710, sv:14.8},
        {name:"DXN Spirulina Capsule (90's)", pv:299.0, dp:2080, sv:42.1},
        {name:"DXN Spirulina Tablet 500's", pv:975.0, dp:7072, sv:140.5},
        {name:"DXN MycoVeggie (Bottle)", pv:1235.0, dp:7712, sv:168.9},
        {name:"DXN Potenzhi-30", pv:331.5, dp:2499, sv:46.8},
        {name:"DXN Potenzhi-90", pv:910.0, dp:6784, sv:127.5},
        {name:"DXN Mycovita (24g x 30)", pv:10530.0, dp:63040, sv:1466.0},
        {name:"DXN MycoVeggie (Box)", pv:689.0, dp:4288, sv:93.3},
        {name:"DXN Black Cumin Plus Capsule 30's", pv:295.1, dp:1248, sv:24.5},
        {name:"DXN Black Cumin Plus Capsule 90's", pv:796.9, dp:3360, sv:66.0},
        {name:"DXN Monascus Capsule 90's", pv:513.5, dp:3552, sv:69.6},
        {name:"DXN Monascus Capsule 30's", pv:182.0, dp:1251, sv:24.6},
        {name:"DXN Bee Pollen 300's (Bottle)", pv:663.0, dp:4768, sv:92.4},
        {name:"DXN Spirulina Tablet 300's", pv:650.0, dp:4768, sv:93.5},
        {name:"DXN Mycovita (12g x 30)", pv:5798.0, dp:34880, sv:812.0},
        {name:"DXN Spirulina Capsule (360's)", pv:1124.5, dp:7744, sv:157.0},
        {name:"DXN Spirulina Powder 50g", pv:390.0, dp:2870, sv:56.6},
        {name:"DXN Poria S (30 capsules)", pv:143.0, dp:918, sv:19.1},
        {name:"DXN Poria S (90 capsules)", pv:403.0, dp:2547, sv:53.2},
        {name:"DXN Poria S (Powder)", pv:208.0, dp:1392, sv:29.1},
        {name:"DXN Lignosus Plus Syrup", pv:175.5, dp:1216, sv:21.0},
        {name:"DXN Pearl Powder 30g", pv:338.0, dp:2368, sv:48.7},
        {name:"DXN Lion's Mane Powder 10's Box", pv:422.5, dp:3296, sv:61.8},
        {name:"DXN Shiitake Powder 10's Box", pv:422.5, dp:3328, sv:62.4},
        {name:"DXN Agaricus Blazei Murill Powder", pv:757.9, dp:3328, sv:62.4},
        {name:"DXN Agaricus Blazei Murill Capsule 30", pv:222.3, dp:979, sv:18.4},
        {name:"DXN Agaricus Blazei Murill Capsule 90", pv:579.8, dp:2566, sv:48.1},
        {name:"DXN Hong T Powder", pv:299.0, dp:2109, sv:43.4},
        {name:"Reishilium Powder 70g", pv:1196.0, dp:7328, sv:165.9},
        {name:"DXN Gegen Plus Powder", pv:695.5, dp:2848, sv:57.7},
        {name:"DXN Gegen Plus Capsule 30's", pv:296.4, dp:1206, sv:24.6},
        {name:"DXN Gegen Plus Capsule 90's", pv:806.0, dp:3296, sv:66.9},
        {name:"DXN Ros L Powder", pv:149.5, dp:1213, sv:23.4},
        {name:"DXN Mengkudu 350mg Capsule 30's", pv:143.0, dp:973, sv:17.6},
        {name:"DXN Mengkudu 350mg Capsule 90's", pv:403.0, dp:2701, sv:48.8},
        {name:"DXN Ligno-L Powder 40g", pv:461.5, dp:3123, sv:53.7},
        {name:"DXN Shiitake Mushroom Powder 30g", pv:357.5, dp:2634, sv:49.3},
        {name:"DXN Black Cumin Plus Powder 30g", pv:683.8, dp:2880, sv:56.4},
        {name:"DXN Scelium Capsule 30's", pv:130.0, dp:848, sv:17.2},
        {name:"DXN Scelium Capsule 90's", pv:351.0, dp:2355, sv:47.7},
        {name:"DXN Hong T Capsule 90's", pv:344.5, dp:2339, sv:48.1},
        {name:"DXN Hong T Capsule 360's", pv:1293.5, dp:8672, sv:178.5},
        {name:"DXN Wild Betel 66.6mg Pill", pv:117.0, dp:998, sv:18.7},
        {name:"DXN Garcinia 350mg Capsule 30's", pv:157.3, dp:691, sv:13.0},
        {name:"DXN Garcinia 350mg Capsule 90's", pv:432.9, dp:1907, sv:35.9},
        {name:"DXN Garcinia 350mg Capsule 360's", pv:1610.7, dp:7104, sv:133.5},
        {name:"DXN Zhicurcu Capsule 30's", pv:182.0, dp:1155, sv:22.6},
        {name:"DXN Zhicurcu Capsule 90's", pv:488.8, dp:3117, sv:61.3},
        {name:"DXN Fuling Plus Pill", pv:117.0, dp:998, sv:18.7},
        {name:"DXN Fomes 270mg G 90's", pv:669.5, dp:3712, sv:85.7},
            {name:"DXN Roselle Juice", pv:130.0, dp:1120, sv:21.0},
            {name:"DXN Morinzhi", pv:208.0, dp:1526, sv:29.8},
            {name:"DXN Morinzyme", pv:208.0, dp:1526, sv:29.8},
            {name:"DXN Cordypine 700ml", pv:1690.0, dp:10752, sv:228.0},
            {name:"DXN Zhi Mocha", pv:143.0, dp:1293, sv:22.8},
            {name:"DXN Eucafe", pv:156.0, dp:1325, sv:24.5},
            {name:"DXN Reishi Gano Tea", pv:130.0, dp:1258, sv:20.1},
            {name:"DXN Vinaigrette (700ml)", pv:598.0, dp:4160, sv:81.1},
            {name:"DXN Cordypine (285ml)", pv:728.0, dp:4672, sv:99.1},
            {name:"DXN Kiwi", pv:231.4, dp:1875, sv:32.1},
            {name:"DXN Zhi Cafe Classic", pv:123.5, dp:1130, sv:16.8},
            {name:"DXN Lingzhi Coffee 3 In 1 Lite", pv:123.5, dp:1206, sv:21.5},
            {name:"DXN Vinaigrette 285ml", pv:262.6, dp:1840, sv:35.7},
            {name:"DXN Cream Coffee", pv:126.1, dp:1158, sv:21.4},
            {name:"DXN Cordyceps Cereal", pv:585.0, dp:4000, sv:70.3},
            {name:"DXN White Coffee Zhino", pv:136.5, dp:1142, sv:16.9},
            {name:"DXN Lingzhi Coffee 3 In 1", pv:123.5, dp:1206, sv:20.7},
            {name:"DXN Fruzim", pv:208.0, dp:1706, sv:26.8},
            {name:"DXN Spica Tea", pv:143.0, dp:1008, sv:21.8},
            {name:"DXN Spirulina Cereal Bag", pv:247.0, dp:2416, sv:37.5},
            {name:"DXN Vita Café Bag", pv:156.0, dp:1494, sv:24.6},
            {name:"DXN Cordyceps Coffee 3 In 1", pv:136.5, dp:1206, sv:20.1},
            {name:"DXN Newtrizhi", pv:234.0, dp:2294, sv:36.2},
            {name:"DXN Zhi Mint (Box)", pv:530.4, dp:4544, sv:80.5},
            {name:"DXN Civattino Coffee 200g", pv:1263.6, dp:5184, sv:97.2},
            {name:"DXN Lemonzhi", pv:91.0, dp:851, sv:11.8},
            {name:"DXN Organic Goji Berries", pv:215.8, dp:2106, sv:23.1},
            {name:"DXN Jujube Fruits", pv:78.0, dp:832, sv:9.2},
            {name:"DXN Apple Enzyme Drink", pv:364.0, dp:3200, sv:50.2},
            {name:"DXN Lion's Mane Coffee", pv:162.5, dp:1472, sv:18.4},
            {name:"DXN Aloe Vita", pv:45.5, dp:362, sv:5.8},
            {name:"DXN Oocha", pv:226.2, dp:1130, sv:17.4},
            {name:"DXN VCO-L 285ml", pv:221.0, dp:2013, sv:25.1},
            {name:"DXN Komb-B 285ml", pv:45.5, dp:342, sv:4.9},
            {name:"DXN Oozhi Tea", pv:187.2, dp:1270, sv:22.2},
            {name:"DXN Spirudle (Tom Yam)", pv:59.8, dp:534, sv:6.7},

          
                {name:"DXN Ganozhi Shampoo", pv:156.0, dp:1300, sv:24.0},
                {name:"DXN Ganozhi Body Foam", pv:156.0, dp:1272, sv:24.0},
                {name:"Fresh Perfume (Male)", pv:305.5, dp:2563, sv:46.4},
                {name:"Fresh Perfume (Female)", pv:305.5, dp:2563, sv:46.4},
                {name:"Tea Tree Cream", pv:66.3, dp:700, sv:11.1},
                {name:"DXN Talcum Powder", pv:58.5, dp:900, sv:10.3},
                {name:"DXN Toileteries Travel Kit", pv:45.5, dp:819, sv:6.8},
                {name:"DXN Ganozhi Shampoo (100ml)", pv:71.5, dp:531, sv:10.7},
                {name:"DXN Ganozhi Body Foam (100ml)", pv:71.5, dp:531, sv:10.7},
                {name:"DXN Ganozhi Plus Shampoo 250ml", pv:171.6, dp:1174, sv:26.4},
                {name:"DXN Ganozhi Plus Body Foam 250ml", pv:171.6, dp:1174, sv:26.4},
                {name:"DXN Zhicare Toothpaste", pv:89.7, dp:598, sv:9.0},
                {name:"DXN Zhi Hand Sanitizer", pv:130.0, dp:918, sv:14.5},
                {name:"DXN Face Mask", pv:150.8, dp:928, sv:12.8},
                {name:"DXN Oocha Toothpaste", pv:92.3, dp:637, sv:13.3},
                {name:"DXN Ganozhi Trans Soap", pv:317.2, dp:1187, sv:24.4},
                {name:"DXN Oocha Trans Soap", pv:317.2, dp:1187, sv:24.4}
            
        
      
];

const levels = [
    { pv: 58500, percent: 25 },
    { pv: 42250, percent: 18 },
    { pv: 26000, percent: 15 },
    { pv: 13000, percent: 12 },
    { pv: 3900, percent: 9 },
    { pv: 1300, percent: 6 }
];

const officialTbody = document.getElementById("officialProducts");
const unofficialTbody = document.getElementById("unofficialProducts");

function renderTable(list, container) {
    container.innerHTML = list.map(p => `
        <tr>
            <td><strong>${p.name}</strong></td>
            <td class="pv-val">${p.pv}</td>
            <td class="dp-val">${p.dp}</td>
            <td class="sv-val">${p.sv}</td>
            <td><input type="number" min="0" value="0" oninput="calculate()"></td>
        </tr>
    `).join("");
}

function calculate() {
    let totalPV = 0, totalDP = 0, totalSV = 0;
    let summaryHTML = [];

    document.querySelectorAll("tbody tr").forEach(row => {
        const qty = parseInt(row.querySelector("input").value) || 0;
        if (qty > 0) {
            const name = row.cells[0].textContent;
            const pv = parseInt(row.querySelector(".pv-val").textContent);
            const dp = parseInt(row.querySelector(".dp-val").textContent);
            const sv = parseInt(row.querySelector(".sv-val").textContent);

            totalPV += pv * qty;
            totalDP += dp * qty;
            totalSV += sv * qty;

            summaryHTML.push(`✔️ ${name} x ${qty} <br>`);
        }
    });

    // Update UI with animation effect
    animateValue("totalPV", totalPV);
    animateValue("totalDP", totalDP);
    animateValue("totalSV", totalSV);

    document.getElementById("showName").textContent = document.getElementById("memberName").value || "-";
    document.getElementById("productSummary").innerHTML = summaryHTML.length ? summaryHTML.join("") : "No product selected";

    updateProgress(totalPV);
}

function animateValue(id, endValue) {
    const obj = document.getElementById(id);
    obj.textContent = endValue.toLocaleString();
}

function updateProgress(currentPV) {
    let achieved = levels.find(l => currentPV >= l.pv);
    let nextTarget = levels.reverse().find(l => currentPV < l.pv) || levels[0];
    levels.reverse(); // Reset order

    const posEl = document.getElementById("position");
    if (achieved) {
        posEl.innerHTML = `<span class="badge">${achieved.percent}% Achieved</span>`;
    } else {
        posEl.textContent = "No Position";
    }

    let progress = Math.min((currentPV / nextTarget.pv) * 100, 100);
    document.getElementById("progressBar").style.width = progress + "%";
    document.getElementById("progressText").textContent = Math.round(progress) + "%";
}

// Initializing
document.addEventListener("DOMContentLoaded", () => {
    renderTable(officialProducts, officialTbody);
    renderTable(unofficialProducts, unofficialTbody);
    document.getElementById("today").textContent = new Date().toLocaleDateString();
    document.getElementById("memberName").addEventListener("input", () => {
        document.getElementById("showName").textContent = document.getElementById("memberName").value || "-";
    });
});