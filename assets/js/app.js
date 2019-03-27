import * as mdc from 'material-components-web';
mdc.autoInit();

import Glide from '@glidejs/glide';
new Glide('.glide', {
  type: 'carousel',
  perView: 1
}).mount();