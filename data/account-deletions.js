window.ACCOUNT_DELETION_DATA = {
    accountDeletions: [
        {
            id: "lunaris",
            name: "Lunaris",
            shortName: "Lunaris",
            status: "Available",
            effectiveDate: "2026-10-22",
            platform: "Android",
            category: "Wallpaper & Media",
            logo: "assets/images/apps/lunaris.png",
            excerpt: "Request deletion of your Lunaris Firebase Authentication account, synchronized favorites, and download quota data.",
            requestEmail: "13dimensions.studio@gmail.com",
            emailSubject: "Lunaris account and data deletion",
            order: 1,
            content: `# Lunaris — Account & Data Deletion Request

Effective date: October 22, 2026

Developer: 13 Dimensions Studio  
Contact: 13dimensions.studio@gmail.com

Lunaris uses Firebase Authentication for user accounts. You may request the deletion of your Lunaris account and all associated data at any time.

## How to Submit a Request

Email **13dimensions.studio@gmail.com** from the email address registered to your Lunaris account with the subject line:

> **"Lunaris account and data deletion"**

In the message, state that you want your account and associated data deleted. **Do not include your password.**

If you cannot email from the registered address, contact us at the same email and explain the access problem. We may need to verify account ownership before processing.

You can also initiate a request directly from the App by going to **Profile → Contact Us**.

## What Will Be Deleted

After verifying and processing your request, we will delete:

- Your Firebase Authentication account
- Your Lunaris profile data (display name, email, timestamps)
- Synchronized favorite wallpaper IDs
- Base download-quota records

## What Will NOT Be Deleted

- **Wallpaper or profile-photo exports** already saved to your device or gallery — delete these separately from your device.
- **Your Google Play subscription** — cancelling your Lunaris account does not cancel billing. Cancel your subscription separately via Google Play before or after submitting the deletion request.
- **Limited service-provider records** that Firebase or Google may retain for operational, security, or legal reasons under their own retention terms.

## Timeline

We aim to process verified deletion requests within **30 days** of receiving them.

## More Information

For full details about what information Lunaris handles and how it is used, see the [Lunaris Privacy Policy](../index.html?app=lunaris#lunaris).

## Contact

For account-deletion questions or requests, contact us at:

- **Email**: 13dimensions.studio@gmail.com
- **Website**: https://13dstudio.vercel.app/
`
        },
        {
            id: "pro-doc-scanner",
            name: "Pro Document Scanner",
            shortName: "Pro Document Scanner",
            status: "Available",
            effectiveDate: "2026-10-31",
            platform: "Android",
            category: "Productivity",
            logo: "assets/images/apps/prodocscanner.png",
            excerpt: "Request deletion of your Pro Document Scanner Firebase Authentication account and associated cloud profile, subscription status, and Firestore records.",
            requestEmail: "13dimensions.studio@gmail.com",
            emailSubject: "Pro Document Scanner account and data deletion",
            order: 2,
            content: `# Pro Document Scanner Account and Data Deletion Request

**Last updated: October 31, 2026**

The current Pro Document Scanner Android app does not include an in-app account deletion control. To request deletion of your Pro Document Scanner account and associated cloud records, contact 13 Dimensions Studio by email.

## How to request deletion

Email **13dimensions.studio@gmail.com** from the email address registered to your account. Use the subject **Pro Document Scanner account and data deletion** and state that you want your account and associated data deleted. Do not include your password.

If you cannot send the request from your registered address, explain the access problem. We may ask for information needed to verify that you own the account before processing the request.

The app's drawer also has a Contact Us action that opens an email to the studio. It does not itself delete an account.

## Scope and related data

A processed request covers the Firebase Authentication account and associated Firestore records that can be identified with that account, including the \`displayName\`, \`email\`, \`plan\`, \`createdAt\`, and \`lastSeenAt\` profile fields on \`users/{uid}\`, nested \`users/{uid}/dailyUsage/{feature}\` OCR and merge quota counters, any \`manualOverrideStatus\` on \`users/{uid}\`, and the separate reviewer entitlement document if applicable. The daily usage counters contain only a feature identifier, UTC day, and count; they are retained with the account until overwritten by a later day's use or removed through the account deletion request. A small device-local quota cache may remain until the UTC day changes and the app next accesses the quota, or until the app's local data is cleared.

Deleting the account does not:

- Delete documents or scans already saved in public Downloads or MediaStore. Delete those files separately on your device.
- Cancel an active Google Play subscription. Cancel it separately through Google Play.
- Remove records a service provider may retain under its own operational, security, financial, or legal retention rules.

For information about data handled by the app, see the [Privacy Policy](../index.html?app=pro-doc-scanner#pro-doc-scanner).

## Contact

For account deletion questions or requests, email [13dimensions.studio@gmail.com](mailto:13dimensions.studio@gmail.com).
`
        }
    ]
};
