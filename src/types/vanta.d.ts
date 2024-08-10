// src/types/vanta.d.ts

declare module "vanta/dist/vanta.fog.min" {
  import * as THREE from "three";

  interface VantaEffectBase {
    el: string | HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
  }

  interface VantaFogEffectProps extends VantaEffectBase {
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    blurFactor?: number;
    speed?: number;
    zoom?: number;
  }

  export default function FOG(options: VantaFogEffectProps): void;
}
