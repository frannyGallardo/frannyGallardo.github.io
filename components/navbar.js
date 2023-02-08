// https://www.w3schools.com/howto/howto_js_active_element.asp
// not sure why script isn't working as intended...

class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
            div {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                background-color: firebrick;
            }
            
            .tab {
                display: block;
                font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
                font-style: italic;
                font-weight: bold;
                color: white;
                text-align: center;
                float: left;
                padding: 14px 16px;
                text-decoration: none;
            }

            .tab:hover {
                background-color: crimson;
            }
            
            .active {
                background-color: black;
            }
            </style>
            
            <div id="tabList">
                <a class="tab" href="index.html">Home</a>
                <a class="tab" href="calligraphy.html">Calligraphy</a>
                <a class="tab" href="resume.html">Resume</a>
            </div>

            <script>
            var navbar = document.getElementById("tabList");
            var tabs = navbar.getElementsByClassName("tab");
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].className += " active";
            }
            </script>
        `;
    }
}

customElements.define('navbar-component', Navbar);