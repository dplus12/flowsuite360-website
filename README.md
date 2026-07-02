# FlowSuite360 Website

Site vitrine public de FlowSuite360.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Pages publiques

- `/` Accueil
- `/modules` Liste des modules
- `/modules/smartpos` Page produit SmartPOS
- `/modules/brickflow` Page produit BrickFlow
- `/demo` Demande de démo et candidature au programme pilote
- `/contact` Contact
- `/login` Connexion V1
- `/signup` Inscription V1
- `/about` À propos
- `/autoformation/flowsuite360-autoformation-client-cartes.html` Auto-formation client, si le fichier est présent dans `public/autoformation`

La route `/pricing` redirige vers l’accueil et ne doit pas être liée publiquement.

## Note de programmation

Pour éviter les blocages liés à OneDrive (`.next`, `readlink`, fichiers non disponibles localement, permissions), travailler hors OneDrive pendant la phase de programmation, par exemple :

```powershell
C:\Dev\flowsuite360-website
```

## Commandes

```bash
npm install
npm run dev
npm run build
```
