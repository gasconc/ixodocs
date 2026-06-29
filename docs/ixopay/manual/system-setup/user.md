---
title: User
summary: ' System Setuphttps://documentation.ixopay.com/manual/docs/system-setup'
tags:
- ixopay
- dashboard
source_url: https://documentation.ixopay.com/manual/docs/system-setup/user
portal: ixopay-manual
updated: '2026-06-29'
related: []
---

* [System Setup](https://documentation.ixopay.com/manual/docs/system-setup)
  * User

# User
tip
User access is possible from all common web browsers (incl. on mobile devices). Mobile devices support is limited regarding administrative functions (e.g. Post-Processing, Fast Editor)
Create and edit Users who shall have access to your Payment management platform (Tenant level):
  1. Navigate to the **Users** section in the **System Setup**
  2. Select **+ New User** in the Tenant User Overview (see Tenant User Overview)
  3. Fill in the needed information to create a new user (see User Form):
    1. **Username** : Give a significant login name
    2. **First Name**
    3. **Last Name**
    4. **Email** - needed to sent Notifications and [Alerts](https://documentation.ixopay.com/manual/docs/administrative-tools/manage-and-visualize-alerts)
    5. Assign a **Role** for the user (see also [Roles](https://documentation.ixopay.com/manual/docs/system-setup/roles))
    6. Enter a **Password** according to the Password Policy or select **Generate** for the [IXOPAY platform](https://www.ixopay.com) to create a random one for the user
    7. Alternatively, select **Send e-mail with link to reset the password** for the user to reset the password themselves (the reset password link validity is 24 hours with exception of the setup link for a newly created user which is valid for 7 days)
    8. Validate your entries and save the created user with **+ Create User**

After creation the new user will shows up in the Tenant User Overview for further editing among all other tenant users including their **Status** and **Role**. This view can be filtered (including Sub-Tenant Users) and you also can directly **disable** users. Further select **Edit** to;
  * Edit all the option mentioned during user creation
  * Reset the Dashboard
  * Archive the user
  * Disable the user

![Tenant User Overview](https://documentation.ixopay.com/manual/assets/ideal-img/tenant-user-overview.0d6498c.1280.png)Tenant User Overview![User Form](https://documentation.ixopay.com/manual/assets/ideal-img/user-form.a44366c.1280.png)User Form![Editing Users](https://documentation.ixopay.com/manual/assets/ideal-img/editing-users.05f3130.1280.png)Editing Users
info
The following password criteria must be fulfilled:
  * At least 12 characters required
  * Includes a lower case character
  * Includes a upper case character
  * Includes a number
  * Includes a special character

tip
The IXOPAY platform gives you the option to grant limited access to the platform by entering a User Validity. After this date the user will not be able to access the IXOPAY platform anymore.