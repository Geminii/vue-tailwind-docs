<template>
  <fieldset :class="{ 'ring ring-2 ring-blue-500 ring-opacity-50': selected }">
    <div
      class="flex items-center p-4 text-base font-medium leading-6 text-gray-900 cursor-pointer"
      :class="{
        'border-b': selected,
        'border-t': index > 0,
        'border border-green-200 ': ready
      }"
      @click="$emit('select')"
    >
      <icon v-if="ready" class="w-4 h-4 text-green-500">
        <polygon id="Path-126" points="0 11 2 9 7 14 18 3 20 5 7 18" />
      </icon>
      <icon v-else-if="selected" class="w-4 h-4 text-gray-600">
        <path id="Combined-Shape" d="M12.2928932,3.70710678 L0,16 L0,20 L4,20 L16.2928932,7.70710678 L12.2928932,3.70710678 Z M13.7071068,2.29289322 L16,0 L20,4 L17.7071068,6.29289322 L13.7071068,2.29289322 Z" />
      </icon>
      <icon v-else class="w-4 h-4 text-gray-300">
        <path id="Combined-Shape" d="M9,8.5 L9,4 L11,4 L11,9.58578644 L14.9497475,13.5355339 L13.5355339,14.9497475 L9,10.4142136 L9,8.5 Z M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z" />
      </icon>

      <span class="ml-2">{{ componentName }}</span>

      <icon class="w-4 h-4 ml-auto text-gray-600">
        <polygon v-if="selected" id="Combined-Shape" points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8" />
        <polygon v-else id="Combined-Shape" points="10.7071068 7.05025253 10 6.34314575 4.34314575 12 5.75735931 13.4142136 10 9.17157288 14.2426407 13.4142136 15.6568542 12" />
      </icon>
    </div>

    <theme-configurator
      v-show="selected"
      v-model="currentComponentTheme"
      :component-name="componentName"
      :wrapped-theme="componentWrappedTheme"
      :not-wrapped-theme="componentNotWrappedTheme"
      class="p-4 pb-0"
    />

    <div v-if="selected" class="flex justify-between p-4 pt-0">
      <t-button type="button" @click="nextComponent">
        Next component →
      </t-button>
    </div>
  </fieldset>
</template>

<script>
import Vue from 'vue'
import isEqual from 'lodash/isEqual'
import get from 'lodash/get'
import cloneDeep from 'lodash/cloneDeep'
import Icon from '@/components/Icon'
import ThemeConfigurator from '@/components/ThemeConfigurator.vue'

export default Vue.extend({
  components: {
    Icon,
    ThemeConfigurator
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    },
    componentName: {
      type: String,
      required: true
    },
    wrappedTheme: {
      type: Object,
      default: undefined
    },
    notWrappedTheme: {
      type: Object,
      default: undefined
    }
  },
  data () {
    return {
      currentComponentTheme: {},
      ready: false
    }
  },
  computed: {
    componentWrappedTheme () {
      return cloneDeep(get(this.wrappedTheme, this.componentName))
    },
    componentNotWrappedTheme () {
      return cloneDeep(get(this.notWrappedTheme, this.componentName))
    },
    isReady () {
      return this.selected.length > 0
    }
  },

  watch: {
    async selected (selected) {
      if (selected) {
        await this.$nextTick()
        this.$el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    isReady (isReady) {
      this.$emit(isReady ? 'ready' : 'noready')
    },
    currentComponentTheme: {
      handler (currentComponentTheme) {
        if (!isEqual(currentComponentTheme, this.value)) {
          this.$emit('input', currentComponentTheme)
        }
      },
      deep: true
    },
    value: {
      handler (value) {
        this.currentComponentTheme = value
      },
      immediate: true
    }
  },

  methods: {
    nextComponent () {
      this.ready = true
      this.$emit('next')
    }
  }
})
</script>
