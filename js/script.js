let allHomePageMenu;
let allFooterLinks;
let homePageMenuDetails;

function showMenu(p){
    p.map((element)=>{
        if(element.id!==8){
            
        let parentDiv = document.getElementsByClassName("grid-container")[0];

        let subDiv= document.createElement("div");
        subDiv.classList.add("grid-item");
        
        let child1 = document.createElement("div");
        child1.classList.add("cardA1");

        let photo = document.createElement("img");
        photo.src= element.imgUrl;
        photo.classList.add("periPhoto");

        child1.appendChild(photo);

        let child2 =document.createElement("div");
        child2.classList.add("cardA2");

        let para = document.createElement("p");
        para.textContent = element.itemName;

        child2.appendChild(para);

        subDiv.append(child1,child2);
        parentDiv.appendChild(subDiv);
        
        }
        else{
            let parentDiv = document.getElementsByClassName("grid-container")[0];

            let subDiv= document.createElement("div");
            subDiv.classList.add("grid-item");
            
            let child1 = document.createElement("div");
            child1.classList.add("cardA1");
    
            let photo = document.createElement("img");
            photo.src= element.imgUrl;
            photo.classList.add("periPhoto");
    
            child1.appendChild(photo);
    
            let child2 =document.createElement("div");
            child2.classList.add("cardA2");
    
            let para = document.createElement("p");
            para.textContent = element.itemName;
    
            child2.appendChild(para);
    
            subDiv.append(child1,child2);
            parentDiv.appendChild(subDiv);
    
        }
    });
}

    function showLink(z){

        let ulOne = document.getElementById("ulOne");
        let ultwo = document.getElementById("ulTwo");
        let ulThree = document.getElementById("ulThree");
        let ulFour= document.getElementById("ulFour");
        
        z.map((element)=>{
            
            let list1 = document.createElement("li");
            let anchor1 =document.createElement("a");
            anchor1.href ="./footerLink.html";
            anchor1.textContent=element.title;

            list1.append(anchor1);




                if(element.category==="c1"){
                    ulOne.append(list1)
                }   
                else if(element.category==="c2"){
                    ultwo.append(list1)
                }       
                else if(element.category==="c3"){
                    ulThree.append(list1)
                }       
                else{
                    ulFour.append(list1)
                }           

        }

        );
    }

    const getHomePageData = async () => {
        try {
            const response = await fetch("https://customapis.onrender.com/api/v1/getKfcHomePageData");
            const data = await response.json();
            // allHomePageMenu = data;
            // showMenu(allHomePageMenu);
            homePageMenuDetails = data.message[0].kfcHomePage.homePageFoodItems;
            showMenu(homePageMenuDetails);
            
            allFooterLinks = data.message[0].kfcHomePage.footerLinks;
            showLink(allFooterLinks);
        } catch (error) {
        }
    }     



// const getMenuDeatails = async () => {
//     try {
//         const response = await fetch("http://localhost:3000/homePageFoodItems");
//         const data = await response.json();
//         allHomePageMenu = data;
//         showMenu(allHomePageMenu);
//     } catch (error) {
//     }
// }

// const getFooterLinks = async () => {
//     try {
//         const response = await fetch("http://localhost:3000/footerLinks");
//         const data = await response.json();
//         allFooterLinks = data;
//         showLink(allFooterLinks);




//     } catch (error) {
        
//     }
// }



window.onload = function(){

    // Fetch all the menu details from API 
    // getMenuDeatails();

    // get footer lonks
    // getFooterLinks(); 
    getHomePageData();
}