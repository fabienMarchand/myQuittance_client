import React from "react";
import "bulma/css/bulma.css";
import "../styles/home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
       
       <div className="hero is-info is-medium is-bold title-img">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">
                    Votre outil de gestion des quittances de loyer en ligne
                    </h1>
                    <h2 className="subtitle">
                    Gagnez du temps grâce à un outil intuitif, générez vos documents en ligne et envoyez les quittances par mails au locataire.
                    </h2>
                </div>
            </div>
        </div>
        <div className="box cta">
            <p className="has-text-centered">
                {/* <span className="tag is-primary">New</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. */}
            </p>
        </div>
        <div className="container">
            <div className="columns features">
                <div className="column is-4">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            <i className="fas fa-piggy-bank"></i>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Economies </h4>
                                <p>Réduisez vos frais de gestion et optimisez la rentabilité de vos investissements locatifs</p>
                                {/* <p><a href="#">Learn more</a></p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                           {/* <i className="fa fa-empire"></i> */}
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Gain de temps</h4>
                                <p>Ne perdez plus de temps à gérer vos locations ! 15 minutes par mois suffisent.</p>
                                {/* <p><a href="#">Learn more</a></p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            {/* <i className="fa fa-apple"></i> */}
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4> Simplicité </h4>
                                <p>Générez votre quittance en format PDF et envoyez la facilement.</p>
                                {/* <p><a href="#">Learn more</a></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro column is-8 is-offset-2">
                <h2 className="title">Ne perdez plus de temps à gérer vos documents locatifs!</h2><br />
                <p className="subtitle">Grace à MyQuittance vous pourrez gérer vos locataires et créer les quittances très simplement</p>
            </div>
           
        </div>
        <footer className="footer">
            <div className="container">
                <div className="columns">
                    <div className="column is-3 is-offset-2">
                        <h2><strong>Notre outil</strong></h2>
                        <ul>
                            {/* <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Vestibulum errato isse</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Aisia caisia</a></li>
                            <li><a href="#">Murphy's law</a></li>
                            <li><a href="#">Flimsy Lavenrock</a></li>
                            <li><a href="#">Maven Mousie Lavender</a></li> */}
                        </ul>
                    </div>
                    <div className="column is-3">
                        <h2><strong>Informations</strong></h2>
                        <ul>
                            {/* <li><a href="#">Labore et dolore magna aliqua</a></li>
                            <li><a href="#">Kanban airis sum eschelor</a></li>
                            <li><a href="#">Modular modern free</a></li>
                            <li><a href="#">The king of clubs</a></li>
                            <li><a href="#">The Discovery Dissipation</a></li>
                            <li><a href="#">Course Correction</a></li>
                            <li><a href="#">Better Angels</a></li> */}
                        </ul>
                    </div>
                    <div className="column is-4">
                        <h2><strong>Category</strong></h2>
                        <ul>
                            {/* <li><a href="#">Objects in space</a></li>
                            <li><a href="#">Playing cards with coyote</a></li>
                            <li><a href="#">Goodbye Yellow Brick Road</a></li>
                            <li><a href="#">The Garden of Forking Paths</a></li>
                            <li><a href="#">Future Shock</a></li> */}
                        </ul>
                    </div>
                </div>
                <div className="content has-text-centered">
                    <p>
                        <a className="icon" href="https://github.com/BulmaTemplates/bulma-templates">
                            <i className="fa fa-github"></i>
                        </a>
                    </p>
                    {/* <div className="control level-item">
                        <a href="https://github.com/BulmaTemplates/bulma-templates">
                            <div className="tags has-addons">
                                <span className="tag is-dark">Bulma Templates</span>
                                <span className="tag is-info">MIT license</span>
                            </div>
                        </a>
                    </div> */}
                </div>
            </div>
        </footer>

      </div>
    );
  }
}

export default Home;
