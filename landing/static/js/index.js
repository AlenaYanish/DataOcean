// import * as THREE from 'three';
import DOTS from 'vanta/dist/vanta.dots.min';
import $ from 'jquery';
import 'jquery-validation';
import 'jquery-modal';


$(document).ready(() => {
  DOTS({
    el: '.landing-dots__inner',
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1,
    scaleMobile: 1.0,
    color: 0x2dff,
    color2: 0xffffff,
    backgroundColor: 0xffffff,
    size: 3,
    spacing: 15,
    // THREE: THREE,
  });
});


$(document).ready(() => {
  // const _sendMailBtn = document.querySelector(".sendmail-btn");
  // _sendMailBtn.onclick = (e) => {
  //   e.preventDefault();
  //   const _form = document.forms.sendmail;
  //   console.log("Do sendmail");
  //   return false;
  // };
});


$(document).ready(() => {
  // const _subscribeForms = document.querySelectorAll(".do-subscribe");
  // _subscribeForms.forEach((form) => {
  //   const _subscribeBtn = form.querySelector(".subscribe-btn");
  //   _subscribeBtn.onclick = (e) => {
  //     e.preventDefault();
  //     console.log("Do Subscribe");
  //   };
  // });
});

$(document).ready(function () {
	$('#contact-form').validate( {
		rules: {
			username: {
				required: true,
				minlength: 2,
			},
			surname: {
				required: true,
				minlength: 3,
			},
			email: {
				required: true,
				email: true,
			},
		    //phone: {
            //   required: true,
            //    minlength: 11
            //},
		},
		messages: {
			username: {
				required: 'Будь ласка, введіть Ваше ім\'я',
				minlength: 'Замала кількість символів',
			},
			surname: {
				required: "Будь ласка, введіть Ваше прізвище",
				minlength: 'Замала кількість символів',
			},
			email: {
				required: "Будь ласка, введіть адресу",
				email: "Будь ласка, введіть коректно адресу"
			},
			//phone: {
            //    required: "Будь ласка, введіть коректний номер телефону",
            //},
		},
    });
});

