const bandsEl = document.querySelector("#bands");
const articles = ["the","we","a","an"];
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const filterBands = bands.filter((band) => {
    const regex = /^\w+/;
    const match = regex.exec(band).join("").toLowerCase();
    for(const article of articles){
        if(match === article){
            return false
        }
    }
    return true;
});
const li = document.createElement("li");
for(const filterband of filterBands){
    li.textContent += `<li>${filterband}</li>`;
}
bandsEl.innerHTML = li.innerText;

