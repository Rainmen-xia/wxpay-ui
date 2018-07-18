import NavConfig from './nav.config.json';
import demos from './demos.vue';
const registerRoute = (config) => {
  let route = [];
  config.map(nav =>
    nav.list.map(page =>
      route.push({
        name: page.name,
        path: page.path,
        component: require(`./pages${page.path}.vue`).default,
        meta: {
          title: page.title || page.name,
        }
      })
    )
  );

  return { route, navs: config };
};

const route = registerRoute(NavConfig);
 
export const navs = route.navs;

route.route.push({
  path: '/',
  component: demos
});


export default route.route;
