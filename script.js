let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


// // slide start //
// $(function(){

//     // 무한 반복 슬라이딩 //
        
//         let current= 0;
//         let show = 5;
//         let containner = $('#slidingMenu .sliding-viwe .containner');
//         let length = containner.find('>li').length;
//         let viwe =  $('#slidingMenu .sliding-viwe').width();
//         let tt = viwe/show; //이동거리 -한칸씩 움직이기//
//         let next = $('#slidingMenu .sliding-box .right');
//         let prev = $('#slidingMenu .sliding-box .left');
        
//        containner.css('width','length*tt');//컨테이너 길이 초기화//
    
//         next.on({
//             click:function(){
                
//                 if(current == length) {//마지막 엘리먼트에 다다르면 current 초기화//
//                     current = 0;
//                 }
                
//                 if(current == 0){
//                     //먼저 복사된 엘리먼트 삭제하고 위치 초기화//
//                     containner.find('>li').eq(length-1).nextAll().remove();
//                     containner.css({left:0}).stop();
                
//                     //이동//
//                     current++;
//                     containner.stop().animate({left:tt*current*-1},{duration:900});	
                    
//                     //엘리먼트 복사 - 컨네이너의 자식 모두 복사//
//                     let cloneEl = containner.children().clone();
//                     //복사된 엘리먼트 수 만큼 길이 늘리고 붙이기//
//                     containner.css({width:containner.innerWidth()+(tt*length)});
//                     cloneEl.appendTo(containner);
//                 }
//                 else if(current >= 1){
                    
//                     current++;
//                     containner.stop().animate({left:tt*current*-1},{duration:900});	
//                 }			
                
//             },
//             mouseenter:function(){
//                 clearInterval(Sliding);
//             },
//             mouseleave:function(){
//                 slidingTimer();
//             }
//         });
        
//         prev.on({
//             click:function(){
//                 if(current == 0){
//                     //먼저 복사된 엘리먼트 삭제하고 위치 초기화//
//                     containner.find('>li').eq(length-1).nextAll().remove();
//                     containner.css({left:0}).stop();
                    
//                     //인덱스 순서를 length로 치환해줌//
//                     current=length;
                    
//                     //앞쪽으로 엘리먼트 복사해서 붙이기//
//                     //길이 & 위치 초기화 -앞쪽으로 붙었기 떄문에 늘어난 길이 만큼 left시작 위치가 -가 되어야함//
//                     let cloneEl = containner.children().clone();
                    
//                     containner.css({left:tt*length*-1,width:containner.innerWidth()+(tt*length)}).stop();
//                     cloneEl.prependTo(containner);
                
//                     //붙이고 나서 바로 이동 되도록//
//                     current--;
//                     containner.stop().animate({left:tt*current*-1},{duration:900});
//                 }
//                 else if(current > 0 ){
//                     current--;
//                     containner.stop().animate({left:tt*current*-1},{duration:900});
//                 }
                
//             },
//             mouseenter:function(){
//                 clearInterval(Sliding);
//             },
//             mouseleave:function(){
//                 slidingTimer();
//             }
//         });
        
        
//         //컨테이너에 hover 되면 타이머 일시정지//
//         containner.on({
//             mouseenter:function(){
//                 clearInterval(Sliding);
//             },
//             mouseleave:function(){
//                 slidingTimer();
//             }
//         });
    
//         slidingTimer();
            
//         //자동 슬라이딩 타미머 함수 정의//
//         function slidingTimer(){
//             Sliding = setInterval(function(){
                
//                     next.trigger('click');
                
//             },3000);
//         }
//     });


let imageIndex = 0;
 let postion = 0;
 const IMAGE_WIDTH = 1600;  // css에서 설정한 width 값과 동일하게 맞춰주세요
 const btnPrevious = document.querySelector(".previous")
const btnNext = document.querySelector(".next")
const images = document.querySelector(".images")

function previous(){
if(imageIndex > 0){
    btnNext.removeAttribute("disabled")
    postion += IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    imageIndex = imageIndex - 1;
}
if(imageIndex == 0){
btnPrevious.setAttribute('disabled', 'true')
}
}
function next(){
if(imageIndex < 3){
btnPrevious.removeAttribute("disabled")
postion -= IMAGE_WIDTH;
images.style.transform = `translateX(${postion}px)`;
imageIndex = imageIndex + 1;
}
if(imageIndex == 3){
btnNext.setAttribute('disabled', 'true')
}
}

function init(){
  btnPrevious.setAttribute('disabled', 'true')
  btnPrevious.addEventListener("click", previous)
btnNext.addEventListener("click", next)
 }
 
 init();



// review

function getselectValue()
{
    var selectedValue =document.getElementById("list").value;
    console.log(selectedValue);
}


 