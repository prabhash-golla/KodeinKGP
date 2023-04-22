let itemsdata=[{
    id:"urhtqi",
    img:"https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot.webp",
    name:"Veg Biryani",
    type:"green",
    cost: 240,
},{
    id:"urhtqihrhu",
    img:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
    name:"Chicken Biryani",
    type:"red",
    cost: 270,  
},{
    id:"dfhu",
    img:"https://www.yummytummyaarthi.com/wp-content/uploads/2016/06/2-3.jpg",
    name:"Egg Biryani",
    type:"red",
    cost: 240,
},{
    id:"urhtqetjyi",
    img:"https://www.flavorquotient.com/wp-content/uploads/2020/04/Chicken-Tikka-FQ-4-1-of-1.jpg",
    name:"Chicken tikka",
    type:"red",
    cost: 270,
},];
let basket= JSON.parse(localStorage.getItem("data")) || [];
let calculation =()=>{
    let cart=document.getElementById("quantity");
    cart.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();