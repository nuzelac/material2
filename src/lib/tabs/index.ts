/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalModule} from '../core';
import {MdRippleModule} from '../core/ripple/index';
import {ObserveContentModule} from '../core/observe-content/observe-content';
import {MdTab} from './tab';
import {MdTabGroup} from './tab-group';
import {MdTabLabel} from './tab-label';
import {MdTabLabelWrapper} from './tab-label-wrapper';
import {MdTabNav, MdTabLink, MdTabLinkRipple} from './tab-nav-bar/tab-nav-bar';
import {MdInkBar} from './ink-bar';
import {MdTabBody} from './tab-body';
import {VIEWPORT_RULER_PROVIDER} from '../core/overlay/position/viewport-ruler';
import {MdTabHeader} from './tab-header';
import {ScrollDispatchModule} from '../core/overlay/scroll/index';
import {DndModule} from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    MdRippleModule,
    ObserveContentModule,
    ScrollDispatchModule,
    DndModule.forRoot(),
  ],
  // Don't export all components because some are only to be used internally.
  exports: [
    MdTabGroup,
    MdTabLabel,
    MdTab,
    MdTabNav,
    MdTabLink,
    MdTabLinkRipple
  ],
  declarations: [
    MdTabGroup,
    MdTabLabel,
    MdTab,
    MdInkBar,
    MdTabLabelWrapper,
    MdTabNav,
    MdTabLink,
    MdTabBody,
    MdTabLinkRipple,
    MdTabHeader
  ],
  providers: [VIEWPORT_RULER_PROVIDER],
})
export class MdTabsModule {}


export * from './tab-group';
export {MdInkBar} from './ink-bar';
export {MdTabBody, MdTabBodyOriginState, MdTabBodyPositionState} from './tab-body';
export {MdTabHeader, ScrollDirection} from './tab-header';
export {MdTabLabelWrapper} from './tab-label-wrapper';
export {MdTab} from './tab';
export {MdTabLabel} from './tab-label';
export {MdTabNav, MdTabLink} from './tab-nav-bar/index';
