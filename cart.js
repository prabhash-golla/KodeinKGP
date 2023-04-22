let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");
let pay = document.getElementById("pay")
let basket= JSON.parse(localStorage.getItem("data")) || [];
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
let calculation =()=>{
    let cart=document.getElementById("quantity");
    cart.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();
let clearCart=()=>{
    basket=[];
    generateCartItems();
    localStorage.setItem("data",JSON.stringify(basket));
};
let clearCart2=()=>{
    basket=[];
    generateCartItems();
    localStorage.setItem("data",JSON.stringify(basket));
    alert("Order is Sucessful");
};
let generateCartItems = () => {
    if(basket.length !==0){
        pay.innerHTML=`
        <a href="index.html"><button onclick="clearCart2()" class="proceed">Proceed to Pay</button></a>
        <a href="index.html"><button onclick="clearCart()" class="back">Clear Cart</button></a>
        `;
        return (ShoppingCart.innerHTML= basket.map((x)=>{
            let{id,item}=x;
            let search =itemsdata.find((y)=>y.id===id)||[];
            return`
            <div class="cart-item">
               <img width="100px" height="100px" src=${search.img}>
               <div class="details">
                    <div class="titlt-price-x">
                        <h4>${search.name}</h4>
                        <p class="prabhash">Rs. ${search.cost}</p>
                        <i onclick="remove(${id})" class="bi bi-x-circle" style="color:red"></i>
                    </div>
                    <div id="symbols">
                        <i onclick="decrement(${id})" class="bi bi-dash"></i>
                        <div id=${id} class="num">
                        ${item}
                        </div>
                        <i onclick="increment(${id})" class="bi bi-plus"></i>
                    </div>
                    <h3>Rs.${item*search.cost}</h3>
                </div>
            </div>`;
        }).join(""));
    } else{
        ShoppingCart.innerHTML=``;
        label.innerHTML=`
        <h2>Cart is Empty</h2>
        <a href="index.html"><button class="homebtn">Back to home</button></a>
        `;
    }
};
generateCartItems();
let increment = (id) =>{
    let selecteditem =id;
    let search =basket.find((x)=> x.id === selecteditem.id);
    if(search===undefined){
        basket.push({
            id:selecteditem.id,
            item:1,
        });
    }
    else{
        search.item +=1;
    }    
    update(selecteditem.id);
    generateCartItems(); 
    localStorage.setItem("data",JSON.stringify(basket));
};
let decrement = (id) =>{
    let selecteditem =id;
    let search =basket.find((x)=> x.id === selecteditem.id);
    if(search === undefined) return;
    else if(search.item===0) return;
    else{
        search.item -=1;
    }
    update(selecteditem.id);
    basket=basket.filter((x)=>x.item!==0);
    generateCartItems();  
    localStorage.setItem("data",JSON.stringify(basket));
};
let update = (id) =>{
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    generateCartItems(); 
    amount();
};
let remove=(id)=>{
    let item=id;
    basket=basket.filter((x)=>x.id!== item.id);
    localStorage.setItem("data",JSON.stringify(basket));
    generateCartItems();
    calculation();
    amount();
};
let amount=()=>{
    if(basket.length !==0){
        let amount =basket.map((x)=>{
            let {item,id}=x;
            let search =itemsdata.find((x)=>x.id===id)||[];
            return item * (search.cost);
        }).reduce((x,y)=>x+y,0) ;
        label.innerHTML=`<h2>Total Bill : Rs. ${amount}</h2>`;
    } else return;
};
amount();