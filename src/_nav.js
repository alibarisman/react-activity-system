export default {
  items: [
    {
      name: 'Anasayfa',
      url: '/dashboard',
      icon: 'icon-home'
    },
    {
      title: true,
      name: 'Menü',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Aktivite Ekle',
      url: '/forms/forms',
      icon: 'icon-speedometer',
    },
    {
      name: 'Aktivite Listesi',
      url: '/tables/tables',
      icon: 'icon-speedometer',
    },
    {
      name: 'Kullanıcılar',
      url: '/users',
      icon: 'icon-speedometer',
    },
    {
      divider: true,
    }
  ],
};
