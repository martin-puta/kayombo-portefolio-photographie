import React from 'react'

function MainNavigation() {
  return (
    <>
      <section className='top-txt'>
         <div className="head container">
           <div className="head-txt">
            <p>livraison rapide avec possibilte de retour en 3 jours </p>
           </div>
           <div className="sing_in_up">
            <a href=""> Me CONNECTER</a>
            <a href="">M'inscrire</a>
         </div>
         </div>
         <div className="navbar">
            <div className="navbar-container">
                <input type="checkbox" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className='menu-items'>
                    <li>
                        <a href="/">Accuil</a>
                    </li>
                    <li>
                        <a href="/">Nos produits</a>
                    </li>
                    <li>
                        <a href="/">Me deconnecter</a>
                    </li>
                </ul>
                <div className="logo">
                    <div className="flex item-center gap-1">
                      <input type="text" placeholder='Rechercher' className='search-topbar-input' />
                      <button className="btn-search">Rechercher</button>
                    </div>
                </div>
            </div>
         </div>
         
      </section>
    </>
  )
}

export default MainNavigation