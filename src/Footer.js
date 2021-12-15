import React from 'react'
import "./footer.css"
import footerimg from './img/tm.png'
function Footer() {
    return (
        <div className='footer d__flex align__items__center justify__content__space__between pz-10' style={{"padding":"10px 20px", "zIndex":"100", "background": "#191919", "height": "20vh"}}>
                <img src={footerimg} alt="" className="footer__image pointer" style={{"width":"30px"}} />
                <span className="copyright" style={{"color":"#c6c9d8", "fontsize":"14px", "opacity":"0.75",  }}>Copyright ©️  2021 programmer Fazliddin Turobiddinov. All right reserved</span>
            
        </div>
    )
}

export default Footer
