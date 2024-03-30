let FooterLinks;



// js for menu page started here
// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");
// console.log(sections);

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY =  window.scrollY;
  // console.log("ones",scrollY);
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    // console.log("two",current.offsetHeight);
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 10;
    // console.log(sectionTop);
    sectionId = current.getAttribute("id");

    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
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

function addToCart(dataArray, elementId){
  console.log(dataArray,elementId);
}

function displayMenu(menuId, menuData){
  console.log(menuId,menuData);
  if(menuData.length>0){
     let parentMenu = document.getElementById(`${menuId}`);
     console.log(parentMenu);

    menuData.map((element)=>{

      let mainChild = document.createElement("div");
      mainChild.classList.add("menuCard"); 
 
      let child1 = document.createElement("div");
      child1.classList.add("imgDiv");
      let imgTag = document.createElement("img");
      imgTag.src = element.imgUrl;
      imgTag.classList.add("myImage");
      child1.appendChild(imgTag);

      // Create the outer div
      const detailsDiv = document.createElement('div');
      detailsDiv.classList.add('detailsDiv');

      // Create itemTitle div and paragraph
      const itemTitleDiv = document.createElement('div');
      itemTitleDiv.classList.add('itemTitle');
      const itemTitleParagraph = document.createElement('p');
      itemTitleParagraph.textContent = element.mealTitle;
      itemTitleDiv.appendChild(itemTitleParagraph);

      // Create foodType div, image, and paragraph
      const foodTypeDiv = document.createElement('div');
      foodTypeDiv.classList.add('foodType');
      const foodTypeImage = document.createElement('img');
      foodTypeImage.src = element.isNonVeg? './images/svgIcons/_veg.svg' :'./images/svgIcons/_nonveg.svg';
      foodTypeImage.alt = '';
      const foodTypeParagraph = document.createElement('p');
      foodTypeParagraph.textContent = 'Non veg';
      foodTypeDiv.appendChild(foodTypeImage);
      foodTypeDiv.appendChild(foodTypeParagraph);

      // Create price div and paragraph
      const priceDiv = document.createElement('div');
      priceDiv.classList.add('price');
      const priceParagraph = document.createElement('p');
      priceParagraph.textContent = element.price;
      priceDiv.appendChild(priceParagraph);

      // Create description div and paragraph
      const descriptionDiv = document.createElement('div');
      descriptionDiv.classList.add('description');
      const descriptionParagraph = document.createElement('p');
      console.log(element.mealContent);
      descriptionParagraph.textContent = element.mealContent?element.mealContent:element.offerDetails;
      descriptionDiv.appendChild(descriptionParagraph);

      // Append all elements to the outer div
      detailsDiv.append(itemTitleDiv,foodTypeDiv,priceDiv);
      detailsDiv.append(descriptionDiv);

      // Append the outer div to the desired parent element in the DOM
      // For example, assuming you have a parent element with id "parentElement":

      // Create the outer cart div
      const cartDiv = document.createElement('div');
      cartDiv.classList.add('cart');

      // Create the button div
      const buttonDiv = document.createElement('div');
      buttonDiv.classList.add('button');
      buttonDiv.id = 'btnCart';
      buttonDiv.addEventListener('click',() => {addToCart(menuData,element.id)});

      // Create the paragraph for the button text
      const buttonText = document.createElement('p');
      buttonText.textContent = 'Add to Cart';

      // Create the image for the button icon
      const buttonIcon = document.createElement('img');
      buttonIcon.src = './images/svgIcons/add-to-cart-icon.svg';
      buttonIcon.alt = '';
      

      // Append the paragraph and image to the button div
      buttonDiv.appendChild(buttonText);
      buttonDiv.appendChild(buttonIcon);

      // Append the button div to the cart div
      cartDiv.appendChild(buttonDiv);

      mainChild.append(child1,detailsDiv,cartDiv);

      parentMenu.append(mainChild);



    })

  }
  
}

const getMenuData = async () => {
  console.log("hi");
  try {
      const response = await fetch("https://customapis.onrender.com/api/v1/getKfcMenuDetails");
      const data = await response.json();
      // allHomePageMenu = data;
      // showMenu(allHomePageMenu);
       
      // homePageMenuDetails = data.message[0].kfcHomePage.homePageFoodItems;
      // showMenu(homePageMenuDetails);
      
      FooterLinks = data.message[0].kfcMenuDetails.footerLinks;
      showLink(FooterLinks);
      console.log(data.message[0].kfcMenuDetails.periPeriChicken);


      displayMenu("periPeriChicken",data.message[0].kfcMenuDetails.periPeriChicken);
      displayMenu("valueSnackers",data.message[0].kfcMenuDetails.valueSnackers);
      displayMenu("chichenrolls",data.message[0].kfcMenuDetails['CHICKEN ROLLS']);
      displayMenu("chickenbuckets",data.message[0].kfcMenuDetails['CHICKEN BUCKETS']);
      displayMenu("biryanibuckets",data.message[0].kfcMenuDetails['BIRYANI BUCKETS']);
      displayMenu("boxmeals",data.message[0].kfcMenuDetails['BOX MEALS']);
      displayMenu("burgers",data.message[0].kfcMenuDetails.BURGERS);
      displayMenu("snaks",data.message[0].kfcMenuDetails.SNACKS);
      displayMenu("beverages",data.message[0].kfcMenuDetails.BEVERAGES);


  } catch (error) {
      console.log('Error fetching data:',error);
  }
}     

window.onload=function () {

  getMenuData();


}

// js for menu page ends here
