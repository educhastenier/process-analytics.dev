/**
 * Copyright 2022 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  GreyColorName,
  PaletteColorKey,
  CustomPaletteOptions,
  SocialPaletteOptions,
  PaletteOptions,
} from '@mui/material';

/**
 * The base colors for the Material Kit 2 React.
 * You can add new color using this file.
 * You can customize the colors for the entire Material Kit 2 React using the file.
 *
 * @see https://material-ui.com/customization/color/
 */
export const palette: PaletteOptions &
  CustomPaletteOptions &
  SocialPaletteOptions = {
  mode: 'light',

  background: {
    default: '#f0f2f5',
    paper: '#ffffff',
  },

  common: {
    black: '#ffffff',
    white: '#000000',
  },

  text: {
    primary: '#000000',
    secondary: '#DBEFFF',
    disabled: '#7b809a',
  },

  // light: will be calculated from palette.primary.main,
  // dark: will be calculated from palette.primary.main,
  // contrastText: will be calculated to contrast with palette.primary.main
  // See https://mui.com/material-ui/customization/palette/#providing-the-colors-directly
  primary: {
    main: '#0b4361',
  },

  secondary: {
    main: '#e31937',
  },

  info: {
    main: '#1A73E8',
    light: '#69a1ff',
    dark: '#0049b5',
    contrastText: '#ffffff',
  },

  success: {
    main: '#4CAF50',
    light: '#80e27e',
    dark: '#087f23',
    contrastText: '#000000',
  },

  warning: {
    main: '#fb8c00',
    light: '#ffbd45',
    dark: '#c25e00',
    contrastText: '#000000',
  },

  error: {
    main: '#F44335',
    light: '#ff7960',
    dark: '#b9000b',
    contrastText: '#000000',
  },

  grey: {
    '100': '#f8f9fa',
    '200': '#f0f2f5',
    '300': '#dee2e6',
    '400': '#ced4da',
    '500': '#adb5bd',
    '600': '#6c757d',
    '700': '#495057',
    '800': '#343a40',
    '900': '#212529',
  },

  // Provide every color token (light, main, dark, and contrastText) when using
  // custom colors for props in Material UI's components.
  tertiary: {
    main: '#ccd6dd',
    light: '#ffffff',
    dark: '#9ba5ab',
    contrastText: '#000000',
  },

  twitter: {
    main: '#55acee',
    dark: '#3ea1ec',
  },

  pinterest: {
    main: '#cc2127',
    dark: '#b21d22',
  },

  youtube: {
    main: '#e52d27',
    dark: '#d41f1a',
  },

  slack: {
    main: '#3aaf85',
    dark: '#329874',
  },

  github: {
    main: '#24292e',
    dark: '#171a1d',
  },
};

export const isPaletteColorName = (color: string): color is PaletteColorKey =>
  [
    'primary',
    'secondary',
    'error',
    'warning',
    'info',
    'success',
    'tertiary',
    'spicy',
    'sweet',
    'manufacture',
    'education',
    'telecom',
    'financial',
    'energy',
    'health',
    'government',
    'distribution',
  ].includes(color);

export const isGreyColorName = (color: string): color is GreyColorName =>
  color === 'grey-100' ||
  color === 'grey-200' ||
  color === 'grey-300' ||
  color === 'grey-400' ||
  color === 'grey-500' ||
  color === 'grey-600' ||
  color === 'grey-700' ||
  color === 'grey-800' ||
  color === 'grey-900';
