import { routeNames } from './route-names';

export const menu = [
  {
    icon: '/icons/nav/dashboard.svg',
    activeIcon: '/icons/nav/dashboard-active.svg',
    title: 'Dashboard',
    link: routeNames.dashboard,
  },
  {
    icon: '/icons/nav/kendaraan.svg',
    activeIcon: '/icons/nav/kendaraan-active.svg',
    title: 'Kendaraan',
    link: routeNames.kendaraan,
  },
  {
    icon: '/icons/nav/pengemudixmekanik.svg',
    activeIcon: '/icons/nav/pengemudixmekanik-active.svg',
    title: 'Pengemudi & Mekanik',
    link: routeNames.pengemudiMekanik,
  },
  {
    icon: '/icons/nav/peringatan.svg',
    activeIcon: '/icons/nav/peringatan-active.svg',
    title: 'Peringatan',
    link: routeNames.peringatan,
  },
  {
    icon: '/icons/nav/service.svg',
    activeIcon: '/icons/nav/service-active.svg',
    title: 'Servis',
    link: routeNames.servis,
  },
  {
    icon: '/icons/nav/masalah-kendaraan.svg',
    activeIcon: '/icons/nav/masalah-kendaraan-active.svg',
    title: 'Masalah Kendaraan',
    link: routeNames.masalahKendaraan,
  },
  {
    icon: '/icons/nav/konfigurasi.svg',
    activeIcon: '/icons/nav/konfigurasi.svg',
    title: 'Konfigurasi',
    link: '',
    subMenu: [
      {
        title: 'Area Geofencing',
        link: routeNames.areaGeofencing,
      },
      {
        title: 'Atur Notifikasi Peringatan',
        link: routeNames.aturNotifikasiPeringatan,
      },
    ],
  },
  {
    icon: '/icons/nav/mobile-notification.svg',
    activeIcon: '/icons/nav/mobile-notification-active.svg',
    title: 'Mobile Notification',
    link: routeNames.mobileNotification,
  },
  {
    icon: '/icons/nav/user-management.svg',
    activeIcon: '/icons/nav/user-management-active.svg',
    title: 'User Management',
    link: routeNames.userManagement,
  },
  {
    icon: '/icons/nav/master-data.svg',
    activeIcon: '/icons/nav/master-data.svg',
    title: 'Master Data',
    link: '',
    subMenu: [
      {
        title: 'Spesifikasi Kendaraan',
        link: routeNames.spesifikasiKendaraan,
      },
      {
        title: 'Pengemudi',
        link: routeNames.pengemudi,
      },
      {
        title: 'Mekanik',
        link: routeNames.mekanik,
      },
    ],
  },
];
