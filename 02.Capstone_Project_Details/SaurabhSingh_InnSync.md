# Project Initial Report

## Saurabh Singh 12110796

### Project Name: Inn Sync

- Which problem Project is Solving?

  - Inn Sync project addresses the challenge of effectively managing a hotel by streamlining various operations through a web-based platform. This innovative solution tackles the complexities associated with tasks like user check-ins and check-outs, sales statistics, and other related processes. By offering a centralized system, the project aims to enhance efficiency, improve guest experiences, and optimize overall hotel management.

- What are existing similar solutions?

  - Hotelogix: A cloud-based hotel management system that provides features such as front desk management, housekeeping, and inventory management.
  - Cloudbeds: A cloud-based hotel management software that provides features such as property management, channel management, and revenue management.
  - eZee Absolute: A cloud-based hotel management software that provides features such as front desk management, housekeeping, and inventory management.

- How do you want to solve it?

  - Inn Sync aims to provide a user-friendly and intuitive interface that will make it easy for hotel staff to manage hotel operations such as front bookings, housekeeping, and revenue management.
  - Statistics on recent bookings, sales, check-ins, and occupancy rate.
  - The platform will be thoroughly tested to ensure that it is bug-free and stable.
  - Authentication and authorization features will be implemented to ensure that only actual hotel employees can get accounts.

- List of features you want to implement.

  - Dashboard

    - The initial app screen should be a dashboard, to display important information for the last 3 months.
    - A list of guests checking in and out on the current day.
    - Statistics on recent bookings, sales, check-ins, and occupancy rate.
    - A chart showing all daily hotel sales, showing both "total" sales and "extras" sales.
    - A representaion showing statistics on stay durations.

  - Authentication and Authorization

    - Users of the app are hotel employees. They can logged in into the application to perform tasks.
    - Ensuring only actual hotel employees can get accounts.
    - Users able to upload an avatar, and change their name and password

  - Cabins

    - Tabled view with all cabins, showing the cabin photo, name, capacity, price, and current discount.
    - Users should be able to update, delete or create new cabins.

  - Bookings

    - The app has a table view with all bookings, showing arrival and departure dates, status, and paid amount, as well as cabin and guest data.
    - The booking status can filtered by "unconfirmed", "checked in", or "checked out" status.
    - Other booking data includes: the number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price.

  - Check In/Out

    - Users able to delete, check-in, or check out a booking as the guest arrives (no editing necessary for now).
    - Confirming that payment has been received or not.
    - On check-in, breakfast should be provided if asked.

  - Guests

    - Guest data contain full name, email, national ID, nationality, and a country flag for easy identification.

  - Settings and customization

    - Users able to define a few application-wide settings: breakfast price, min and max nights/booking, max guests/booking etc.

  - Dark mode.
    - User should be able switch between Light and Dark Mode.
