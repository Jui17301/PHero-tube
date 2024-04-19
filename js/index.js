
const loadData = async()=>{
  const res =await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
  const data = await res.json();
  return data.data;
 
}
let data;
const displayCategoryMenu=async()=>{
  const data = await loadData();
  const menuContainer = document.getElementById('button-Container');
     data.forEach((item)=>{
      const li = document.createElement('li');
      li.classList.add(
        "bg-gray-900",
        "rounded",
        "text-xl",
        "text-white", 
        "px-3", "py-2",
        "list-none",
        "my-3",
        "font-bold")
      li.innerHTML =`<button id="btn" onclick="displayAll('${item.category_id}')" class="hover:bg-[#FF1F3D]">${item.category}</button>`
      menuContainer.appendChild(li);
  
      })
         }
         
         const displayAll=async(id)=>{
          const res =await fetch(` https://openapi.programming-hero.com/api/videos/category/${id}`);
           data = await res.json();
          // const sort = data; 
          const mainContainer = document.getElementById('mainContainer');
           mainContainer.innerHTML="";  
          if( data.data && data.data.length>0){ 
            
   data.data.foreach((product)=>{
  
          const Hours = parseInt(product.others?.posted_date /3600);
          const leftSecond = parseInt((product.others?.posted_date %3600));
          const minutes = parseInt(leftSecond /60);

          const {category_id,title,thumbnail} = product;
          const div = document.createElement("div");
;          div.innerHTML=`
           <img src=${thumbnail} class="w-[400px] h-[202px] rounded-2xl">
      
          
        <div class=" relative left-36">
        <p class="   rounded-lg absolute -top-8 text-center bg-gray-600">
        ${product.others?.posted_date?`${Hours} hours ${minutes} mins ago`:""}
        </p>
        </div>

      <div class="flex pt-3 gap-x-5">
      
       <div class="span-1">
       <img src="${product.authors[0].profile_picture}" class="w-[40px] h-[40px] rounded-3xl">
       </div>
       <div class="span-3">
       <p class="text-2xl font-bold">${title}</p>
       <div>
    <div class="flex gap-2 items-center">   <p>${product.authors[0].profile_name}</p>
   <p> ${product.authors[0].verified? '<img class="w-3 h-3 rounded-lg" src="/images/varified.jpg">':""}  
</p>
</div>
    <p>${product.others?.views} views </p>
   
    </div>

       </div>

      </div>
             
          `
          mainContainer.appendChild(div);
        
        })

        // console.log(value);
         }
        //  console.log(value);

         else {
          mainContainer.innerHTML=`
          <div class="text-yellow-600 
          text-2xl flex justify-center items-center flex-col col-span-5 row-span-8 text-center space-y-5">
          <div>
          <img src="../images/Icon.png">         </div>
          <div>
            <h1 >Oops!!Sorry,
              There is no Content Here</h1>
          </div>
         
          </div>
                `
          } 
// console.log(data.data);
          // return sort;
        }
        
      
    document.getElementById("sortAll").addEventListener('click',async function(){
      value.sort((a,b)=>{
       return parseFloat(b.others.views) - parseFloat(a.others.views);
      //  console.log(a,b)
      
      });
      await displayAll(value);
      // console.log(data.data);
    }
  )
        
         loadData();
displayCategoryMenu();

