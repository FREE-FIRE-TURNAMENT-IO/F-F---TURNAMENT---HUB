// Example trusted backend concept. Deploy as a Firebase Cloud Function/Cloud Run service.
// Never place service-account credentials in the GitHub Pages frontend.
//
// import {getAuth} from "firebase-admin/auth";
// await getAuth().setCustomUserClaims(USER_UID, {admin:true});
//
// Then Firestore Rules can use request.auth.token.admin == true.
//
// Also perform:
// - wallet ledger writes
// - payment approval
// - withdrawal approval
// - room credential reveal authorization
// - result publication
// - audit logging
// in trusted backend code.