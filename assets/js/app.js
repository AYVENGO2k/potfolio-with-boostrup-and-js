// document.body.onload = () => {
//     let request = new XMLHttpRequest;
//     request.open('GET', './header.html', true)
//     request.send()
//     request.onreadystatechange = function () {
//         if (request.readyState === 4)
//         if (request.status === 200) {
//             console.log(request.responseText)
//             document.body.innerHTML = request.responseText + document.body.innerHTML
//         }
//     }
// }

// document.body.onload = () => {
//     let request = new XMLHttpRequest;
//     request.open('GET', './footer.html', true)
//     request.send()
//     request.onreadystatechange = function () {
//         if (request.readyState === 4)
//         if (request.status === 200) {
//             console.log(request.responseText)
//             document.body.innerHTML = request.responseText + document.body.innerHTML
//         }
//     }
// }

class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <header id="header" class="fixed-top">
                <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgb(31, 31, 31)">
                    <div class="container">
                        <a class="navbar-brand" href="#">DANIIL PODUSHKO</a>
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav mr-auto mb-3 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="index.html">Обо мне</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Резюме</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Портфолио</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Услуги
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Логотип</a></li>
                                <li><a class="dropdown-item" href="#">Айдентика</a></li>
                                <li><a class="dropdown-item" href="#">Сайт</a></li>
                                <li><a class="dropdown-item" href="#">Приложение</a></li>
                            </ul>
                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">Контакты</a>
                            </li>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </header
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <footer id="footer">
                <div class="container">
                    <nav class="nav nav-pills flex-column flex-sm-row">
                        <a class="flex-sm-fill text-sm-center nav-link" href="#">Обо мне</a>
                        <a class="flex-sm-fill text-sm-center nav-link" href="#">Резюме</a>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Услуги
                            </a>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Логотип</a></li>
                            <li><a class="dropdown-item" href="#">Айдентика</a></li>
                            <li><a class="dropdown-item" href="#">Сайт</a></li>
                            <li><a class="dropdown-item" href="#">Приложение</a></li>
                            </ul>
                        </li> 
                        <a class="flex-sm-fill text-sm-center nav-link" href="#">Портфолио</a>
                        <a class="flex-sm-fill text-sm-center nav-link" href="contact.html">Контакты</a>
                    </nav>
                </div>
                <div class="container"><h3>PODUSHKO DANIIl © 2022</h3></div>
                <!-- <h3>PODUSHKO DANIIl © 2022</h3> -->
            </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)