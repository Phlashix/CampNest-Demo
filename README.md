# CampNest — démonstration

Prototype interactif et maquette des écrans de **CampNest**, une place de marché
de camping entre particuliers en France : des propriétaires louent une parcelle
de leur terrain à des campeurs.

**➜ [Voir la démonstration](https://phlashix.github.io/CampNest-Demo/)**

---

## Ce que contient ce dépôt

| Fichier | Contenu |
|---|---|
| `index.html` | Page d'accueil, avec les deux entrées ci-dessous |
| `prototype.html` | **Prototype interactif** : parcours cliquable de bout en bout |
| `maquette.html` | **Maquette** : les sept écrans principaux, à leur taille réelle |

### Le prototype

Un parcours complet à dérouler :

1. **Connexion** — identifiants pré-remplis, aucune authentification réelle
2. **Tableau de bord de l'hôte** — indicateurs, courbe de croissance, demandes en attente
3. **Accepter une réservation** — le montant en séquestre augmente, une écriture
   apparaît au journal des revenus, une notification confirme
4. **Parcours voyageur** — recherche, annonce, décompte des frais, paiement, confirmation
5. **Portefeuille** — solde, abonnements Pass, retrait bancaire

Un sélecteur en haut de page bascule entre la vue **site web** et la vue
**application mobile**. Le bouton *Rejouer* remet la démonstration à zéro.

### La maquette

Rendu statique des écrans : catalogue, recherche cartographique avec les
sentiers GR et les itinéraires cyclables, page d'annonce, espace hôte, compte
de l'entreprise, application mobile.

---

## Bac à sable : aucune donnée réelle

Cette démonstration est **entièrement isolée**.

- Aucun appel réseau, aucune API, aucune base de données
- Toutes les données sont des constantes en tête de `prototype.html`
- Aucun paiement n'est effectué ; aucune donnée n'est enregistrée
- Recharger la page remet tout à l'état initial

Les montants suivent en revanche la **grille tarifaire réelle** de la plateforme :
1,50 € de frais fixes plus 5 % côté voyageur, 5 % côté hôte, 20 % sur les
services annexes. Un investisseur qui sort une calculette tombe juste.

---

## Ouvrir en local

Aucune dépendance, aucune compilation. Ouvrez `index.html` dans un navigateur —
un double-clic suffit, y compris hors connexion.

Pour servir le dossier localement :

```bash
python3 -m http.server 8000
```

Puis rendez-vous sur <http://localhost:8000>.

---

## Publier sur GitHub Pages

Le dépôt contient déjà le workflow `.github/workflows/pages.yml`. Après le
premier envoi :

1. **Settings › Pages › Build and deployment › Source** → choisissez
   **GitHub Actions**
2. Le workflow se déclenche à chaque `push` sur `main`
3. L'adresse publiée apparaît dans l'onglet **Actions**, puis dans **Settings › Pages**

> ⚠️ **Sur un compte gratuit, GitHub Pages n'est disponible que sur un dépôt
> public** : la démonstration sera accessible à quiconque connaît l'adresse.
> C'est sans risque ici — les données sont fictives — mais si vous préférez
> qu'elle reste confidentielle, gardez le dépôt privé et publiez plutôt sur
> Netlify ou Cloudflare Pages, qui déploient depuis un dépôt privé sans frais.

### Autres hébergeurs

Le dossier est un site statique ordinaire, déployable partout :

```bash
npx surge .                                   # Surge
npx vercel deploy --prod .                    # Vercel
npx wrangler pages deploy . --project-name campnest-demo   # Cloudflare Pages
```

---

## Technique

Le prototype est un composant **React 18** écrit avec
[`htm`](https://github.com/developit/htm) — les mêmes gabarits que JSX, en
littéraux de gabarit, sans étape de compilation. Les styles viennent de
**Tailwind CSS**, précompilé aux seules classes utilisées, et les icônes de
**lucide-react**.

Ces trois bibliothèques sont **embarquées dans le fichier**, pas chargées depuis
un CDN : la page fonctionne hors connexion et ne dépend d'aucun service tiers.
D'où sa taille, 710 Ko, dont l'essentiel est la bibliothèque d'icônes.

---

*Écrans non contractuels. Données fictives.*
