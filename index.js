const btnsubmit = document.querySelector(".btn-search");
const searchInput = document.querySelector("[data-searchInput]");
const url = "https://api.github.com/users/";
const btnMode = document.querySelector(".btn-mode");
const avatar = document.getElementById("avatar");
const userName = document.getElementById("name");
const user = document.getElementById("user");
const date = document.getElementById("date");
const bio = document.getElementById("bio");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");
const city = document.getElementById("location");
const website = document.getElementById("website");
const twitter = document.getElementById("twitter");
const company = document.getElementById("company");
const root = document.documentElement.style;
const modetext = document.getElementById("mode-text");
const modeicon = document.getElementById("mode-icon");

let darkMode = false;

getUserData(url + "varchasva45");

// fetches user info when submit is clicked
btnsubmit.addEventListener("click", () => {
    if(searchInput.value != ""){
        getUserData(url + searchInput.value);
    }
});


// fetches user info when enter is pressed
searchInput.addEventListener(
    "keydown",
  function (e) {
    if (e.key == "Enter") {
      if (input.value !== "") {
        getUserData(url + input.value);
      }
    }
  },
  false
);


// API call
async function getUserData(gitUrl){
    try{
        const res = await fetch(gitUrl);
        const data = await res.json();
        console.log(data);
        updateProfile(data);
    }
    catch(err){

    }
}

function updateProfile(data) {
    if(data?.message !== "Not Found"){
        avatar.src = data?.avatar_url;
        userName.innerText = data?.name;
        user.innerText = `@${data?.login}`;
        user.href = data?.html_url;
        if(data?.bio != null){
            bio.innerText = `${data?.bio}`;
        }else{
            bio.innerText = "";
        }
        repos.innerText = data?.public_repos;
        followers.innerText = data?.followers;
        following.innerText = data?.following;
        const val = data?.location;
        if(val != null){
            city.innerText = data?.location;
        }else{
            city.innerText = "Not Present";
        }

        const val1 = data?.blog;
        if(val1 != null){
            website.href = data?.blog;
        }else{
            website.href = data?.blog;
        }

        const val3 = data?.company;
        if(val3 != null){
            company.innerText = data?.company;
        }else{
            company.innerText = "Not Present";
        }
        
    }else{

    }
}

btnMode.addEventListener("click", () => {
    console.log("clicked");
    if(!darkMode){
        darkModeProperties();
    }else{
        lightModeProperties();
    }
});


function darkModeProperties() {
    root.setProperty("--lm-bg", "#141D2F");
    root.setProperty("--lm-bg-content", "#1E2A47");
    root.setProperty("--lm-text", "white");
    root.setProperty("--lm-text-alt", "white");
    root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
    modetext.innerText = "LIGHT";
    modeicon.src = "./images/sun-icon.svg";
    root.setProperty("--lm-icon-bg", "brightness(1000%)");
    darkMode = true;
    console.log("darkmode changed to " + darkMode);
}

function lightModeProperties() {
    root.setProperty("--lm-bg", "#F6F8FF");
    root.setProperty("--lm-bg-content", "#FEFEFE");
    root.setProperty("--lm-text", "#4B6A9B");
    root.setProperty("--lm-text-alt", "#2B3442");
    root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
    modetext.innerText = "DARK";
    modeicon.src = "./images/moon-icon.svg";
    root.setProperty("--lm-icon-bg", "brightness(100%)");
    darkMode = false;
    console.log("darkmode changed to " + darkMode);
}


// initialise UI 


