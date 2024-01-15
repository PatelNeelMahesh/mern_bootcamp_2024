# Project Initial Report

## Shubhansu Kumar Singh & 12104991

### Project Name: OpenVault

- Which problem Project is Solving?

  - The OpenVault project aims to address the need for secure and controlled data sharing among users. It focuses on providing a platform where users can share files with encryption using public and private keys. The project seeks to enhance privacy and security in file sharing, similar to services like Dropbox, but with an added emphasis on encryption and secure access control. By allowing users to encrypt files and share them with specific individuals who possess the necessary keys, OpenVault addresses concerns related to unauthorized access and enhances the overall confidentiality of shared data. The feature of automatically deleting files after access adds an extra layer of security and privacy to the shared content.

- What are existing similar solutions?

  - Several existing solutions offer secure and controlled data sharing, often incorporating features similar to those described for the OpenVault project. Here's a list of some relevant solutions with corresponding features:

    1. **Dropbox:**
        - *File Sharing:* Allows users to share files and folders with others.
        - *Access Control:* Provides options to set access permissions for shared files.

    2. **Google Drive:**
        - *Collaboration:* Enables real-time collaboration on documents with specific users.
        - *Access Control:* Users can set different access levels (view, comment, edit) for shared files.

    3. **OneDrive (Microsoft):**
        - *Link Sharing:* Allows users to create shareable links with customizable permissions.
        - *Encryption:* Implements encryption for data transmission and storage.

    4. **Box:**
        - *Secure File Sharing:* Focuses on secure collaboration and file sharing for businesses.
        - *Access Tracking:* Provides activity logs to track who accessed shared files.

    5. **MEGA:**
        - *End-to-End Encryption:* Offers end-to-end encryption for all data stored and shared.
        - *Secure Chat:* Includes a secure chat feature for communication within the platform.

    6. **Tresorit:**
        - *Zero-Knowledge Encryption:* Employs end-to-end encryption with zero-knowledge architecture.
        - *Access Control:* Users can manage access permissions for shared files.

    7. **Sync.com:**
        - *Privacy Compliance:* Focuses on privacy and compliance with data protection regulations.
        - *Client-Side Encryption:* Encrypts data on the client-side before uploading to servers.

    8. **SpiderOak:**
        - *Zero-Knowledge Backup:* Utilizes a zero-knowledge approach to ensure privacy.
        - *File Sharing with Passwords:* Allows users to share files with password-protected links.

    Each of these solutions provides varying degrees of security, collaboration features, and access controls. OpenVault aims to differentiate itself by emphasizing strong encryption with public and private keys, automatic file deletion after access, and a user-friendly interface for secure data sharing.

- How do you want to solve it?

  - To address the goal of secure and controlled data sharing in OpenVault, you can follow a set of steps that build upon the existing solutions while addressing potential pain points:

    1. **User-Friendly Interface:**
        - Design an intuitive and user-friendly interface for easy navigation and file management.
        - Learn from the interfaces of popular solutions like Dropbox and Google Drive to identify design patterns that enhance user experience.

    2. **User Authentication and Authorization:**
        - Implement a robust user authentication system to ensure that only authorized users can access the platform.
        - Develop a role-based access control system to manage different levels of permissions for users.

    3. **End-to-End Encryption:**
        - Utilize a strong encryption algorithm (e.g., AES) for end-to-end encryption of files.
        - Generate public and private keys for users, ensuring that only those with the correct keys can decrypt and access files.
        - Leverage similar encryption principles as services like Tresorit or MEGA to enhance security.

    4. **Access Management:**
        - Implement a granular access control system, allowing users to specify who can access their files and under what conditions.
        - Provide options for setting expiration dates on shared files to enhance access control.
        - Learn from the access control features in Dropbox and OneDrive to refine your implementation.

    5. **Automatic File Deletion:**
        - Develop a mechanism to automatically delete files after they have been accessed to enhance security and privacy.
        - Consider implementing a background task or scheduled job to regularly check for and delete expired files.
        - Take inspiration from secure file-sharing platforms like SnapLink, which emphasizes self-destructing links.

    6. **Audit Trails and Activity Logs:**
        - Implement audit trails and activity logs to track user actions and file access.
        - Provide users with a history of who accessed their files and when, enhancing transparency and accountability.

    7. **Secure Key Management:**
        - Establish a secure key management system to generate, store, and manage public and private keys.
        - Ensure that keys are protected and only accessible to authorized users.

    8. **Secure File Transmission:**
        - Implement secure protocols for file transmission to protect data in transit.
        - Consider using HTTPS and other encryption standards to secure communication between clients and servers.

    9. **Regulatory Compliance:**
        - Ensure compliance with relevant privacy and data protection regulations.
        - Clearly communicate to users how their data is handled and stored, taking inspiration from the privacy-focused approach of services like Sync.com.

    10. **Regular Security Audits and Updates:**
        - Conduct regular security audits to identify and address vulnerabilities.
        - Stay informed about the latest security practices and update dependencies regularly.

    By addressing these steps, OpenVault aims to provide users with a secure, user-friendly, and privacy-focused platform for controlled data sharing with advanced encryption features. Learning from pain points and successes of existing solutions can guide the development process and improve the overall user experience.

- List of features you want to implement.
  - Certainly! Here's a comprehensive list of features that could be implemented in OpenVault, drawing inspiration from existing solutions and incorporating improvements:

    1. **User Authentication and Authorization:**
        - Secure user registration and login process.
        - Two-factor authentication for enhanced security.
        - Role-based access control with customizable permissions.

    2. **Intuitive User Interface:**
        - Clean and user-friendly dashboard for easy navigation.
        - Drag-and-drop functionality for effortless file uploading.
        - Responsive design for seamless access across devices.

    3. **End-to-End Encryption:**
        - Strong encryption using algorithms like AES for file security.
        - Public and private key generation for users.
        - Encrypted data transmission and storage.

    4. **Access Control:**
        - Granular control over who can access shared files.
        - Options to set view-only, edit, or download permissions.
        - Expiration dates for shared files to limit access duration.

    5. **Automatic File Deletion:**
        - Mechanism to automatically delete files after access.
        - Customizable deletion settings based on user preferences.
        - Recycle bin functionality for accidental deletions.

    6. **Audit Trails and Activity Logs:**
        - Detailed logs of user activities and file access.
        - Notifications for users when their files are accessed.
        - Download and export options for audit logs.

    7. **Secure Key Management:**
        - Centralized key management system for users.
        - Secure storage and retrieval of public and private keys.
        - Regular key rotation for added security.

    8. **File Versioning:**
        - Keep track of file versions for easy recovery.
        - View and restore previous versions of files.
        - Option to disable versioning for specific files.

    9. **Collaboration Features:**
        - Real-time collaboration on documents (similar to Google Docs).
        - Comments and annotations on shared files.
        - Notification system for collaborative activities.

    10. **Secure File Transmission:**
        - HTTPS protocol for secure data transmission.
        - Client-side encryption for added security during file upload.
        - Integration with secure file transfer protocols.

    11. **User Management:**
        - User profile customization and settings.
        - Account recovery options for forgotten passwords.
        - Multi-user account support for organizations.

    12. **Regulatory Compliance:**
        - Compliance with GDPR, HIPAA, or other relevant data protection regulations.
        - Clear communication of privacy policies and terms of service.
        - User consent management for data processing.

    13. **Search and Organization:**
        - Advanced search functionality for quick file retrieval.
        - File tagging and categorization for better organization.
        - Folders and subfolders for hierarchical file structure.

    14. **API Integration:**
        - API for third-party integrations and custom applications.
        - Integration with popular productivity tools (e.g., Microsoft Office, Google Workspace).

    15. **Performance Optimization:**
        - Efficient file indexing for fast search and retrieval.
        - CDN integration for faster content delivery.
        - Caching mechanisms for improved performance.

    16. **Scalability and Redundancy:**
        - Scalable architecture to handle growing user bases.
        - Redundant data storage for data durability and availability.
        - Load balancing for optimal resource utilization.

    By implementing these features, OpenVault aims to provide a comprehensive and secure platform for controlled data sharing, addressing the needs and preferences of users while building on the strengths of existing solutions.
