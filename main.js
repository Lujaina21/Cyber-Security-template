'use strict'

//sticky navbar
var nav = document.getElementById('nav');
     window.onscroll = function () {
    if(window.pageYOffset > 100) { 
      nav.classList.add("shrink");
    }else{
            nav.classList.remove("shrink");
         }
      }

      //accordion part
      var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


//  <!-- ===========================   The start of Performance Script  ========================== -->

let  rotate_img_one = document.getElementById("rotate_img_one");
let  perform_sub_title_one = document.getElementById("perform_sub_title_one");
let  perform_text_one = document.getElementById("perform_text_one");
let  perform_img_one = document.getElementById("perform_img_one");

function setchange_one(){
rotate_img_one.style.transform= "rotateY(360deg)";
perform_sub_title_one.style.color ="#000";
perform_text_one.style.color="#000";
perform_img_one.style.width= "77px";

}
function removechange_one(){
rotate_img_one.style.transform= "rotateY(0deg)";

perform_sub_title_one.style.color ="#fff ";
perform_text_one.style.color="#fff";
 perform_img_one.style.width= "0px";

}

let  rotate_img_two = document.getElementById("rotate_img_two");

let  perform_sub_title_two =document.getElementById("perform_sub_title_two");
let  perform_text_two =document.getElementById("perform_text_two");
let  perform_img_two = document.getElementById("perform_img_two");

function setchange_two(){
rotate_img_two.style.transform= "rotateY(360deg)";

perform_sub_title_two.style.color ="#000";
perform_text_two.style.color="#000";
perform_img_two.style.width= "77px";

}
function removechange_two(){
rotate_img_two.style.transform= "rotateY(0deg)";
perform_sub_title_two.style.color ="#fff ";
perform_text_two.style.color="#fff";
 perform_img_two.style.width= "0px";

}

let  rotate_img_three = document.getElementById("rotate_img_three");

let  perform_sub_title_three =document.getElementById("perform_sub_title_three");
let  perform_text_three =document.getElementById("perform_text_three");
let  perform_img_three = document.getElementById("perform_img_three");

function setchange_three(){
rotate_img_three.style.transform= "rotateY(360deg)";

perform_sub_title_three.style.color ="#000";
perform_text_three.style.color="#000";
perform_img_three.style.width= "77px";

}
function removechange_three(){
rotate_img_three.style.transform= "rotateY(0deg)";
perform_sub_title_three.style.color ="#fff ";
perform_text_three.style.color="#fff";
 perform_img_three.style.width= "0px";

}

let  rotate_img_four = document.getElementById("rotate_img_four");

let  perform_sub_title_four =document.getElementById("perform_sub_title_four");
let  perform_text_four =document.getElementById("perform_text_four");
let  perform_img_four = document.getElementById("perform_img_four");

function setchange_four(){
rotate_img_four.style.transform= "rotateY(360deg)";
perform_sub_title_four.style.color ="#000";
perform_text_four.style.color="#000";
perform_img_four.style.width= "77px";

}
function removechange_four(){
rotate_img_four.style.transform= "rotateY(0deg)";
perform_sub_title_four.style.color ="#fff ";
perform_text_four.style.color="#fff";
 perform_img_four.style.width= "0px";

}

let  rotate_img_five = document.getElementById("rotate_img_five");

let  perform_sub_title_five =document.getElementById("perform_sub_title_five");
let  perform_text_five =document.getElementById("perform_text_five");
let  perform_img_five = document.getElementById("perform_img_five");

function setchange_five(){
rotate_img_five.style.transform= "rotateY(360deg)"; 
perform_sub_title_five.style.color ="#000";
perform_text_five.style.color="#000";
perform_img_five.style.width= "77px";

}
function removechange_five(){
rotate_img_five.style.transform= "rotateY(0deg)";
perform_sub_title_five.style.color ="#fff ";
perform_text_five.style.color="#fff";
 perform_img_five.style.width= "0px";

}


let  rotate_img_six = document.getElementById("rotate_img_six");
let  perform_sub_title_six =document.getElementById("perform_sub_title_six");
let  perform_text_six =document.getElementById("perform_text_six");
let  perform_img_six = document.getElementById("perform_img_six");

function setchange_six(){
rotate_img_six.style.transform= "rotateY(360deg)"; 
perform_sub_title_six.style.color ="#000";
perform_text_six.style.color="#000";
perform_img_six.style.width= "77px";

}
function removechange_six(){
rotate_img_six.style.transform= "rotateY(0deg)";
perform_sub_title_six.style.color ="#fff ";
perform_text_six.style.color="#fff";
 perform_img_six.style.width= "0px";

}

//  <!-- ===========================   The End of Performance Script  ========================== -->

// <!-- ==================== Start Product Section  in About =============================== -->

 
let shop_add_btn_one = document.getElementById("shop_add_btn_one");

function shop_setchange_one(){
   shop_add_btn_one.style.opacity ="1";
   shop_add_btn_one.style.transform ="translateY(6px)";
}
function shop_removechange_one(){
   shop_add_btn_one.style.opacity ="0";
   shop_add_btn_one.style.transform ="translateY(66px)";

}   


let shop_add_btn_two = document.getElementById("shop_add_btn_two");

function shop_setchange_two(){
   shop_add_btn_two.style.opacity ="1";
   shop_add_btn_two.style.transform ="translateY(6px)";
}
function shop_removechange_two(){
   shop_add_btn_two.style.opacity ="0";
   shop_add_btn_two.style.transform ="translateY(66px)";

} 

let shop_add_btn_three = document.getElementById("shop_add_btn_three");

function shop_setchange_three(){
   shop_add_btn_three.style.opacity ="1";
   shop_add_btn_three.style.transform ="translateY(6px)";
}
function shop_removechange_three(){
   shop_add_btn_three.style.opacity ="0";
   shop_add_btn_three.style.transform ="translateY(66px)";

} 


let shop_add_btn_four = document.getElementById("shop_add_btn_four");

function shop_setchange_four(){
   shop_add_btn_four.style.opacity ="1";
   shop_add_btn_four.style.transform ="translateY(6px)";
}
function shop_removechange_four(){
   shop_add_btn_four.style.opacity ="0";
   shop_add_btn_four.style.transform ="translateY(66px)";

} 


let shop_add_btn_five = document.getElementById("shop_add_btn_five");

function shop_setchange_five(){
   shop_add_btn_five.style.opacity ="1";
   shop_add_btn_five.style.transform ="translateY(6px)";
}
function shop_removechange_five(){
   shop_add_btn_five.style.opacity ="0";
   shop_add_btn_five.style.transform ="translateY(66px)";

} 



let shop_add_btn_six = document.getElementById("shop_add_btn_six");

function shop_setchange_six(){
   shop_add_btn_six.style.opacity ="1";
   shop_add_btn_six.style.transform ="translateY(6px)";
}
function shop_removechange_six(){
   shop_add_btn_six.style.opacity ="0";
   shop_add_btn_six.style.transform ="translateY(66px)";

} 

// <!-- ==================== End Product Section  in About =============================== -->

// <!-- ============================= Start Section Complete area in About =================== -->

let comp_rotate_one = document.getElementById("comp_rotate_one");
let comp_text_h_one = document.getElementById("comp_text_h_one");
let comp_text_p_one = document.getElementById("comp_text_p_one");

function comp_setchange_one() {
   comp_rotate_one.style.transform = "rotateY(360deg)"; 
   comp_rotate_one.style.background ="#fff";
   comp_rotate_one.style.color ="red";

    comp_text_h_one.style.color="#fff";
    comp_text_p_one.style.color="#fff";

    
}
function comp_removechange_one(){
     comp_rotate_one.style.transform = "rotateY(0deg)"; 
     comp_rotate_one.style.background ="linear-gradient(to bottom right,#d2044d,#ff5e68)";
     comp_rotate_one.style.color ="#fff";

    comp_text_h_one.style.color="#000";
    comp_text_p_one.style.color="#000";
}

let comp_rotate_two = document.getElementById("comp_rotate_two");
let comp_text_h_two = document.getElementById("comp_text_h_two");
let comp_text_p_two = document.getElementById("comp_text_p_two");

function comp_setchange_two() {
   comp_rotate_two.style.transform = "rotateY(360deg)"; 
   comp_rotate_two.style.background ="#fff";
   comp_rotate_two.style.color ="red";

    comp_text_h_two.style.color="#fff";
    comp_text_p_two.style.color="#fff";

    
}
function comp_removechange_two(){
     comp_rotate_two.style.transform = "rotateY(0deg)"; 
     comp_rotate_two.style.background ="linear-gradient(to bottom right,#d2044d,#ff5e68)";
     comp_rotate_two.style.color ="#fff";

    comp_text_h_two.style.color="#000";
    comp_text_p_two.style.color="#000";
}

let comp_rotate_three = document.getElementById("comp_rotate_three");
let comp_text_h_three = document.getElementById("comp_text_h_three");
let comp_text_p_three = document.getElementById("comp_text_p_three");

function comp_setchange_three() {
   comp_rotate_three.style.transform = "rotateY(360deg)"; 
   comp_rotate_three.style.background ="#fff";
   comp_rotate_three.style.color ="red";

    comp_text_h_three.style.color="#fff";
    comp_text_p_three.style.color="#fff";

    
}
function comp_removechange_three(){
     comp_rotate_three.style.transform = "rotateY(0deg)"; 
     comp_rotate_three.style.background ="linear-gradient(to bottom right,#d2044d,#ff5e68)";
     comp_rotate_three.style.color ="#fff";

    comp_text_h_three.style.color="#000";
    comp_text_p_three.style.color="#000";
}

let comp_rotate_four = document.getElementById("comp_rotate_four");
let comp_text_h_four = document.getElementById("comp_text_h_four");
let comp_text_p_four = document.getElementById("comp_text_p_four");

function comp_setchange_four() {
   comp_rotate_four.style.transform = "rotateY(360deg)"; 
   comp_rotate_four.style.background ="#fff";
   comp_rotate_four.style.color ="red";

    comp_text_h_four.style.color="#fff";
    comp_text_p_four.style.color="#fff";

    
}
function comp_removechange_four(){
     comp_rotate_four.style.transform = "rotateY(0deg)"; 
     comp_rotate_four.style.background ="linear-gradient(to bottom right,#d2044d,#ff5e68)";
     comp_rotate_four.style.color ="#fff";

    comp_text_h_four.style.color="#000";
    comp_text_p_four.style.color="#000";
}


// <!-- ============================= Ebd Section Complete area in About =================== -->