const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

const delay = 250;// delay between calls
let throttled = false; // are we currently throttled?

const plugin = {
	install: (Vue) => {

    const bootstrap = {
      width: window.innerWidth
    }

    window.addEventListener('resize', () => {
      // only run if we're not throttled
      if (!throttled) {
        // actual callback action
        bootstrap.width = window.innerWidth

        // we're throttled!
        throttled = true;
        // set a timeout to un-throttle
        setTimeout(function() {
          throttled = false;
        }, delay);
      }  
    });

		Vue.mixin({
			beforeCreate() {
        Vue.util.defineReactive(this, '_bootstrap', bootstrap);
			}
		});

		Object.defineProperty(Vue.prototype, '$bootstrap', {
			get: function() {
				return this.$root._bootstrap;
			}
    }); 

    Vue.prototype.$mediaBreakpointUp = function(key) {
      if (key) {
        return this.$root._bootstrap.width > breakpoints[key]
      }
      return null
		};

    Vue.prototype.$mediaBreakpointDown = function(key) {
      if (key) {
        return this.$root._bootstrap.width < (breakpoints[key] - .2)
      }
      return null
    };
    
    Vue.prototype.$mediaBreakpointBetween = function(start, end) {
      if (start, end) {
        return this.$root._bootstrap.width > breakpoints[start] && this.$root._bootstrap.width < breakpoints[end]
      }
      return null
		};

    Vue.prototype.$mediaBreakpointOnly = function(key) {
      if (key === 'xs') {
        return this.$root._bootstrap.width < (breakpoints.sm - .2)
      } else if (key === 'sm') {
        return this.$root._bootstrap.width > breakpoints.sm && this.$root._bootstrap.width < (breakpoints.md - .2)
      } else if (key === 'md') {
        return this.$root._bootstrap.width > breakpoints.md && this.$root._bootstrap.width < (breakpoints.lg - .2)
      } else if (key === 'lg') {
        return this.$root._bootstrap.width > breakpoints.lg && this.$root._bootstrap.width < (breakpoints.xl - .2)
      } else if (key === 'xl') {
        return this.$root._bootstrap.width > breakpoints.xl
      }
      return null
    };
	}
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin;