const toggle = document.querySelector('.menuToggle');
const subMenu = document.querySelector('aside.subMenu');
const hover = document.querySelector(".title span");
const banner = document.querySelector('.banner');
const btnL = document.querySelector('.banner .btn.left');
const btnR = document.querySelector('.banner .btn.right');

// 배너 이미지 넘기기
let count = 1;

btnL.addEventListener('click', function(){
    count = count-1;

    if(count<=0){
        count = 4;
    };

    banner.style.backgroundImage = `url('images/banner${count}.avif')`;
});

btnR.addEventListener('click', function(){
    count = count+1;
    if(count>4){
        count = 1;
    };

    banner.style.backgroundImage = `url('images/banner${count}.avif')`;
});

// 메뉴 토글 클릭 시 서브메뉴 다운 & 메뉴 아이콘 변경
toggle.addEventListener('click', function(){
    let btn = subMenu.classList.toggle('open');

    if(btn == true){
    toggle.style.backgroundImage = `url('images/toggleOn.png')`;
    } else {
        toggle.style.backgroundImage = `url('images/toggleOff.png')`;
    }
});

// 마우스 오버 시 타이틀의 span 이미지 랜덤한 position값 부여
hover.addEventListener('mouseover', function(){
    let position = ['top', 'bottom'];
    let random = position[Math.floor(Math.random() * position.length)];
 
    hover.style.backgroundPosition = random;
});

// 마우스 아웃 시 이미지 포지션 원래대로 돌아가기
hover.addEventListener('mouseout', function(){
    hover.style.backgroundPosition = 'center';
});