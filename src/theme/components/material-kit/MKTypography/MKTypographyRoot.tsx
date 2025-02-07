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

// @mui material components
import Typography from '@mui/material/Typography';
import {
  PaletteColorKey,
  styled,
  TextTransform,
  VerticalAlign,
  FontWeight,
} from '@mui/material/styles';

interface MKTypographyRootProps {
  ownerState: {
    color?: PaletteColorKey | 'inherit' | 'text';
    textTransform?: TextTransform;
    verticalAlign?: VerticalAlign;
    fontWeight?: FontWeight;
    opacity?: number;
    textGradient?: boolean;
  };
}

export const MKTypographyRoot = styled(Typography)<MKTypographyRootProps>(
  ({ theme, ownerState }) => {
    const { palette, functions } = theme;
    const {
      color,
      textTransform,
      verticalAlign,
      fontWeight,
      opacity,
      textGradient,
    } = ownerState;

    const { linearGradient } = functions;

    const calculatedColor =
      !color || !palette[color] || color === 'inherit'
        ? 'inherit'
        : color === 'text'
        ? palette.text.primary
        : palette[color].main;
    const backgroundColor =
      color &&
      (color !== 'text' && color !== 'inherit'
        ? linearGradient(palette[color].main, palette[color].dark)
        : linearGradient(palette.background.default, palette.background.paper));
    return {
      opacity,
      textTransform: textTransform ?? 'none',
      verticalAlign,
      textDecoration: 'none',
      color: calculatedColor,
      letterSpacing: '-0.125px',
      fontWeight: fontWeight,
      ...(textGradient && {
        backgroundImage: backgroundColor,
        display: 'inline-block',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        position: 'relative',
        zIndex: 1,
      }),
    };
  },
);
