/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './wb.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './components/header/header.component';
import * as import11 from './components/footer/footer.component';
import * as import12 from './components/header/header.component.ngfactory';
import * as import13 from './components/footer/footer.component.ngfactory';
var renderType_WhatsBuzzComponent_Host:import0.RenderComponentType = (null as any);
class _View_WhatsBuzzComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _WhatsBuzzComponent_0_4:import3.WhatsBuzzComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_WhatsBuzzComponent_Host0,renderType_WhatsBuzzComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('wb-root',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_WhatsBuzzComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._WhatsBuzzComponent_0_4 = new import3.WhatsBuzzComponent();
    this._appEl_0.initComponent(this._WhatsBuzzComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._WhatsBuzzComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.WhatsBuzzComponent) && (0 === requestNodeIndex))) { return this._WhatsBuzzComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_WhatsBuzzComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_WhatsBuzzComponent_Host === (null as any))) { (renderType_WhatsBuzzComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_WhatsBuzzComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const WhatsBuzzComponentNgFactory:import9.ComponentFactory<import3.WhatsBuzzComponent> = new import9.ComponentFactory<import3.WhatsBuzzComponent>('wb-root',viewFactory_WhatsBuzzComponent_Host0,import3.WhatsBuzzComponent);
const styles_WhatsBuzzComponent:any[] = ([] as any[]);
var renderType_WhatsBuzzComponent:import0.RenderComponentType = (null as any);
class _View_WhatsBuzzComponent0 extends import1.AppView<import3.WhatsBuzzComponent> {
  _text_0:any;
  _el_1:any;
  /*private*/ _appEl_1:import2.AppElement;
  _HeaderComponent_1_4:import10.HeaderComponent;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _FooterComponent_9_4:import11.FooterComponent;
  _text_10:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_WhatsBuzzComponent0,renderType_WhatsBuzzComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'wb-header',(null as any));
    this._appEl_1 = new import2.AppElement(1,(null as any),this,this._el_1);
    var compView_1:any = import12.viewFactory_HeaderComponent0(this.viewUtils,this.injector(1),this._appEl_1);
    this._HeaderComponent_1_4 = new import10.HeaderComponent();
    this._appEl_1.initComponent(this._HeaderComponent_1_4,([] as any[]),compView_1);
    compView_1.create(this._HeaderComponent_1_4,([] as any[]),(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_3 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','container');
    this._text_4 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_3,'h1',(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'content here',(null as any));
    this._text_7 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'wb-footer',(null as any));
    this._appEl_9 = new import2.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import13.viewFactory_FooterComponent0(this.viewUtils,this.injector(9),this._appEl_9);
    this._FooterComponent_9_4 = new import11.FooterComponent();
    this._appEl_9.initComponent(this._FooterComponent_9_4,([] as any[]),compView_9);
    compView_9.create(this._FooterComponent_9_4,([] as any[]),(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.HeaderComponent) && (1 === requestNodeIndex))) { return this._HeaderComponent_1_4; }
    if (((token === import11.FooterComponent) && (9 === requestNodeIndex))) { return this._FooterComponent_9_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._HeaderComponent_1_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_WhatsBuzzComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.WhatsBuzzComponent> {
  if ((renderType_WhatsBuzzComponent === (null as any))) { (renderType_WhatsBuzzComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_WhatsBuzzComponent,{})); }
  return new _View_WhatsBuzzComponent0(viewUtils,parentInjector,declarationEl);
}