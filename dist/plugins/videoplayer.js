import BaseComponent from './base-component.js';
import SelectorEngine from './dom/selector-engine.js';
import Manipulator from './dom/manipulator.js';
import videojs from 'video.js';
import { initYoutubePlugin } from './util/youtube-video.js';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const NAME = 'videoplayer';

const SELECTOR_TOGGLE = '[data-bs-video]';

const itLang = {
  'Audio Player': 'Lettore audio',
  'Video Player': 'Lettore video',
  Play: 'Play',
  Pause: 'Pausa',
  Replay: 'Replay',
  'Current Time': 'Orario attuale',
  Duration: 'Durata',
  'Remaining Time': 'Tempo rimanente',
  'Stream Type': 'Tipo di streaming',
  LIVE: 'LIVE',
  Loaded: 'Caricato',
  Progress: 'Stato',
  'Progress Bar': 'Barra di avanzamento',
  'progress bar timing: currentTime={1} duration={2}': '{1} di {2}',
  Fullscreen: 'Schermo intero',
  'Exit Fullscreen': 'Chiudi Schermo intero',
  Mute: 'Disattiva l’audio',
  Unmute: 'Attiva l’audio',
  'Playback Rate': 'Velocità di riproduzione',
  Subtitles: 'Sottotitoli',
  'subtitles off': 'Senza sottotitoli',
  Captions: 'Sottotitoli non udenti',
  'captions off': 'Senza sottotitoli non udenti',
  Chapters: 'Capitolo',
  Descriptions: 'Descrizioni',
  'descriptions off': 'Descrizioni disattivate',
  'Audio Track': 'Traccia audio',
  'Volume Level': 'Livello del volume',
  'You aborted the media playback': 'La riproduzione del filmato è stata interrotta.',
  'A network error caused the media download to fail part-way.': 'Il download del filmato è stato interrotto a causa di un problema rete.',
  'The media could not be loaded, either because the server or network failed or because the format is not supported.':
    'Il filmato non può essere caricato a causa di un errore nel server o nella rete o perché il formato non viene supportato.',
  'The media playback was aborted due to a corruption problem or because the media used features your browser did not support.':
    'La riproduzione del filmato è stata interrotta a causa di un file danneggiato o per l’utilizzo di impostazioni non supportate dal browser.',
  'No compatible source was found for this media.': 'Non ci sono fonti compatibili per questo filmato.',
  'The media is encrypted and we do not have the keys to decrypt it.': 'Il contenuto multimediale è criptato e non disponiamo delle chiavi per decifrarlo.',
  'Play Video': 'Riproduci il video',
  Close: 'Chiudi',
  'Close Modal Dialog': 'Chiudi la finestra di dialogo',
  'Modal Window': 'Finestra di dialogo',
  'This is a modal window': 'Questa è una finestra di dialogo',
  'This modal can be closed by pressing the Escape key or activating the close button.':
    'Questa finestra di dialogo può essere chiusa premendo sul tasto Esc o attivando il pulsante di chiusura.',
  ', opens captions settings dialog': ', aprire i parametri della trascrizione dei sottotitoli',
  ', opens subtitles settings dialog': ', aprire i parametri dei sottotitoli',
  ', opens descriptions settings dialog': ', aprire i parametri delle descrizioni',
  ', selected': ', selezionato',
  'captions settings': 'Parametri sottotitoli non udenti',
  'subtitles settings': 'Parametri sottotitoli',
  'descriptions settings': 'Parametri descrizioni',
  Text: 'Testo',
  White: 'Bianco',
  Black: 'Nero',
  Red: 'Rosso',
  Green: 'Verde',
  Blue: 'Blu',
  Yellow: 'Giallo',
  Magenta: 'Magenta',
  Cyan: 'Ciano',
  Background: 'Sfondo',
  Window: 'Finestra',
  Transparent: 'Trasparente',
  'Semi-Transparent': 'Semi-Trasparente',
  Opaque: 'Opaco',
  'Font Size': 'Dimensione dei caratteri',
  'Text Edge Style': 'Stile dei bordi del testo',
  None: 'Nessuno',
  Uniform: 'Uniforme',
  'Drop shadow': 'Ombra',
  'Font Family': 'Carattere',
  'Proportional Sans-Serif': 'Sans-Serif proporzionale',
  'Monospace Sans-Serif': 'Sans-Serif monospaziato',
  'Proportional Serif': 'Serif proporzionale',
  'Monospace Serif': 'Serif monospaziato',
  'Small Caps': 'Maiuscoletto',
  Reset: 'Reinizializza',
  'restore all settings to the default values': 'Ripristina i valori predefiniti per tutti i parametri',
  Done: 'Fatto',
  'Caption Settings Dialog': 'Finestra di dialogo dei parametri della trascrizione dei sottotitoli',
  'Beginning of dialog window. Escape will cancel and close the window.':
    'Inizio della finestra di dialogo. Il tasto Esc annullerà l’operazione e chiuderà la finestra.',
  'End of dialog window.': 'Fine della finestra di dialogo.',
  '{1} is loading.': '{1} in fase di caricamento.',
  'Exit Picture-in-Picture': 'Esci dalla modalità Picture-in-Picture',
  'Picture-in-Picture': 'Picture-in-Picture',
  Color: 'Colore',
  Opacity: 'Opacità',
  'Text Background': 'Sfondo testo',
  'Caption Area Background': 'Sfondo area sottotitoli',
  'Skip forward {1} seconds': 'Avanti {1} secondi',
  'Skip backward {1} seconds': 'Indietro {1} secondi',
};

const DEFAULT_CONFIG = { languages: { it: itLang }, language: 'it' };

const Default = {};

if (typeof window !== 'undefined') {
  window.videojs = videojs;
}

class VideoPlayer extends BaseComponent {
  constructor(element, config) {
    super(element);
    element.classList.add('video-js', 'vjs-theme-bootstrap-italia', 'vjs-fluid', 'vjs-big-play-centered');
    this._config = this._getConfig(config);
    this.player = videojs(element, DEFAULT_CONFIG);
  }

  // Public

  setYouTubeVideo(url) {
    initYoutubePlugin(videojs);
    this.player.tech('youtube');
    this.player.src({ type: 'video/youtube', src: url });
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Private
  _getConfig(config) {
    config = {
      ...Default,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {}),
    };
    return config
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const players = SelectorEngine.find(SELECTOR_TOGGLE);
  if (players.length > 0) {
    players.forEach((player) => {
      VideoPlayer.getOrCreateInstance(player);
    });
  }
}

export { VideoPlayer as default };
//# sourceMappingURL=videoplayer.js.map
