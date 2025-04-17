## User Management System with Admin Panel

A comprehensive User Management System coupled with an Admin 
Panel that provides core functionalities such as user registration, profile 
management, and real-time communication via notifications.

Tech stack : nodejs, express, mongodb

User Functionality 
1. User Authentication 
        - Implement secure login and sign-up functionality using email and 
password. 
 
2. Profile Management 
        - Allow users to update their profiles with the following details: 
        - Name 
        - Mobile Number 
        - Bio 
        - Availability Time (time slots indicating when the user is available for 
notifications). 
 
3. Profile Updates 
    - Provide users with the ability to modify their profile details at any time. 
 
4. Notification System 
        - Users can send notifications to one or multiple users, consisting of: 
        - A brief embedded text message. 
    - Notifications should adhere to the recipient's availability: 
        - Available Time: The notification is displayed immediately. 
        - Unavailable Time: The notification is queued and delivered when the 
recipient becomes available. 

Admin Functionality 
 
1. Notification Management 
    - Admin can send notifications to: 
        - A single user. 
        - Multiple users simultaneously. 
    - Admin has the ability to classify notifications as: 
        - Critical Notifications: Delivered immediately, regardless of the 
recipient's availability. 
        - Non-Critical Notifications: Delivered based on the recipient's 
availability.