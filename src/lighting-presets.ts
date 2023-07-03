import {
  LightingTypeDefinition,
  VIALightingTypeDefinition,
  LightingValue,
  KeycodeType
} from './types';

export const LightingPreset: {
  [K in LightingTypeDefinition]: VIALightingTypeDefinition;
} = {
  [LightingTypeDefinition.None]: {
    effects: [],
    underglowEffects: [],
    keycodes: KeycodeType.None,
    supportedLightingValues: []
  },
  [LightingTypeDefinition.QMKLighting]: {
    effects: [
      ['Off', 0],
      ['On', 0]
    ],
    underglowEffects: [],
    keycodes: KeycodeType.QMK,
    supportedLightingValues: [
      LightingValue.BACKLIGHT_BRIGHTNESS,
      LightingValue.BACKLIGHT_EFFECT
    ]
  },
  [LightingTypeDefinition.QMKBacklightRGBLight]: {
    effects: [
      ['Off', 0],
      ['On', 0]
    ],
    underglowEffects: [
      ['All Off', 0],
      ['Solid Color', 1],
      ['Breathing 1', 1],
      ['Breathing 2', 1],
      ['Breathing 3', 1],
      ['Breathing 4', 1],
      ['Rainbow Mood 1', 0],
      ['Rainbow Mood 2', 0],
      ['Rainbow Mood 3', 0],
      ['Rainbow Swirl 1', 0],
      ['Rainbow Swirl 2', 0],
      ['Rainbow Swirl 3', 0],
      ['Rainbow Swirl 4', 0],
      ['Rainbow Swirl 5', 0],
      ['Rainbow Swirl 6', 0],
      ['Snake 1', 1],
      ['Snake 2', 1],
      ['Snake 3', 1],
      ['Snake 4', 1],
      ['Snake 5', 1],
      ['Snake 6', 1],
      ['Knight 1', 1],
      ['Knight 2', 1],
      ['Knight 3', 1],
      ['Christmas', 1],
      ['Gradient 1', 1],
      ['Gradient 2', 1],
      ['Gradient 3', 1],
      ['Gradient 4', 1],
      ['Gradient 5', 1],
      ['Gradient 6', 1],
      ['Gradient 7', 1],
      ['Gradient 8', 1],
      ['Gradient 9', 1],
      ['Gradient 10', 1],
      ['RGB Test', 1],
      ['Alternating', 1]
    ],
    keycodes: KeycodeType.QMK,
    supportedLightingValues: [
      LightingValue.BACKLIGHT_BRIGHTNESS,
      LightingValue.BACKLIGHT_EFFECT,
      LightingValue.QMK_RGBLIGHT_BRIGHTNESS,
      LightingValue.QMK_RGBLIGHT_EFFECT,
      LightingValue.QMK_RGBLIGHT_EFFECT_SPEED,
      LightingValue.QMK_RGBLIGHT_COLOR
    ]
  },
  [LightingTypeDefinition.QMKRGBLight]: {
    effects: [],
    underglowEffects: [
      ['All Off', 0],
      ['Solid Color', 1],
      ['Breathing 1', 1],
      ['Breathing 2', 1],
      ['Breathing 3', 1],
      ['Breathing 4', 1],
      ['Rainbow Mood 1', 0],
      ['Rainbow Mood 2', 0],
      ['Rainbow Mood 3', 0],
      ['Rainbow Swirl 1', 0],
      ['Rainbow Swirl 2', 0],
      ['Rainbow Swirl 3', 0],
      ['Rainbow Swirl 4', 0],
      ['Rainbow Swirl 5', 0],
      ['Rainbow Swirl 6', 0],
      ['Snake 1', 1],
      ['Snake 2', 1],
      ['Snake 3', 1],
      ['Snake 4', 1],
      ['Snake 5', 1],
      ['Snake 6', 1],
      ['Knight 1', 1],
      ['Knight 2', 1],
      ['Knight 3', 1],
      ['Christmas', 1],
      ['Gradient 1', 1],
      ['Gradient 2', 1],
      ['Gradient 3', 1],
      ['Gradient 4', 1],
      ['Gradient 5', 1],
      ['Gradient 6', 1],
      ['Gradient 7', 1],
      ['Gradient 8', 1],
      ['Gradient 9', 1],
      ['Gradient 10', 1],
      ['RGB Test', 1],
      ['Alternating', 1]
    ],
    keycodes: KeycodeType.QMK,
    supportedLightingValues: [
      LightingValue.QMK_RGBLIGHT_BRIGHTNESS,
      LightingValue.QMK_RGBLIGHT_EFFECT,
      LightingValue.QMK_RGBLIGHT_EFFECT_SPEED,
      LightingValue.QMK_RGBLIGHT_COLOR
    ]
  },
  [LightingTypeDefinition.WTMonoBacklight]: {
    effects: [
      ['All Off', 0],
      ['All On', 0],
      ['Raindrops', 0]
    ],
    underglowEffects: [],
    keycodes: KeycodeType.WT,
    supportedLightingValues: [
      LightingValue.BACKLIGHT_BRIGHTNESS,
      LightingValue.BACKLIGHT_EFFECT,
      LightingValue.BACKLIGHT_EFFECT_SPEED,
      LightingValue.BACKLIGHT_DISABLE_AFTER_TIMEOUT,
      LightingValue.BACKLIGHT_DISABLE_WHEN_USB_SUSPENDED
    ]
  },
  [LightingTypeDefinition.WTRGBBacklight]: {
    effects: [
      ['All Off', 0],
      ['Solid Color 1', 1],
      ['Alphas/Mods Color 1/2', 2],
      ['Gradient Vertical Color 1/2', 2],
      ['Raindrops Color 1/2', 2],
      ['Cycle All', 0],
      ['Cycle Horizontal', 0],
      ['Cycle Vertical', 0],
      ['Jellybean Raindrops', 0],
      ['Radial All Hues', 0],
      ['Radial Color 1', 1]
    ],
    underglowEffects: [],
    keycodes: KeycodeType.WT,
    supportedLightingValues: [
      LightingValue.BACKLIGHT_BRIGHTNESS,
      LightingValue.BACKLIGHT_EFFECT,
      LightingValue.BACKLIGHT_EFFECT_SPEED,
      LightingValue.BACKLIGHT_DISABLE_AFTER_TIMEOUT,
      LightingValue.BACKLIGHT_DISABLE_WHEN_USB_SUSPENDED,
      LightingValue.BACKLIGHT_COLOR_1,
      LightingValue.BACKLIGHT_COLOR_2,
      LightingValue.BACKLIGHT_CAPS_LOCK_INDICATOR_COLOR,
      LightingValue.BACKLIGHT_CAPS_LOCK_INDICATOR_ROW_COL,
      LightingValue.BACKLIGHT_LAYER_1_INDICATOR_COLOR,
      LightingValue.BACKLIGHT_LAYER_1_INDICATOR_ROW_COL,
      LightingValue.BACKLIGHT_LAYER_2_INDICATOR_COLOR,
      LightingValue.BACKLIGHT_LAYER_2_INDICATOR_ROW_COL,
      LightingValue.BACKLIGHT_LAYER_3_INDICATOR_COLOR,
      LightingValue.BACKLIGHT_LAYER_3_INDICATOR_ROW_COL
    ]
  }
};
