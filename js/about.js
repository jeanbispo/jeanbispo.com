class About {

    constructor() {
        this.initTpl()
    }

    initTpl() {
        this.tpl = `

            <nav id="nav" class="container">
                <div class="brand">
                    <h1 id="site-name"><a href="/">Jean Bispo</a></h1>
                </div>
                <button id="nav-toggler"><img src="assets/menu.svg" alt=""></button>
                <div id="menu">
                    <ul>
                        <li><a class="enabled" href="about.html">about</a></li>
                        <li><a class="disabled" href="">blog</a></li>
                        <li><a class="enabled" target="_blank" href="https://www.linkedin.com/in/jeanbispo/">linkedin</a></li>
                        <li><a class="disabled" href="">cv</a></li>
                    </ul>
                </div>
                
            </nav>
            <main class="site-content">
                <section class="box">
                    
                   
                </section>
            </main>
        `;
    }

    render() {
        document.getElementById("root").innerHTML = this.tpl
    }
}

new About().render();