# TP Final

### Partie 1 : Configuration et création de la base de données

<del>db.createcollection("Books_list")

![alt text](Pictures/image-1.png)

![alt text](Pictures/image.png)

<p align="center">
  <img src="Pictures/image-2.png" />
</p>

<p style="text-align:center;">V</p>

![alt text](Pictures/image-3.png)

### Partie 2 : Requêtes de lecture (Read)

**1. Listez tous les livres disponibles (si vous utilisez le dataset Amazon, ajoutez d'abord un champ disponible à vos documents)**

*Ajout du champ disponible*

![alt text](Pictures/image-5.png)

<del>.limit inutile

*Recherche*

![alt text](Pictures/image-4.png)

**2. Trouvez les livres publiés après l'an 2000**

![alt text](Pictures/image-6.png)

**3. Trouvez les livres d'un auteur spécifique**

![alt text](Pictures/image-7.png)

**4. Trouvez les livres qui ont une note moyenne supérieure à 4**

*Ajout des notes*

![alt text](Pictures/image-8.png)

*Recherche*

![alt text](Pictures/image-9.png)

**5. Listez tous les utilisateurs habitant dans une ville spécifique**

*Ajout des lieux d'habitations*

![alt text](Pictures/image-10.png)

*Recherche*

![alt text](Pictures/image-11.png)

**6. Trouvez les livres qui appartiennent à un genre spécifique**

![alt text](Pictures/image-12.png)

*$regex permet de récupérer les livres qui contiennent la chaine "Biography" dans leur catégorie*

**7. Trouvez les livres qui ont à la fois un prix inférieur à 15€ et une note moyenne supérieure à 4**

*Ajout des prix*

![alt text](Pictures/image-13.png)

*Recherche*

![alt text](Pictures/image-14.png)

**8. Trouvez les utilisateurs qui ont emprunté un livre spécifique (par titre)**

![alt text](Pictures/image-15.png)

### Partie 3 : Mise à jour de documents (Update)

**1. Mettez à jour le titre d'un livre spécifique**

![alt text](Pictures/image-16.png)

<p style="text-align:center;">V</p>

<p align="center">
  <img src="Pictures/image-17.png" />
</p>

<p style="text-align:center;">V</p>

![alt text](Pictures/image-18.png)

**2. Ajoutez un champ stock à tous les livres avec une valeur par défaut de 5**

<p align="center">
  <img src="Pictures/image-19.png" />
</p>

<p style="text-align:center;">V</p>

![alt text](Pictures/image-20.png)

**3. Marquez un livre comme indisponible (disponible = false)**

<p align="center">
  <img src="Pictures/image-21.png" />
</p>

<p style="text-align:center;">V</p>

![alt text](Pictures/image-22.png)

**4. Ajoutez un nouvel emprunt dans la liste livres_empruntes d'un utilisateur**

<p align="center">
  <img src="Pictures/image-23.png" />
</p>

<p style="text-align:center;">V</p>

![alt text](Pictures/image-24.png)

**5. Changez l'adresse d'un utilisateur**

![alt text](Pictures/image-26.png)

<p style="text-align:center;">V</p>

<p align="center">
  <img src="Pictures/image-25.png" />
</p>

<p style="text-align:center;">V</p>

![alt text](Pictures/image-27.png)

**6. Ajoutez un nouveau tag à un utilisateur**

![alt text](Pictures/image-30.png)

<p style="text-align:center;">V</p>

<p align="center">
  <img src="Pictures/image-28.png" />
</p>

<p style="text-align:center;">V</p>

![alt text](Pictures/image-29.png)

**7. Mettez à jour la note moyenne d'un livre**

![alt text](Pictures/image-32.png)

<p style="text-align:center;">V</p>

<p align="center">
  <img src="Pictures/image-31.png" />
</p>

<p style="text-align:center;">V</p>

![alt text](Pictures/image-33.png)

### Partie 4 : Suppression de documents (Delete)

**1. Supprimez un livre spécifique par son titre**

![alt text](Pictures/image-34.png)

<p style="text-align:center;">V</p>

<p align="center">
  <img src="Pictures/image-35.png" />
</p>

<p style="text-align:center;">V</p>

![alt text](Pictures/image-36.png)

**2. Supprimez tous les livres d'un auteur spécifique**

![alt text](Pictures/image-37.png)

<p style="text-align:center;">V</p>

<p align="center">
  <img src="Pictures/image-38.png" />
</p>

<p style="text-align:center;">V</p>

![alt text](Pictures/image-39.png)

**3. Supprimez un utilisateur par son email**

![alt text](Pictures/image-40.png)

<p style="text-align:center;">V</p>

<p align="center">
  <img src="Pictures/image-41.png" />
</p>

<p style="text-align:center;">V</p>

![alt text](Pictures/image-42.png)


### Partie 5 : Requêtes avancées et projection

**1. Listez tous les livres triés par note moyenne (ordre décroissant)**

![alt text](Pictures/image-44.png)

![alt text](Pictures/image-43.png)

**2. Trouvez les 3 livres les plus anciens**

![alt text](Pictures/image-45.png)

*20?? étant considéré comme 20, la requête ressort 3 livres ayant cette date de publication renseignée*

**3. Comptez le nombre de livres par auteur**

![alt text](Pictures/image-46.png)

**4. Affichez uniquement le titre, l'auteur et la note moyenne des livres (sans l'id)**

![alt text](Pictures/image-47.png)

**5. Trouvez les utilisateurs qui ont emprunté plus d'un livre**

![alt text](Pictures/image-48.png)

**6. Recherchez les livres dont le titre contient un mot spécifique (utilisez $regex)**

![alt text](Pictures/image-49.png)

*$option: "i" permet de ne pas prendre la casse en compte*

**7. Trouvez les livres dont le prix est entre 10€ et 20€**

![alt text](Pictures/image-50.png)

