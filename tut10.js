console.log('hello');
let name = 'Srejin';


const mygreet = function greet(name, thank = 'Thank You'){
let msg = `Happy Birthday ${name} How I wish I could Fly to you rigth now and be with you on this special day of yours. ${thank}!`;
    return msg;
}


  let val = mygreet(name, `thanks a lot`);
  console.log(val);

  const myobj = {
      name : "SkillF",
      game : function(){
          return "GTA V";
      }
  }
  console.log(myobj.game())

  arr = ['fruit', 'vegetable', 'furniture'];
  arr.forEach(function(element, index, array) {
      console.log(element, array, index);
  });



if(1){
    var i = 234;
    console.log(i)
}
  console.log(i);
  function ui(name)
  {
    let  i = 9;
      console.log(i)
      return `this is a ${name} ui`;
  }
  console.log(ui("harry"), i);