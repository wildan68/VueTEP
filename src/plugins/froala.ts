import VueFroala from 'vue-froala-wysiwyg';
import type { App } from 'vue'

import 'froala-editor/js/plugins.pkgd.min.js';
//Import third party plugins
import 'froala-editor/js/third_party/embedly.min';
import 'froala-editor/js/third_party/font_awesome.min';
import 'froala-editor/js/third_party/spell_checker.min';
import 'froala-editor/js/third_party/image_tui.min';
// Import Froala Editor css files.
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';

const defineFroala = (): { install(app: App): void } => {
  return {
    install(app) {
      app.use(VueFroala)
    },
  }
}
  
export default defineFroala()