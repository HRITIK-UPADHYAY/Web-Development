import React from "react";

const Footer = () => {

    function updateColor(e) {
        if(e.target.value === 'white') setColor("white", "black");
        else setColor("black", "white");
    }

    function setColor(bgColor, textColor) {
        console.log("object");
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
    }

    return (
        <div className="footer"> 
            <div className="left"> 

                <a href="https://github.com/HRITIK-UPADHYAY?tab=repositories">
                    <i class="fa-brands fa-github fa-xl" style={{color: "#0056d6"}}></i>
                </a>

                 <a href="https://www.linkedin.com/in/hritikupadhyay">
                    <i class="fa-brands fa-linkedin fa-xl" style={{color: "#0056d6"}}></i>
                </a>

                <a href="mailto:hritikupadhyay134@gmail.com">
                  <i class="fa-solid fa-envelope fa-xl" style={{color: "#0056d6"}}></i>
                </a>

                <a href="https://instagram.com/hritik1501?igshid=ZGUzMzM3NWJiOQ==">
                    <i class="fa-brands fa-instagram fa-xl" style={{color: "#0056d6"}}></i>
                </a>          

            </div>
            <div className="right">
                <select onChange={updateColor}>
                    <option value="black"> Black </option>
                    <option value="white"> White </option>
                </select>
            </div>
        </div>
    )
}

export default Footer;