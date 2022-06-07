// const page = (
//     <div>
//         <img src="./React_logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// function TempName() {
//     return (
//         <div>
//         <img src="./React_logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
//     )
// }

// ReactDOM.render(<TempName />, document.getElementById("root"))

function Header(){
    return(
        <header>
                <nav className="nav">
                    <img src="./logo-react-icon.png" className="pic" />
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
    )
}

function Body(){
    return(
        <div className="nav-body">
        <h1 className="nav-title">Reasons I am excited to learn React</h1>    
        <ol className="nav-list">
            <li>To Help my Dad</li>
            <li>To Become More Knowlegable</li>
            <li>To Finally Dive into a Hireable Skill</li>
            <li>To Accomplish Something as an Adult </li>
            <li>To Make My Dad Proud</li>
        </ol>
        </div>
    )
}

function Footer(){
    return(
        <footer className="nav-foot">
            © 2022 Freed development. All rights reserved.
        </footer>
    )
}

function Page() {
    return(
        <div>
            <Header />           
            <Body />
            <Footer />
        </div>
    )
}


ReactDOM.render(<Page />, document.getElementById("root"))
