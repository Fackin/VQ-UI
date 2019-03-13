/**
 * @author fackin
 * Date: 19/03/13
 */
export default {
  name: 'VqCol',

  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object]
  },

  computed: {
    gutter () {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'VqRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  },
  render (h) {
    let classList = [];
    let style = {};

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }

    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop]) {
        classList.push(
          prop !== 'span'
            ? `vq-col-${prop}-${this[prop]}`
            : `vq-col-${this[prop]}`
        );
      }
    });

    ['xs', 'sm', 'md', 'lg'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`vq-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `vq-col-${size}-${prop}-${props[prop]}`
              : `vq-col-${size}-${props[prop]}`
          );
        });
      }
    });

    return h(this.tag, {
      class: ['vq-col', classList],
      style
    }, this.$slots.default);
  }
};
