---
id: lunaris
name: Lunaris
shortName: Lunaris
status: Published
effectiveDate: 2026-10-22
platform: Android
category: Wallpaper & Media
excerpt: Firebase-backed wallpaper app with guest and account modes, AdMob for free users, and Google Play subscription billing for Premium.
order: 9
logo: assets/images/apps/lunaris.png
---

# Privacy Policy for Lunaris

Effective date: October 22, 2026

Developer: 13 Dimensions Studio  
Contact: 13dimensions.studio@gmail.com  
Website: https://13dstudio.vercel.app/

This Privacy Policy explains how Lunaris ("App", "we", "us", or "our") by 13 Dimensions Studio handles information when you use the App.

## 1. Overview

Lunaris is an Android wallpaper application with guest and signed-in account modes. Guest users can browse, search, view collections and wallpapers, save favorites, and set wallpapers without a Lunaris account. Signed-in users get synchronized favorites, Base download quotas, and optional Premium access via Google Play subscription.

## 2. Information We Collect

### A. Guest Use (No Account)
Guest favorites, cached catalog and configuration data, announcement display and dismissal state, and app preferences are stored locally on your device. No personal information is transmitted to Lunaris servers during guest use.

### B. Accounts & Firebase Authentication
Lunaris uses **Firebase Authentication** for email/password accounts. Firebase processes your:
- Email address
- Account identifier (UID)
- Display name
- Authentication credentials
- Technical request metadata

Passwords are handled by Firebase Authentication. Lunaris does not store plaintext passwords in its own database.

### C. Firebase Firestore (Signed-In Users)
For signed-in users, Firebase Firestore stores:
- Account profile details (display name, email, timestamps)
- Synchronized favorite wallpaper IDs
- Date-keyed Base download quota counts

A selected profile photo is stored as a local device reference in the current app and is **not** uploaded to Lunaris servers. If an account profile has a remote photo URL, that URL may be stored with the profile.

### D. Device Storage & Images
Lunaris caches catalog and configuration data and app state locally. Wallpaper downloads and profile photo exports are saved to Android shared storage in the Lunaris gallery location. These remain on your device until you delete them. When you share an export, Android passes the file to the app you choose; that recipient handles it under its own privacy policy.

On older Android versions the App may request access to existing images to display saved Lunaris exports. On newer Android versions it uses Android media access mechanisms. The App does not request location, contacts, microphone, or camera permissions.

### E. Advertising (Guest & Base Users)
Guest and Base users may see **Google Mobile Ads (AdMob)** placements. Premium users do not see Lunaris ad placements. Google's Mobile Ads SDK may automatically collect or share:
- IP address
- App and ad interaction data
- Diagnostic information
- Device and account identifiers (including Advertising ID)

This data is used for ad delivery, measurement, analytics, and fraud prevention under Google's own policies. See [Google's Privacy Policy](https://policies.google.com/privacy) and [Google Mobile Ads data disclosure](https://developers.google.com/admob/android/privacy/play-data-disclosure).

### F. Subscription & Purchases
Premium subscriptions are processed by **Google Play Billing**. Google Play handles payment information and subscription management. Lunaris receives subscription and product status through Google Play and stores limited account-scoped entitlement metadata locally so access can be refreshed and briefly supported during network outages. Lunaris does not receive or store full payment-card or bank details. Manage or cancel subscriptions through Google Play.

### G. Network & Content Providers
Lunaris requests public catalog, wallpaper, announcement, and studio contact content from GitHub-hosted services. Network operators and content providers may process ordinary connection data such as IP address and request metadata to deliver requested files.

## 3. How We Use Information

We use information to:
- Create, secure, and manage user accounts
- Display profiles and synchronize favorites across devices
- Enforce Base download limits and provide Premium features
- Cache content and remember announcement state
- Save, display, set, and share wallpapers at your direction
- Deliver and measure advertisements for eligible users
- Prevent invalid activity and fraud
- Maintain and troubleshoot the App

## 4. Sharing of Information

We do not sell personal information. Information is shared with service providers as needed to operate Lunaris, including:
- **Firebase / Google** — authentication, Firestore, and cloud services
- **Google Play** — subscription and billing management
- **Google Mobile Ads** — advertising for guest and Base users
- **Public content hosting services** — wallpaper catalog delivery

When you initiate a share action, the third-party app you select receives the content you chose. We may also disclose information when required by law or to protect users, Lunaris, or our legal rights.

## 5. Data Retention & Account Deletion

Account information and synchronized favorites remain in Firebase while an account is active. Local app data remains on your device until app storage is cleared or the App is uninstalled. Exported wallpaper images in the device gallery are separate files and must be deleted independently.

**To request account deletion**, email **13dimensions.studio@gmail.com** from the address registered to your Lunaris account. Use the subject **"Lunaris account and data deletion."** Do not include your password. We will verify the request and delete the Firebase Authentication account and associated profile, favorites, and download quota records.

You can also initiate a request from within the App by opening **Profile → Contact Us**.

> Deleting your Lunaris account does **not** automatically cancel a Google Play subscription. Cancel your subscription separately in Google Play.

Local gallery exports are **not** deleted when the account is removed.

## 6. Security

We rely on Firebase and Google services to provide authentication, account data storage, advertising, and billing. These services use security measures described in their respective terms and policies. No internet service or local device storage can be guaranteed completely secure — keep your device and account credentials protected.

## 7. Children's Privacy

Lunaris is not designed to collect personal information from children under the age of 13. Account creation requires an email address. If you believe a child has provided account information through the App, contact us at the address above so we can review and take appropriate action.

## 8. International Processing

Service providers used by Lunaris may process information in countries other than your country of residence. Their privacy and data transfer terms apply to their processing in addition to this policy.

## 9. Changes to This Privacy Policy

We may update this policy as Lunaris changes. We will post the current version at the policy URL used in the app and on Google Play, and update the date at the top of this document.

## 10. Contact Us

If you have questions about this Privacy Policy or Lunaris's privacy practices, contact us at:

- **Email**: 13dimensions.studio@gmail.com  
- **Website**: https://13dstudio.vercel.app/
