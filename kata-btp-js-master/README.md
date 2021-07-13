# Kata-BTP

Le kata BTP est un kata d'évolution sur une base de code legacy. Le but est
d'ajouter les fonctionnalités demandées au programme, malgré le manque de
test sur la grande majorité du code.
En cas de doute sur les fonctionnalités, demandez au PO si disponible, ou
improvisez.

Deux tests d'intégration sont fournis comme base pour faciliter le début du
kata.

## Efficient Command System 2.0

Allez je vous explique rapidement le produit et son histoire.

Notre entreprise de vente de fourniture de BTP est en pleine expansion. On a
commencé par vendre des palettes de parpaing, avec un suivi simple sur papier.
Notre volume d'affaire augmentant rapidement, on a commandé un petit
utilitaire pour simplifier le suivi des commandes : Efficent Command System 2.0
(la v1 étant le papier).

Il s'agit d'un outil en ligne de commande qui permet de créer des commandes et
les sauver sur un CSV que l'on peut transmettre en fin de journée à
l'entrepot pour qu'ils puissent préparer cette liste de commandes le lendemain.

Ça nous a beaucoup aidé. Tellement que l'on a commencé à vendre du fil de
cuivre au metre. Mais les fils de cuivre sont reçus de notre fournisseur en
bobine de 50m, du coup dans un soucis de simplification du travail pour
l'entrepot, il est important de leur dire combien de bobines ils peuvent
directement mettre de coté pour la commande et après combien de fil au mètre
il reste à couper à coté. Par exemple si on nous commande 230m de fil, cela
donnera 4 bobines de 50m et après il suffit de couper 30m à coté. Quel gain
de temps !

Enfin bref le systeme est fonctionnel depuis 8 mois, et maintenant on passe à
l'étape suivante : on va commencer à augmenter sensiblement le nombre de
produits que l'on propose aux clients.

Votre premier travail est de rajouter la vente de sacs de ciment. Les sacs de
ciment font 20kg, c'est notre unité de vente minimale. Mais comme pour le fil
de cuivre, il existe une possibilité de gain de temps pour l'entrepot en
préparant directement des boites de ciment qui font 80Kg. Donc en gros si on
commande 5 sacs de ciment cela donnera une commande d'un sac et d'une boite de
ciment.

Ce n'est pas tout, rajouter le ciment est vraiment la première étape de notre
stratégie d'expansion. Il faut que l'on puisse rajouter facilement d'autres
produits comme du gravier, des tubes de PVC, des plaques de tôles... La
direction est très ambitieuse pour les prochains mois.

Bon il est vrai que peut être, juste après l'ajout de la possiblité de
vendre du ciment on pourrait rajouter une fonctionnalité de création de
factures pour le client.
C'est plus ou moins comme l'export pour le CSV, mais sur la console quoi.
Avec comme information, le prix total HT, et par type de fourniture. Les prix
varient souvent. On n'a pas d'informations définitives à donner maintenant,
il faudra demander en temps utile.

En tout cas, faites vite tout ça c'est urgent ! Merci !
