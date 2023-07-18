


$('#slider-2').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  center: true,
  dots: true,

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})

// 

$('#member_slider1').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
  center: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
});

$(document).ready(function () {

  $('.down_arrow').click(function () {

    // $('.mob_main_menu').slideToggle();
    $(this).toggleClass('fa-angle-down');
    $(this).toggleClass('arrow_active');

  });
  // loader
  setTimeout(function () {

    $('#pre_loader').fadeOut();

  }, 1500);

});



AOS.init();

// range    
const range = document.querySelectorAll(".range-slider span input");
progress = document.querySelector(".range-slider .progress");
let gap = 0.1;
const inputValue = document.querySelectorAll(".numberVal input");

range.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(range[0].value);
    let maxRange = parseInt(range[1].value);

    if (maxRange - minRange < gap) {
      if (e.target.className === "range-min") {
        range[0].value = maxRange - gap;
      } else {
        range[1].value = minRange + gap;
      }
    } else {
      progress.style.left = (minRange / range[0].max) * 100 + "%";
      progress.style.right = 250 - (maxRange / range[1].max) * 100 + "%";
      inputValue[0].value = minRange;
      inputValue[1].value = maxRange;
    }
  });
});

// form validation

$(document).ready(function () {

  $('#contact_form_val').submit(function () {

    let n = $('#name').val();
    let e = $('#email').val();
    let p_t = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let number = $('#phone').val();
    let n_pattern = /^([+]\d{2})?\d{10}$/;
    let sub = $('#subject').val();
    let m = $('#mess').val();


    if (n == "") {
      alert('Plz Enter Your Name.....!');
      return false;
    }
    if(p_t.test(e) == false)
    {
      alert('Enter Valid Email Add.....!');
      return false;
    }
    if(n_pattern.test(number) == false )
    {
      alert('Plz Enter Valid number........! ');
      return false;
    }
    if (sub == "") {
      alert('Plz Enter Your Subject.....!');
      return false;
    }
    if (m == "") {
      alert('Plz Enter Your Message.....!');
      return false;
    }
  });

});


