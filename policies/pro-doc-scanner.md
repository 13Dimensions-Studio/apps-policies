# Pro Document Scanner Privacy Policy

**Last updated: October 28, 2026**

Pro Document Scanner is provided by 13 Dimensions Studio (“we,” “us,” or “our”). This policy explains how the Pro Document Scanner Android application handles information when you use it.

**Contact:** [13dimensions.studio@gmail.com](mailto:13dimensions.studio@gmail.com)

---

## Information we handle

### On-device document processing & privacy
Pro Document Scanner is designed with a strict privacy-first architecture. All core document operations—including camera scanning, edge detection and perspective distortion correction, document filters, PDF generation, PDF merging, PDF compression, PDF splitting, password protection/encryption, PDF unlocking, PDF-to-image conversion, and text recognition (OCR)—**are performed entirely locally on your device**.

We do **not** transmit, upload, host, or inspect the contents of your scanned documents, camera captures, imported files, generated PDFs, or extracted OCR text on any remote server. Your files remain completely private to you.

### Accounts and Firebase
Pro Document Scanner offers user accounts to manage your profile, sync your subscription status, and verify access across devices. 

- **Firebase Authentication:** Handles email and password account creation, sign-in, and email verification. Firebase Authentication processes your email address, unique account identifier (UID), display name, and technical connection credentials to secure your account. Passwords are encrypted and managed exclusively by Firebase Authentication; Pro Document Scanner does not store or have access to plaintext passwords.
- **Firebase Firestore:** For signed-in users, Firestore stores cloud profile information including your display name, registered email address, account creation and update timestamps, subscription tier status (Free or Pro), and diagnostic billing status. If you are granted manual reviewer access, that authorization is recorded in your Firestore profile.

### Device storage, camera, and exports
- **Camera:** When you choose to scan physical documents, the app uses your device camera via CameraX to capture pages. Camera feeds are processed in real time in device memory and are never streamed or uploaded.
- **Storage & Media:** The app requests storage/media access solely to import existing PDF files or images you select for processing (e.g., merging, compressing, or OCR), and to save your finalized documents.
- **Saved Files:** Generated PDFs, compressed documents, split files, and exported images are saved directly to your device storage (such as your device’s `Downloads/Pro Document Scanner/` folder or app cache). These files remain under your sole ownership on your hardware until you choose to move, share, or delete them.
- **Sharing:** When you tap Share, Android’s standard system share sheet passes the selected document file to the recipient application of your choice (e.g., email client, cloud drive, messaging app). That third-party recipient handles your file under its own privacy policy.

### Advertising
Free (Base) users may see Google Mobile Ads (AdMob) placements, including banner, interstitial, and app open ads. Subscribed or authorized Pro users enjoy an ad-free experience. 

Google’s Mobile Ads SDK may automatically collect and process certain data—such as IP address, pseudonymous device identifiers (e.g., Android Advertising ID), app and ad interactions, and diagnostic metrics—for ad serving, frequency capping, fraud prevention, and performance measurement. For more details, consult [Google's Privacy Policy](https://policies.google.com/privacy) and [Google Mobile Ads data disclosure](https://developers.google.com/admob/android/privacy/play-data-disclosure).

### In-app purchases & subscriptions
Pro Document Scanner offers Pro subscriptions (Monthly, Yearly) and one-time Lifetime Pro access. All financial transactions and payment processing are handled securely by **Google Play Billing**. 

We do **not** collect, receive, or store your credit card numbers, bank information, or billing address. Google Play provides our application with entitlement receipts and product identifiers. We store limited entitlement state locally and in your Firestore account record so your Pro access can be confirmed, restored, and honored across app launches. You can manage or cancel recurring subscriptions at any time via Google Play Subscriptions.

### Remote configuration
The app periodically fetches public studio contact details (studio name, support email, website link, and LinkedIn profile) from studio-managed configuration hosted on secure web services (GitHub / Vercel). This request only transmits standard HTTP connection metadata (such as your device IP address) to deliver the configuration payload.

---

## How information is used

We use the limited information we process to:
- Authenticate your identity and secure your account.
- Synchronize and verify your Free vs. Pro entitlement across sessions.
- Process and generate PDF documents and extract text at your explicit direction on your device.
- Save and organize generated documents in your device's Downloads directory.
- Deliver non-intrusive advertisements to Base (Free) users.
- Display studio support and contact information.
- Provide customer support and troubleshoot application issues.

---

## Sharing

We do **not** sell, rent, or trade your personal information. Information is only shared with third-party service providers strictly necessary to operate the application:
- **Google / Firebase:** For cloud authentication, account record storage, and diagnostic metrics.
- **Google Play:** For subscription verification and billing processing.
- **Google Mobile Ads (AdMob):** For ad delivery and measurement to Free tier users.
- **Third-Party Apps You Select:** When you explicitly tap "Share" or open an export in another app on your device.

We may also disclose information if required to comply with applicable law, regulation, legal process, or governmental request.

---

## Retention and deletion

- **Account Data:** Your account information and subscription status remain in Firebase Authentication and Firestore as long as your account remains active.
- **Local Documents:** Scanned pages, PDFs, and exported images stored on your device or in `Downloads/Pro Document Scanner/` remain on your device until you manually delete them or uninstall the app.
- **Account & Data Deletion:** You have the right to request full deletion of your account and associated cloud data at any time. To request deletion, please email **13dimensions.studio@gmail.com** from your registered account email with the subject **“Pro Document Scanner account and data deletion”**, or refer to our [Account and Data Deletion Request](../account-deletions/?app=pro-doc-scanner#pro-doc-scanner) page. Deleting your account will remove your Firebase Authentication record and Firestore user profile. Please note that deleting your account does not cancel active Google Play subscriptions (which must be cancelled in Google Play), nor does it delete local files stored on your phone.

---

## Security

We leverage Google Cloud and Firebase infrastructure to safeguard your account records and authentication credentials. All network communications use standard TLS encryption. While we implement strict measures to protect your data, no mobile application or wireless transmission is 100% impenetrable; we encourage you to protect your device with a secure lock screen and keep your account password confidential.

---

## Children's privacy

Pro Document Scanner is not directed toward children under the age of 13. We do not knowingly collect personal information from children under 13. Account creation requires a valid email address. If you believe a child has provided us with personal information, please contact us immediately at [13dimensions.studio@gmail.com](mailto:13dimensions.studio@gmail.com) so we can promptly delete the account.

---

## International processing

Our service providers (Google, Firebase) may store and process information in the United States and other jurisdictions outside your home country. By using Pro Document Scanner, you acknowledge that your account data may be transferred to and maintained on servers located outside your state, province, or country.

---

## Changes to this policy

We may update this Privacy Policy from time to time. When changes are made, we will update the "Last updated" date at the top of this document. Continued use of the application after any modifications constitutes acceptance of the revised policy.

---

## Contact

If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:

**13 Dimensions Studio**  
Email: [13dimensions.studio@gmail.com](mailto:13dimensions.studio@gmail.com)  
Website: [https://13dstudio.vercel.app/](https://13dstudio.vercel.app/)
