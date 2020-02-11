class Application {

    constructor() {
        this.initTpl()
    }

    initTpl() {
        this.tpl = `
            <main class="site-content">
                <section class="box">
                    <h1 id="site-name">Jean Bispo</h1>
                    <div id="site-subtitle">dev front-end</div>
                    <nav id="menu">
                        <ul>
                            <li><a class="enabled" href="about.html">about</a></li>
                            <li><a class="disabled" href="">blog</a></li>
                            <li><a class="enabled" target="_blank" href="https://www.linkedin.com/in/jeanbispo/">linkedin</a></li>
                            <li><a class="disabled" href="">cv</a></li>
                        </ul>
                    </nav>
                </section>
            </main>
        `;
    }

    render() {
        document.getElementById("root").innerHTML = this.tpl
    }
}

new Application().render();