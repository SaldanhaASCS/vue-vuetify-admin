<template>
  <app-center>
    <template v-slot:page>
      <v-container class="container--fluid">
        <v-row>
          <v-col sm="12">
            <h3>Simple Guide</h3>
          </v-col>
          <v-col
            lg="4"
            sm="12"
          >
            <v-card
              id="card-1"
              color="purple"
              dark
            >
              <v-card-title class="pb-0">
                <h4>Basic card with `purple` background</h4>
              </v-card-title>
              <v-card-text>
                {{ cardText }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  small
                >
                  Link
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col
            lg="4"
            sm="12"
          >
            <v-card
              id="card-2"
              color="teal"
              dark
            >
              <v-card-title class="pb-0">
                <h4>Basic card with `teal` background</h4>
              </v-card-title>
              <v-card-text>
                {{ cardText }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  small
                >
                  Link
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col
            lg="4"
            sm="12"
          >
            <v-card
              id="card-3"
            >
              <v-card-title class="pb-0">
                <h4>Basic</h4>
              </v-card-title>
              <v-card-text>
                {{ cardText }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  small
                >
                  Link
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <p class="warn-content">
        {{ $t('guide.description') }}
        <a
          href="https://github.com/kamranahmedse/driver.js"
          target="_blank"
        >driver.js.</a>
      </p>
      <v-btn
        class="mx-2"
        color="success"
        @click.prevent.stop="guide"
      >
        {{ $t('guide.button') }}
      </v-btn>
    </template>
  </app-center>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import AppCenter from '@/views/widget/AppCenter.vue'
import steps from './defineSteps'

export default {
  name: 'Guide',
  components: {
    AppCenter
  },
  data: () => ({
    driver: null,
    cardText: 'Hey there, I am a very simple card. I am good at containing small bits of ' +
      'information. I am quite convenient because I require little markup to use effectively.'
  }),
  mounted () {
    this.driver = new Driver({
      // className: 'scoped-class', // className to wrap driver.js popover
      animate: false // Whether to animate or not
      // opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
      // padding: 10, // Distance of element from around the edges
      // allowClose: true, // Whether the click on overlay should close or not
      // overlayClickNext: false, // Whether the click on overlay should move next
      // doneBtnText: 'Done', // Text on the final button
      // closeBtnText: 'Close', // Text on the close button for this step
      // stageBackground: '#ffffff', // Background color for the staged behind highlighted element
      // nextBtnText: 'Next', // Next button text for this step
      // prevBtnText: 'Previous', // Previous button text for this step
      // showButtons: true, // Do not show control buttons in footer
      // keyboardControl: true, // Allow controlling through keyboard (escape to close, arrow keys to move)
      // scrollIntoViewOptions: {}, // We use `scrollIntoView()` when possible, pass here the options for it if you want any
      // onHighlightStarted: (Element) => {}, // Called when element is about to be highlighted
      // onHighlighted: (Element) => {}, // Called when element is fully highlighted
      // onDeselected: (Element) => {}, // Called when element has been deselected
      // onReset: (Element) => {}, // Called when overlay is about to be cleared
      // onNext: (Element) => {}, // Called when moving to next step on any step
      // onPrevious: (Element) => {} // Called when moving to previous step on any step
    })
  },
  methods: {
    guide () {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>
