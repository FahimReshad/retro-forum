const showRetroForums = async() => {
    const response = await fetch ('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await response.json()
    const forums = data.posts
    //  console.log(data.posts[5])
     displayAllPosts(forums);
}
const showSearchRetroForum = async(search) => {
    const response = await fetch (`https://openapi.programming-hero.com/api/retro-forum/posts?category=${search}`)
    const data = await response.json()
    const forum = data.posts
    //  console.log(data.posts[5])
     displayAllPosts(forum);
}
const displayAllPosts = (posts) =>{
  console.log(posts)
    const letsDiscuss= document.getElementById('lets-discuss');
    letsDiscuss.textContent = '';
    // showAllPosts.textContent=''
    let isActiveStatus = true;
    posts.forEach(post => {
        
        const div = document.createElement('div');
        div.classList=`card bg-[#797DFC1A] p-4 lg:p-10 `;
        div.innerHTML= `
        <div class="flex gap-6">
          <div class="indicator">
            <span id="show-is-active" class="indicator-item badge badge-success"></span> 
            <div class="grid w-10 h-10 lg:w-20 lg:h-20 bg-base-300 place-items-center rounded-xl">
              <img src="${post.image}" alt="">
            </div>
          </div>
          <div class="space-y-2 w-full">
            <div class="flex flex-col lg:flex-row space-x-2 lg:space-x-6 text-[#12132DCC] text-lg">
              <h6># <span>${post.category}</span></h6>
              <h6>Author: <span>${post.author.name}</span></h6>
            </div>
            <div class="text-[#12132D] font-bold text-xl">
              <h5>${post.title}</h5>
            </div>
            <p class="text-[#12132D99] pb-4 border-b-2 border-dashed">${post.description}</p>
            <div class="flex flex-col lg:flex-row justify-between items-center">
              <div class="flex items-center gap-2 lg:gap-6 lg:pt-3">
                <div class="flex gap-1 lg:gap-3">
                  <img src="images/message.svg" alt="">
                  <p>${post.comment_count}</p>
                </div>
                <div class="flex lg:gap-3">
                  <img src="images/watch.svg" alt="">
                  <p>${post.view_count}</p>
                </div>
                <div class="flex lg:gap-3">
                  <img src="images/time.svg" alt="">
                  <p><span>${post.posted_time}</span> min</p>
                </div>
              </div>
              <div class="btn btn-ghost rounded-full">
              <button onclick="showTitle('${post.title.replace("'", " ")}', '${post.view_count}')"><img src="images/email-btn.svg" alt=""></button>
            </div>          
          </div>
          </div>
        `;
        letsDiscuss.appendChild(div);

        

        console.log(post.isActive)
        
        
        const active = document.querySelectorAll('.indicator-item');

if (post.isActive === true) {
    console.log('okay');
    active.forEach(element => {
        element.classList.remove('bg-red-500');
        element.classList.add('badge', 'badge-secondary');
    });
} else {
    console.log('not');
    active.forEach(element => {
        element.classList.remove('badge', 'badge-secondary');
        element.classList.add('bg-red-500');
    });
}
    });

    

    // hide loading spinner
    loadingSpinner(false);
    


    
}
let count = 0;
const showTitle = (postTitle, veiwCount) => {
    
    const showTitleView = document.getElementById('show-title-view');
    const div2 = document.createElement('div');
    div2.classList = 'flex justify-between items-center my-2 shadow-xl bg-white p-6 rounded-xl w-full'   
    div2.innerHTML =` 
        <div class="text-[#12132D] font-bold text-xl">
          <h5>${postTitle}</h5>
        </div>
        <div class="flex gap-3">
          <img src="images/watch.svg" alt="">
          <p>${veiwCount}</p>
        </div>
    `
    showTitleView.appendChild(div2);
    count++;
    document.getElementById('click-count').innerText= count;
    
    
}



const searchShowForum = () =>{
  loadingSpinner(true);
const searchPosts = document.getElementById('search-posts');
let searchText = searchPosts.value;
showSearchRetroForum(searchText);

}

const loadingSpinner = (isLoading) =>{

    const loadingSpnr = document.getElementById('loading-spinner');
    if (isLoading) {
      loadingSpnr.classList.remove('hidden');
    } else {
      loadingSpnr.classList.add('hidden');
    }
  };


const latestPosts = async() => {
  const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
  const data = await response.json()
  const posts = data
  // console.log(posts)
  posts.forEach(post=>{
    // console.log(post);


    const latestPostSection = document.getElementById('latest-posts-section');
  const div3 = document.createElement('div');
  div3.innerHTML = `
  <div class="card bg-base-100 shadow-xl p-4 border">
          <figure><img class="rounded-lg" src="${post.cover_image}" alt="Shoes" /></figure>
          <div class="card-body -ml-6">
            <div class="flex gap-4 items-center">
              <img src="images/publish.svg" alt="">
              <p>${post.author.posted_date  || 'No publish data'}</p>
            </div>
            <h2 class="card-title">${post.title}</h2>
            <p>${post.description}</p>
            <div class="flex gap-4 items-center">
              <img src="${post.profile_image}" alt="" class="rounded-full bg-slate-200 w-12 h-12 object-cover">
              <div>
                <h6>${post.author.name}</h6>
                <p>${post.author.designation || 'Unknown'}</p>
              </div>
            </div>
          </div>
        </div>
  `
  latestPostSection.appendChild(div3);
  })
  
}


latestPosts()

showRetroForums()