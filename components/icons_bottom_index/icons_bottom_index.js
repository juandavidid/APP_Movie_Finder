Component({
  mixins: [],
  data: {
    typeIcons:[ "UpOutline",'SearchOutline','StarOutline'],  // array para recorre iconos y que se multiple la estructura
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    // 1. Funcion que redirige a la Page search Movies
    clickSearch(){
      my.navigateTo({
        url:"/pages/search_movies/search_movies"
      })
    }
  },
});
