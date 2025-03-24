const  Appetizers={
    "cut mirchi":["Spicy","Vegetarian"],
   "masala papad":["Mild","Vegetarian"],
    "samosa":["Mild","Vegetarian"],
    "chaat":["Mild","Vegan"],
    "pakodi": ["Mild","Vegetarian"],
}
const Entrees={
    "indo-chinese vegan fried rice":["Mild","Vegan"],
   "chicken biryani":["Spicy","None"],
   "vegetable biryani":["Mild","Vegetarian"],
   "shrimp biryani":["Mild","None"],
   "indo-chinese chicken fried rice": ["Spicy","None"]
}
const Dessert={
    "gulab jamun":["Mild","Vegan"],
    "carrot halwa":["Mild","Vegan"],
    "vermicelli payasam":["Mild","Vegetarian"],
    "rasmalai":["Mild","None"],

}

function option(){
var possible_meal=[];
var actual_meal=[];
var meal="";
var restriction="";
var spice=""
var times_of_click=0
meal_list=document.getElementsByName("wanted_meal")
restriction_list=document.getElementsByName("restrictions")
spice_list=document.getElementsByName("spice")


for ( i=0;i<3;i++){

    if (meal_list[i].checked){

        meal=meal_list[i].value;
    }
    if (restriction_list[i].checked){

         restriction=restriction_list[i].value
    }


    }
for (i=0;i<2;i++){
    if (spice_list[i].checked){
        if (i==0){
            spice="Spicy";
        }
        else if(i==1){
            spice="Mild"
        }
    }
}
if (meal=="Appetizers" && restriction=="None"){
    restriction="Vegetarian"
}
else if (restriction=="Vegetarian" && meal=="Entrees" && spice=="Spicy" ){
    spice="Mild"
}
else if (restriction=="Vegan" && spice=="Spicy" ){
    spice="Mild"
}
else if ((meal=="Dessert")&& spice=="Spicy"){
    spice="Mild"
}
if (meal=="Dessert" && restriction=="None"){
    keys_of_meal=Object.keys(Dessert)
    for (i in keys_of_meal){
        possible_meal.push(keys_of_meal[i])
    }
}
if (meal=="Appetizers"){
    values_of_meal=Object.values(Appetizers)
    keys_of_meal=Object.keys(Appetizers)

    for (item in Appetizers){
        i=keys_of_meal.indexOf(item)
        list_of_values=[values_of_meal[i][0],values_of_meal[i][1]]
        list_of_values1=values_of_meal[i][0]
        list_of_values2=values_of_meal[i][1]
        if (spice==list_of_values1 && restriction==list_of_values2){
            possible_meal.push(item);
        }
        else if (meal=="Appetizers" && restriction=="Vegan" && spice=="Yes"){
            possible_meal.push("chaat")
        }

        else{
            continue
        }
        }

}
else if (meal=="Entrees"){
    keys_of_meal=Object.keys(Entrees)
    values_of_meal=Object.values(Entrees)
    for (item1 in Entrees){
        i=keys_of_meal.indexOf(item1)
        list_of_values=[values_of_meal[i][0],values_of_meal[i][1]]
        list_of_values1=values_of_meal[i][0]
        list_of_values2=values_of_meal[i][1]
        if (spice==list_of_values1 && restriction==list_of_values2){
            possible_meal.push(item1);

        }

        else{
            continue
        }
        }    }
else if (meal=="Dessert"){
    keys_of_meal=Object.keys(Dessert)
    values_of_meal=Object.values(Dessert)
    for (item2 in Dessert){
        i=keys_of_meal.indexOf(item2)
        list_of_values=[values_of_meal[i][0],values_of_meal[i][1]]
        list_of_values1=values_of_meal[i][0]
        list_of_values2=values_of_meal[i][1]
        if (spice==list_of_values1 && restriction==list_of_values2){
            possible_meal.push(item2);

        }


        else{
            continue
        }
        }  }
else if (spice=="Spicy" && meal=="Dessert"){
    possible_meal=["gulab jamun","carrot halwa","vermicelli payasam","rasmalai"];
    final_meal=random.choice(possible_meal);
    if (restriction=="Vegan" || "Vegetarian"){
        document.write('We recommend for you to try our', final_meal,'which is' ,restriction, 'and matches your spice level.');
    }else{
        print('We recommend for you to try our',final_meal,' which meets your criteria.');
        }}

if (possible_meal.length==1){
    actual_meal.push(possible_meal[0])
}
else{
for (item in possible_meal){
    xyz=0
    for (thing in actual_meal){
        if (possible_meal[item]==actual_meal[thing]){
            xyz=xyz+1
        }
        else{
        continue}
    }
    if (xyz>0){continue;}
    else if(possible_meal[item] in actual_meal==false){
        actual_meal.push(possible_meal[item]);
    }

}}
random_number=Math.floor(Math.random()* actual_meal.length)
final_meal=actual_meal[random_number]


output=('We recommend for you to try our '+final_meal+' which can be found by going into the "Our Recipes" button at the top left  and going under the ' +meal+'bar.');
alert(output);




// document.getElementById('final_print').style.display = 'inline-block';
// document.getElementById("final_print").firstChild.nodeValue = "<p>"+output+"</p>";
//document.body.innerHTML += "<p id='the_final'>"+output+"</p>";
//$(".final_print").html("<p>"+output+"</p>")
//document.querySelector('final_print').appendChild(output)
//document.getElementById('element').insertBefore(document.getElementById("quiz"),"<p>"+output+"</p>")
//document.getElementById('final_print').appendChild(document.createElement("div"))
// node=document.getElementById("child");
//document.body.children
// times_of_click+=1
// const ok = document.getElementById("the_final");
//     if (times_of_click>=2){
//         document.body.innerHTML -= ok;

    }
