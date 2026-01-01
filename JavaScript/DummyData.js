async function fetchAndFilter() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    // console.log("All Users:", data);

    const filtered = data.filter(user => user.email.endsWith(".biz"));
    const getIdGratherThen20 = data.filter(t => t.id > 5);

    // console.log("filter data by ID :", getIdGratherThen20);
    // const getGeo = data.map(t => t.address.geo);
    // console.log("Print only Geo Data :", getGeo);
    // console.log("Filtered:", filtered);

    // store only name and email in a Map
    const userMap = new Map();
    data.forEach(user => {
      userMap.set(user.name, user.email);
    });

    console.log("Map of name → email:", userMap);
      
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

fetchAndFilter();
