# 🚀 Guide de Déploiement - Dame Samoussa

## Étape 1 : Créer le Dépôt GitHub

### Option A : Via l'Interface Web GitHub (Recommandé)

1. Allez sur https://github.com/new
2. **Nom du dépôt** : `dame-samoussa`
3. **Description** : `Funnel de vente pour Dame Samoussa - Snacks africains premium`
4. **Visibilité** : Public
5. **NE PAS** cocher "Add a README file", "Add .gitignore" ou "Choose a license"
6. Cliquez sur **"Create repository"**

### Option B : Via GitHub CLI (Si installé)

```bash
gh repo create dame-samoussa --public --source=. --remote=origin
```

## Étape 2 : Connecter et Pousser le Code

Une fois le dépôt créé sur GitHub, exécutez ces commandes :

```bash
cd C:\Users\ADMIN\Downloads\dame-samoussa-funnel

# Ajouter l'origine GitHub (remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE-USERNAME/dame-samoussa.git

# Renommer la branche en main (si nécessaire)
git branch -M main

# Pousser le code
git push -u origin main
```

## Étape 3 : Activer GitHub Pages

1. Allez sur votre dépôt GitHub : `https://github.com/VOTRE-USERNAME/dame-samoussa`
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **"Build and deployment"** :
   - **Source** : Sélectionnez `GitHub Actions`
5. Sauvegardez

## Étape 4 : Déploiement Automatique

GitHub Actions va automatiquement :
- Détecter le push sur la branche `main`
- Installer les dépendances
- Construire le projet
- Déployer sur GitHub Pages

Vous pouvez suivre le déploiement dans l'onglet **Actions** de votre dépôt.

## ✅ Vérification

Une fois le déploiement terminé (environ 2-3 minutes), votre site sera accessible à :

```
https://VOTRE-USERNAME.github.io/dame-samoussa/
```

## 🔄 Mises à Jour Futures

Pour mettre à jour le site, il suffit de :

```bash
# Faire vos modifications dans le code
# Puis commiter et pousser
git add .
git commit -m "Description des modifications"
git push
```

Le site sera automatiquement reconstruit et redéployé !

## 🌐 Déploiement sur Cloudflare Pages (Optionnel)

Si vous voulez aussi déployer sur Cloudflare Pages :

1. Allez sur https://dash.cloudflare.com/
2. Cliquez sur **Pages** > **Create a project**
3. Connectez votre dépôt GitHub `dame-samoussa`
4. **Configuration du build** :
   - **Framework preset** : Vite
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
5. Cliquez sur **Save and Deploy**

Votre site sera disponible sur une URL Cloudflare (ex: `dame-samoussa.pages.dev`)

## 🆘 Aide

Si vous rencontrez des problèmes, vérifiez :
- Que le fichier `.github/workflows/deploy.yml` est bien présent
- Que GitHub Pages est configuré sur "GitHub Actions"
- Les logs dans l'onglet **Actions** de GitHub

---

**Besoin d'aide ?** Contactez-moi ou consultez la documentation GitHub Pages.
