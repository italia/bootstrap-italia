import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { type GetInstanceFactory, type GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

import Player from "video.js/dist/types/player"

declare class VideoPlayer extends BaseComponent {

  player: Player;

  static get NAME(): string

  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<VideoPlayer>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<VideoPlayer>;

  constructor(element: HTMLElement)

  setYouTubeVideo(url: String): void

  _getConfig(config: any): any

}

export { VideoPlayer }
