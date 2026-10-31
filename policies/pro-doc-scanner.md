# Pro Document Scanner Privacy Policy

**Last updated: October 31, 2026**

Pro Document Scanner is provided by 13 Dimensions Studio (“we,” “us,” or “our”). This policy describes the information handled by the current Android app build.

**Contact:** [13dimensions.studio@gmail.com](mailto:13dimensions.studio@gmail.com)

---

## Information and processing

### Documents, images, camera, and OCR

The app performs scanning, page detection and perspective correction, PDF creation, PDF merging, PDF compression, PDF splitting, PDF protection/unlocking, PDF-to-image conversion, and OCR on the device. The app does not upload document contents or extracted OCR text to a Pro Document Scanner document-processing server.

When you choose to scan or use OCR with the camera, the app captures images on the device. When you choose an existing image or PDF, Android's picker gives the app access to that selected item for the requested operation.

### Accounts and Firebase

The app uses Firebase Authentication for email/password registration, sign-in, and email verification. Firebase handles account identity and credentials; the app does not store plaintext passwords.

Firebase Authentication is the source for account identity and profile details such as name, email, sign-in provider, and email verification. For manual account identification, the app stores `displayName`, `email`, the effective plan label, the account creation timestamp, and a last-seen timestamp in `users/{uid}`. The plan label is informational and is not used to grant access. `createdAt` is written once; `lastSeenAt` is updated at most once per account per 24 hours. The app does not store provider or verification copies, app-version details, or purchase tokens there. Firestore may also contain an administrator-managed `manualOverrideStatus` on `users/{uid}` and reviewer access in the separate `premiumEntitlements/{uid}` document. To enforce the Free plan's daily limits across accounts and devices, the app records a small per-account counter for OCR and PDF merge operations in `users/{uid}/dailyUsage/{feature}`. Each counter contains the feature identifier, UTC day, and number of uses for that day; it is updated when a Free user performs the operation. A device-local cache keeps the current account's daily count and any offline uses pending until they can be synchronized. Firestore access is governed by the project's security rules.

Google Play Billing runs on the device and returns purchase state to the app. When starting a purchase, the app sends Google Play a SHA-256 obfuscation of the signed-in Firebase account ID to associate the purchase with the app account. The current implementation is client-trusted; it does not verify purchases with a trusted server. The app caches entitlement state locally for the associated Firebase account, uses a bounded offline grace period for subscriptions, and treats lifetime purchases separately. Google Play handles payment processing. The app does not receive card numbers or bank account details.

### Device storage and sharing

The app uses public Downloads folders for generated PDFs, merged/compressed/split/protected/unlocked PDFs, converted images, and saved OCR text. Scan captures are kept in app-specific external storage and copied to the device MediaStore under Pictures/ProDocScanner when possible. OCR camera captures use app-specific external Pictures storage. Files remain on the device until you delete them or remove the app-specific data; public Downloads and MediaStore files may remain after uninstall.

When you choose Share, Android passes the selected file or text to the app you choose. That recipient handles the content under its own policies.

### Advertising and remote links

Free users may see Google Mobile Ads placements, including app-open, banner, and interstitial ads. Pro users are not shown those app ad placements. The Mobile Ads SDK may process device/ad identifiers, IP address, ad interaction, and diagnostic data for ad serving, measurement, fraud prevention, and related purposes. See [Google's Privacy Policy](https://policies.google.com/privacy) and [Google Mobile Ads data disclosure](https://developers.google.com/admob/android/privacy/play-data-disclosure).

The app fetches public studio/contact links from the JSON endpoint configured in the app's `remote_links_config_url` resource and caches the values locally. The current endpoint is hosted on GitHub. The request sends ordinary network connection metadata, such as IP address, to the endpoint host.

## How information is used and shared

Information is used to authenticate accounts, maintain session state, apply administrator-managed access overrides, enforce per-account daily OCR and merge limits, display studio contact information, serve ads to Free users, and perform the document operation you request on-device.

We do not sell personal information. The app uses Google/Firebase for authentication and profile data, Google Play for purchases, Google Mobile Ads for advertising, the configured remote-links host for studio links, and third-party apps you select to receive shared files or text. Information may also be disclosed where required by law.

## Retention and deletion

Firebase Authentication retains account identity under its own retention rules. Firestore retains the latest daily OCR and merge counters and any administrator-managed access override while they remain in use. Daily counters are overwritten as the UTC day changes; account deletion requests cover the account's nested daily usage records and any user document. The device-local quota cache ignores prior-day values after the UTC date changes and overwrites them the next time quota is accessed; clearing app data removes the cache. Other local app-specific files are removed when app data is removed or the app is uninstalled; files saved to public Downloads or MediaStore may remain and should be deleted separately.

The current app does not provide an in-app account deletion operation. To request deletion of the Firebase Authentication account and associated cloud records, follow [the account and data deletion instructions](../account-deletions/?app=pro-doc-scanner#pro-doc-scanner). Deleting an account does not cancel a Google Play subscription or delete public files already saved to the device. Cancel subscriptions through Google Play.

## Security and children's privacy

Firebase and Google services use their own security controls, and the app communicates with those services over their configured network connections. No method of transmission or storage is completely secure; protect your device and account credentials.

The app is not directed to children under 13 and does not knowingly seek to collect personal information from children under 13. Contact us if you believe a child has provided account information so we can review the request.

## International processing and changes

Google, Firebase, and other service providers may process information in countries other than your own under their terms and policies. We may update this policy; the date above will be changed when we do.

## Contact

**13 Dimensions Studio**  
Email: [13dimensions.studio@gmail.com](mailto:13dimensions.studio@gmail.com)  
Website: [https://13dstudio.vercel.app/](https://13dstudio.vercel.app/)
