const formItem = document.querySelectorAll(".form-item");
const formError = document.querySelectorAll(".form-error");


function formCheck(event) {
    for (let i = 0; i < formItem.length; i++) {
        if (!formItem[i].checkValidity()) {
            if (formItem[i].type == 'email')
                formError[i].innerHTML = 'Looks like this is not an email';
            else (formItem[i].type == 'password')
            formError[i].innerHTML = formItem[i].placeholder + ' cannot be empty';

            formItem[i].oninvalid = function (e) {
                e.preventDefault();
            }

            formItem[i].addEventListener('keydown', function () {
                formItem[i].style.color = 'rgb(0,0,0)';
            });

            formError[i].style.visibility = 'visible';
            formItem[i].style.background = 'url("../img/icon-error.svg") no-repeat 95% 50%';
            formItem[i].style.color = 'hsl(0,100%,74%)';
        } else {
            formError[i].style.visibility = 'hidden';
            formItem[i].style.background = 'none';
            formItem[i].style.color = 'rgb(0,0,0)';
        }
    }
}

