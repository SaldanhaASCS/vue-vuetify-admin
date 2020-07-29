<template>
  <v-container class="container--fluid">
    <app-widget title="Basic Usage">
      <div slot="widget-content">
        <v-item-group mandatory>
          <v-sheet
            class="overflow-y-auto"
            max-height="600"
            tile
          >
            <v-item
              v-for="[
                c,
                text,
                size,
                weight,
                spacing,
                margin
              ] in classes"
              :key="c"
            >
              <template v-slot="{active, toggle}">
                <v-sheet
                  :color="active ? 'grey lighten-4' : undefined"
                  class="px-4 pt-4 pb-3"
                  tile
                  style="cursor: pointer;"
                  @click="toggle"
                >
                  <div
                    :class="[`text-${c}`, active && `mb-${margin}`]"
                    class="transition-swing"
                    v-text="text"
                  />

                  <v-expand-transition>
                    <v-responsive
                      v-if="active"
                      max-width="350"
                    >
                      <div class="d-flex justify-space-between caption">
                        <div>
                          <div class="grey--text mb-2">
                            Font
                          </div>

                          <div class="font-weight-medium">
                            Roboto
                          </div>
                        </div>

                        <div>
                          <div class="grey--text mb-2">
                            Weight
                          </div>

                          <div
                            class="font-weight-medium"
                            v-text="weight"
                          />
                        </div>

                        <div>
                          <div class="grey--text mb-2">
                            Size
                          </div>

                          <div
                            class="font-weight-medium"
                            v-text="size"
                          />
                        </div>

                        <div>
                          <div class="grey--text text-darken-1 mb-2">
                            Letter spacing
                          </div>

                          <div
                            class="font-weight-medium"
                            v-text="spacing"
                          />
                        </div>
                      </div>
                    </v-responsive>
                  </v-expand-transition>
                </v-sheet>
              </template>
            </v-item>
          </v-sheet>
        </v-item-group>
      </div>
    </app-widget>
  </v-container>
</template>

<script>
import AppWidget from '@/views/widget/AppWidget.vue'

export default {
  name: 'Typography',
  components: {
    AppWidget
  },
  data: () => ({
    model: null,
    classes: [
      ['h1', '.text-(xs | sm | md | lg | xl)-h1', '6rem', '300', '-0.09375rem', -1],
      ['h2', '.text-(xs | sm | md | lg | xl)-h2', '3.75rem', '300', '-0.03125rem', 0],
      ['h3', '.text-(xs | sm | md | lg | xl)-h3', '3rem', '400', 'normal', 1],
      ['h4', '.text-(xs | sm | md | lg | xl)-h4', '2.125rem', '400', '0.015625rem', 2],
      ['h5', '.text-(xs | sm | md | lg | xl)-h5', '1.5rem', '400', 'normal', 2],
      ['h6', '.text-(xs | sm | md | lg | xl)-h6', '1.25rem', '500', '0.009375rem', 3],
      ['subtitle-1', '.text-(xs | sm | md | lg | xl)-subtitle-1', '1rem', '400', '0.009375rem', 4],
      ['subtitle-2', '.text-(xs | sm | md | lg | xl)-subtitle-2', '0.875rem', '500', '0.00625rem', 4],
      ['body-1', '.text-(xs | sm | md | lg | xl)-body-1', '1rem', '400', '0.03125rem', 4],
      ['body-2', '.text-(xs | sm | md | lg | xl)-body-2', '0.875rem', '400', '0.015625rem', 4],
      ['button', '.text-(xs | sm | md | lg | xl)-button', '0.875rem', '500', '0.078125rem', 4],
      ['caption', '.text-(xs | sm | md | lg | xl)-caption', '0.75rem', '400', '0.025rem', 4],
      ['overline', '.text-(xs | sm | md | lg | xl)-overline', '0.75rem', '500', '0.1666666667em', 4]
    ]
  })
}
</script>
