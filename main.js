 function toggleNav() {
        var nav = document.querySelector('nav');
        nav.classList.toggle('show');
    }

function gotocontact(){
	var btn_contact = document.querySelector('.contact');

	btn_contact.addEventListener("click",() => {
       window.location.href = 'contact.html';
	})
};

function gotohome(){
	var btn_home = document.querySelector('.home');

	btn_home.addEventListener("click",() => {
       window.location.href= 'index.html';
	})
};

function gotosvg(){
	var btn_svg = document.querySelector('.svg');

	btn_svg.addEventListener("click",() => {
       window.location.href= 'svg.html';
	})
};


gotosvg();
gotohome();
gotocontact();