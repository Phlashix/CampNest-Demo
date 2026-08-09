# CampNest — démonstration

**➜ [Voir la démonstration](https://phlashix.github.io/CampNest-Demo/)**

Le site CampNest, **exactement tel qu'il est**, en version démonstration :
mêmes pages, mêmes composants, mêmes règles de calcul. Seule la source des
données change.

## Comment se connecter

Trois comptes, avec **n'importe quel mot de passe** :

| Rôle | Adresse |
|---|---|
| Hôte | `marie.hote@campnest.fr` |
| Voyageuse | `camille.voyage@campnest.fr` |
| Administration | `admin@campnest.fr` |

Un bandeau en haut de page les rappelle, et un clic copie l'adresse.

## Ce qu'on peut faire

- Parcourir le catalogue, filtrer par catégorie, chercher sur la carte,
  filtrer le long des GR et des itinéraires cyclables
- Ouvrir une annonce, réserver, voir le décompte des frais se calculer
- Accepter une demande côté hôte, et voir le séquestre bouger
- Souscrire un Pass, demander un virement
- Consulter le compte de l'entreprise et son journal des revenus

## Bac à sable

**Aucun appel réseau, aucune base de données, aucun paiement.**

Le fichier `lib/demo-backend.js` du dépôt principal répond en mémoire, à la
place de l'API. Ses données ont été **capturées sur l'API réelle** : mêmes
formes, mêmes montants, mêmes identifiants. Rien n'est persisté — recharger
la page remet la démonstration à zéro.

Les calculs, eux, ne sont pas simulés : la grille tarifaire appliquée est la
vraie (1,50 € + 5 % côté voyageur, 5 % côté hôte).

## Contenu du dépôt

Ce dépôt ne contient **que le résultat de la construction** — le site
statique publié par GitHub Pages. Le code source vit dans le dépôt
principal de CampNest ; la démonstration s'y régénère avec :

```
npm run build:demo
```

`maquette.html` est conservé à part : c'est la présentation statique des
écrans, utile pour un envoi par email ou une impression.

---

*Écrans non contractuels. Données fictives.*
