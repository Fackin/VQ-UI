<template>
  <div class="vq__anglesign"
    :class="['vq__anglesign--'+position, {'is-hidden': hidden}]"
      :style="{background:bgcolor, color:color, width:width}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VqAnglesign',
  props: {
    position: {
      type: String,
      default: 'lt'
    },
    bgcolor: {
      type: String,
      default: '#47bac1'
    },
    color: {
      type: String,
      default: '#fff'
    },
    width: {
      type: String,
      default: '2em'
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  }
}
</script>