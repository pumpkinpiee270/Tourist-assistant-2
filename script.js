// Load attractions from JSON file (100 entries)
let attractions = []; 

attractions =[
{"name":"Gardens by the Bay","type":"Nature","budget":"medium","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/1/10/Gardens_by_the_Bay_Supertree_Grove.jpg","description":"Iconic futuristic gardens with Supertrees, Flower Dome, and Cloud Forest."},
{"name":"Botanic Gardens","type":"Nature","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/a/a4/Singapore_Botanic_Gardens.jpg","description":"UNESCO World Heritage site with lush greenery and lakes."},
{"name":"MacRitchie Reservoir","type":"Nature","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/7/77/MacRitchie_Reservoir_Treetop_Walk.jpg","description":"Popular reservoir and treetop walk for nature lovers."},
{"name":"Pulau Ubin","type":"Nature","budget":"low","duration":"fullday","image":"https://upload.wikimedia.org/wikipedia/commons/7/7d/Pulau_Ubin_Singapore.jpg","description":"Rustic island with cycling paths and nature trails."},
{"name":"Lazarus Island","type":"Nature","budget":"low","duration":"fullday","image":"https://upload.wikimedia.org/wikipedia/commons/6/66/Lazarus_Island_Beach.jpg","description":"Quiet island beaches ideal for picnics and swims."},
{"name":"Kusu Island","type":"Nature","budget":"low","duration":"fullday","image":"https://upload.wikimedia.org/wikipedia/commons/9/9f/Kusu_Island_Singapore.jpg","description":"Tranquil island with shrines and sandy beaches."},
{"name":"Mount Faber Park","type":"Nature","budget":"low","duration":"short","image":"https://upload.wikimedia.org/wikipedia/commons/1/10/Mount_Faber_Park.jpg","description":"Scenic hilltop with views of Singapore Harbour."},
{"name":"Telok Blangah Hill Park","type":"Nature","budget":"low","duration":"short","image":"https://upload.wikimedia.org/wikipedia/commons/9/93/Telok_Blangah_Hill_Park.jpg","description":"Green space along the Southern Ridges with canopy paths."},
{"name":"Henderson Waves","type":"Nature","budget":"low","duration":"short","image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Henderson_Waves.jpg","description":"Iconic waved bridge and nature trail at sunset."},
{"name":"East Coast Park","type":"Nature","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/2/27/East_Coast_Park_Singapore.jpg","description":"Coastal park ideal for cycling, picnics, and seaside views."},
{"name":"Bukit Timah Nature Reserve","type":"Nature","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/a/a3/Bukit_Timah_Nature_Reserve.jpg","description":"Reserve with Singapore’s highest hill and rich biodiversity."},
{"name":"Coney Island Park","type":"Nature","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/8/88/Coney_Island_Park_Singapore.jpg","description":"Coastal wildlife haven with sandy trails."},
{"name":"Pulau Hantu","type":"Nature","budget":"low","duration":"fullday","image":"https://upload.wikimedia.org/wikipedia/commons/2/29/Pulau_Hantu.jpg","description":"Snorkelling and tide pooling spot for marine life."},
{"name":"Sembawang Park","type":"Nature","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/f/f6/Sembawang_Park.jpg","description":"Quiet waterfront park with BBQ pits and picnic spots."},
{"name":"West Coast Park","type":"Nature","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/5/55/West_Coast_Park.jpg","description":"Large park with cycling routes and sea views."},
{"name":"Jurong Lake Gardens","type":"Nature","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/6/6c/Jurong_Lake_Gardens.jpg","description":"Scenic gardens with lakes and boardwalks."},
{"name":"Punggol Waterway Park","type":"Nature","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/5/53/Punggol_Waterway_Park.jpg","description":"Linear park with water channels and cycle paths."},
{"name":"Pasir Ris Park","type":"Nature","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/1/1d/Pasir_Ris_Park.jpg","description":"Park with mangroves and cycling tracks."},
{"name":"Lower Seletar Reservoir Park","type":"Nature","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/7/75/Lower_Seletar_Reservoir.jpg","description":"Waterfront park perfect for kayaking and picnics."},
{"name":"Sisters’ Islands Marine Park","type":"Nature","budget":"low","duration":"fullday","image":"https://upload.wikimedia.org/wikipedia/commons/b/bd/Sisters%27_Islands_Marine_Park.jpg","description":"Marine protected area with snorkeling opportunities."},
{"name":"Springleaf Nature Park","type":"Nature","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/2/26/Springleaf_Nature_Park.jpg","description":"Urban nature park with trails and birdwatching."},
{"name":"Lower Peirce Reservoir Park","type":"Nature","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/2/20/Lower_Peirce_Reservoir_Park.jpg","description":"Calm reservoir park with rich greenery."},
{"name":"HortPark","type":"Nature","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/0/0b/HortPark_Singapore.jpg","description":"Gardens and horticulture exhibitions."},
{"name":"Venus Drive Park","type":"Nature","budget":"low","duration":"short","image":"https://upload.wikimedia.org/wikipedia/commons/4/4b/Venus_Drive_Park_Singapore.jpg","description":"Community park with playgrounds and greenery."},

{"name":"Chinatown Heritage Centre","type":"Cultural","budget":"medium","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/3/31/Chinatown_Heritage_Centre.jpg","description":"Learn about early Chinese immigrants in Singapore."},
{"name":"Little India","type":"Cultural","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Little_India_Singapore.jpg","description":"Vibrant district with temples and markets."},
{"name":"Kampong Glam","type":"Cultural","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/2/24/Kampong_Glam_Mosque.jpg","description":"Historic Malay Arab quarter with mosque and shops."},
{"name":"National Museum of Singapore","type":"Cultural","budget":"medium","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/5/5b/National_Museum_of_Singapore.jpg","description":"Singapore’s oldest museum exploring history."},
{"name":"Asian Civilisations Museum","type":"Cultural","budget":"medium","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/2/25/Asian_Civilisations_Museum.jpg","description":"Artifacts showcasing Asia's heritage."},
{"name":"Peranakan Museum","type":"Cultural","budget":"medium","duration":"short","image":"https://upload.wikimedia.org/wikipedia/commons/6/6f/Peranakan_Museum_Singapore.jpg","description":"Explore Peranakan culture and lifestyle."},
{"name":"Thian Hock Keng Temple","type":"Cultural","budget":"low","duration":"short","image":"https://upload.wikimedia.org/wikipedia/commons/7/70/Thian_Hock_Keng_Temple.jpg","description":"Historic Chinese temple in Chinatown."},
{"name":"Sri Mariamman Temple","type":"Cultural","budget":"low","duration":"short","image":"https://upload.wikimedia.org/wikipedia/commons/8/87/Sri_Mariamman_Temple_Singapore.jpg","description":"Oldest Hindu temple in Singapore."},
{"name":"Fort Canning Park","type":"Cultural","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/3/30/Fort_Canning_Park.jpg","description":"Historic hill with colonial landmarks."},
{"name":"Raffles Hotel","type":"Cultural","budget":"high","duration":"short","image":"https://upload.wikimedia.org/wikipedia/commons/5/5e/Raffles_Hotel_Singapore.jpg","description":"Colonial era luxury hotel and landmark."},

{"name":"Sentosa Mega Adventure Park","type":"Adventure","budget":"high","duration":"fullday","image":"https://upload.wikimedia.org/wikipedia/commons/5/50/Sentosa_Mega_Adventure_Park.jpg","description":"Ziplining and adventure sports."},
{"name":"AJ Hackett Bungy","type":"Adventure","budget":"high","duration":"short","image":"https://upload.wikimedia.org/wikipedia/commons/4/4c/AJ_Hackett_Bungy.jpg","description":"Experience Asia’s highest bungy jump."},
{"name":"iFly Singapore","type":"Adventure","budget":"medium","duration":"short","image":"https://upload.wikimedia.org/wikipedia/commons/3/34/iFly_Singapore.jpg","description":"Indoor skydiving simulator."},
{"name":"Adventure Cove Waterpark","type":"Adventure","budget":"medium","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/1/19/Adventure_Cove_Waterpark.jpg","description":"Water slides and snorkeling."},
{"name":"Universal Studios Singapore","type":"Adventure","budget":"high","duration":"fullday","image":"https://upload.wikimedia.org/wikipedia/commons/3/3e/Universal_Studios_Singapore_Globe.jpg","description":"Thrilling theme park rides."},

{"name":"Maxwell Food Centre","type":"Food","budget":"low","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/3/3a/Maxwell_Food_Centre.jpg","description":"Famous hawker centre with chicken rice."},
{"name":"Lau Pa Sat","type":"Food","budget":"low","duration":"short","image":"https://upload.wikimedia.org/wikipedia/commons/0/0e/Lau_Pa_Sat_Singapore.jpg","description":"Historic market known for satay street."},
{"name":"Jumbo Seafood","type":"Food","budget":"high","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/4/4c/Jumbo_Seafood_Chilli_Crab.jpg","description":"Famous for chilli crab."},
{"name":"Din Tai Fung","type":"Food","budget":"medium","duration":"short","image":"https://upload.wikimedia.org/wikipedia/commons/5/57/Din_Tai_Fung_Xiao_Long_Bao.jpg","description":"Popular for xiao long bao."},
{"name":"Odette","type":"Food","budget":"high","duration":"halfday","image":"https://upload.wikimedia.org/wikipedia/commons/3/31/Odette_Singapore.jpg","description":"Michelin starred French fine dining."}
];
// Normal Recommendations
function getRecommendations() {

    let types = [...document.querySelectorAll('input[name="type"]:checked')].map(el => el.value);
    let budget = document.querySelector('select[name="budget"]').value;
    let duration = document.querySelector('select[name="duration"]').value;

    let scored = attractions.map(a => {
        let score = 0;

        if (types.includes(a.type)) score += 5;
        if (a.budget === budget) score += 3;
        if (a.duration === duration) score += 2;

        return { ...a, score };
    });

    scored.sort((a, b) => b.score - a.score);

    let top10 = scored.slice(0, 10);

    let profileSummary = `
        <div style="margin-bottom:20px;padding:15px;background:#f1f5f9;border-radius:8px;">
        <strong>Your Travel Profile:</strong><br>
        Preference: ${types.join(", ")}<br>
        Budget: ${budget}<br>
        Duration: ${duration}<br><br>
        Our AI ranked attractions based on how closely they match your profile.
        </div>
    `;

    let output = "<h2>Top 10 AI Recommendations</h2>";
    output += profileSummary;

    top10.forEach(r => {
        output += `
            <div class="card">
                <div class="score">Match Score: ${r.score}/10</div>
                <h3>${r.name}</h3>
                <p>${r.description}</p>
                <p><em>This attraction aligns strongly with your selected preferences.</em></p>
            </div>
        `;
    });

    document.getElementById('results').innerHTML = output;
}


// AI Suggestions via backend (OpenAI)
async function getAISuggestions() {
    let types = [...document.querySelectorAll('input[name="type"]:checked')].map(el => el.value);
    let budget = document.querySelector('select[name="budget"]').value;
    let duration = document.querySelector('select[name="duration"]').value;

    try {
        const response = await fetch('http://localhost:3000/getAISuggestions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ types, budget, duration })
        });
        const aiResults = await response.json();
        let output = '';
        aiResults.forEach(a => {
            output += `<div class="ai-card">
                <h3>${a.name} (${a.type})</h3>
                <p>${a.description} (Duration: ${a.duration})</p>
            </div>`;
        });
        document.getElementById('aiResults').innerHTML = output;
    } catch (err) {
        document.getElementById('aiResults').innerHTML = '<p>Error fetching AI suggestions.</p>';
    }
}