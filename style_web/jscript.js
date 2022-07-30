var tabLinks = document.querySelectorAll(".tablinks");
var tabContent =document.querySelectorAll(".tabcontent");
tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});
function openTabs(el) {
   var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
   var electronic = btn.dataset.electronic; // lấy giá trị trong data-electronic
 
   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + electronic).classList.add("active");
   
   btn.classList.add("active");
}
function nameDivice(){
    let _agent= navigator.userAgent;
    let agent= _agent.substring( _agent.indexOf("(") + 1, _agent.indexOf(")") );
    let _nameDivice= agent.substring(0, agent.indexOf(" ") - 1 );
    return _nameDivice;
  }
  let nameMyDivice= nameDivice();
  function run(){
    window.alert(nameMyDivice + " bị hack rồi con!!!"); 
  }
  
  function submitForm(event){
    event.preventDefault();
    let userName= document.getElementById("UserName");
    window.alert(nameMyDivice + " bị hack rồi con!!!");
    window.alert("Giỡn đó baby++");
  }

  