# PRIME MIKU — Free Fire Tournament UI

Mobile-first GitHub Pages prototype for:
- PRIME MIKU splash animation
- player register/login
- unique player ID
- gaming-name welcome screen
- Classic Bermuda Solo 1 vs 49
- match list with countdown
- 10-minute room lock concept
- joined-player access-code gate
- room ID/password reveal
- match history/result dashboard
- UID + level + kills display
- withdrawal/support UI
- separate Admin UI for match create/edit/delete/result publishing

## Important
This repository is a **demo/prototype**. It does NOT implement live UPI collection, real-money wallet credit, cash withdrawals, or a real admin password.

For a production deployment:
1. Host the frontend on GitHub Pages.
2. Create a Firebase project.
3. Enable Firebase Authentication (email/password).
4. Create Firestore.
5. Deploy the provided Firestore Rules.
6. Use Firebase Admin SDK in Cloud Functions/Cloud Run to set `admin=true` custom claims.
7. Keep wallet/reward/payment/withdrawal writes server-side.
8. Use a compliant payment provider for any real-money flow. Never trust a client-supplied UTR or amount.
9. Use a scheduled trusted backend job to move finished matches to history.
10. Never store an admin password, service-account JSON, or private API key in GitHub.

## GitHub Pages
Upload the project to a GitHub repository and enable Pages from the repository settings.

`firebase-config.example.js` should be copied to `firebase-config.js` with the Firebase Web App config. The Firebase Web config itself is not an Admin SDK secret.

## Data model
players/{uid}
matches/{matchId}
matches/{matchId}/joins/{uid}
results/{matchId}
supportThreads/{uid}/messages/{messageId}
publicConfig/{doc}

For real money:
- paymentRequests/{requestId}
- walletLedger/{ledgerId}
- withdrawalRequests/{requestId}

Those money collections must be written/approved by trusted backend code only.

## Why the demo uses localStorage
It lets you preview the complete UI from GitHub Pages without exposing secrets. It is not a secure database and must not be used as the production wallet or tournament database.
