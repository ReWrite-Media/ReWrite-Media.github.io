(window.webpackJsonpAzureNotebooks=window.webpackJsonpAzureNotebooks||[]).push([[14],{"./src/features/ipywidgets/async/components.tsx":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var o=s("./src/core/notebook/components/transformWrapper.tsx"),n=s("./src/common/asyncModuleLoader.ts");const a=Object(o.c)(Object(n.a)("transform-widgetdisplay",()=>Promise.all([s.e(0),s.e(21)]).then(s.t.bind(null,"./node_modules/@nteract/jupyter-widgets/lib/index.js",7)).then(e=>e.default)))},"./src/features/ipywidgets/async/index.ts":function(e,t,s){"use strict";s.r(t),s.d(t,"onLoad",(function(){return j}));var o=s("./node_modules/redux-observable/dist/esm/operators.js"),n=s("./node_modules/dompurify/dist/purify.js"),a=s.n(n),r=s("./node_modules/@nteract/core/lib/index.js"),i=s("./node_modules/rxjs/operators/index.js"),d=[(e,t,s)=>r.epics.commListenEpic(e,t).pipe(Object(o.a)(r.actions.COMM_OPEN,r.actions.COMM_MESSAGE),Object(i.map)(e=>{var t;const s=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.state;return s&&s.value&&("HTMLModel"===s._model_name||"HTMLMathModel"===s._model_name)&&(s.value=a.a.sanitize(s.value)),e}))],c=s("./node_modules/react/index.js"),u=s("./src/features/ipywidgets/async/components.tsx"),p=s("./src/features/ipywidgets/customWidgetLoader.ts"),m=e=>{const t=Object.assign(Object.assign({},e),{customWidgetLoader:p.a});return c.createElement(u.a,Object.assign({},t))},l=s("./src/common/localLogger.ts");const g=Object(l.a)("ipywidgets"),j=(e,t)=>{e.epicLoader.appendEpics(d),e.commManager.registerTarget("jupyter.widget",{onOpen:()=>{g("jupyter.widget comms target is enabled")}}),t.dispatch(r.actions.addTransform({mediaType:"application/vnd.jupyter.widget-view+json",component:m}))}}}]);