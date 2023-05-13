console.log(fetch(`https://restcountries.com/v3.1/name/${"Ukraine"}?fields=name,capital,population,flags,languages`).then((e=>{if(e.ok)return e.json();throw new Error(e.status)})));
//# sourceMappingURL=index.4edde381.js.map
