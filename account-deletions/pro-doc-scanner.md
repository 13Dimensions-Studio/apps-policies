# Pro Document Scanner Account and Data Deletion Request

**Last updated: October 31, 2026**

The current Pro Document Scanner Android app does not include an in-app account deletion control. To request deletion of your Pro Document Scanner account and associated cloud records, contact 13 Dimensions Studio by email.

## How to request deletion

Email **13dimensions.studio@gmail.com** from the email address registered to your account. Use the subject **Pro Document Scanner account and data deletion** and state that you want your account and associated data deleted. Do not include your password.

If you cannot send the request from your registered address, explain the access problem. We may ask for information needed to verify that you own the account before processing the request.

The app's drawer also has a Contact Us action that opens an email to the studio. It does not itself delete an account.

## Scope and related data

A processed request covers the Firebase Authentication account and associated Firestore records that can be identified with that account, including the `displayName`, `email`, `plan`, `createdAt`, and `lastSeenAt` profile fields on `users/{uid}`, nested `users/{uid}/dailyUsage/{feature}` OCR and merge quota counters, any `manualOverrideStatus` on `users/{uid}`, and the separate reviewer entitlement document if applicable. The daily usage counters contain only a feature identifier, UTC day, and count; they are retained with the account until overwritten by a later day's use or removed through the account deletion request. A small device-local quota cache may remain until the UTC day changes and the app next accesses the quota, or until the app's local data is cleared.

Deleting the account does not:

- Delete documents or scans already saved in public Downloads or MediaStore. Delete those files separately on your device.
- Cancel an active Google Play subscription. Cancel it separately through Google Play.
- Remove records a service provider may retain under its own operational, security, financial, or legal retention rules.

For information about data handled by the app, see the [Privacy Policy](../index.html?app=pro-doc-scanner#pro-doc-scanner).

## Contact

For account deletion questions or requests, email [13dimensions.studio@gmail.com](mailto:13dimensions.studio@gmail.com).
