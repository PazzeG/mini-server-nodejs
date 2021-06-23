//Librairie pour démarrer le serveur
const http = require('http')

//Librairie pour gèrer les fichiers
const fs = require('fs')

//Port sur lequel on écoute notre serveur
const port = 3000

//Céation du serveur, createServer() prend une fonction avec 2 parametres (req et res)
// Ici dans la fonction, on va gèrer l'activité du serveur.
//A chaque fois qu'une page est requêtée sur notre serveur, la fonction sera appelée
const server = http.createServer(function(req, res){

    // On dit au navigateur qu'on va lui passer du HTML.
    //Premier params de la fonction est le code de status de l'opération (200) tout s'est bien passé
    //Second params est le Header qu'on veut envoyer
    res.writeHead(200, {'Content-Type': 'text/html'})

    //Ici on lit le fichier html, en lui passant le nom du fichier puis une fonction.
    //Cette fonction qui va avoir un propriété erreur si une erreur survient.
    //Et une propriété data qui contiendra tout les données du fichier
    fs.readFile('index.html', function(error, data){

        // On vérifie s'il y a une erreur
        if (error){
            //si oui on dit au navigateur qu'on a pas pu trouver ce qu'on cherchait => 404
            res.writeHead(404)
            res.write('ErrorFile not found')
        } else {
            // sinon on lit toutes les données du fichier
            res.write(data)
        }
        // Enfin on termine la réponse
        res.end()
    })
})


// Mise en place du serveur pour qu'il se branche sur le port voulu.
//La methode listen() prend une fonction qui va etre appelée s'il y a une erreur
//Dès que notre serveur est en route il va appelé cette fonction et va passer une erreur ou rien.
server.listen(port, function(error){
    // si l'erreur existe
    if (error) {
        console.log('something went wrong', error);
    } else {
        console.log('sever Listening on port' + port);
    }
})