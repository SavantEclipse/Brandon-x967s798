function categories(props) {

return (
<>
    <h3>categories{props.cost}</h3>
    <i>{props.id ? props.id : "food"} </i>
    <h>{props.health_info ? props.health_info : "unavailable"} </h>
    <n>{props.name ? props.name : "food"} </n>
    <c>{props.cost ? props.cost : "100 dollars"} </c>
</>

);

}

export default categories;

function App() {
    const foodStats = true;
    return (
        <div classname="APP">
            {foodStats ? (
            <>
                <categories name= "Sandwiches" cost="7.95" id="Crispy Chicken" health_info="" />
                <categories name= "Sandwiches" cost="8.25" id="Buffalo Chicken" health_info="" />
                <categories name= "Sandwiches" cost="5.75" id="Chicken Salad" health_info="" />
                <categories name= "Sandwiches" cost="5.75" id="Tuna Salad" health_info="" />
                <categories name= "Sandwiches" cost="6.75" id="BLT" health_info="" />
                <categories name= "Sandwiches" cost="8.99" id="Club" health_info="" />
                <categories name= "Sandwiches" cost="4.29" id="Grilled Cheese" health_info="" />
                <categories name= "Wraps" cost="8.25" id="Chicken Bacon Ranch" health_info="" />
                <categories name= "Wraps" cost="9.25" id="Santa Fe Chicken Wrap" health_info="" />
                <categories name= "Wraps" cost="9.25" id="Greek Wrap" health_info="" />
                <categories name= "Wraps" cost="6.49" id="Grilled Chicken Wrap" health_info="" />
                <categories name= "Burgers" cost="8.75" id="Hamburger" health_info="" />
                <categories name= "Burgers" cost="10.25" id="Smokehouse Burger" health_info="" />
                <categories name= "Burgers" cost="8.25" id="The Beanie" health_info="Vegetarian" />
                <categories name= "Hot Dogs" cost="4.99" id="Nathan's All Beef Hotdog" health_info="" />
                <categories name= "Hot Dogs" cost="1.99" id="Corn Dog on a Stick" health_info="" />
                <categories name= "" cost="" id="" health_info="" />
                
            </>
        ) :
            } 
        </div>
    );
}