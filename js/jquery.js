<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>collapsible demo</title>
            <link rel="stylesheet" href="//code.jquery.com/mobile/1.5.0-alpha.1/jquery.mobile-1.5.0-alpha.1.min.css">
                <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
                <script src="//code.jquery.com/mobile/1.5.0-alpha.1/jquery.mobile-1.5.0-alpha.1.min.js"></script>
</head>
<body>

<div data-role="page" id="page1">
    <div data-role="header">
        <h1><center>Veille</center></h1>
    </div>
    <div role="main" class="ui-content">
        <div data-role="tabs">
            <div data-role="navbar">
                <ul>
                    <li><a href="#fragment-1" class="ui-btn-active">Un</a></li>
                    <li><a href="#fragment-2">Deux</a></li>
                </ul>
            </div>
            <div id="fragment-1">
                <div class="text-center">
                    <img src="images/5G-logo.jpg" width="80">
                </div>

                <div class="row m-4">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-header">
                                C'est quoi la 5g ?
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <ul>
                                        <li>La 5G, c'est la 5ème génération de réseau mobile. En France, le coup d'envoi a été donné le 18 novembre. Il s'agit de la prochaine génération de connectivité Internet mobile de cinquième génération qui promet des vitesses de téléchargement et d'envoi de données beaucoup plus rapides, une couverture plus large et des connexions plus stables.

                                            Il s'agit de mieux utiliser le spectre radioélectrique et de permettre à un plus grand nombre d'appareils d'accéder à l'internet mobile en même temps.</li>

                                    </ul>
                                    <div class="text-center">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/GQpts5I1q-Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-header">
                                A quoi la 5g va t-elle vous servir ?
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <ul>
                                        <li>Que va apporter la 5G ? À son lancement, la 5G va améliorer l'accès aux services proposés par les réseaux 4G en permettant notamment un meilleur débit et plus de capacité. En particulier, avec la 5G, une quantité beaucoup plus importante de données peut être échangée sans engorgement des réseaux.</li>
                                    </ul>
                                    <div class="text-center">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fqN9y8IBZ-4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row m-4">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                La 5G est-elle dangereuse pour votre santé ?
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <ul>
                                        <li>En 2011, l'OMS a qualifié les ondes électromagnétiques comme peut-être cancérogènes pour l'homme. Mais, la recherche n'a pas pu établir de lien de cause à effet. En France, des études sur la 5G sont en cours, mais elles semblent exclure un quelconque danger de la 5G sur la santé. Au moins à court terme.</li>

                                    </ul>
                                    <div class="text-center">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/v1hAE9aLZIY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="fragment-2">
                <p>This is the content of the tab 'Two', with the id fragment-2.</p>
            </div>
        </div>
    </div>
</div>
</body>

</html>