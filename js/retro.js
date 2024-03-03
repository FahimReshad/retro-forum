const showRetroForum = async() => {
    const response = await fetch ('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await response.json()
    const forum = data.posts
    //  console.log(data.posts[5])
     displayAllPosts(forum);
}
const displayAllPosts = (posts) =>{
    const showAllPosts = document.getElementById('show-all-post');
    let isActiveStatus = null;
    posts.forEach(post => {
        
        const div = document.createElement('div');
        div.classList=`card bg-[#797DFC1A] p-10 col-span-2`;
        div.innerHTML= `
        <div class="flex gap-6">
          <div class="indicator">
            <span id="show-is-active" class="indicator-item "></span> 
            <div class="grid w-20 h-20 bg-base-300 place-items-center rounded-xl">
              <img src="${post.image}" alt="">
            </div>
          </div>
          <div class="space-y-2 w-full">
            <div class="flex space-x-6 text-[#12132DCC] text-lg">
              <h6># <span>${post.category}</span></h6>
              <h6>Author: <span>${post.author.name}</span></h6>
            </div>
            <div class="text-[#12132D] font-bold text-xl">
              <h5>${post.title}</h5>
            </div>
            <p class="text-[#12132D99] pb-4 border-b-2 border-dashed">${post.description}</p>
            <div class="flex justify-between items-center">
              <div class="flex gap-6 pt-3">
                <div class="flex gap-3">
                  <img src="images/message.svg" alt="">
                  <p>${post.comment_count}</p>
                </div>
                <div class="flex gap-3">
                  <img src="images/watch.svg" alt="">
                  <p>${post.view_count}</p>
                </div>
                <div class="flex gap-3">
                  <img src="images/time.svg" alt="">
                  <p><span>${post.posted_time}</span> min</p>
                </div>
              </div>
              <div class="btn btn-ghost rounded-full">
              <button onclick="showTitle('${post.title}', '${post.view_count}')"><img src="images/email-btn.svg" alt=""></button>
            </div>          
          </div>
          </div>
        `;
        showAllPosts.appendChild(div);

        if(`${post.isActive}`===true){
            
            document.getElementById('show-is-active').classList.add('bg-red-500')
        }
        

    });
    
    
}
let count = 0;
const showTitle = (postTitle, veiwCount) => {
    
    const showTitleView = document.getElementById('show-title-view');
    const div2 = document.createElement('div');
    div2.classList = 'flex justify-between items-center my-2 shadow-xl bg-white p-4 rounded-xl w-full'
    
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


showRetroForum()