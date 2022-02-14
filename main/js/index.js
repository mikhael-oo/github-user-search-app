let api = "https://api.github.com/users/"

// Collections of needed variables

const searchBtn = document.getElementById("search-btn");
const userInput = document.querySelector(".user-input");
const userAvatar = document.getElementById("avatar");
const nameOfUser = document.getElementById("name");
const username = document.getElementById("username-span");
const dateCreated = document.getElementById("date");
const description = document.getElementById("description");
const repoNumber = document.getElementById("repo-num");
const followersNumber = document.getElementById("followers-num");
const followingsNumber = document.getElementById("following-num");
const userLocation = document.getElementById("location");
const website = document.getElementById("website");
const twitter = document.getElementById("twitter");
const company = document.getElementById("company");
const errorMsg = document.querySelector(".error-msg");


// prevents the form from submitting and reloading the page

const form = document.querySelector(".search-bar");
form.addEventListener("submit", (event) => {
    event.preventDefault();
})



// Fetching the data from Github API

async function getUserInformation(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw Error("No response returned") 
    const data = await response.json();
    return data;
}

userInput.addEventListener("input", (event) => {
    userInput.value = event.target.value;
    errorMsg.style.display = "none";
    console.log(userInput.value);
})



searchBtn.addEventListener("click", () => {
    let input = userInput.value;
    
    getUserInformation(input).then(data => {
        if (data.avatar_url) {
            avatar.src = data.avatar_url;
        }

        if (data.name) {
            nameOfUser.textContent = data.name;
        } else {
            nameOfUser.textContent = data.login;
        }

        username.textContent = data.login;

        let joinedDate = new Date(data.created_at);
        dateCreated.textContent = joinedDate.toDateString().split(" ").slice(1).join(" ");

        if (data.bio) {
            description.textContent = data.bio;
        } else {
            description.textContent = "This profile has no bio";
            description.style.opacity = "0.5";
        }

        repoNumber.textContent = data.public_repos;
        followersNumber.textContent = data.followers;
        followingsNumber.textContent = data.following;

        if (data.location) {
            userLocation.textContent = data.location;
            userLocation.style.opacity =  "1";
        } else {
            userLocation.textContent = "Not available";
            userLocation.style.opacity =  "0.5";
        }

        if (data.twitter_username) {
            twitter.innerHTML = `<a class="custom-link" href="https://www.twitter.com/${data.twitter_username}" target="_blank">${data.twitter_username}</a>`;
            twitter.style.opacity = "1";
        } else {
            twitter.textContent = "Not available";
            twitter.style.opacity = "0.5";
        }
        if (data.company) {
            company.innerHTML = `<a class="custom-link" href="https://github.com/${data.company.slice(1)}" target="_blank">${data.company}</a>`;
            company.style.opacity = "1";
        } else {
            company.textContent = "Not available";
            company.style.opacity = "0.5";
        }
        
        if (data.blog) {
            website.innerHTML = `<a class="custom-link" href="${data.blog}" target="_blank">${data.blog}</a>`;
            website.style.opacity = "1";
        } else {
            website.textContent = "Not available";
            website.style.opacity = "0.5";
        }
        
        // creating an innerHTML for customLink
        
        
    }).catch(err => {
        errorMsg.style.display = "block";
    })

});



