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
- Se logger avec son email et son mot de passe, pour utiliser ensuite toutes les autres APIs sécurisé par un JWT