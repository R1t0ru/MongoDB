# TP Final

### Partie 1 : Configuration et création de la base de données

<del>db.createcollection("Books_list")

![alt text](image-1.png)

![alt text](image.png)

<p align="center">
  <img src="image-2.png" />
</p>

<p style="text-align:center;">V</p>

![alt text](image-3.png)

### Partie 2 : Requêtes de lecture (Read)

**1. Listez tous les livres disponibles (si vous utilisez le dataset Amazon, ajoutez d'abord un champ disponible à vos documents)**

*Ajout du champ disponible*

![alt text](image-5.png)

<del>.limit inutile

*Recherche*

![alt text](image-4.png)

**2. Trouvez les livres publiés après l'an 2000**

![alt text](image-6.png)

**3. Trouvez les livres d'un auteur spécifique**

![alt text](image-7.png)

**4. Trouvez les livres qui ont une note moyenne supérieure à 4**

*Ajout des notes*

![alt text](image-8.png)

*Recherche*

![alt text](image-9.png)

**5. Listez tous les utilisateurs habitant dans une ville spécifique**

*Ajout des lieux d'habitations*

![alt text](image-10.png)

*Recherche*

![alt text](image-11.png)

**6. Trouvez les livres qui appartiennent à un genre spécifique**

![alt text](image-12.png)

*$regex permet de récupérer les livres qui contiennent la chaine "Biography" dans leur catégorie*

**7. Trouvez les livres qui ont à la fois un prix inférieur à 15€ et une note moyenne supérieure à 4**

*Ajout des prix*

![alt text](image-13.png)

*Recherche*



**8. Trouvez les utilisateurs qui ont emprunté un livre spécifique (par titre)**