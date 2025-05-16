# Node_TP_Rhum
## RINGOT Estéban

### Lancer la base de donnée
Afin de lancer la base de donnée, il faut executé la commande suivante :
```
<Chemin vers mongod.exe> --dbpath <Chemin vers où est stocker la bdd>

Exemple :
E:\Dev\...\mongodb-win32-x86_64-windows-8.0.5\bin\mongod.exe --dbpath H:\...\Dev\Node\db
```

### Utilisation
Il est recommandé d'utiliser Postman ou Bruno pour utiliser l'application.
L'application fonctionne sur le port 3000 donc sur l'addresse http://localhost:3000

### Les fonctionnalités
#### /rhums
Pour afficher la listes de tous les rhums, ses arguments disponibles sont :
- Page, permet de définir la page que le veut voir
- Limit, permet de définir la limite de rhum par page

#### /rhum
Permet de chercher un rhum, il est trouvable à partir des champs :
- name (qui correspond au nom)
- type
- pays

#### /ingredients
Permet d'affier la liste de tous les ingredients, ses arguments disponibles sont :
- Page, permet de définir la page que le veut voir
- Limit, permet de définir la limite d'ingredients par page

#### /ingredient
Permet de chercher un ingredient, il est trouvable à partir des champs :
- name (qui correspond au nom)
- type
- pays
- adresseMarket, qui correspond à l'adresse du magasin qui a vendu ce produit

#### /addIngredient
Permet d'ajouter un ingredient, pour son ajout il faut renseigner les informations suivantes :
- name (qui correspond au nom)
- type
- pays
- adresseMarket, qui correspond à l'adresse du magasin qui a vendu ce produit
- price, qui correspond au prix du produit

#### /recettes
Permet d'affier la liste de toutes les recettes, ses arguments disponibles sont :
- Page, permet de définir la page que le veut voir
- Limit, permet de définir la limite de recettes par page

#### /recette
Permet de chercher une recette, il est trouvable à partir des champs :
- name (qui correspond au nom)
- rhum, qui correspond au rhum utilisé dans la recette. Celui-ci est un objet rhum.
- ingredients, qui correspond aux ingredients utilisé dans la recette. Celui-ci est une liste objets ingredient.
- instructions

#### /addRecette
Permet d'ajouter une recette, pour son ajout il faut renseigner les informations suivantes :
- name (qui correspond au nom)
- rhum, qui correspond au rhum utilisé dans la recette. Celui-ci est un objet rhum.
- ingredients, qui correspond aux ingredients utilisé dans la recette. Celui-ci est une liste objets ingredient.
- instructions
- user, qui est le compte lié à la recette.

#### /updateRecette
Permet de mettre à jour une recette, pour sa modification il faut renseigner les informations suivantes :
- son id
- name (qui correspond au nom)
- rhum, qui correspond au rhum utilisé dans la recette. Celui-ci est un objet rhum.
- ingredients, qui correspond aux ingredients utilisé dans la recette. Celui-ci est une liste objets ingredient.
- instructions

#### /comptes
Permet d'afficher la liste de tous les comptes, ses arguments disponibles sont :
- Page, permet de définir la page que le veut voir
- Limit, permet de définir la limite de recettes par page

#### /addCompte
Permet d'ajout un compte, pour son ajout il faut renseigner les informations suivantes :
- email
- password, qui correspond au mot de passe

#### /login
Permet de se connecter avec un compte exitant, il attend les paramètres suivants :
- email
- password, qui correspond au mot de passe



### Avancé du projet 
- Affichage de tous les rhums ✅
- Affichage d'un rhum par son id ✅
- Création d'ingrédient ✅
- Affichage des ingrédient ✅
- Créer une recette privé ou public
    une recette contient un rhum, au moins un ingrédient, des instructions écrites ✅
- Lister ses recettes (avec pagination) ✅
- Lister les recettes publiques (avec pagination) ✅
- Modifier une de ses recettes ✅
- Créer un compte avec son nom, son adresse postale, son email et un mot de passe. ✅
- Se logger avec son email et son mot de passe, pour utiliser ensuite toutes les autres APIs sécurisé par un JWT ❌

### A noté
- Modification de rhum afin d'appliquer la logique MVC complement dessus
- Tests automatisé via Postman sur les rhums 