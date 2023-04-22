let item = document.getElementById("item");
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
let generateItem = () => {
    return (item.innerHTML = itemsdata.map((x)=>{
        let {id,img,name,type,cost}=x;
        let search =basket.find((x)=>x.id===id)||[]
        return `<div id="food-id-${x.id} " class="it">
        <img src="${img}">
        <div id="name">
            <h3>${name}<i class="bi bi-plus-square" style="color: ${type};margin-left: 20px;"></i></h3>
            <div id="cost">
                <h3>${cost}</h3>
                <div id="symbols">
                    <i onclick="decrement(${id})" class="bi bi-dash"></i>
                    <div id=${id} class="num">
                    ${search.item===undefined ? 0 : search.item}
                    </div>
                    <i onclick="increment(${id})" class="bi bi-plus"></i>
                </div>
            </div>
        </div>
    </div>`;
    }).join(""));
};
generateItem();
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
    localStorage.setItem("data",JSON.stringify(basket));
};
let update = (id) =>{
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};
let calculation =()=>{
    let cart=document.getElementById("quantity");
    cart.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();