var menuLinks = document.querySelectorAll(".list a"),
    subMenuItems = document.querySelectorAll(".sub-list li");

window.onresize = function() {

    if (window.innerWidth > 900) {

        document.querySelector('.menu').style.removeProperty('display');
        document.querySelector('.overlay').style.removeProperty('display');

    }

}

function handleClick(selector) {

    if (!this.classList.contains('active')) {

        if (document.querySelectorAll(selector).length) {

            document.querySelectorAll(selector)[0].classList.remove('active');
        }
    }

    this.classList.toggle("active");

    setHeaderText(this);
}

function setHeaderText(elem) {

    document.querySelector('#headerText').innerText = elem.innerText;
}

for (var i = 0; i < menuLinks.length; i++) {

    menuLinks[i].addEventListener("click", function(e) {

        handleClick.call(this, '.list a.active');

    });

}


for (var j = 0; j < subMenuItems.length; j++) {

    subMenuItems[j].addEventListener("click", function(e) {

        handleClick.call(this, '.sub-list li.active');

    });

}

document.querySelector('#mobile-menu-icon').addEventListener("click", function(e) {

    document.querySelector('.menu').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';

});

document.querySelector('.overlay').addEventListener("click", function(e) {

    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';

});
