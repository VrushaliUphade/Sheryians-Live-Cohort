let SearchBtn = document.querySelector(".Search");
let usernameinp = document.querySelector(".usernameinp");
let card = document.querySelector(".card")


function getProfileData(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then((raw) => {
            if (!raw.ok) throw new Error("User not found.");
            return raw.json();
        });
}

function getRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos`)
        .then((raw) => {
            if (!raw.ok) throw new Error("Failed to fetch repos.");
            return raw.json();
        });
}
function decorateProfileData(details){
   console.log(details);
   
    let data = `
     <div class="flex flex-col md:flex-row items-center md:items-start gap-6">

  <!-- Avatar -->
  <div class="flex flex-col items-center gap-3">
    <div class="w-28 h-28 rounded-full overflow-hidden border-4 border-indigo-500">
      <img src="${details.avatar_url}" alt="avatar" class="w-full h-full object-cover">
    </div>

    <!-- Profile Button -->
    <a href="${details.html_url}" target="_blank"
       class="bg-indigo-600 hover:bg-indigo-500 text-sm px-4 py-1.5 rounded-lg transition">
       View Profile
    </a>
  </div>

  <!-- Info -->
  <div class="flex-1 text-center md:text-left">

    <h2 class="text-2xl font-semibold">${details.name || "No Name"}</h2>
    <p class="text-indigo-400">@${details.login}</p>

    <p class="text-gray-400 mt-3 max-w-xl">
      ${details.bio || "No bio available"}
    </p>

    <!-- Extra Info Row -->
    <div class="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm text-gray-300">

      ${details.location ? `<span>📍 ${details.location}</span>` : ""}
      ${details.company ? `<span>🏢 ${details.company}</span>` : ""}
      ${details.blog ? `<a href="${details.blog}" target="_blank" class="text-indigo-400 hover:underline">🌐 Website</a>` : ""}
      ${details.twitter_username ? `<a href="https://twitter.com/${details.twitter_username}" target="_blank" class="text-indigo-400 hover:underline">🐦 Twitter</a>` : ""}
      ${details.email ? `<span>📧 ${details.email}</span>` : ""}

    </div>

    <!-- Stats -->
    <div class="flex flex-wrap justify-center md:justify-start gap-4 mt-6">

      <div class="bg-gray-800 px-4 py-2 rounded-lg text-center">
        <p class="text-lg font-bold">${details.public_repos}</p>
        <p class="text-gray-400 text-xs">Repos</p>
      </div>

      <div class="bg-gray-800 px-4 py-2 rounded-lg text-center">
        <p class="text-lg font-bold">${details.followers}</p>
        <p class="text-gray-400 text-xs">Followers</p>
      </div>

      <div class="bg-gray-800 px-4 py-2 rounded-lg text-center">
        <p class="text-lg font-bold">${details.following}</p>
        <p class="text-gray-400 text-xs">Following</p>
      </div>

      <div class="bg-gray-800 px-4 py-2 rounded-lg text-center">
        <p class="text-lg font-bold">${details.public_gists}</p>
        <p class="text-gray-400 text-xs">Gists</p>
      </div>

    </div>

    <!-- Additional Details -->
    <div class="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm text-gray-400">

      <span>📅 Joined ${new Date(details.created_at).toDateString()}</span>

      <span>🆔 ID: ${details.id}</span>

      <span>👤 ${details.type}</span>

     
    </div>

  </div>

</div>
`;
card.innerHTML = data;
}


SearchBtn.addEventListener("click",function(){
   let username = usernameinp.value.trim();
    if(username.length>0){
   getProfileData(username).then(data=>{
     decorateProfileData(data)
    
   })
    }
    else{
     alert(); 
    }
});
