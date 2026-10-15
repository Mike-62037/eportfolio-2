// template_03vplco
// service_tox7x8e
// 3-CtVMUaci4IpOIp5

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      'service_tox7x8e',
      'template_w5793w5',
      event.target,
      'hnh2fg_677u39Tgeo'
    ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "the email service is temporarily unavailable. Please contact me directly on Timeconsumer37@gmail.com"
      );
    })
}