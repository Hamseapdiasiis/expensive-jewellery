// Good Luck 💪🏾
function mostExpensive(item){

    let expensive = 0


    for(let i=0; i<item.length; i++){
        if(item.price > expensive){
            expensive = item.price
            console.log(expensive)
        }
    }
    
}

mostExpensive(
    [{name: "Daimond Earrings", price: 908},
    {name: "Gold watch", price: 250},
    {name: "pearl Necklace", price:4650}]
)

mostExpensive(
    [{name: "Silver bracelet", price: 280},
    {name: "Gemstone Earrings", price: 180},
    {name: "Daimond ring", price: 3500}]
)
